
# CryptoTensors

## About

This repository implements **CryptoTensors**, a secure tensor file format based on the ideas presented in the research paper "CryptoTensors: A Light-Weight Large Language Model File Format for Highly-Secure Model Distribution" (Zhu et al., 2025). This implementation extends [safetensors](https://github.com/huggingface/safetensors) with encryption, signing, and access control capabilities while maintaining full backward compatibility with safetensors.

**CryptoTensors** provides:
- 🔐 **Encryption**: AES-GCM and ChaCha20-Poly1305 encryption for tensor data
- ✍️ **Signing**: Ed25519 signature verification for file integrity  
- 🔑 **Key Management**: Flexible key provider system (environment variables, files, programmatic)
- 🛡️ **Access Policy**: Rego-based policy engine for fine-grained access control
- 🔄 **Transparent Integration**: Works seamlessly with transformers, vLLM, and other ML frameworks

This project is a derivative work based on safetensors by Hugging Face. See [NOTICE](NOTICE) for details.

### Citation

This implementation is based on the following research paper:

> Zhu, H., Li, S., Li, Q., & Jin, Y. (2025). CryptoTensors: A Light-Weight Large Language Model File Format for Highly-Secure Model Distribution. arXiv:2512.04580. [https://arxiv.org/pdf/2512.04580](https://arxiv.org/pdf/2512.04580)

## Safetensors

Safetensors is a new simple format for storing tensors
safely (as opposed to pickle) and that is still fast (zero-copy).

### Installation
#### Pip

You can install cryptotensors via the pip manager:

```bash
pip install cryptotensors
```

For backward compatibility, you can also install the `safetensors` adapter package:

```bash
pip install safetensors  # This installs cryptotensors under the safetensors namespace
```

#### From source

For the sources, you need Rust

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Make sure it's up to date and using stable channel
rustup update
git clone <repository-url>
cd open-cryptotensors/bindings/python
pip install setuptools_rust
pip install -e .
```

### Getting started

#### Basic Usage (Safetensors Compatible)

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

#### Encryption Usage (CryptoTensors)

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

See the [documentation](https://your-username.github.io/open-cryptotensors/) for detailed guides on encryption, key management, and integration examples.

**Note**: CryptoTensors is fully backward compatible with safetensors. You can use `cryptotensors` as a drop-in replacement for `safetensors` in most cases.


### Format

- 8 bytes: `N`, an unsigned little-endian 64-bit integer, containing the size of the header
- N bytes: a JSON UTF-8 string representing the header.
  - The header data MUST begin with a `{` character (0x7B).
  - The header data MAY be trailing padded with whitespace (0x20).
  - The header is a dict like `{"TENSOR_NAME": {"dtype": "F16", "shape": [1, 16, 256], "data_offsets": [BEGIN, END]}, "NEXT_TENSOR_NAME": {...}, ...}`,
    - `data_offsets` point to the tensor data relative to the beginning of the byte buffer (i.e. not an absolute position in the file),
      with `BEGIN` as the starting offset and `END` as the one-past offset (so total tensor byte size = `END - BEGIN`).
  - A special key `__metadata__` is allowed to contain free form string-to-string map. Arbitrary JSON is not allowed, all values must be strings.
- Rest of the file: byte-buffer.

Notes:
 - Duplicate keys are disallowed. Not all parsers may respect this.
 - In general the subset of JSON is implicitly decided by `serde_json` for
   this library. Anything obscure might be modified at a later time, that odd ways
   to represent integer, newlines and escapes in utf-8 strings. This would only
   be done for safety concerns
 - Tensor values are not checked against, in particular NaN and +/-Inf could
   be in the file
 - Empty tensors (tensors with 1 dimension being 0) are allowed.
   They are not storing any data in the databuffer, yet retaining size in the header.
   They don't really bring a lot of values but are accepted since they are valid tensors
   from traditional tensor libraries perspective (torch, tensorflow, numpy, ..).
 - 0-rank Tensors (tensors with shape `[]`) are allowed, they are merely a scalar.
 - The byte buffer needs to be entirely indexed, and cannot contain holes. This prevents
   the creation of polyglot files.
 - Endianness: Little-endian.
   moment.
 - Order: 'C' or row-major.
 - Notes: Some smaller than 1 byte dtypes appeared, which make alignment tricky. Non traditional APIs might be required for those.


### Yet another format ?

The main rationale for this crate is to remove the need to use
`pickle` on `PyTorch` which is used by default.
There are other formats out there used by machine learning and more general
formats.


Let's take a look at alternatives and why this format is deemed interesting.
This is my very personal and probably biased view:

| Format                  | Safe | Zero-copy | Lazy loading | No file size limit | Layout control | Flexibility | Bfloat16/Fp8
| ----------------------- | --- | --- | --- | --- | --- | --- | --- |
| pickle (PyTorch)        | ✗ | ✗ | ✗ | 🗸 | ✗ | 🗸 | 🗸 |
| H5 (Tensorflow)         | 🗸 | ✗ | 🗸 | 🗸 | ~ | ~ | ✗ |
| SavedModel (Tensorflow) | 🗸 | ✗ | ✗ | 🗸 | 🗸 | ✗ | 🗸 |
| MsgPack (flax)          | 🗸 | 🗸 | ✗ | 🗸 | ✗ | ✗ | 🗸 |
| Protobuf (ONNX)         | 🗸 | ✗ | ✗ | ✗ | ✗ | ✗ | 🗸 |
| Cap'n'Proto             | 🗸 | 🗸 | ~ | 🗸 | 🗸 | ~ | ✗ |
| Arrow                   | ? | ? | ? | ? | ? | ? | ✗ |
| Numpy (npy,npz)         | 🗸 | ? | ? | ✗ | 🗸 | ✗ | ✗ |
| pdparams (Paddle)       | ✗ | ✗ | ✗ | 🗸 | ✗ | 🗸 | 🗸 |
| SafeTensors             | 🗸 | 🗸 | 🗸 | 🗸 | 🗸 | ✗ | 🗸 |

- Safe: Can I use a file randomly downloaded and expect not to run arbitrary code ?
- Zero-copy: Does reading the file require more memory than the original file ?
- Lazy loading: Can I inspect the file without loading everything ? And loading only
  some tensors in it without scanning the whole file (distributed setting) ?
- Layout control: Lazy loading, is not necessarily enough since if the information about tensors is spread out in your file, then even if the information is lazily accessible you might have to access most of your file to read the available tensors (incurring many DISK -> RAM copies). Controlling the layout to keep fast access to single tensors is important.
- No file size limit: Is there a limit to the file size ?
- Flexibility: Can I save custom code in the format and be able to use it later with zero extra code ? (~ means we can store more than pure tensors, but no custom code)
- Bfloat16/Fp8: Does the format support native bfloat16/fp8 (meaning no weird workarounds are
  necessary)? This is becoming increasingly important in the ML world.


### Main oppositions

- Pickle: Unsafe, runs arbitrary code
- H5: Apparently now discouraged for TF/Keras. Seems like a great fit otherwise actually. Some classic use after free issues: <https://www.cvedetails.com/vulnerability-list/vendor_id-15991/product_id-35054/Hdfgroup-Hdf5.html>. On a very different level than pickle security-wise. Also 210k lines of code vs ~400 lines for this lib currently.
- SavedModel: Tensorflow specific (it contains TF graph information).
- MsgPack: No layout control to enable lazy loading (important for loading specific parts in distributed setting)
- Protobuf: Hard 2Go max file size limit
- Cap'n'proto: Float16 support is not present [link](https://capnproto.org/language.html#built-in-types) so using a manual wrapper over a byte-buffer would be necessary. Layout control seems possible but not trivial as buffers have limitations [link](https://stackoverflow.com/questions/48458839/capnproto-maximum-filesize).
- Numpy (npz): No `bfloat16` support. Vulnerable to zip bombs (DOS). Not zero-copy.
- Arrow: No `bfloat16` support.

### Notes

- Zero-copy: No format is really zero-copy in ML, it needs to go from disk to RAM/GPU RAM (that takes time). On CPU, if the file is already in cache, then it can
  truly be zero-copy, whereas on GPU there is not such disk cache, so a copy is always required
  but you can bypass allocating all the tensors on CPU at any given point.
  SafeTensors is not zero-copy for the header. The choice of JSON is pretty arbitrary, but since deserialization is <<< of the time required to load the actual tensor data and is readable I went that way, (also space is <<< to the tensor data).

- Endianness: Little-endian. This can be modified later, but it feels really unnecessary at the
  moment.
- Order: 'C' or row-major. This seems to have won. We can add that information later if needed.
- Stride: No striding, all tensors need to be packed before being serialized. I have yet to see a case where it seems useful to have a strided tensor stored in serialized format.
 - Sub 1 bytes dtypes: Dtypes can now have lower than 1 byte size, this makes alignment&adressing tricky. For now, the library will simply error out whenever an operation triggers an non aligned read. Trickier API may be created later for those non standard ops. 

### Benefits

Since we can invent a new format we can propose additional benefits:

- Prevent DOS attacks: We can craft the format in such a way that it's almost
  impossible to use malicious files to DOS attack a user. Currently, there's a limit
  on the size of the header of 100MB to prevent parsing extremely large JSON.
  Also when reading the file, there's a guarantee that addresses in the file
  do not overlap in any way, meaning when you're loading a file you should never
  exceed the size of the file in memory

- Faster load: PyTorch seems to be the fastest file to load out in the major
  ML formats. However, it does seem to have an extra copy on CPU, which we
  can bypass in this lib by using `torch.UntypedStorage.from_file`.
  Currently, CPU loading times are extremely fast with this lib compared to pickle.
  GPU loading times are as fast or faster than PyTorch equivalent.
  Loading first on CPU with memmapping with torch, and then moving all tensors to GPU seems
  to be faster too somehow (similar behavior in torch pickle)

- Lazy loading: in distributed (multi-node or multi-gpu) settings, it's nice to be able to
  load only part of the tensors on the various models. For
  [BLOOM](https://huggingface.co/bigscience/bloom) using this format enabled
  to load the model on 8 GPUs from 10mn with regular PyTorch weights down to 45s.
  This really speeds up feedbacks loops when developing on the model. For instance
  you don't have to have separate copies of the weights when changing the distribution
  strategy (for instance Pipeline Parallelism vs Tensor Parallelism).

License: Apache-2.0
