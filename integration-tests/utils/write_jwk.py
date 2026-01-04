#!/usr/bin/env python3
"""
Generate JWK (JSON Web Key) files for CryptoTensors testing.

This script creates key files with both encryption and signing keys
that can be used for testing cryptotensor operations.
"""

import json
import os
import argparse


def generate_test_keys():
    """Generate a set of test keys for encryption and signing."""
    enc_key = {
        "kty": "oct",
        "alg": "aes256gcm",
        "k": "L+xl38kCEteXk+6Tm1mzu5JvFriVibzAsgpYX2WmAgA=",
        "kid": "test-enc-key",
    }
    sign_key = {
        "kty": "okp",
        "alg": "ed25519",
        "d": "uTKTjQL6pX1Tqb7Hpor4A1s+TdgHReQEITZWWAf7DIc=",
        "x": "xkqFcGjXCBMk75q0259N1ggRJsqc+FTAiXMuKX72fd8=",
        "kid": "test-sign-key",
    }
    return enc_key, sign_key


def write_jwk_file(path: str, enc_key: dict = None, sign_key: dict = None):
    """Write JWK key set to a file.
    
    Args:
        path: Output file path
        enc_key: Encryption key dictionary (optional, will generate if None)
        sign_key: Signing key dictionary (optional, will generate if None)
    """
    if enc_key is None or sign_key is None:
        enc_key, sign_key = generate_test_keys()
    
    keys = [enc_key, sign_key]
    jwk = {"keys": keys}
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else ".", exist_ok=True)
    
    with open(path, "w") as f:
        json.dump(jwk, f, indent=2)
    
    print(f"JWK file written to: {path}")
    return path


def get_keys_with_jku(path: str):
    """Get keys with JKU (JWK Set URL) field set.
    
    Args:
        path: Path to the JWK file
        
    Returns:
        Tuple of (enc_key, sign_key) with jku field set
    """
    enc_key, sign_key = generate_test_keys()
    abs_path = os.path.abspath(path)
    jku = f"file://{abs_path}"
    enc_key["jku"] = jku
    sign_key["jku"] = jku
    return enc_key, sign_key


def main():
    parser = argparse.ArgumentParser(
        description="Generate JWK key files for CryptoTensors testing"
    )
    parser.add_argument(
        "-o", "--output",
        default="./key.jwk",
        help="Output file path (default: ./key.jwk)"
    )
    parser.add_argument(
        "--print-env",
        action="store_true",
        help="Print environment variable export command"
    )
    
    args = parser.parse_args()
    
    path = write_jwk_file(args.output)
    
    if args.print_env:
        abs_path = os.path.abspath(path)
        print(f"\nTo use this key file, set the environment variable:")
        print(f"export CRYPTOTENSOR_KEY_JKU=file://{abs_path}")


if __name__ == "__main__":
    main()

