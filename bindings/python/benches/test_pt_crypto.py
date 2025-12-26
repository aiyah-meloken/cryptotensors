import os
import tempfile
import pytest
import torch
from cryptotensors.torch import load_file, save_file

def create_gpt2(n_layers: int):
    """Create GPT-2 model tensors."""
    tensors = {}
    tensors["wte"] = torch.zeros((50257, 768))
    tensors["wpe"] = torch.zeros((1024, 768))
    for i in range(n_layers):
        tensors[f"h.{i}.ln_1.weight"] = torch.zeros((768,))
        tensors[f"h.{i}.ln_1.bias"] = torch.zeros((768,))
        tensors[f"h.{i}.attn.bias"] = torch.zeros((1, 1, 1024, 1024))
        tensors[f"h.{i}.attn.c_attn.weight"] = torch.zeros((768, 2304))
        tensors[f"h.{i}.attn.c_attn.bias"] = torch.zeros((2304))
        tensors[f"h.{i}.attn.c_proj.weight"] = torch.zeros((768, 768))
        tensors[f"h.{i}.attn.c_proj.bias"] = torch.zeros((768))
        tensors[f"h.{i}.ln_2.weight"] = torch.zeros((768))
        tensors[f"h.{i}.ln_2.bias"] = torch.zeros((768))
        tensors[f"h.{i}.mlp.c_fc.weight"] = torch.zeros((768, 3072))
        tensors[f"h.{i}.mlp.c_fc.bias"] = torch.zeros((3072))
        tensors[f"h.{i}.mlp.c_proj.weight"] = torch.zeros((3072, 768))
        tensors[f"h.{i}.mlp.c_proj.bias"] = torch.zeros((768))
    tensors["ln_f.weight"] = torch.zeros((768))
    tensors["ln_f.bias"] = torch.zeros((768))
    return tensors

def create_lora(n_layers: int):
    """Create LoRA tensors."""
    tensors = {}
    for i in range(n_layers):
        tensors[f"lora.{i}.up.weight"] = torch.zeros((32, 32))
        tensors[f"lora.{i}.down.weight"] = torch.zeros((32, 32))
    return tensors

def test_pt_crypto_save_cpu(benchmark, crypto_config):
    """Benchmark saving GPT-2 with encryption on CPU."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        benchmark(save_file, weights, f.name, config=crypto_config)
    os.unlink(f.name)

def test_pt_crypto_load_cpu(benchmark, crypto_config):
    """Benchmark loading GPT-2 with encryption on CPU."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name)
    os.unlink(f.name)

def test_pt_crypto_save_cpu_small(benchmark, crypto_config):
    """Benchmark saving LoRA with encryption on CPU."""
    weights = create_lora(500)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        benchmark(save_file, weights, f.name, config=crypto_config)
    os.unlink(f.name)

def test_pt_crypto_load_cpu_small(benchmark, crypto_config):
    """Benchmark loading LoRA with encryption on CPU."""
    weights = create_lora(500)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name)
    os.unlink(f.name)

@pytest.mark.skipif(not torch.cuda.is_available(), reason="requires cuda")
def test_pt_crypto_load_gpu(benchmark, crypto_config):
    """Benchmark loading GPT-2 with encryption on GPU."""
    weights = create_gpt2(12)
    with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
        save_file(weights, f.name, config=crypto_config)
        benchmark(load_file, f.name, device="cuda:0")
    os.unlink(f.name)

