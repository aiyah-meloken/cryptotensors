# CryptoTensors Integration Tests

This directory contains **end-to-end integration tests** for the CryptoTensors library. These tests download real models from HuggingFace, encrypt them, and run inference to verify that CryptoTensors works correctly with popular ML frameworks.

## 🎯 What These Tests Do

The integration tests follow this workflow:

1. **Setup**: Uninstall original `safetensors`, install `cryptotensors` and `safetensors` (compatible adapter)
2. **Convert**: Download a model from HuggingFace and convert it to encrypted format
3. **Save**: Save the encrypted model to disk
4. **Load**: Load the encrypted model using Transformers (FileKeyProvider automatically loads keys)
5. **Compare**: Run inference on both original and encrypted models
6. **Verify**: Compare outputs to ensure encryption is transparent (identical results)

## 📁 Directory Structure

```
integration-tests/
├── README.md                        # This file
├── run_tests.sh                     # Main test runner script
├── Dockerfile.transformers          # Docker image for Transformers tests (CPU)
├── utils/
│   ├── write_jwk.py                 # Generate JWK key files
│   └── print_metadata.py            # Print safetensors/cryptotensors metadata
└── scripts/
    ├── convert_model.py             # Convert model to encrypted format
    ├── convert_and_save.py          # Convert and save encrypted model
    ├── load_and_test.py             # Load encrypted model and test inference
    └── run_full_test.py             # Full integration test
```

## 🚀 Quick Start

### Prerequisites

- Docker installed and running
- ~10GB disk space for Docker images

### Run Full Integration Test (Recommended)

This runs the complete flow: convert → save → load → compare

```bash
cd integration-tests
chmod +x run_tests.sh
./run_tests.sh
```

### Run Individual Steps

You can also run individual steps separately:

#### Step 1: Convert and Save Model

```bash
docker run --rm cryptotensors-test-transformers \
    python convert_and_save.py --model Qwen/Qwen2-0.5B --output /app/models/encrypted
```

#### Step 2: Load and Test Encrypted Model

```bash
docker run --rm cryptotensors-test-transformers \
    python load_and_test.py --model Qwen/Qwen2-0.5B --encrypted /app/models/encrypted
```

### Build Only (No Test Execution)

```bash
./run_tests.sh --build-only
```

### Use a Different Model

```bash
./run_tests.sh --model Qwen/Qwen2-1.5B
```

## 🔧 Test Options

| Option | Description |
|--------|-------------|
| `--build-only` | Only build Docker image, don't run tests |
| `--no-cache` | Build Docker image without cache |
| `--china-mirror` | Use China mirrors for apt/pip/cargo (or `--cn`) |
| `--model MODEL` | Specify HuggingFace model ID |
| `-h, --help` | Show help message |

### Using China Mirrors (中国镜像)

If you're in China and experiencing slow downloads, use the `--china-mirror` flag:

```bash
./run_tests.sh --china-mirror
# or
./run_tests.sh --cn
```

This will configure:
- APT to use Aliyun mirror
- pip to use Tsinghua mirror  
- Cargo to use USTC mirror

## 📋 Test Details

### Full Integration Test (`run_full_test.py`)

This test runs the complete workflow:

1. **Convert**: Downloads a model and converts it to encrypted format
2. **Save**: Saves the encrypted model to disk
3. **Load**: Loads the encrypted model using Transformers
4. **Compare**: Runs inference on both original and encrypted models
5. **Verify**: Compares outputs to ensure encryption is transparent

### Individual Test Scripts

#### `convert_and_save.py`

Converts a model to encrypted format and saves it:

```bash
python convert_and_save.py --model Qwen/Qwen2-0.5B --output /app/models/encrypted
```

#### `load_and_test.py`

Loads an encrypted model and compares with original:

```bash
python load_and_test.py --model Qwen/Qwen2-0.5B --encrypted /app/models/encrypted
```


**Expected output:**
```
============================================================
CryptoTensors + Transformers Integration Test
============================================================

📦 Step 1: Converting model to encrypted format
   Model: Qwen/Qwen2-0.5B
   ...

🔐 Step 2: Loading encrypted model with Transformers
   Loading via pipeline...

🚀 Step 3: Running inference
   Input: What is 2+2?
   Output: The answer is 4.

✅ Step 4: Verification
   - Model loaded successfully from encrypted safetensors
   - Inference completed without errors
   - CryptoTensors decryption is working correctly

============================================================
✅ Integration test PASSED
============================================================
```

## 🔑 Key Management

The tests use pre-generated test keys stored in `/app/data/key.jwk` inside the container. The keys are:

- **Encryption key:** AES-256-GCM
- **Signing key:** Ed25519

To use custom keys:

```bash
# Generate new keys
python utils/write_jwk.py -o my_keys.jwk

# Mount into container
docker run --rm \
    -v $(pwd)/my_keys.jwk:/app/data/key.jwk \
    cryptotensors-test-transformers \
    python run_full_test.py
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clean Docker cache and rebuild
docker system prune -a
./run_tests.sh --no-cache
```

### Out of Memory

Try a smaller model:

```bash
./run_tests.sh --model Qwen/Qwen2-0.5B
```

### Key Loading Errors

Check that the JWK file exists and is valid:

```bash
docker run --rm cryptotensors-test-transformers \
    cat /app/data/key.jwk
```

## ⚠️ Notes

- These tests run automatically in CI/CD via GitHub Actions (`.github/workflows/integration-tests.yml`)
- Each test run creates a **fresh container** for isolation
- Test containers are automatically **removed** after completion
- Model downloads are cached in the Docker image to speed up repeated runs

## 📝 Adding New Tests

1. Create a new test script in `scripts/`
2. If needed, create a new Dockerfile with specific dependencies
3. Update `run_tests.sh` to support the new test type
4. Test locally before committing

Example:

```python
#!/usr/bin/env python3
# scripts/run_my_test.py

from convert_model import convert_model

def run_test():
    # Your test logic here
    pass

if __name__ == "__main__":
    run_test()
```
