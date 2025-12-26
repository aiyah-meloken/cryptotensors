import os
import tempfile
import unittest
import numpy as np
import tensorflow as tf
import cryptotensors
from cryptotensors.tensorflow import load_file, save_file
from cryptotensors import safe_open
from .crypto_utils import generate_test_keys, create_crypto_config

class CryptoTfTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": tf.zeros((2, 2), dtype=tf.float32),
            "test2": tf.random.normal((10, 10), dtype=tf.float32),
        }
        self.keys = generate_test_keys(algorithm="aes256gcm")
        self.config = create_crypto_config(**self.keys)
        # Register key provider for decryption
        cryptotensors.register_key_provider(keys=[
            self.keys["enc_key"],
            self.keys["sign_key"]
        ])

    def tearDown(self):
        # Clean up key provider
        cryptotensors.disable_provider("temp")

    def test_roundtrip_encrypted(self):
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)

        for k, v in self.data.items():
            tv = reloaded[k]
            self.assertTrue(np.allclose(v.numpy(), tv.numpy()))

    def test_roundtrip_algorithms(self):
        algos = ["aes128gcm", "aes256gcm", "chacha20poly1305"]
        for algo in algos:
            with self.subTest(algo=algo):
                keys = generate_test_keys(algorithm=algo)
                config = create_crypto_config(**keys)
                # Register keys for this algorithm
                cryptotensors.register_key_provider(keys=[
                    keys["enc_key"],
                    keys["sign_key"]
                ])
                try:
                    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                        save_file(self.data, f.name, config=config)
                        reloaded = load_file(f.name)
                        os.unlink(f.name)
                    
                    for k, v in self.data.items():
                        self.assertTrue(np.allclose(v.numpy(), reloaded[k].numpy()))
                finally:
                    cryptotensors.disable_provider("temp")

    def test_partial_encryption(self):
        config = create_crypto_config(**self.keys, tensors=["test"])
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=config)
            reloaded = load_file(f.name)
            
            with safe_open(f.name, framework="tf") as handle:
                metadata = handle.metadata()
                import json
                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)
                
            os.unlink(f.name)

        for k, v in self.data.items():
            self.assertTrue(np.allclose(v.numpy(), reloaded[k].numpy()))

    def test_bfloat16_encrypted(self):
        # bfloat16 is often used in models
        data = {"bf16": tf.cast(tf.random.normal((2, 2)), tf.bfloat16)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)
        
        self.assertTrue(np.allclose(data["bf16"].numpy(), reloaded["bf16"].numpy()))

