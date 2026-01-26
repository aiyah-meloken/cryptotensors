from cryptotensors import SerializeCryptoConfig, DeserializeCryptoConfig


def test_serialize_crypto_config():
    """Test SerializeCryptoConfig class"""
    # Test with all parameters
    config = SerializeCryptoConfig(
        enc_kid="my-enc",
        sign_kid="my-sign",
        policy={"local": "package model\nallow = true"},
        tensors=["weight", "bias"],
    )

    config_dict = config.to_dict()
    assert config_dict["enc_kid"] == "my-enc"
    assert config_dict["sign_kid"] == "my-sign"
    assert "policy" in config_dict
    assert config_dict["tensors"] == ["weight", "bias"]


def test_serialize_crypto_config_minimal():
    """Test SerializeCryptoConfig with minimal parameters"""
    config = SerializeCryptoConfig(
        enc_key={
            "alg": "aes256gcm",
            "kid": "test-enc",
            "k": "dGVzdC1rZXktMzItYnl0ZXMtbG9uZy1lbmNyeXB0aW9u",
        },
        sign_key={
            "alg": "ed25519",
            "kid": "test-sign",
            "x": "dGVzdC1wdWJsaWMta2V5LTMyLWJ5dGVzLWxvbmctc2lnbmF0dXJl",
            "d": "dGVzdC1wcml2YXRlLWtleS0zMi1ieXRlcy1sb25nLXNpZ25hdHVyZQ",
        },
    )

    config_dict = config.to_dict()
    assert "enc_key" in config_dict
    assert "sign_key" in config_dict


def test_deserialize_crypto_config():
    """Test DeserializeCryptoConfig class"""
    config = DeserializeCryptoConfig(
        enc_key={
            "alg": "aes256gcm",
            "kid": "test-enc",
            "k": "dGVzdC1rZXktMzItYnl0ZXMtbG9uZy1lbmNyeXB0aW9u",
        },
        sign_key={
            "alg": "ed25519",
            "kid": "test-sign",
            "x": "dGVzdC1wdWJsaWMta2V5LTMyLWJ5dGVzLWxvbmctc2lnbmF0dXJl",
            "d": "dGVzdC1wcml2YXRlLWtleS0zMi1ieXRlcy1sb25nLXNpZ25hdHVyZQ",
        },
    )

    config_dict = config.to_dict()
    assert "enc_key" in config_dict
    assert "sign_key" in config_dict


def test_serialize_crypto_config_empty():
    """Test SerializeCryptoConfig with no parameters"""
    config = SerializeCryptoConfig()
    config_dict = config.to_dict()
    assert isinstance(config_dict, dict)
    assert len(config_dict) == 0  # All None values removed


def test_serialize_config_with_provider():
    """Test SerializeCryptoConfig with provider (via register_direct_key_provider)"""
    from cryptotensors import register_direct_key_provider, disable_provider

    keys = [
        {
            "kty": "oct",
            "alg": "aes256gcm",
            "kid": "my-enc",
            "k": "dGVzdC1rZXktMzItYnl0ZXMtbG9uZy1lbmNyeXB0aW9u",
        },
        {
            "kty": "okp",
            "alg": "ed25519",
            "kid": "my-sign",
            "x": "dGVzdC1wdWJsaWMta2V5LTMyLWJ5dGVzLWxvbmctc2lnbmF0dXJl",
            "d": "dGVzdC1wcml2YXRlLWtleS0zMi1ieXRlcy1sb25nLXNpZ25hdHVyZQ",
        },
    ]

    register_direct_key_provider(keys=keys)
    try:
        config = SerializeCryptoConfig(
            enc_kid="my-enc",
            sign_kid="my-sign",
        )

        config_dict = config.to_dict()
        assert config_dict["enc_kid"] == "my-enc"
        assert config_dict["sign_kid"] == "my-sign"
    finally:
        disable_provider("DirectKeyProvider")


def test_serialize_config_with_keys():
    """Test SerializeCryptoConfig with direct keys"""
    config = SerializeCryptoConfig(
        enc_key={
            "alg": "aes256gcm",
            "kid": "direct-enc",
            "k": "dGVzdC1rZXktMzItYnl0ZXMtbG9uZy1lbmNyeXB0aW9u",
        },
        sign_key={
            "alg": "ed25519",
            "kid": "direct-sign",
            "x": "dGVzdC1wdWJsaWMta2V5LTMyLWJ5dGVzLWxvbmctc2lnbmF0dXJl",
            "d": "dGVzdC1wcml2YXRlLWtleS0zMi1ieXRlcy1sb25nLXNpZ25hdHVyZQ",
        },
        enc_kid="direct-enc",
        sign_kid="direct-sign",
    )

    config_dict = config.to_dict()
    assert "enc_key" in config_dict
    assert "sign_key" in config_dict
    assert config_dict["enc_kid"] == "direct-enc"
    assert config_dict["sign_kid"] == "direct-sign"
