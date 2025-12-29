import os
import json
import tempfile
import unittest
import numpy as np
import cryptotensors
from cryptotensors.numpy import save_file, load_file
from crypto_utils import generate_test_keys


class TestRegistry(unittest.TestCase):
    def setUp(self):
        self.keys = generate_test_keys()
        self.data = {
            "weight": np.random.randn(2, 2).astype(np.float32),
            "bias": np.random.randn(2).astype(np.float32),
        }

    def test_register_tmp_key_provider_dict(self):
        # Register keys directly
        cryptotensors.register_tmp_key_provider(
            keys=[self.keys["enc_key"], self.keys["sign_key"]]
        )

        with tempfile.NamedTemporaryFile(suffix=".cryptotensors", delete=False) as tmp:
            tmp_path = tmp.name

        try:
            # Use config for saving to ensure it works, then load using registry
            config = {
                "enc_key": self.keys["enc_key"],
                "sign_key": self.keys["sign_key"],
            }
            save_file(self.data, tmp_path, config=config)

            # Load using registry
            loaded = load_file(tmp_path)
            np.testing.assert_allclose(loaded["weight"], self.data["weight"])

            # Clear registry and try to load (should fail)
            cryptotensors.disable_provider("temp")
            with self.assertRaises(Exception):
                load_file(tmp_path)

        finally:
            cryptotensors.disable_provider("temp")
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

    def test_register_tmp_key_provider_files(self):
        # Save keys to a file
        with tempfile.NamedTemporaryFile(
            suffix=".jwk", mode="w", delete=False
        ) as tmp_jwk:
            jwk_path = tmp_jwk.name
            json.dump({"keys": [self.keys["enc_key"], self.keys["sign_key"]]}, tmp_jwk)

        try:
            cryptotensors.register_tmp_key_provider(files=[jwk_path])

            with tempfile.NamedTemporaryFile(
                suffix=".cryptotensors", delete=False
            ) as tmp:
                tmp_path = tmp.name

            try:
                config = {
                    "enc_key": self.keys["enc_key"],
                    "sign_key": self.keys["sign_key"],
                }
                save_file(self.data, tmp_path, config=config)

                # Load using file provider registered in temp
                loaded = load_file(tmp_path)
                np.testing.assert_allclose(loaded["weight"], self.data["weight"])

            finally:
                cryptotensors.disable_provider("temp")
                if os.path.exists(tmp_path):
                    os.remove(tmp_path)
        finally:
            if os.path.exists(jwk_path):
                os.remove(jwk_path)

    def test_env_provider(self):
        # Set environment variable
        os.environ["CRYPTOTENSOR_KEYS"] = json.dumps(
            {"keys": [self.keys["enc_key"], self.keys["sign_key"]]}
        )

        with tempfile.NamedTemporaryFile(suffix=".cryptotensors", delete=False) as tmp:
            tmp_path = tmp.name

        try:
            config = {
                "enc_key": self.keys["enc_key"],
                "sign_key": self.keys["sign_key"],
            }
            save_file(self.data, tmp_path, config=config)

            # Load using env provider
            loaded = load_file(tmp_path)
            np.testing.assert_allclose(loaded["weight"], self.data["weight"])

            # Disable env provider
            cryptotensors.disable_provider("env")
            with self.assertRaises(Exception):
                load_file(tmp_path)

        finally:
            if os.path.exists(tmp_path):
                os.remove(tmp_path)
            if "CRYPTOTENSOR_KEYS" in os.environ:
                del os.environ["CRYPTOTENSOR_KEYS"]


if __name__ == "__main__":
    unittest.main()
