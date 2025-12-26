import os
import tempfile
import pytest
import numpy as np
import paddle
from cryptotensors.paddle import load_file, save_file

def create_gpt2(n_layers: int):
    """Create GPT-2 model tensors in PaddlePaddle."""
    tensors = {}
    tensors["wte"] = paddle.zeros((50257, 768))
    tensors["wpe"] = paddle.zeros((1024, 768))
    for i in range(n_layers):
        tensors[f"h.{i}.ln_1.weight"] = paddle.zeros((768,))
        tensors[f"h.{i}.ln_1.bias"] = paddle.zeros((768,))
        tensors[f"h.{i}.attn.bias"] = paddle.zeros((1, 1, 1024, 1024))
        tensors[f"h.{i}.attn.c_attn.weight"] = paddle.zeros((768, 2304))
        tensors[f"h.{i}.attn.c_attn.bias"] = paddle.zeros((2304))
        tensors[f"h.{i}.attn.c_proj.weight"] = paddle.zeros((768, 768))
        tensors[f"h.{i}.attn.c_proj.bias"] = paddle.zeros((768))
        tensors[f"h.{i}.ln_2.weight"] = paddle.zeros((768))
        tensors[f"h.{i}.ln_2.bias"] = paddle.zeros((768))
        tensors[f"h.{i}.mlp.c_fc.weight"] = paddle.zeros((768, 3072))
        tensors[f"h.{i}.mlp.c_fc.bias"] = paddle.zeros((3072))
        tensors[f"h.{i}.mlp.c_proj.weight"] = paddle.zeros((3072, 768))
        tensors[f"h.{i}.mlp.c_proj.bias"] = paddle.zeros((768))
    tensors["ln_f.weight"] = paddle.zeros((768))
    tensors["ln_f.bias"] = paddle.zeros((768))
    return tensors

def test_paddle_crypto_save_cpu(benchmark, crypto_config):
    """Benchmark saving GPT-2 with encryption in Paddle."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        benchmark(save_file, weights, f.name, config=crypto_config)
    os.unlink(f.name)

def test_paddle_crypto_load_cpu(benchmark, crypto_config):
    """Benchmark loading GPT-2 with encryption in Paddle."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name)
    os.unlink(f.name)

