#!/usr/bin/env python3
"""
Full integration test: Convert model -> Save -> Load -> Compare.

This script runs the complete test flow:
1. Convert model to encrypted format and save
2. Load encrypted model and run inference
3. Compare with original model to verify transparency

Usage:
    python run_full_test.py --model Qwen/Qwen2-0.5B
"""

import argparse
import os
import sys
import tempfile
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
from load_and_test import run_test


def main():
    parser = argparse.ArgumentParser(
        description="Run full integration test: convert -> save -> load -> compare"
    )
    parser.add_argument(
        "--model", "-m",
        default="Qwen/Qwen2-0.5B",
        help="HuggingFace model ID to test with (default: Qwen/Qwen2-0.5B)"
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
    parser.add_argument(
        "--save-path",
        default=None,
        help="Path to save encrypted model (default: temporary directory)"
    )
    
    args = parser.parse_args()
    
    print("=" * 60)
    print("CryptoTensors Full Integration Test")
    print("=" * 60)
    print(f"Model: {args.model}")
    print()
    
    # Determine save path
    if args.save_path:
        encrypted_model_path = args.save_path
        use_temp = False
    else:
        # Use temporary directory
        temp_dir = tempfile.mkdtemp(prefix="cryptotensors_test_")
        encrypted_model_path = os.path.join(temp_dir, "encrypted_model")
        use_temp = True
        print(f"Using temporary directory: {temp_dir}")
    
    try:
        # Step 1: Convert and save
        print("\n" + "=" * 60)
        print("Step 1: Convert model to encrypted format")
        print("=" * 60)
        
        output_path = convert_model(
            model_path=args.model,
            output_path=encrypted_model_path,
            encrypt_ratio=args.encrypt_ratio,
            encrypt_all=args.encrypt_all,
        )
        
        print(f"\n✅ Encrypted model saved to: {output_path}")
        
        # Step 2: Load and compare
        print("\n" + "=" * 60)
        print("Step 2: Load encrypted model and compare with original")
        print("=" * 60)
        
        success = run_test(
            model_id=args.model,
            encrypted_model_path=output_path,
        )
        
        if success:
            print("\n" + "=" * 60)
            print("✅ Full integration test PASSED")
            print("=" * 60)
        else:
            print("\n" + "=" * 60)
            print("❌ Full integration test FAILED")
            print("=" * 60)
        
        return success
        
    except Exception as e:
        print(f"\n❌ Test failed with error: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        # Cleanup temporary directory if used
        if use_temp and os.path.exists(temp_dir):
            import shutil
            try:
                shutil.rmtree(temp_dir)
            except:
                pass


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)

