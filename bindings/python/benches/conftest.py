import os
import sys
from pathlib import Path

# Add parent directory to path so we can import from tests
parent_dir = Path(__file__).parent.parent
if str(parent_dir) not in sys.path:
    sys.path.insert(0, str(parent_dir))

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
    config = create_crypto_config(**keys)

    # Register key provider for decryption
    import cryptotensors

    cryptotensors.register_tmp_key_provider(keys=[keys["enc_key"], keys["sign_key"]])

    yield config

    # Clean up key provider after test
    cryptotensors.disable_provider("temp")
