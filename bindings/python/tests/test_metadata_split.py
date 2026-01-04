import os
import tempfile

import numpy as np

from cryptotensors import safe_open
from cryptotensors.numpy import save_file


def test_reserved_metadata_is_separated():
    tensors = {"a": np.zeros((1,), dtype=np.float32)}
    metadata = {"user": "visible", "__secret__": "hidden"}

    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        filename = f.name

    try:
        save_file(tensors, filename, metadata=metadata)

        with safe_open(filename, framework="np") as handle:
            user_metadata = handle.metadata()
            reserved_metadata = handle.reserved_metadata()

        assert user_metadata == {"user": "visible"}
        assert reserved_metadata == {"__secret__": "hidden"}
    finally:
        try:
            os.unlink(filename)
        except (OSError, PermissionError):
            pass
