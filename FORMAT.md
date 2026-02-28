# CryptoTensors File Format Specification

CryptoTensors extends the [safetensors](https://github.com/huggingface/safetensors) format by introducing an encryption layer, a signature for integrity, and an access control policy. This document describes the layout of a CryptoTensors file and the metadata structure for both the legacy **v1** mapping and the newer **v2** chunked encryption.

## File Layout

The overall binary layout is identical to `safetensors`:

1.  **Header Size (`N`)**: 8 bytes, an unsigned little-endian 64-bit integer, containing the size of the header.
2.  **Header (JSON)**: `N` bytes, a UTF-8 JSON string.
3.  **Tensor Data**: The remaining bytes in the file containing the actual tensor buffers.

## Header Structure

The header contains standard Safetensors fields (the tensor shapes, dtypes, and data offsets) along with a special `__metadata__` field. CryptoTensors injects its specific configurations into `__metadata__`:

```json
{
    "tensor1": {
        "dtype": "F16",
        "shape": [1024, 1024],
        "data_offsets": [0, 2097152]
    },
    "__metadata__": {
        "__crypto_keys__": "...",
        "__encryption__": "...",
        "__signature__": "...",
        "__policy__": "..."
    }
}
```

## `__crypto_keys__`

This field defines the master keys' identities, algorithms, and the format version.

### v1 (Monolithic Encryption)
```json
{
    "version": "1",
    "enc": {
        "kid": "my-enc-key",
        "alg": "aes256gcm",
        "k": "...",
        "kty": "oct"
    },
    "sign": {
        "kid": "my-sign-key",
        "alg": "ed25519",
        "x": "...",
        "kty": "okp"
    }
}
```

### v2 (Chunked Encryption)
Introduced to allow parallelized decryption of large tensors.
```json
{
    "version": "2",
    "chunk_size": 2097152,  // Default 2MB. Determines how tensors are segmented.
    "enc": { ... },
    "sign": { ... }
}
```

## `__encryption__`

This field maps each tensor name to its specific encryption parameters. 

### v1 (Monolithic Encryption)
In v1, each tensor is encrypted as a single monolithic block.
```json
{
    "tensor1": {
        "enc_algo": "aes256gcm",
        "wrapped_key": "<base64 encoded wrapped DEK>",
        "key_iv": "<base64 encoded IV for key wrapper>",
        "key_tag": "<base64 encoded Tag for key wrapper>",
        "iv": "<base64 encoded IV for data>",
        "tag": "<base64 encoded Tag for data>"
    }
}
```

### v2 (Chunked Encryption)
In v2, large tensors are logically divided into chunks of `chunk_size` bytes (the last chunk may be smaller). Each chunk is encrypted independently.
```json
{
    "tensor1": {
        "enc_algo": "aes256gcm",
        "wrapped_key": "<base64 encoded wrapped DEK>",
        "key_iv": "<base64 encoded IV for key wrapper>",
        "key_tag": "<base64 encoded Tag for key wrapper>",
        "base_iv": "<base64 encoded Base IV (12 bytes)>",
        "tags": "<base64 encoded concatenated tags for all chunks>"
    }
}
```

- **`base_iv`**: Used to deterministically derive per-chunk IVs. `chunk_iv[i] = base_iv[0..8] || (u32_from_be(base_iv[8..12]) + i).to_be_bytes()`.
- **`tags`**: A concatenated binary blob of all authentication tags, appended sequentially for chunk 0, 1, 2, etc., and then base64-encoded. Length equals `num_chunks * tag_length` (where `tag_length` is 16 bytes for AES-GCM or ChaCha20-Poly1305).

## `__signature__`
A base64 encoded Ed25519 signature over the entire `__metadata__` JSON, excluding the `__signature__` field itself to prevent recursive dependencies.

## `__policy__`
A JSON-serialized struct containing local and remote [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) access control policies.
