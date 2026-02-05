import pytest
from crypto_utils import generate_test_keys, create_crypto_config
from utils_explicit_config import (
    TensorflowAdapter,
    run_save_load_file_test,
    run_save_load_bytes_test,
)


@pytest.fixture
def keys():
    return generate_test_keys(algorithm="aes256gcm")


@pytest.fixture
def enc_config(keys):
    return create_crypto_config(keys["enc_key"], keys["sign_key"])


@pytest.fixture
def adapter():
    try:
        return TensorflowAdapter()
    except ImportError:
        pytest.skip("Tensorflow not installed")


def test_save_load_file_explicit_config_tensorflow(adapter, enc_config, tmp_path):
    run_save_load_file_test(adapter, enc_config, tmp_path)


def test_save_load_bytes_explicit_config_tensorflow(adapter, enc_config):
    run_save_load_bytes_test(adapter, enc_config)
