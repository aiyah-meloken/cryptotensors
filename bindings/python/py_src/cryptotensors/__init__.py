# MODIFIED: Added encryption/decryption support for CryptoTensors
# This is a derivative work based on the safetensors project by Hugging Face Inc.
import json
from ._safetensors_rust import (  # noqa: F401
    SafetensorError,
    __version__,
    deserialize,
    safe_open,
    _safe_open_handle,
    serialize,
    serialize_file,
    disable_provider,
    _register_key_provider_internal,
)

def register_key_provider(*, files=None, keys=None):
    """
    Register temporary key provider
    
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
            with open(path, 'r') as f:
                data = json.load(f)
            if isinstance(data, dict):
                if 'keys' in data:
                    final_keys.extend(data['keys'])  # JWK Set
                elif 'kty' in data:
                    final_keys.append(data)  # Single JWK
                else:
                    raise ValueError(f"Invalid JWK format in {path}")
            elif isinstance(data, list):
                final_keys.extend(data)
            else:
                raise ValueError(f"Invalid JWK format in {path}")
    
    elif keys is not None:
        if isinstance(keys, dict):
            if 'keys' in keys:
                final_keys = keys['keys']  # JWK Set format
            elif 'kty' in keys:
                final_keys = [keys]  # Single JWK
            else:
                raise ValueError("Invalid keys format")
        elif isinstance(keys, list):
            final_keys = keys
        else:
            raise ValueError("keys must be a list or a dict")
    
    # Pass to Rust
    _register_key_provider_internal(final_keys)

__all__ = [
    "SafetensorError", 
    "__version__", 
    "deserialize", 
    "safe_open", 
    "_safe_open_handle",
    "serialize", 
    "serialize_file",
    "disable_provider",
    "register_key_provider",
]
