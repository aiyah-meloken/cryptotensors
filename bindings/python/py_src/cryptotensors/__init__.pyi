# Generated content DO NOT EDIT
@staticmethod
def deserialize(bytes):
    """
    Opens a safetensors lazily and returns tensors as asked

    Args:
        data (`bytes`):
            The byte content of a file

    Returns:
        (`List[str, Dict[str, Dict[str, any]]]`):
            The deserialized content is like:
                [("tensor_name", {"shape": [2, 3], "dtype": "F32", "data": b"\0\0.." }), (...)]
    """
    pass

@staticmethod
def serialize(tensor_dict, metadata=None):
    """
    Serializes raw data.

    Args:
        tensor_dict (`Dict[str, Dict[Any]]`):
            The tensor dict is like:
                {"tensor_name": {"dtype": "F32", "shape": [2, 3], "data": b"\0\0"}}
        metadata (`Dict[str, str]`, *optional*):
            The optional purely text annotations

    Returns:
        (`bytes`):
            The serialized content.
    """
    pass

@staticmethod
def serialize_file(tensor_dict, filename, metadata=None, config=None):
    """
    Serializes raw data into file.

    Args:
        tensor_dict (`Dict[str, Dict[Any]]`):
            The tensor dict is like:
                {"tensor_name": {"dtype": "F32", "shape": [2, 3], "data": b"\0\0"}}
        filename (`str`, or `os.PathLike`):
            The name of the file to write into.
        metadata (`Dict[str, str]`, *optional*):
            The optional purely text annotations
        config (`Dict[str, Any]` or `SerializeCryptoConfig`, *optional*):
            Encryption configuration. If provided, the file will be encrypted.

    Returns:
        (`NoneType`):
            On success return None
    """
    pass

@staticmethod
def rewrap_file(filename, new_config, old_config=None):
    """
    Rewrap (re-encrypt) DEKs in an encrypted safetensors file with new keys.

    This function reads an encrypted safetensors file, re-encrypts the data encryption keys (DEKs)
    with new master keys, and writes the updated file back. The tensor data itself remains unchanged.

    Args:
        filename (`str` or `os.PathLike`):
            Path to the encrypted safetensors file (will be modified in-place)
        new_config (`Dict[str, Any]`):
            Configuration for encryption with new keys (same format as SerializeCryptoConfig)
        old_config (`Dict[str, Any]`, *optional*):
            Configuration for decryption (None = use keys from file header)

    Returns:
        (`None`): Function modifies the file in-place

    Raises:
        `SafetensorError`: If rewrap fails
    """
    pass

def rewrap_header(buffer, new_config, old_config=None):
    """
    Rewrap (re-encrypt) DEKs in an encrypted safetensors header with new keys.

    This function takes header bytes, re-encrypts the data encryption keys (DEKs)
    with new master keys, and returns the updated header bytes. The tensor data is not included.

    Args:
        buffer (`bytes`):
            Header bytes from an encrypted safetensors file (should include 8-byte size prefix)
        new_config (`Dict[str, Any]`):
            Configuration for encryption with new keys (same format as SerializeCryptoConfig)
        old_config (`Dict[str, Any]`, *optional*):
            Configuration for decryption (None = use keys from header)

    Returns:
        (`bytes`): New header bytes with re-encrypted DEKs

    Raises:
        `SafetensorError`: If rewrap fails
    """
    pass

def rewrap(buffer, new_config, old_config=None):
    """
    Rewrap (re-encrypt) DEKs in an encrypted safetensors file bytes with new keys.

    This function takes complete file bytes, re-encrypts the data encryption keys (DEKs)
    with new master keys, and returns the updated file bytes. The tensor data itself remains unchanged.

    Args:
        buffer (`bytes`):
            Complete bytes of an encrypted safetensors file
        new_config (`Dict[str, Any]`):
            Configuration for encryption with new keys (same format as SerializeCryptoConfig)
        old_config (`Dict[str, Any]`, *optional*):
            Configuration for decryption (None = use keys from file header)

    Returns:
        (`bytes`): New file bytes with re-encrypted DEKs

    Raises:
        `SafetensorError`: If rewrap fails
    """
    pass

class safe_open:
    """
    Opens a safetensors lazily and returns tensors as asked

    Args:
        filename (`str`, or `os.PathLike`):
            The filename to open

        framework (`str`):
            The framework you want you tensors in. Supported values:
            `pt`, `tf`, `flax`, `numpy`.

        device (`str`, defaults to `"cpu"`):
            The device on which you want the tensors.

        config (`Dict[str, Any]` or `DeserializeCryptoConfig`, optional):
            Decryption configuration. If not provided, keys will be looked up from the global registry.
            Supports direct keys via `enc_key` and `sign_key` parameters.
    """
    def __init__(self, filename, framework, device=..., config=...):
        pass

    def __enter__(self):
        """
        Start the context manager
        """
        pass

    def __exit__(self, _exc_type, _exc_value, _traceback):
        """
        Exits the context manager
        """
        pass

    def get_slice(self, name):
        """
        Returns a full slice view object

        Args:
            name (`str`):
                The name of the tensor you want

        Returns:
            (`PySafeSlice`):
                A dummy object you can slice into to get a real tensor
        Example:
        ```python
        from safetensors import safe_open

        with safe_open("model.safetensors", framework="pt", device=0) as f:
            tensor_part = f.get_slice("embedding")[:, ::8]

        ```
        """
        pass

    def get_tensor(self, name):
        """
        Returns a full tensor

        Args:
            name (`str`):
                The name of the tensor you want

        Returns:
            (`Tensor`):
                The tensor in the framework you opened the file for.

        Example:
        ```python
        from safetensors import safe_open

        with safe_open("model.safetensors", framework="pt", device=0) as f:
            tensor = f.get_tensor("embedding")

        ```
        """
        pass

    def keys(self):
        """
        Returns the names of the tensors in the file.

        Returns:
            (`List[str]`):
                The name of the tensors contained in that file
        """
        pass

    def metadata(self):
        """
        Return the special non tensor information in the header, excluding reserved keys
        that start with "__".

        Returns:
            (`Dict[str, str]`):
                The freeform metadata.
        """
        pass

    def reserved_metadata(self):
        """
        Return the reserved metadata fields in the header (keys starting with "__").

        Returns:
            (`Dict[str, str]`):
                The reserved metadata.
        """
        pass

    def offset_keys(self):
        """
        Returns the names of the tensors in the file, ordered by offset.

        Returns:
            (`List[str]`):
                The name of the tensors contained in that file
        """
        pass

class SafetensorError(Exception):
    """
    Custom Python Exception for Safetensor errors.
    """

class SerializeCryptoConfig:
    """
    Serialization encryption configuration
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
    ): ...
    def to_dict(self): ...

class DeserializeCryptoConfig:
    """
    Deserialization decryption configuration
    """
    def __init__(self, enc_key=None, sign_key=None): ...
    def to_dict(self): ...
