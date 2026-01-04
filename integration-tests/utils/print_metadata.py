#!/usr/bin/env python3
"""
Print metadata from safetensors/cryptotensors files.

This tool reads the header of a safetensors file and displays
the metadata in a human-readable format, including crypto-related
fields like encryption info, signatures, and policies.
"""

import json
import struct
import sys
import argparse


def try_decode(val):
    """Try to decode a JSON string value."""
    if isinstance(val, str):
        try:
            return json.loads(val)
        except Exception:
            return val
    return val


def print_crypto_metadata(metadata: dict, indent: int = 4):
    """Print crypto-related metadata fields in a formatted way."""
    prefix = " " * indent
    
    # Print __crypto_keys__
    if "__crypto_keys__" in metadata:
        value = try_decode(metadata["__crypto_keys__"])
        if isinstance(value, dict):
            print(f"{prefix}__crypto_keys__:")
            for k, v in value.items():
                print(f"{prefix}    {k}: {v}")
        else:
            print(f"{prefix}__crypto_keys__: {value}")
    
    # Print __encryption__
    if "__encryption__" in metadata:
        value = try_decode(metadata["__encryption__"])
        if isinstance(value, dict):
            print(f"{prefix}__encryption__:")
            for k, v in value.items():
                v_decoded = try_decode(v)
                print(f"{prefix}    {k}:")
                formatted = json.dumps(v_decoded, ensure_ascii=False, indent=4)
                for line in formatted.split("\n"):
                    print(f"{prefix}        {line}")
        else:
            print(f"{prefix}__encryption__: {value}")
    
    # Print __policy__
    if "__policy__" in metadata:
        value = try_decode(metadata["__policy__"])
        if isinstance(value, dict):
            print(f"{prefix}__policy__:")
            for k, v in value.items():
                print(f"{prefix}    {k}: {repr(v)}")
        else:
            print(f"{prefix}__policy__: {value}")
    
    # Print __signature__
    if "__signature__" in metadata:
        sig = metadata["__signature__"]
        # Truncate long signatures for readability
        if len(sig) > 64:
            print(f"{prefix}__signature__: {sig[:32]}...{sig[-16:]}")
        else:
            print(f"{prefix}__signature__: {sig}")
    
    # Print other metadata keys
    crypto_keys = {"__crypto_keys__", "__encryption__", "__policy__", "__signature__"}
    for k, v in metadata.items():
        if k not in crypto_keys:
            print(f"{prefix}{k}: {v}")


def read_safetensors_header(filename: str) -> dict:
    """Read and parse the header from a safetensors file.
    
    Args:
        filename: Path to the safetensors file
        
    Returns:
        Parsed header dictionary
    """
    with open(filename, "rb") as f:
        # The first 8 bytes are the header length (little-endian uint64)
        header_len_bytes = f.read(8)
        if len(header_len_bytes) < 8:
            raise ValueError("File too small to be a valid safetensors file")
        
        header_len = struct.unpack("<Q", header_len_bytes)[0]
        
        # Sanity check
        if header_len > 100_000_000:  # 100MB limit
            raise ValueError(f"Header too large: {header_len} bytes")
        
        # Read the header content
        header_bytes = f.read(header_len)
        if len(header_bytes) < header_len:
            raise ValueError("File truncated, could not read full header")
        
        return json.loads(header_bytes.decode("utf-8"))


def print_header(filename: str, show_tensors: bool = False, json_output: bool = False):
    """Print the header information from a safetensors file.
    
    Args:
        filename: Path to the safetensors file
        show_tensors: If True, also show tensor information
        json_output: If True, output as JSON
    """
    header = read_safetensors_header(filename)
    
    if json_output:
        print(json.dumps(header, indent=2, ensure_ascii=False))
        return
    
    print(f"File: {filename}")
    print("=" * 60)
    
    # Check for metadata
    if "__metadata__" in header:
        print('"__metadata__": {')
        print_crypto_metadata(header["__metadata__"])
        print("}")
    else:
        print("No metadata found")
    
    # Optionally show tensor info
    if show_tensors:
        print("\nTensors:")
        print("-" * 40)
        tensor_keys = [k for k in header.keys() if k != "__metadata__"]
        for name in sorted(tensor_keys):
            info = header[name]
            dtype = info.get("dtype", "?")
            shape = info.get("shape", [])
            offsets = info.get("data_offsets", [0, 0])
            size = offsets[1] - offsets[0]
            print(f"  {name}: dtype={dtype}, shape={shape}, size={size} bytes")


def main():
    parser = argparse.ArgumentParser(
        description="Print metadata from safetensors/cryptotensors files"
    )
    parser.add_argument(
        "filename",
        help="Path to the safetensors file"
    )
    parser.add_argument(
        "-t", "--tensors",
        action="store_true",
        help="Also show tensor information"
    )
    parser.add_argument(
        "-j", "--json",
        action="store_true",
        help="Output as JSON"
    )
    
    args = parser.parse_args()
    
    try:
        print_header(args.filename, show_tensors=args.tensors, json_output=args.json)
    except FileNotFoundError:
        print(f"Error: File not found: {args.filename}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

