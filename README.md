
# CryptoTensors

This repository implements **CryptoTensors**, an LLM file format for secure model distribution. This implementation extends [safetensors](https://github.com/huggingface/safetensors) with encryption, signing, and access control capabilities while maintaining full backward compatibility with safetensors.

**CryptoTensors** provides:
- 🔐 **Encryption**: AES-GCM and ChaCha20-Poly1305 encryption for tensor data
- ✍️ **Signing**: Ed25519 signature verification for file integrity  
- 🔑 **Key Management**: Flexible key provider system (environment variables, files, programmatic)
- 🛡️ **Access Policy**: Rego-based policy engine for fine-grained access control
- 🔄 **Transparent Integration**: Works seamlessly with transformers, vLLM, and other ML frameworks

This project is a derivative work based on [safetensors](https://github.com/huggingface/safetensors) by Hugging Face. See [NOTICE](NOTICE) for details.

> This implementation is based on the idea of the following research paper: [Zhu, H., Li, S., Li, Q., & Jin, Y. (2025). CryptoTensors: A Light-Weight Large Language Model File Format for Highly-Secure Model Distribution. arXiv:2512.04580.](https://arxiv.org/pdf/2512.04580)



# Installation
## Pip

You can install cryptotensors via the pip manager:

```bash
pip install cryptotensors
```

#### For backward compatibility

If you want to load encrypted CryptoTensors models without modifying your code, you can use the compatible package released on [GitHub Releases](https://github.com/aiyah-meloken/cryptotensors/releases):

```bash
# Uninstall the original safetensors package
pip uninstall safetensors

# Install the compatible package directly from GitHub release
# Replace {tag} with the release tag (e.g., v0.1.0)
pip install https://github.com/aiyah-meloken/cryptotensors/releases/download/{tag}/safetensors-0.7.0-py3-none-any.whl

# Example for v0.1.0:
# pip install https://github.com/aiyah-meloken/cryptotensors/releases/download/v0.1.0/safetensors-0.7.0-py3-none-any.whl
```

After installation, your existing code will transparently support both regular safetensors files and encrypted CryptoTensors files without any code changes. The compatible package uses the `safetensors` namespace but internally depends on `cryptotensors`, enabling seamless encryption support.

## From source

For the sources, you need Rust

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Make sure it's up to date and using stable channel
rustup update
git clone https://github.com/aiyah-meloken/cryptotensors
cd cryptotensors/bindings/python
pip install setuptools_rust
pip install -e .
```

# Getting started

## Basic Usage (Encryption and Decryption)

To encrypt tensors during serialization, you need to provide encryption and signing keys in the `config` parameter.

```python
import torch
from cryptotensors.torch import save_file, load_file

tensors = {
   "weight1": torch.zeros((1024, 1024)),
   "weight2": torch.zeros((1024, 1024))
}

# Encrypt and save
config = {
    "enc_key": enc_key,    # JWK format encryption key
    "sign_key": sign_key,  # JWK format signing key
}
save_file(tensors, "model.cryptotensors", config=config)

# Load encrypted file (keys retrieved from key provider)
tensors = load_file("model.cryptotensors")
```

See the [documentation](https://aiyah-meloken.github.io/cryptotensors/) for detailed guides on encryption, key management, and integration examples.

## Backward Compatibility (Safetensors Compatible)

You can use `cryptotensors` as a drop-in replacement for `safetensors` in most cases, where you can save and load unencrypted models as usual.

```python
import torch
from cryptotensors import safe_open
from cryptotensors.torch import save_file

tensors = {
   "weight1": torch.zeros((1024, 1024)),
   "weight2": torch.zeros((1024, 1024))
}
save_file(tensors, "model.safetensors")

tensors = {}
with safe_open("model.safetensors", framework="pt", device="cpu") as f:
   for key in f.keys():
       tensors[key] = f.get_tensor(key)
```


# Additional Information

## File Format

The file format is the same as the safetensors format, with the following additional fields:

- 8 bytes: `N`, an unsigned little-endian 64-bit integer, containing the size of the header
- N bytes: a JSON UTF-8 string representing the header.
  - The header data MUST begin with a `{` character (0x7B).
  - The header data MAY be trailing padded with whitespace (0x20).
  - The header is a dict like `{"TENSOR_NAME": {"dtype": "F16", "shape": [1, 16, 256], "data_offsets": [BEGIN, END]}, "NEXT_TENSOR_NAME": {...}, ...}`,
    - `data_offsets` point to the tensor data relative to the beginning of the byte buffer (i.e. not an absolute position in the file),
      with `BEGIN` as the starting offset and `END` as the one-past offset (so total tensor byte size = `END - BEGIN`).
  - A special key `__metadata__` is allowed to contain free form string-to-string map. Arbitrary JSON is not allowed, all values must be strings.
  - **Cryptotensors add the following fields to the `__metadata__` section**:
    - `__encryption__`: JSON string containing per-tensor encryption information (algorithm, nonce, encrytped data encryption key, etc.)
    - `__crypto_keys__`: JSON string containing key material information in the format `{"version": "1", "enc": {...}, "sign": {...}}`, where `enc` and `sign` are the metadata of the master decryption key and signing key respectively. No secrets are stored in this field, and the metadata is used to retrieve the keys from the key providers.
    - `__signature__`: Base64-encoded Ed25519 signature of the file header (excluding the signature itself) for integrity verification
    - `__policy__`: JSON string containing access control policy in Rego format
- Rest of the file: byte-buffer.

### Notes & Benefits

- Two stages of encryption: the entire header is encrypted using the master decryption key, and the tensor data is encrypted using the per-tensor encryption keys.

- Lazy decryption: Even with encryption enabled, tensor data is decrypted
  on-demand when accessed, maintaining the benefits of lazy loading while ensuring security.
  This allows loading large encrypted models without decrypting all tensors upfront, preserving
  memory efficiency and supporting distributed settings where only specific tensors are needed.

**Note: Unless otherwise specified, all other notes, features, and benefits of the cryptotensors format are the same as the [safetensors format](https://github.com/huggingface/safetensors#file-format).**

License: Apache-2.0
