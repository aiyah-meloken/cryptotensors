#!/usr/bin/env python3
"""
Convert a model to encrypted format and save it.

This script:
1. Downloads a model from HuggingFace
2. Converts it to encrypted format
3. Saves the encrypted model to a persistent location

Usage:
    python convert_and_save.py --model Qwen/Qwen2-0.5B --output /app/models/encrypted
"""

import argparse
import os
import sys
from pathlib import Path

# Add parent directories to path
sys.path.insert(0, str(Path(__file__).parent))

# Add utils directory to path
utils_paths = [
    Path("/app/utils"),
    Path(__file__).parent.parent / "utils",
    Path("/app/src/integration-tests/utils"),
    Path("/app/integration-tests/utils"),
]

for utils_path in utils_paths:
    if utils_path.exists():
        sys.path.insert(0, str(utils_path))
        break

from convert_model import convert_model


def main():
    parser = argparse.ArgumentParser(
        description="Convert model to encrypted format and save"
    )
    parser.add_argument(
        "--model", "-m",
        default="Qwen/Qwen2-0.5B",
        help="HuggingFace model ID to convert (default: Qwen/Qwen2-0.5B)"
    )
    parser.add_argument(
        "--output", "-o",
        default="/app/models/encrypted",
        help="Output directory for encrypted model (default: /app/models/encrypted)"
    )
    parser.add_argument(
        "--encrypt-all",
        action="store_true",
        help="Encrypt all tensors (default: 30%%)"
    )
    parser.add_argument(
        "--encrypt-ratio",
        type=float,
        default=0.3,
        help="Ratio of tensors to encrypt (0.0-1.0, default: 0.3)"
    )
    
    args = parser.parse_args()
    
    print("=" * 60)
    print("CryptoTensors Model Conversion")
    print("=" * 60)
    print(f"Model: {args.model}")
    print(f"Output: {args.output}")
    print(f"Encrypt all: {args.encrypt_all}")
    if not args.encrypt_all:
        print(f"Encrypt ratio: {args.encrypt_ratio}")
    print()
    
    try:
        output_path = convert_model(
            model_path=args.model,
            output_path=args.output,
            encrypt_ratio=args.encrypt_ratio,
            encrypt_all=args.encrypt_all,
        )
        
        print("\n" + "=" * 60)
        print(f"✅ Model conversion completed successfully!")
        print(f"   Encrypted model saved to: {output_path}")
        print("=" * 60)
        
        return True
        
    except Exception as e:
        print(f"\n❌ Failed to convert model: {e}")
        import traceback
        traceback.print_exc()
        return False


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)

