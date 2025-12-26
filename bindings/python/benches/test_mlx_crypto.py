import os
import platform
import tempfile
import pytest
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

def create_gpt2(n_layers: int):
    """Create GPT-2 model tensors in MLX."""
    tensors = {}
    tensors["wte"] = mx.zeros((50257, 768))
    tensors["wpe"] = mx.zeros((1024, 768))
    for i in range(n_layers):
        tensors[f"h.{i}.ln_1.weight"] = mx.zeros((768,))
        tensors[f"h.{i}.ln_1.bias"] = mx.zeros((768,))
        tensors[f"h.{i}.attn.bias"] = mx.zeros((1, 1, 1024, 1024))
        tensors[f"h.{i}.attn.c_attn.weight"] = mx.zeros((768, 2304))
        tensors[f"h.{i}.attn.c_attn.bias"] = mx.zeros((2304))
        tensors[f"h.{i}.attn.c_proj.weight"] = mx.zeros((768, 768))
        tensors[f"h.{i}.attn.c_proj.bias"] = mx.zeros((768))
        tensors[f"h.{i}.ln_2.weight"] = mx.zeros((768))
        tensors[f"h.{i}.ln_2.bias"] = mx.zeros((768))
        tensors[f"h.{i}.mlp.c_fc.weight"] = mx.zeros((768, 3072))
        tensors[f"h.{i}.mlp.c_fc.bias"] = mx.zeros((3072))
        tensors[f"h.{i}.mlp.c_proj.weight"] = mx.zeros((3072, 768))
        tensors[f"h.{i}.mlp.c_proj.bias"] = mx.zeros((768))
    tensors["ln_f.weight"] = mx.zeros((768))
    tensors["ln_f.bias"] = mx.zeros((768))
    return tensors

@pytest.mark.skipif(platform.system() != "Darwin" or not HAS_MLX, reason="MLX only available on macOS")
def test_mlx_crypto_save_cpu(benchmark, crypto_config):
    """Benchmark saving GPT-2 with encryption in MLX."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        benchmark(save_file, weights, f.name, config=crypto_config)
    os.unlink(f.name)

@pytest.mark.skipif(platform.system() != "Darwin" or not HAS_MLX, reason="MLX only available on macOS")
def test_mlx_crypto_load_cpu(benchmark, crypto_config):
    """Benchmark loading GPT-2 with encryption in MLX."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name)
    os.unlink(f.name)

