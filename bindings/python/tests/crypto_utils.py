import secrets
import base64


def generate_test_keys(algorithm="aes256gcm"):
    """
    Generate test encryption and signing keys in JWK format.

    Args:
        algorithm (str): The encryption algorithm to use.

    Returns:
        dict: A dictionary containing 'enc_key' and 'sign_key' in JWK format.
              Keys are base64url-encoded as per JWK specification.
    """
    if algorithm == "aes128gcm":
        enc_key_bytes = secrets.token_bytes(16)
    else:  # aes256gcm and chacha20poly1305 use 32 bytes
        enc_key_bytes = secrets.token_bytes(32)

    # Use standard base64 encoding (Rust code uses STANDARD base64)
    enc_key = {
        "kty": "oct",
        "alg": algorithm,
        "kid": "test-enc-key",
        "k": base64.b64encode(enc_key_bytes).decode("ascii"),
    }

    # Generate a valid Ed25519 key pair
    # Using cryptography library for proper key generation
    try:
        from cryptography.hazmat.primitives.asymmetric import ed25519

        # Generate private key
        private_key = ed25519.Ed25519PrivateKey.generate()
        public_key = private_key.public_key()

        # Serialize to raw bytes
        from cryptography.hazmat.primitives import serialization

        private_bytes = private_key.private_bytes(
            encoding=serialization.Encoding.Raw,
            format=serialization.PrivateFormat.Raw,
            encryption_algorithm=serialization.NoEncryption(),
        )
        public_bytes = public_key.public_bytes(
            encoding=serialization.Encoding.Raw, format=serialization.PublicFormat.Raw
        )

        # Use standard base64 encoding for JWK format
        sign_key = {
            "kty": "okp",
            "alg": "ed25519",
            "kid": "test-sign-key",
            "d": base64.b64encode(private_bytes).decode("ascii"),
            "x": base64.b64encode(public_bytes).decode("ascii"),
        }
    except ImportError:
        # Fallback: generate random bytes (for environments without cryptography)
        # This won't work for signature verification but allows tests to run
        import warnings

        warnings.warn(
            "cryptography library not available. Generating random Ed25519 keys. "
            "Signature verification will fail. Install cryptography for proper key generation.",
            RuntimeWarning,
        )
        sign_key = {
            "kty": "okp",
            "alg": "ed25519",
            "kid": "test-sign-key",
            "d": base64.b64encode(secrets.token_bytes(32)).decode("ascii"),
            "x": base64.b64encode(secrets.token_bytes(32)).decode("ascii"),
        }

    return {"enc_key": enc_key, "sign_key": sign_key}


def create_crypto_config(enc_key, sign_key, tensors=None, policy=None):
    """
    Build encryption configuration dictionary for serialize/serialize_file.

    Args:
        enc_key (dict): Encryption key material.
        sign_key (dict): Signing key material.
        tensors (list, optional): List of tensor names to encrypt. If None, all are encrypted.
        policy (dict, optional): Access policy dictionary.

    Returns:
        dict: Configuration dictionary compatible with CryptoTensors API.
    """
    config = {
        "enc_key": enc_key,
        "sign_key": sign_key,
    }
    if tensors is not None:
        config["tensors"] = tensors
    if policy is not None:
        config["policy"] = policy
    return config
