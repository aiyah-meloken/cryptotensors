#!/usr/bin/env python3
"""
Load encrypted model and test inference, comparing with original model.

This script:
1. Loads the original model and runs inference
2. Loads the encrypted model and runs inference
3. Compares outputs to verify encryption is transparent

Usage:
    python load_and_test.py --model Qwen/Qwen2-0.5B --encrypted /app/models/encrypted
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


def run_test(model_id: str, encrypted_model_path: str, test_prompts: list = None):
    """Run comparison test between original and encrypted models.
    
    Args:
        model_id: HuggingFace model ID for original model
        encrypted_model_path: Path to encrypted model directory
        test_prompts: List of test prompts (default: predefined prompts)
    """
    from transformers import pipeline
    
    if test_prompts is None:
        test_prompts = [
            "What is 2+2?",
            "The capital of France is",
            "Hello, my name is",
        ]
    
    print("=" * 60)
    print("CryptoTensors Load and Test")
    print("=" * 60)
    print(f"Original model: {model_id}")
    print(f"Encrypted model: {encrypted_model_path}")
    print()
    
    # Step 1: Load original model and run inference
    print("📦 Step 1: Loading original model...")
    try:
        pipe_original = pipeline(
            "text-generation",
            model=model_id,
            device_map="cpu",
            torch_dtype="auto",
        )
        print("   ✓ Original model loaded")
    except Exception as e:
        print(f"   ❌ Failed to load original model: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    # Run inference on original model
    print("\n🚀 Running inference on original model...")
    original_outputs = {}
    for prompt in test_prompts:
        try:
            result = pipe_original(
                prompt,
                max_new_tokens=20,
                do_sample=False,
                return_full_text=False,
            )
            output = result[0]["generated_text"]
            original_outputs[prompt] = output
            print(f"   Prompt: {prompt!r}")
            print(f"   Output: {output!r}")
        except Exception as e:
            print(f"   ❌ Failed to run inference on prompt '{prompt}': {e}")
            return False
    
    # Cleanup original model to free memory
    del pipe_original
    
    # Step 2: Load encrypted model
    print("\n🔐 Step 2: Loading encrypted model...")
    print("   FileKeyProvider will automatically load keys from metadata jku field")
    
    if not os.path.exists(encrypted_model_path):
        print(f"   ❌ Encrypted model path does not exist: {encrypted_model_path}")
        return False
    
    try:
        pipe_encrypted = pipeline(
            "text-generation",
            model=encrypted_model_path,
            device_map="cpu",
            torch_dtype="auto",
        )
        print("   ✓ Encrypted model loaded successfully")
    except Exception as e:
        print(f"   ❌ Failed to load encrypted model: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    # Step 3: Run inference on encrypted model
    print("\n🚀 Step 3: Running inference on encrypted model...")
    encrypted_outputs = {}
    for prompt in test_prompts:
        try:
            result = pipe_encrypted(
                prompt,
                max_new_tokens=20,
                do_sample=False,
                return_full_text=False,
            )
            output = result[0]["generated_text"]
            encrypted_outputs[prompt] = output
            print(f"   Prompt: {prompt!r}")
            print(f"   Output: {output!r}")
        except Exception as e:
            print(f"   ❌ Failed to run inference on prompt '{prompt}': {e}")
            import traceback
            traceback.print_exc()
            return False
    
    # Step 4: Compare outputs
    print("\n📊 Step 4: Comparing outputs...")
    all_match = True
    
    for prompt in test_prompts:
        orig = original_outputs.get(prompt, "")
        encr = encrypted_outputs.get(prompt, "")
        
        print(f"\n   Prompt: {prompt!r}")
        print(f"   Original:  {repr(orig)}")
        print(f"   Encrypted: {repr(encr)}")
        
        if orig == encr:
            print(f"   ✓ Match!")
        else:
            print(f"   ❌ Mismatch!")
            all_match = False
    
    # Final result
    print("\n" + "=" * 60)
    if all_match:
        print("✅ All outputs match! Encryption is transparent.")
        print("   - Encrypted model produces identical output to original")
        print("   - CryptoTensors decryption is working correctly")
    else:
        print("❌ Outputs differ! This may indicate an issue.")
        print("   - Some prompts produced different outputs")
        print("   - Please check the encryption/decryption process")
    print("=" * 60)
    
    return all_match


def main():
    parser = argparse.ArgumentParser(
        description="Load encrypted model and test inference"
    )
    parser.add_argument(
        "--model", "-m",
        default="Qwen/Qwen2-0.5B",
        help="HuggingFace model ID for original model (default: Qwen/Qwen2-0.5B)"
    )
    parser.add_argument(
        "--encrypted", "-e",
        default="/app/models/encrypted",
        help="Path to encrypted model directory (default: /app/models/encrypted)"
    )
    parser.add_argument(
        "--prompts",
        nargs="+",
        help="Custom test prompts (default: predefined prompts)"
    )
    
    args = parser.parse_args()
    
    success = run_test(
        model_id=args.model,
        encrypted_model_path=args.encrypted,
        test_prompts=args.prompts,
    )
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()

