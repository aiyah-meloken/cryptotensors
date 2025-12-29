import os
import tempfile
import unittest
import numpy as np
import tensorflow as tf
import cryptotensors
from cryptotensors.tensorflow import load_file, save_file
from cryptotensors import safe_open
from crypto_utils import generate_test_keys, create_crypto_config


class CryptoTfTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": tf.zeros((2, 2), dtype=tf.float32),
            "test2": tf.random.normal((10, 10), dtype=tf.float32),
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
                # Handle both TensorFlow tensors and numpy arrays
                v_np = v.numpy() if hasattr(v, "numpy") else v
                tv_np = tv.numpy() if hasattr(tv, "numpy") else tv
                self.assertTrue(np.allclose(v_np, tv_np))
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
                # Create a copy of self.data to avoid modifying the original
                # since _tf2np modifies the dict in place
                data_copy = {k: v for k, v in self.data.items()}
                with tempfile.NamedTemporaryFile(
                    suffix=".safetensors", delete=False
                ) as f:
                    filename = f.name
                try:
                    save_file(data_copy, filename, config=config)
                    reloaded = load_file(filename)

                    for k, v in self.data.items():
                        tv = reloaded[k]
                        # Handle both TensorFlow tensors and numpy arrays
                        v_np = v.numpy() if hasattr(v, "numpy") else v
                        tv_np = tv.numpy() if hasattr(tv, "numpy") else tv
                        self.assertTrue(np.allclose(v_np, tv_np))
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

            with safe_open(filename, framework="tf") as handle:
                metadata = handle.metadata()
                import json

                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)

            for k, v in self.data.items():
                tv = reloaded[k]
                # Handle both TensorFlow tensors and numpy arrays
                v_np = v.numpy() if hasattr(v, "numpy") else v
                tv_np = tv.numpy() if hasattr(tv, "numpy") else tv
                self.assertTrue(np.allclose(v_np, tv_np))
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass

    def test_bfloat16_encrypted(self):
        # bfloat16 is often used in models
        data = {"bf16": tf.cast(tf.random.normal((2, 2)), tf.bfloat16)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(data, filename, config=self.config)
            reloaded = load_file(filename)

            self.assertTrue(
                tf.experimental.numpy.allclose(data["bf16"], reloaded["bf16"])
            )
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass
