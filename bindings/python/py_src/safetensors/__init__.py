# MODIFIED: Added encryption/decryption support for CryptoTensors
# This is a derivative work based on the safetensors project by Hugging Face Inc.
# Re-export this
from cryptotensors._safetensors_rust import (  # noqa: F401
    SafetensorError,
    __version__,
    deserialize,
    safe_open,
    _safe_open_handle,
    serialize,
    serialize_file,
)

__all__ = [
    "SafetensorError",
    "__version__",
    "deserialize",
    "safe_open",
    "_safe_open_handle",
    "serialize",
    "serialize_file",
]
