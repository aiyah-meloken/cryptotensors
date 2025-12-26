import os
import pytest
from tests.crypto_utils import generate_test_keys, create_crypto_config

@pytest.fixture
def crypto_config():
    """
    Provide encryption config for benchmarks.
    Supports BENCH_CRYPTO_ALGO environment variable to choose algorithm.
    """
    # Import locally to avoid issues with test structure in some environments
    from tests.crypto_utils import generate_test_keys, create_crypto_config
    
    algo = os.environ.get("BENCH_CRYPTO_ALGO", "aes256gcm")
    keys = generate_test_keys(algorithm=algo)
    return create_crypto_config(**keys)

