# MODIFIED: Added encryption/decryption support for CryptoTensors
# This is a derivative work based on the safetensors project by Hugging Face Inc.
import json
import os
from importlib.metadata import entry_points
from ._safetensors_rust import (  # noqa: F401
    SafetensorError,
    __version__,
    deserialize,
    safe_open,
    _safe_open_handle,
    serialize,
    serialize_file,
    rewrap_file,
    rewrap_header,
    rewrap,
    disable_provider,
    py_load_provider_native as _load_provider_native,
    _register_key_provider_internal,
)


def _find_provider_native_lib(name: str) -> str:
    """Find provider native library path via entry_points"""
    eps = entry_points(group="cryptotensors.providers")
    for ep in eps:
        if ep.name == name:
            # Load the module and get the native lib path
            module = ep.load()
            if hasattr(module, "get_native_lib_path"):
                return module.get_native_lib_path()
            else:
                # Fallback: assume the module itself is the path or has it
                raise ValueError(
                    f"Provider '{name}' module does not have get_native_lib_path()"
                )
    raise ValueError(
        f"Provider '{name}' not found. Install with: pip install cryptotensors-provider-{name}"
    )


def init_key_provider(name: str, **config):
    """Initialize and activate a key provider"""
    lib_path = _find_provider_native_lib(name)
    _load_provider_native(name, lib_path, json.dumps(config))


def list_key_providers() -> list:
    """List available key providers"""
    eps = entry_points(group="cryptotensors.providers")
    return [ep.name for ep in eps]


def register_direct_key_provider(*, files=None, keys=None):
    """
    Register direct key provider (highest priority)

    Creates a DirectKeyProvider and registers it to the global Registry with highest priority.

    Args:
        files: List of key file paths, Python handles reading and parsing
        keys: JWK list or JWK Set dict

    Only one of 'files' or 'keys' can be specified.
    """
    if files is not None and keys is not None:
        raise ValueError("Cannot specify both 'files' and 'keys'")
    if files is None and keys is None:
        raise ValueError("Must specify either 'files' or 'keys'")

    final_keys = []
    if files is not None:
        # Python handles file reading
        for path in files:
            with open(path, "r") as f:
                data = json.load(f)
            if isinstance(data, dict):
                if "keys" in data:
                    final_keys.extend(data["keys"])  # JWK Set
                elif "kty" in data:
                    final_keys.append(data)  # Single JWK
                else:
                    raise ValueError(f"Invalid JWK format in {path}")
            elif isinstance(data, list):
                final_keys.extend(data)
            else:
                raise ValueError(f"Invalid JWK format in {path}")

    elif keys is not None:
        if isinstance(keys, dict):
            if "keys" in keys:
                final_keys = keys["keys"]  # JWK Set format
            elif "kty" in keys:
                final_keys = [keys]  # Single JWK
            else:
                raise ValueError("Invalid keys format")
        elif isinstance(keys, list):
            final_keys = keys
        else:
            raise ValueError("keys must be a list or a dict")

    # Pass to Rust
    _register_key_provider_internal(final_keys)


# Backward compatibility alias
register_tmp_key_provider = register_direct_key_provider


class SerializeCryptoConfig:
    """
    Serialization encryption configuration

    Key loading (two paths):
    1. Direct keys (enc_key/sign_key) - if provided, use as-is and ignore enc_kid/enc_jku/sign_kid/sign_jku
    2. Registry lookup (enc_kid/enc_jku/sign_kid/sign_jku) - when no direct keys, lookup from Registry
       - Use register_direct_key_provider() to register keys to global Registry first
    """

    def __init__(
        self,
        enc_key=None,
        sign_key=None,
        enc_kid=None,
        enc_jku=None,
        sign_kid=None,
        sign_jku=None,
        policy=None,
        tensors=None,
    ):
        """
        Initialize SerializeCryptoConfig

        Args:
            enc_key (dict, optional): Encryption key (JWK format)
            sign_key (dict, optional): Signing key (JWK format)
            enc_kid (str, optional): Encryption key identifier
            enc_jku (str, optional): Encryption key JWK URL
            sign_kid (str, optional): Signing key identifier
            sign_jku (str, optional): Signing key JWK URL
            policy (dict, optional): Access policy {"local": "...", "remote": "..."}
            tensors (list, optional): List of tensor names to encrypt (None = all)
        """
        self.config = {
            "enc_key": enc_key,
            "sign_key": sign_key,
            "enc_kid": enc_kid,
            "enc_jku": enc_jku,
            "sign_kid": sign_kid,
            "sign_jku": sign_jku,
            "policy": policy,
            "tensors": tensors,
        }
        # Remove None values
        self.config = {k: v for k, v in self.config.items() if v is not None}

    def to_dict(self):
        """Convert to dict for internal use"""
        return self.config


class DeserializeCryptoConfig:
    """
    Deserialization decryption configuration (optional)

    Key loading (two paths):
    1. Direct keys (enc_key/sign_key) - if provided, use as-is and ignore kid/jku from header
    2. Registry lookup - when no direct keys, lookup by kid/jku from header
       - Use register_direct_key_provider() to register keys to global Registry first

    Note: kid/jku are read from header for registry lookup, no need to specify here
    """

    def __init__(self, enc_key=None, sign_key=None):
        """
        Initialize DeserializeCryptoConfig

        Args:
            enc_key (dict, optional): Encryption key (JWK format)
            sign_key (dict, optional): Signing key (JWK format)
        """
        self.config = {
            "enc_key": enc_key,
            "sign_key": sign_key,
        }
        # Remove None values
        self.config = {k: v for k, v in self.config.items() if v is not None}

    def to_dict(self):
        """Convert to dict for internal use"""
        return self.config


__all__ = [
    "SafetensorError",
    "__version__",
    "deserialize",
    "safe_open",
    "_safe_open_handle",
    "serialize",
    "serialize_file",
    "rewrap_file",
    "rewrap_header",
    "rewrap",
    "disable_provider",
    "register_direct_key_provider",
    "register_tmp_key_provider",  # Backward compatibility alias
    "init_key_provider",
    "list_key_providers",
    "SerializeCryptoConfig",
    "DeserializeCryptoConfig",
]
