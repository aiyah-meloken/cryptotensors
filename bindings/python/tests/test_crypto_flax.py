import os
import tempfile
import unittest
import numpy as np
import jax.numpy as jnp
import cryptotensors
from cryptotensors.flax import load_file, save_file
from cryptotensors import safe_open
from crypto_utils import generate_test_keys, create_crypto_config


class CryptoFlaxTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": jnp.zeros((2, 2), dtype=jnp.float32),
            "test2": jnp.array(np.random.normal(size=(10, 10)), dtype=jnp.float32),
        }
        self.keys = generate_test_keys(algorithm="aes256gcm")
        self.config = create_crypto_config(**self.keys)
        # Register key provider for decryption
        cryptotensors.register_key_provider(
            keys=[self.keys["enc_key"], self.keys["sign_key"]]
        )

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
            self.assertTrue(jnp.allclose(v, tv))

    def test_roundtrip_algorithms(self):
        algos = ["aes128gcm", "aes256gcm", "chacha20poly1305"]
        for algo in algos:
            with self.subTest(algo=algo):
                keys = generate_test_keys(algorithm=algo)
                config = create_crypto_config(**keys)
                # Register keys for this algorithm
                cryptotensors.register_key_provider(
                    keys=[keys["enc_key"], keys["sign_key"]]
                )
                try:
                    with tempfile.NamedTemporaryFile(
                        suffix=".safetensors", delete=False
                    ) as f:
                        save_file(self.data, f.name, config=config)
                        reloaded = load_file(f.name)
                        os.unlink(f.name)

                    for k, v in self.data.items():
                        self.assertTrue(jnp.allclose(v, reloaded[k]))
                finally:
                    cryptotensors.disable_provider("temp")

    def test_partial_encryption(self):
        config = create_crypto_config(**self.keys, tensors=["test"])
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=config)
            reloaded = load_file(f.name)

            with safe_open(f.name, framework="flax") as handle:
                metadata = handle.metadata()
                import json

                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)

            os.unlink(f.name)

        for k, v in self.data.items():
            self.assertTrue(jnp.allclose(v, reloaded[k]))

    def test_bfloat16_encrypted(self):
        data = {"bf16": jnp.array(np.random.normal(size=(2, 2)), dtype=jnp.bfloat16)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)

        self.assertTrue(jnp.allclose(data["bf16"], reloaded["bf16"]))
