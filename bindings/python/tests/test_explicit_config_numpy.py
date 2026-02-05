import pytest
from crypto_utils import generate_test_keys, create_crypto_config
from utils_explicit_config import (
    NumpyAdapter,
    run_save_load_file_test,
    run_save_load_bytes_test,
)
from cryptotensors import deserialize


@pytest.fixture
def keys():
    return generate_test_keys(algorithm="aes256gcm")


@pytest.fixture
def enc_config(keys):
    return create_crypto_config(keys["enc_key"], keys["sign_key"])


@pytest.fixture
def adapter():
    try:
        return NumpyAdapter()
    except ImportError:
        pytest.skip("Numpy not installed")


def test_save_load_file_explicit_config_numpy(adapter, enc_config, tmp_path):
    run_save_load_file_test(adapter, enc_config, tmp_path)


def test_save_load_bytes_explicit_config_numpy(adapter, enc_config):
    run_save_load_bytes_test(adapter, enc_config)


def test_deserialize_explicit_config_zero_copy(adapter, enc_config):
    """
    Test low-level deserialize with explicit config and verify zero-copy behavior.
    """
    import numpy as np

    data = adapter.generate_data()
    serialized_bytes = adapter.save(data, config=enc_config)

    # Deserialize with config
    flat = deserialize(serialized_bytes, config=enc_config)

    # Check structure
    assert len(flat) == len(data)

    for name, tensor_info in flat:
        assert "data" in tensor_info
        py_data = tensor_info["data"]

        # Verify it supports buffer protocol (likely DecryptedBuffer)
        assert hasattr(py_data, "__doc__")

        # Construct numpy array from it to verify data and zero-copy access
        arr = np.frombuffer(py_data, dtype=np.float32).reshape(tensor_info["shape"])

        # Matches original?
        orig = data[name]
        np.testing.assert_allclose(orig, arr)
