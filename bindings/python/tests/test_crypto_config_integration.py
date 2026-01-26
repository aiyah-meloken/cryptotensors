"""
Integration tests for the new Config API.
These tests cover complete serialization/deserialization workflows.
"""

import pytest
import tempfile
import os

# Skip tests if torch is not available
torch = pytest.importorskip("torch")
numpy = pytest.importorskip("numpy")

from cryptotensors import (
    SerializeCryptoConfig,
    DeserializeCryptoConfig,
    register_direct_key_provider,
    disable_provider,
    safe_open,
    rewrap_file,
)
from cryptotensors.torch import save_file
from crypto_utils import generate_test_keys


class TestConfigIntegration:
    """Integration tests for SerializeCryptoConfig and DeserializeCryptoConfig"""

    def test_serialize_with_direct_keys(self):
        """Test complete serialization workflow with direct keys"""
        keys = generate_test_keys()
        config = SerializeCryptoConfig(
            enc_key=keys["enc_key"],
            sign_key=keys["sign_key"],
        )

        # Create test tensors
        tensors = {
            "weight": torch.tensor([1.0, 2.0, 3.0, 4.0], dtype=torch.float32),
        }

        # Serialize
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(tensors, filename, config=config.to_dict())
            assert os.path.exists(filename)
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass  # Best-effort cleanup: ignore errors deleting temp file

    def test_config_with_provider(self):
        """Test SerializeCryptoConfig with provider (via register_direct_key_provider)"""
        keys = generate_test_keys()

        # Register keys as provider
        register_direct_key_provider(keys=[keys["enc_key"], keys["sign_key"]])

        try:
            # Create config using kid references
            config = SerializeCryptoConfig(
                enc_kid=keys["enc_key"]["kid"],
                sign_kid=keys["sign_key"]["kid"],
            )

            assert config.to_dict()["enc_kid"] == keys["enc_key"]["kid"]
            assert config.to_dict()["sign_kid"] == keys["sign_key"]["kid"]
        finally:
            disable_provider("DirectKeyProvider")

    def test_config_builder_pattern(self):
        """Test SerializeCryptoConfig builder pattern"""
        keys = generate_test_keys()

        config = SerializeCryptoConfig(
            enc_key=keys["enc_key"],
            sign_key=keys["sign_key"],
            enc_kid="custom-enc",
            sign_kid="custom-sign",
            enc_jku="file:///path/to/keys.jwk",
            policy={"local": "package model\nallow = true"},
            tensors=["weight", "bias"],
        )

        config_dict = config.to_dict()
        assert config_dict["enc_kid"] == "custom-enc"
        assert config_dict["sign_kid"] == "custom-sign"
        assert config_dict["enc_jku"] == "file:///path/to/keys.jwk"
        assert "policy" in config_dict
        assert config_dict["tensors"] == ["weight", "bias"]

    def test_deserialize_config(self):
        """Test DeserializeCryptoConfig with direct keys and provider"""
        keys = generate_test_keys()

        # Test with direct keys
        config1 = DeserializeCryptoConfig(
            enc_key=keys["enc_key"],
            sign_key=keys["sign_key"],
        )
        config_dict = config1.to_dict()
        assert "enc_key" in config_dict
        assert "sign_key" in config_dict

        # Test with provider
        register_direct_key_provider(keys=[keys["enc_key"], keys["sign_key"]])
        try:
            config2 = DeserializeCryptoConfig(
                enc_key=keys["enc_key"],
                sign_key=keys["sign_key"],
            )
            config_dict2 = config2.to_dict()
            assert "enc_key" in config_dict2
        finally:
            disable_provider("DirectKeyProvider")

    def test_roundtrip_with_config(self):
        """Test complete roundtrip: serialize with config, deserialize with config via registry"""
        keys = generate_test_keys()

        # Register keys for decryption
        register_direct_key_provider(keys=[keys["enc_key"], keys["sign_key"]])

        try:
            # Create serialization config
            serialize_config = SerializeCryptoConfig(
                enc_key=keys["enc_key"],
                sign_key=keys["sign_key"],
            )

            # Create test tensors
            tensors = {
                "weight": torch.randn(10, 10, dtype=torch.float32),
                "bias": torch.randn(10, dtype=torch.float32),
            }

            # Serialize
            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                save_file(tensors, filename, config=serialize_config.to_dict())

                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    loaded_bias = f.get_tensor("bias")

                    assert torch.allclose(tensors["weight"], loaded_weight)
                    assert torch.allclose(tensors["bias"], loaded_bias)
            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")

    def test_safe_open_with_deserialize_config_object(self):
        """Test safe_open with DeserializeCryptoConfig object (via to_dict())"""
        keys = generate_test_keys()

        # Create serialization config
        serialize_config = SerializeCryptoConfig(
            enc_key=keys["enc_key"],
            sign_key=keys["sign_key"],
        )

        # Create test tensors
        tensors = {
            "weight": torch.randn(5, 5, dtype=torch.float32),
            "bias": torch.randn(5, dtype=torch.float32),
        }

        # Serialize
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(tensors, filename, config=serialize_config.to_dict())

            # Deserialize with DeserializeCryptoConfig object
            deserialize_config = DeserializeCryptoConfig(
                enc_key=keys["enc_key"],
                sign_key=keys["sign_key"],
            )

            with safe_open(
                filename, framework="pt", config=deserialize_config.to_dict()
            ) as f:
                loaded_weight = f.get_tensor("weight")
                loaded_bias = f.get_tensor("bias")

                assert torch.allclose(tensors["weight"], loaded_weight)
                assert torch.allclose(tensors["bias"], loaded_bias)
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass  # Best-effort cleanup: ignore errors deleting temp file

    def test_safe_open_with_dict_config(self):
        """Test safe_open with dict format config"""
        keys = generate_test_keys()

        # Create serialization config
        serialize_config = SerializeCryptoConfig(
            enc_key=keys["enc_key"],
            sign_key=keys["sign_key"],
        )

        # Create test tensors
        tensors = {
            "weight": torch.randn(3, 3, dtype=torch.float32),
        }

        # Serialize
        with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
            filename = f.name
        try:
            save_file(tensors, filename, config=serialize_config.to_dict())

            # Deserialize with dict config
            config_dict = {
                "enc_key": keys["enc_key"],
                "sign_key": keys["sign_key"],
            }

            with safe_open(filename, framework="pt", config=config_dict) as f:
                loaded_weight = f.get_tensor("weight")
                assert torch.allclose(tensors["weight"], loaded_weight)
        finally:
            try:
                os.unlink(filename)
            except (OSError, PermissionError):
                pass  # Best-effort cleanup: ignore errors deleting temp file

    def test_safe_open_without_config_uses_registry(self):
        """Test safe_open without config parameter (backward compatibility, uses registry)"""
        keys = generate_test_keys()

        # Register keys for decryption
        register_direct_key_provider(keys=[keys["enc_key"], keys["sign_key"]])

        try:
            # Create serialization config
            serialize_config = SerializeCryptoConfig(
                enc_key=keys["enc_key"],
                sign_key=keys["sign_key"],
            )

            # Create test tensors
            tensors = {
                "weight": torch.randn(4, 4, dtype=torch.float32),
            }

            # Serialize
            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                save_file(tensors, filename, config=serialize_config.to_dict())

                # Deserialize without config (should use registry)
                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    assert torch.allclose(tensors["weight"], loaded_weight)
            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")

    def test_safe_open_config_priority_over_registry(self):
        """Test that config parameter takes priority over registry"""
        keys1 = generate_test_keys()
        keys2 = generate_test_keys()

        # Register wrong keys in registry
        register_direct_key_provider(keys=[keys2["enc_key"], keys2["sign_key"]])

        try:
            # Create serialization config with keys1
            serialize_config = SerializeCryptoConfig(
                enc_key=keys1["enc_key"],
                sign_key=keys1["sign_key"],
            )

            # Create test tensors
            tensors = {
                "weight": torch.randn(2, 2, dtype=torch.float32),
            }

            # Serialize with keys1
            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                save_file(tensors, filename, config=serialize_config.to_dict())

                # Deserialize with config (keys1) - should work even though registry has keys2
                deserialize_config = DeserializeCryptoConfig(
                    enc_key=keys1["enc_key"],
                    sign_key=keys1["sign_key"],
                )

                with safe_open(
                    filename, framework="pt", config=deserialize_config.to_dict()
                ) as f:
                    loaded_weight = f.get_tensor("weight")
                    assert torch.allclose(tensors["weight"], loaded_weight)
            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")

    def test_roundtrip_with_provider(self):
        """Test roundtrip using provider (kid-based)"""
        keys = generate_test_keys()

        # Register keys as provider
        register_direct_key_provider(keys=[keys["enc_key"], keys["sign_key"]])

        try:
            # Serialize using kid references
            serialize_config = SerializeCryptoConfig(
                enc_kid=keys["enc_key"]["kid"],
                sign_kid=keys["sign_key"]["kid"],
            )

            tensors = {
                "weight": torch.randn(5, 5, dtype=torch.float32),
            }

            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                save_file(tensors, filename, config=serialize_config.to_dict())

                # Deserialize (should automatically use registered provider)
                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    assert torch.allclose(tensors["weight"], loaded_weight)
            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")

    def test_rewrap_file(self):
        """Test rewrap_file: re-encrypt DEKs with new keys"""
        old_keys = generate_test_keys()
        new_keys = generate_test_keys()

        # Register old keys for initial encryption
        register_direct_key_provider(keys=[old_keys["enc_key"], old_keys["sign_key"]])

        try:
            # Create and serialize with old keys
            serialize_config = SerializeCryptoConfig(
                enc_key=old_keys["enc_key"],
                sign_key=old_keys["sign_key"],
            )

            tensors = {
                "weight": torch.randn(5, 5, dtype=torch.float32),
                "bias": torch.randn(5, dtype=torch.float32),
            }

            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                # Serialize with old keys
                save_file(tensors, filename, config=serialize_config.to_dict())

                # Verify can decrypt with old keys
                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    loaded_bias = f.get_tensor("bias")
                    assert torch.allclose(tensors["weight"], loaded_weight)
                    assert torch.allclose(tensors["bias"], loaded_bias)

                # Rewrap with new keys
                old_config = DeserializeCryptoConfig(
                    enc_key=old_keys["enc_key"],
                    sign_key=old_keys["sign_key"],
                )
                new_config = SerializeCryptoConfig(
                    enc_key=new_keys["enc_key"],
                    sign_key=new_keys["sign_key"],
                )

                rewrap_file(filename, new_config.to_dict(), old_config.to_dict())

                # Register new keys for decryption
                disable_provider("DirectKeyProvider")
                register_direct_key_provider(
                    keys=[new_keys["enc_key"], new_keys["sign_key"]]
                )

                # Verify can decrypt with new keys
                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    loaded_bias = f.get_tensor("bias")
                    assert torch.allclose(tensors["weight"], loaded_weight)
                    assert torch.allclose(tensors["bias"], loaded_bias)

            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")

    def test_rewrap_file_without_old_config(self):
        """Test rewrap_file without old_config (uses keys from file header)"""
        old_keys = generate_test_keys()
        new_keys = generate_test_keys()

        # Register old keys for initial encryption and decryption
        register_direct_key_provider(keys=[old_keys["enc_key"], old_keys["sign_key"]])

        try:
            # Create and serialize with old keys
            serialize_config = SerializeCryptoConfig(
                enc_key=old_keys["enc_key"],
                sign_key=old_keys["sign_key"],
            )

            tensors = {
                "weight": torch.randn(3, 3, dtype=torch.float32),
            }

            with tempfile.NamedTemporaryFile(suffix=".safetensors", delete=False) as f:
                filename = f.name
            try:
                save_file(tensors, filename, config=serialize_config.to_dict())

                # Rewrap without old_config (should use keys from header via registry)
                new_config = SerializeCryptoConfig(
                    enc_key=new_keys["enc_key"],
                    sign_key=new_keys["sign_key"],
                )

                rewrap_file(filename, new_config.to_dict(), None)

                # Register new keys for decryption
                disable_provider("DirectKeyProvider")
                register_direct_key_provider(
                    keys=[new_keys["enc_key"], new_keys["sign_key"]]
                )

                # Verify can decrypt with new keys
                with safe_open(filename, framework="pt") as f:
                    loaded_weight = f.get_tensor("weight")
                    assert torch.allclose(tensors["weight"], loaded_weight)

            finally:
                try:
                    os.unlink(filename)
                except (OSError, PermissionError):
                    pass  # Best-effort cleanup: ignore errors deleting temp file
        finally:
            disable_provider("DirectKeyProvider")
