import os
import tempfile
import pytest
import numpy as np
from cryptotensors.numpy import load_file, save_file


def create_gpt2_data():
    """Create GPT-2-like data in NumPy."""
    tensors = {}
    tensors["wte"] = np.zeros((50257, 768), dtype=np.float32)
    tensors["wpe"] = np.zeros((1024, 768), dtype=np.float32)
    for i in range(12):
        tensors[f"h.{i}.ln_1.weight"] = np.zeros((768,), dtype=np.float32)
        tensors[f"h.{i}.ln_1.bias"] = np.zeros((768,), dtype=np.float32)
        # ... just enough to simulate load
    return tensors


def test_numpy_crypto_save(benchmark, crypto_config):
    """Benchmark saving NumPy data with encryption."""
    weights = create_gpt2_data()
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        benchmark(save_file, weights, f.name, config=crypto_config)
    os.unlink(f.name)


def test_numpy_crypto_load(benchmark, crypto_config):
    """Benchmark loading NumPy data with encryption."""
    weights = create_gpt2_data()
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name)
    os.unlink(f.name)
