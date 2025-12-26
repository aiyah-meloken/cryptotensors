import os
import platform
import tempfile
import unittest
import numpy as np

HAS_MLX = False
if platform.system() == "Darwin":
    try:
        import mlx.core as mx
        HAS_MLX = True
    except ImportError:
        pass

if HAS_MLX:
    from cryptotensors.mlx import load_file, save_file
    from cryptotensors import safe_open
    from .crypto_utils import generate_test_keys, create_crypto_config

@unittest.skipIf(platform.system() != "Darwin", "MLX only available on macOS")
@unittest.skipIf(not HAS_MLX, "MLX not installed")
class CryptoMlxTestCase(unittest.TestCase):
    def setUp(self):
        self.data = {
            "test": mx.zeros((2, 2), dtype=mx.float32),
            "test2": mx.random.uniform(shape=(10, 10), dtype=mx.float32),
        }
        self.keys = generate_test_keys(algorithm="aes256gcm")
        self.config = create_crypto_config(**self.keys)

    def test_roundtrip_encrypted(self):
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)

        for k, v in self.data.items():
            tv = reloaded[k]
            self.assertTrue(mx.allclose(v, tv))

    def test_roundtrip_algorithms(self):
        algos = ["aes128gcm", "aes256gcm", "chacha20poly1305"]
        for algo in algos:
            with self.subTest(algo=algo):
                keys = generate_test_keys(algorithm=algo)
                config = create_crypto_config(**keys)
                with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                    save_file(self.data, f.name, config=config)
                    reloaded = load_file(f.name)
                    os.unlink(f.name)
                
                for k, v in self.data.items():
                    self.assertTrue(mx.allclose(v, reloaded[k]))

    def test_partial_encryption(self):
        config = create_crypto_config(**self.keys, tensors=["test"])
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(self.data, f.name, config=config)
            reloaded = load_file(f.name)
            
            with safe_open(f.name, framework="mlx") as handle:
                metadata = handle.metadata()
                import json
                enc_info = json.loads(metadata.get("__encryption__", "{}"))
                self.assertIn("test", enc_info)
                self.assertNotIn("test2", enc_info)
                
            os.unlink(f.name)

        for k, v in self.data.items():
            self.assertTrue(mx.allclose(v, reloaded[k]))

    def test_complex64_encrypted(self):
        data = {"c64": mx.random.uniform(shape=(2, 2)).astype(mx.complex64)}
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            save_file(data, f.name, config=self.config)
            reloaded = load_file(f.name)
            os.unlink(f.name)
        
        self.assertTrue(mx.allclose(data["c64"], reloaded["c64"]))

