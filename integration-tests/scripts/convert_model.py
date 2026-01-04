#!/usr/bin/env python3
"""
Convert a safetensors model to an encrypted cryptotensors model.

This script:
1. Downloads a model from HuggingFace (or uses a local path)
2. Encrypts specified tensors (or all tensors by default)
3. Saves the encrypted model

Usage:
    python convert_model.py --model Qwen/Qwen2-0.5B --output ./models/Qwen2-0.5B-Enc
    python convert_model.py --model ./local_model --output ./encrypted_model --encrypt-all
"""

import argparse
import json
import os
import random
import shutil
import sys
from pathlib import Path

# Ensure we can import from utils directory
# Try multiple possible paths (for local and Docker environments)
utils_paths = [
    Path("/app/utils"),  # Docker: /app/utils (copied directly)
    Path(__file__).parent.parent / "utils",  # Local: integration-tests/utils
    Path("/app/src/integration-tests/utils"),  # Docker: /app/src/integration-tests/utils
    Path("/app/integration-tests/utils"),  # Alternative Docker path
]

for utils_path in utils_paths:
    if utils_path.exists():
        sys.path.insert(0, str(utils_path))
        break

from write_jwk import generate_test_keys


def find_safetensors_files(model_dir: Path) -> list[Path]:
    """Find all safetensors files in a model directory."""
    files = list(model_dir.glob("*.safetensors"))
    if not files:
        # Check for sharded models
        files = list(model_dir.glob("model-*.safetensors"))
    return sorted(files)


def convert_model(
    model_path: str,
    output_path: str,
    encrypt_ratio: float = 0.5,
    encrypt_all: bool = False,
    key_file: str = None,
):
    """Convert a safetensors model to encrypted cryptotensors format.
    
    Args:
        model_path: Path to model directory or HuggingFace model ID
        output_path: Output directory for encrypted model
        encrypt_ratio: Ratio of tensors to encrypt (0.0-1.0)
        encrypt_all: If True, encrypt all tensors
        key_file: Path to JWK key file (uses default test keys if not provided)
    """
    from cryptotensors.torch import load_file, save_file
    from huggingface_hub import snapshot_download
    
    # Download model if it's a HuggingFace ID
    if not os.path.exists(model_path):
        print(f"Downloading model from HuggingFace: {model_path}")
        model_dir = Path(snapshot_download(model_path))
    else:
        model_dir = Path(model_path)
    
    print(f"Model directory: {model_dir}")
    
    # Create output directory
    output_dir = Path(output_path)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Copy non-safetensors files (config, tokenizer, etc.)
    for f in model_dir.iterdir():
        if f.is_file() and not f.name.endswith(".safetensors"):
            dest = output_dir / f.name
            if not dest.exists():
                shutil.copy2(f, dest)
                print(f"Copied: {f.name}")
    
    # Find safetensors files
    safetensors_files = find_safetensors_files(model_dir)
    if not safetensors_files:
        raise FileNotFoundError(f"No safetensors files found in {model_dir}")
    
    print(f"Found {len(safetensors_files)} safetensors file(s)")
    
    # Generate or load keys
    if key_file and os.path.exists(key_file):
        with open(key_file) as f:
            jwk = json.load(f)
            keys = jwk["keys"]
            enc_key = next((k for k in keys if k.get("kty") == "oct"), None)
            sign_key = next((k for k in keys if k.get("kty") == "okp"), None)
    else:
        enc_key, sign_key = generate_test_keys()
        # Add jku pointing to the key file
        # Get jku from environment variable or use default
        jku = os.environ.get(
            "CRYPTOTENSOR_KEY_JKU", 
            "file:///app/data/key.jwk"
        )
        # Ensure it has file:// prefix
        if not jku.startswith("file://"):
            jku = f"file://{jku}"
        enc_key["jku"] = jku
        sign_key["jku"] = jku
    
    # Process each safetensors file
    for sf_file in safetensors_files:
        print(f"\nProcessing: {sf_file.name}")
        
        # Load tensors
        tensors = load_file(str(sf_file))
        tensor_names = list(tensors.keys())
        print(f"  Total tensors: {len(tensor_names)}")
        
        # Select tensors to encrypt
        if encrypt_all:
            tensors_to_encrypt = tensor_names
        else:
            num_to_encrypt = max(1, int(len(tensor_names) * encrypt_ratio))
            tensors_to_encrypt = random.sample(tensor_names, num_to_encrypt)
        
        print(f"  Encrypting {len(tensors_to_encrypt)} tensors:")
        for name in tensors_to_encrypt[:5]:  # Show first 5
            print(f"    - {name}")
        if len(tensors_to_encrypt) > 5:
            print(f"    ... and {len(tensors_to_encrypt) - 5} more")
        
        # Create config
        config = {
            "tensors": tensors_to_encrypt,
            "enc_key": enc_key,
            "sign_key": sign_key,
        }
        
        # Metadata to preserve framework info
        metadata = {"format": "pt"}
        
        # Save encrypted model
        output_file = output_dir / sf_file.name
        save_file(tensors, str(output_file), config=config, metadata=metadata)
        print(f"  Saved: {output_file}")
    
    print(f"\n✅ Encrypted model saved to: {output_dir}")
    return str(output_dir)


def main():
    parser = argparse.ArgumentParser(
        description="Convert safetensors model to encrypted cryptotensors format"
    )
    parser.add_argument(
        "--model", "-m",
        required=True,
        help="HuggingFace model ID or local path"
    )
    parser.add_argument(
        "--output", "-o",
        required=True,
        help="Output directory for encrypted model"
    )
    parser.add_argument(
        "--encrypt-ratio",
        type=float,
        default=0.1,
        help="Ratio of tensors to encrypt (0.0-1.0, default: 0.1)"
    )
    parser.add_argument(
        "--encrypt-all",
        action="store_true",
        help="Encrypt all tensors"
    )
    parser.add_argument(
        "--key-file",
        help="Path to JWK key file (uses test keys if not provided)"
    )
    
    args = parser.parse_args()
    
    try:
        convert_model(
            model_path=args.model,
            output_path=args.output,
            encrypt_ratio=args.encrypt_ratio,
            encrypt_all=args.encrypt_all,
            key_file=args.key_file,
        )
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

