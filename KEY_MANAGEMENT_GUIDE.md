# CryptoTensors Key Management Guide

This guide covers the key management system in CryptoTensors 0.2.0, including how to configure encryption and signing keys for serialization and deserialization.

## Table of Contents

1. [Overview](#overview)
2. [Key Loading Model](#key-loading-model)
3. [Rust API](#rust-api)
4. [Python API](#python-api)
5. [Global Registry System](#global-registry-system)
6. [Complete Examples](#complete-examples)
7. [Migration Guide](#migration-guide)

## Overview

CryptoTensors provides a flexible key management system that supports multiple use cases:

- **Direct Key Provision**: Provide keys directly in the configuration (simple scenarios)
- **Registry-Based Lookup**: Register keys in a global registry and reference them by ID (multi-user, multi-key scenarios)
- **Key Rotation**: Re-encrypt data encryption keys (DEKs) with new master keys without re-encrypting tensor data

The system uses a **two-path key loading model** that is consistent across both Rust and Python APIs:

1. **Direct Keys** (`enc_key`/`sign_key`): If provided, these are used exactly as-is, ignoring any `kid`/`jku` in the config
2. **Registry Lookup**: When no direct keys are provided, keys are automatically looked up from the global Registry using `kid`/`jku`

## Key Loading Model

### Serialization (`SerializeCryptoConfig`)

When serializing tensors, keys are loaded in the following order:

```
┌─────────────────────────────────────┐
│ SerializeCryptoConfig               │
├─────────────────────────────────────┤
│ 1. Direct keys (enc_key/sign_key)?  │
│    YES → Use as-is, ignore kid/jku  │
│    NO  → Continue to step 2         │
├─────────────────────────────────────┤
│ 2. Registry lookup (enc_kid/enc_jku)│
│    Lookup from global Registry      │
└─────────────────────────────────────┘
```

**Important Rules:**
- When `enc_key`/`sign_key` are provided, all `enc_kid`/`enc_jku`/`sign_kid`/`sign_jku` in the config are **completely ignored**
- The key's own `kid`/`jku` (if any) are used for header metadata
- Registry lookup only occurs when both `enc_key` and `sign_key` are `None`/absent

### Deserialization (`DeserializeCryptoConfig`)

When deserializing tensors, keys are loaded in the following order:

```
┌─────────────────────────────────────┐
│ DeserializeCryptoConfig             │
├─────────────────────────────────────┤
│ 1. Direct keys (enc_key/sign_key)?  │
│    YES → Use as-is, ignore header   │
│    NO  → Continue to step 2         │
├─────────────────────────────────────┤
│ 2. Registry lookup                  │
│    Extract kid/jku from header      │
│    Lookup from global Registry      │
└─────────────────────────────────────┘
```

**Important Rules:**
- When `enc_key`/`sign_key` are provided, `kid`/`jku` from the file header are **ignored**
- When no direct keys are provided, `kid`/`jku` are automatically extracted from the file header for Registry lookup
- Registry lookup only occurs when both `enc_key` and `sign_key` are `None`/absent

## Rust API

### SerializeCryptoConfig

#### Method 1: Direct Keys

```rust
use cryptotensors::{serialize, KeyMaterial, SerializeCryptoConfig};

// Create keys
let enc_key = KeyMaterial::new_enc_key(None, None, Some("my-enc".to_string()), None)?;
let sign_key = KeyMaterial::new_sign_key(None, None, None, Some("my-sign".to_string()), None)?;

// Create config with direct keys
let config = SerializeCryptoConfig::with_keys(enc_key, sign_key);

// Serialize
let serialized = serialize(&tensors, None, Some(&config))?;
```

#### Method 2: Registry Lookup

```rust
use cryptotensors::{DirectKeyProvider, SerializeCryptoConfig, registry, PRIORITY_DIRECT};
use std::sync::Arc;

// Create and register keys
let mut provider = DirectKeyProvider::new();
provider
    .add_enc_key("prod-enc", enc_jwk)
    .add_sign_key("prod-sign", sign_jwk);

registry::register_provider_with_priority(Box::new(provider), PRIORITY_DIRECT);

// Create config using kid references (looks up from Registry)
let config = SerializeCryptoConfig::new()
    .enc_kid("prod-enc")
    .sign_kid("prod-sign");

let serialized = serialize(&tensors, None, Some(&config))?;
```

#### Method 3: Builder Pattern

```rust
use cryptotensors::{AccessPolicy, SerializeCryptoConfig};

let policy = AccessPolicy::new(
    Some("package model\nallow = true".to_string()),
    None
);

let config = SerializeCryptoConfig::new()
    .enc_kid("my-enc-id")
    .sign_kid("my-sign-id")
    .enc_jku("file:///path/to/keys.jwk")
    .policy(policy)
    .tensor_filter(vec!["weight".to_string(), "bias".to_string()]);
```

### DeserializeCryptoConfig

#### Method 1: Direct Keys

```rust
use cryptotensors::{DeserializeCryptoConfig, SafeTensors};

let enc_key = KeyMaterial::new_enc_key(Some("...".to_string()), None, None, None)?;
let sign_key = KeyMaterial::new_sign_key(Some("...".to_string()), Some("...".to_string()), None, None, None)?;

let config = DeserializeCryptoConfig::with_keys(enc_key, sign_key);
let st = SafeTensors::deserialize_with_config(&buffer, Some(&config))?;
```

#### Method 2: Registry Lookup (Default)

```rust
use cryptotensors::SafeTensors;

// Automatically uses Registry with kid/jku from header
let st = SafeTensors::deserialize(&buffer)?;
```

#### Method 3: Explicit Registry Lookup

```rust
use cryptotensors::{DeserializeCryptoConfig, SafeTensors};

// Empty config allows Registry lookup
let config = DeserializeCryptoConfig::new();
let st = SafeTensors::deserialize_with_config(&buffer, Some(&config))?;
```

### Key Rotation (Rewrap)

```rust
use cryptotensors::{CryptoTensors, DeserializeCryptoConfig, SerializeCryptoConfig, SafeTensors};

// Load encrypted file
let st = SafeTensors::deserialize(&buffer)?;
let mut crypto = CryptoTensors::from_header(&st.metadata)?.unwrap();

// Create new keys
let new_enc = KeyMaterial::new_enc_key(None, None, Some("new-enc".to_string()), None)?;
let new_sign = KeyMaterial::new_sign_key(None, None, None, Some("new-sign".to_string()), None)?;

// Rewrap DEKs with new keys (old keys already loaded from header)
let new_config = SerializeCryptoConfig::with_keys(new_enc, new_sign);
crypto.rewrap(None, &new_config)?;

// Now DEKs in crypto are encrypted with new keys
```

## Python API

### SerializeCryptoConfig

#### Method 1: Direct Keys

```python
from cryptotensors import SerializeCryptoConfig, save_file
import torch

tensors = {"weight": torch.randn(100, 100)}

# Create config with direct keys
config = SerializeCryptoConfig(
    enc_key={
        "alg": "aes256gcm",
        "kid": "my-enc",
        "k": "base64-encoded-key"
    },
    sign_key={
        "alg": "ed25519",
        "kid": "my-sign",
        "x": "base64-encoded-public-key",
        "d": "base64-encoded-private-key"
    }
)

# Save
save_file(tensors, "model.cryptotensors", config=config.to_dict())
```

#### Method 2: Registry Lookup

```python
from cryptotensors import SerializeCryptoConfig, register_direct_key_provider, save_file

# Register keys to global Registry
register_direct_key_provider(keys=[
    {"kty": "oct", "alg": "aes256gcm", "kid": "prod-enc", "k": "..."},
    {"kty": "okp", "alg": "ed25519", "kid": "prod-sign", "x": "...", "d": "..."}
])

# Create config using kid references (looks up from Registry)
config = SerializeCryptoConfig(
    enc_kid="prod-enc",
    sign_kid="prod-sign"
)

save_file(tensors, "model.cryptotensors", config=config.to_dict())
```

#### Method 3: Advanced Configuration

```python
from cryptotensors import SerializeCryptoConfig, save_file

config = SerializeCryptoConfig(
    enc_kid="my-enc-key",
    sign_kid="my-sign-key",
    policy={"local": "package model\nallow = true"},
    tensors=["weight", "bias"]  # Only encrypt these tensors
)

tensors = {
    "weight": torch.randn(100, 100),
    "bias": torch.randn(100),
    "metadata": torch.tensor([1.0])  # Will not be encrypted
}

save_file(tensors, "model.cryptotensors", config=config.to_dict())
```

### DeserializeCryptoConfig

#### Method 1: Direct Keys

```python
from cryptotensors import DeserializeCryptoConfig, load_file

config = DeserializeCryptoConfig(
    enc_key={"alg": "aes256gcm", "k": "..."},
    sign_key={"alg": "ed25519", "x": "...", "d": "..."}
)

tensors = load_file("model.cryptotensors", config=config.to_dict())
```

#### Method 2: Registry Lookup (Default)

```python
from cryptotensors import load_file, register_direct_key_provider

# Register keys
register_direct_key_provider(keys=[...])

# Automatically uses Registry with kid/jku from file header
tensors = load_file("model.cryptotensors")
```

### Key Rotation (Rewrap)

```python
from cryptotensors import rewrap_file, SerializeCryptoConfig, register_direct_key_provider

# Register old keys (for decryption)
register_direct_key_provider(keys=[old_enc_key, old_sign_key])

# Load file (uses old keys from Registry)
# ... file is loaded ...

# Create new config with new keys
new_config = SerializeCryptoConfig(
    enc_key=new_enc_key,
    sign_key=new_sign_key
)

# Rewrap DEKs with new keys
rewrap_file("model.cryptotensors", "model_new.cryptotensors", new_config=new_config.to_dict())
```

## Global Registry System

The Registry is a **global, priority-based key provider system** that aggregates multiple `KeyProvider` instances. It is fully available in Rust and can be used independently without Python. Python's `register_direct_key_provider()` is a convenience wrapper that calls Rust's Registry API.

### Registry Priority Levels

| Priority | Value | Provider Type | Description |
|----------|-------|---------------|-------------|
| `PRIORITY_DIRECT` | 100 | `DirectKeyProvider` | Registered via `registry::register_provider_with_priority()` (Rust) or `register_direct_key_provider()` (Python) |
| `PRIORITY_NATIVE` | 50 | Native providers | Loaded from shared libraries |
| `PRIORITY_FILE` | 10 | File-based providers | Loaded from file system |
| `PRIORITY_ENV` | 0 | Environment providers | Loaded from environment variables (e.g., `CRYPTOTENSOR_KEYS`) |

When looking up a key, Registry iterates through providers in **descending priority order** until a matching key is found.

### Registry Usage Examples

#### Rust: Direct Registry Usage

```rust
use cryptotensors::{DirectKeyProvider, registry, SerializeCryptoConfig, PRIORITY_DIRECT};
use serde_json::json;

// Create and register a provider
let mut provider = DirectKeyProvider::new();
provider.add_enc_key("my-enc", json!({
    "kty": "oct",
    "alg": "aes256gcm",
    "kid": "my-enc",
    "k": "base64-encoded-key"
}));
provider.add_sign_key("my-sign", json!({
    "kty": "okp",
    "alg": "ed25519",
    "kid": "my-sign",
    "x": "base64-public-key",
    "d": "base64-private-key"
}));

// Register to global Registry
registry::register_provider_with_priority(Box::new(provider), PRIORITY_DIRECT);

// Use Registry in SerializeCryptoConfig
let config = SerializeCryptoConfig::new()
    .enc_kid("my-enc")  // Will lookup from Registry
    .sign_kid("my-sign");

let serialized = serialize(&tensors, None, Some(&config))?;
```

#### Python: Registry via Convenience Function

```python
from cryptotensors import register_direct_key_provider, SerializeCryptoConfig

# Register keys to global Registry
register_direct_key_provider(keys=[
    {"kty": "oct", "alg": "aes256gcm", "kid": "my-enc", "k": "..."},
    {"kty": "okp", "alg": "ed25519", "kid": "my-sign", "x": "...", "d": "..."}
])

# Keys are automatically looked up from Registry
config = SerializeCryptoConfig(enc_kid="my-enc", sign_kid="my-sign")
```

**Note**: Python's `register_direct_key_provider()` is a wrapper around Rust's `registry::register_provider_with_priority()`. The Registry is shared between Rust and Python - keys registered from Python are available to Rust code, and vice versa.

### Registry Key Lookup Process

1. **Extract `kid` and `jku`** from config or header
2. **Iterate providers** in priority order (highest first)
3. **Call `provider.matches(jku, kid)`** to check if provider can handle the request
4. **Call `provider.get_master_key()` / `provider.get_signing_key()` / `provider.get_verify_key()`** to fetch the key
5. **Return first matching key** found
6. **Return error** if no provider matches

## Complete Examples

### Rust: Server-Side Multi-User Encryption

```rust
use cryptotensors::{DirectKeyProvider, SerializeCryptoConfig, DeserializeCryptoConfig, SafeTensors};
use std::sync::Arc;

// Server manages all user keys
let mut provider = DirectKeyProvider::new();

// Add keys for each user
for user in users {
    provider.add_enc_key(&user.enc_kid, user.enc_jwk);
    provider.add_sign_key(&user.sign_kid, user.sign_jwk);
}

let provider_arc = Arc::new(provider);
registry::register_provider_with_priority(Box::new(*provider_arc.clone()), PRIORITY_DIRECT);

// Encrypt for specific user
let config = SerializeCryptoConfig::new()
    .enc_kid("alice-enc")
    .sign_kid("alice-sign");

serialize_to_file(&tensors, &path, Some(&config))?;

// Decrypt for Alice (uses Registry automatically)
let st = SafeTensors::deserialize(&buffer)?;

// Rewrap: Transfer from Alice to Bob
let mut crypto = CryptoTensors::from_header(&st.metadata)?.unwrap();
let new_config = SerializeCryptoConfig::new()
    .enc_kid("bob-enc")
    .sign_kid("bob-sign");
crypto.rewrap(None, &new_config)?;
```

### Python: Production Key Management

```python
from cryptotensors import (
    SerializeCryptoConfig, 
    register_direct_key_provider, 
    save_file, 
    load_file
)
import torch

# Production setup: Register keys from secure storage
register_direct_key_provider(files=["/secure/keys/prod-keys.jwk"])

# Use kid to reference keys
config = SerializeCryptoConfig(
    enc_kid="prod-enc-key",
    sign_kid="prod-sign-key",
    tensors=["weight", "bias"]  # Selective encryption
)

tensors = {
    "weight": torch.randn(100, 100),
    "bias": torch.randn(100),
    "metadata": torch.tensor([1.0])  # Not encrypted
}

# Save encrypted model
save_file(tensors, "model.cryptotensors", config=config.to_dict())

# Load (automatically uses Registry)
tensors = load_file("model.cryptotensors")
```

## Migration Guide

### From Old API to New API

**Old Code (dict-based config):**
```python
config = {
    "tensors": ["weight"],
    "enc_key": {...},
    "sign_key": {...},
    "policy": {...}
}
save_file(tensors, "model.safetensors", config=config)
```

**New Code (backward compatible):**
```python
# Method 1: Directly use dict (still supported)
config = {
    "enc_key": {...},
    "sign_key": {...},
    "tensors": ["weight"]
}
save_file(tensors, "model.safetensors", config=config)

# Method 2: Use new Config class
from cryptotensors import SerializeCryptoConfig

config = SerializeCryptoConfig(
    enc_key={...},
    sign_key={...},
    tensors=["weight"]
)
save_file(tensors, "model.safetensors", config=config.to_dict())
```

## Key Points

1. **Backward Compatibility**: Old dict-based config is still supported
2. **Key Priority**: Direct keys > Registry lookup
3. **kid/jku in Header**: Keys' `kid`/`jku` are written to header metadata and read during deserialization
4. **Rewrap Operation**: Only re-encrypts DEKs, tensor data remains unchanged
5. **Registry Sharing**: Registry is shared between Rust and Python

## Additional Resources

- Test files for more examples:
  - `safetensors/tests/test_direct_key_provider.rs` - DirectKeyProvider tests
  - `safetensors/tests/test_integration.rs` - Integration tests
  - `bindings/python/tests/test_crypto_config.py` - Python API tests
  - `bindings/python/tests/test_crypto_config_integration.py` - Integration tests
