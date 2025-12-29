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
                raise ValueError(f"Provider '{name}' module does not have get_native_lib_path()")
    raise ValueError(f"Provider '{name}' not found. Install with: pip install cryptotensors-provider-{name}")


def init_key_provider(name: str, **config):
    """Initialize and activate a key provider"""
    lib_path = _find_provider_native_lib(name)
    _load_provider_native(name, lib_path, json.dumps(config))


def list_key_providers() -> list:
    """List available key providers"""
    eps = entry_points(group="cryptotensors.providers")
    return [ep.name for ep in eps]


def register_tmp_key_provider(*, files=None, keys=None):
    """
    Register temporary key provider (highest priority)

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


__all__ = [
    "SafetensorError",
    "__version__",
    "deserialize",
    "safe_open",
    "_safe_open_handle",
    "serialize",
    "serialize_file",
    "disable_provider",
    "register_tmp_key_provider",
    "init_key_provider",
    "list_key_providers",
]
