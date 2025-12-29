import os
import tempfile
import unittest
import numpy as np
import cryptotensors
from cryptotensors.numpy import load_file, save_file
from cryptotensors import safe_open
from crypto_utils import generate_test_keys, create_crypto_config


class CryptoNumpyTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": np.zeros((2, 2), dtype=np.float32),
            "test2": np.random.normal(size=(10, 10)).astype(np.float32),
        }
        self.keys = generate_test_keys(algorithm="aes256gcm")
        self.config = create_crypto_config(**self.keys)
        # Register key provider for decryption
        cryptotensors.register_tmp_key_provider(
            keys=[self.keys["enc_key"], self.keys["sign_key"]]
        )

    def tearDown(self):
        # Clean up key provider
        cryptotensors.disable_provider("temp")

    def test_roundtrip_encrypted(self):
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(self.data, filename, config=self.config)
            reloaded = load_file(filename)

            for k, v in self.data.items():
                tv = reloaded[k]
                self.assertTrue(np.allclose(v, tv))
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass

    def test_roundtrip_algorithms(self):
        algos = ["aes128gcm", "aes256gcm", "chacha20poly1305"]
        for algo in algos:
            with self.subTest(algo=algo):
                keys = generate_test_keys(algorithm=algo)
                config = create_crypto_config(**keys)
                # Register keys for this algorithm
                cryptotensors.register_tmp_key_provider(
                    keys=[keys["enc_key"], keys["sign_key"]]
                )
                with tempfile.NamedTemporaryFile(
                    suffix=".safetensors", delete=False
                ) as f:
                    filename = f.name
                try:
                    save_file(self.data, filename, config=config)
                    reloaded = load_file(filename)

                    for k, v in self.data.items():
                        self.assertTrue(np.allclose(v, reloaded[k]))
                finally:
                    cryptotensors.disable_provider("temp")
                    try:
                        os.unlink(filename)
                    except (OSError, PermissionError):
                        pass

    def test_partial_encryption(self):
        config = create_crypto_config(**self.keys, tensors=["test"])
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(self.data, filename, config=config)
            reloaded = load_file(filename)

            with safe_open(filename, framework="np") as handle:
                metadata = handle.metadata()
                import json

                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)

            for k, v in self.data.items():
                self.assertTrue(np.allclose(v, reloaded[k]))
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass

    def test_complex64_encrypted(self):
        data = {"c64": np.random.normal(size=(2, 2)).astype(np.complex64)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(data, filename, config=self.config)
            reloaded = load_file(filename)

            self.assertTrue(np.allclose(data["c64"], reloaded["c64"]))
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass
