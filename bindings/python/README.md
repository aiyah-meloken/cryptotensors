# CryptoTensors Python Package

CryptoTensors is a secure tensor file format that extends [safetensors](https://github.com/huggingface/safetensors) with encryption, signing, and access control capabilities while maintaining full backward compatibility.

## Installation

```bash
pip install cryptotensors
```

### Transparent Loading of Encrypted Models (Compatible Package)

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

After installation, your existing code using `from safetensors import ...` will transparently support both regular safetensors files and encrypted CryptoTensors files without any code changes. The compatible package uses the `safetensors` namespace but internally depends on `cryptotensors`, enabling seamless encryption support.

## Usage

### Basic Usage (Safetensors Compatible)

CryptoTensors is fully backward compatible with safetensors. You can use it as a drop-in replacement:

#### Numpy

```python
from cryptotensors.numpy import save_file, load_file
import numpy as np

tensors = {
   "a": np.zeros((2, 2)),
   "b": np.zeros((2, 3), dtype=np.uint8)
}

save_file(tensors, "./model.safetensors")

# Now loading
loaded = load_file("./model.safetensors")
```

### Torch

```python
from cryptotensors.torch import save_file, load_file
import torch

tensors = {
   "a": torch.zeros((2, 2)),
   "b": torch.zeros((2, 3), dtype=torch.uint8)
}

save_file(tensors, "./model.safetensors")

# Now loading
loaded = load_file("./model.safetensors")
```

### Encryption Usage
CryptoTensors adds encryption and signing capabilities:

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

## Features

- 🔐 **Encryption**: AES-GCM and ChaCha20-Poly1305 encryption for tensor data
- ✍️ **Signing**: Ed25519 signature verification for file integrity  
- 🔑 **Key Management**: Flexible key provider system (environment variables, files, programmatic)
- 🛡️ **Access Policy**: Rego-based policy engine for fine-grained access control
- 🔄 **Backward Compatible**: Works seamlessly with existing safetensors code

## Developing

```bash
# Install in development mode
pip install -e .[dev]
```

This should be enough to install this library locally for development.

## Testing

```bash
# Install with testing dependencies
pip install -e .[dev]

# Run tests
pytest -sv tests/
```

## Citation

This implementation is based on the following research paper:

> Zhu, H., Li, S., Li, Q., & Jin, Y. (2025). CryptoTensors: A Light-Weight Large Language Model File Format for Highly-Secure Model Distribution. arXiv:2512.04580. [https://arxiv.org/pdf/2512.04580](https://arxiv.org/pdf/2512.04580)

## License

Apache-2.0 License
