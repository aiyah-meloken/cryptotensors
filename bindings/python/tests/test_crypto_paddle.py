import os
import tempfile
import unittest
import numpy as np

try:
    import paddle
    import cryptotensors
    from cryptotensors.paddle import load_file, save_file
    from cryptotensors import safe_open
    from crypto_utils import generate_test_keys, create_crypto_config

    HAS_PADDLE = True
except ImportError:
    HAS_PADDLE = False


@unittest.skipIf(not HAS_PADDLE, "Paddle is not available")
class CryptoPaddleTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": paddle.zeros((2, 2), dtype=paddle.float32),
            "test2": paddle.randn((10, 10), dtype=paddle.float32),
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
            self.assertTrue(np.allclose(v, tv))

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
                        self.assertTrue(np.allclose(v, reloaded[k]))
                finally:
                    cryptotensors.disable_provider("temp")

    def test_partial_encryption(self):
        config = create_crypto_config(**self.keys, tensors=["test"])
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=config)
            reloaded = load_file(f.name)

            with safe_open(f.name, framework="paddle") as handle:
                metadata = handle.metadata()
                import json

                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)

            os.unlink(f.name)

        for k, v in self.data.items():
            self.assertTrue(np.allclose(v, reloaded[k]))

    def test_bfloat16_encrypted(self):
        if paddle.__version__ >= "3.2.0":
            dtype = paddle.bfloat16
        else:
            dtype = paddle.float32
        data = {"bf16": paddle.cast(paddle.randn((2, 2)), dtype)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)

        self.assertTrue(paddle.allclose(data["bf16"], reloaded["bf16"]).item())
