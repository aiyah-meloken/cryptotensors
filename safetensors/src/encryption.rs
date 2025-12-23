// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::cryptotensors::CryptoTensorsError;
use ring::{aead, rand};
use ring::rand::SecureRandom;

/// Supported encryption algorithms for tensor data encryption
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EncryptionAlgorithm {
    /// AES-128-GCM encryption
    Aes128Gcm,
    /// AES-256-GCM encryption
    Aes256Gcm,
    /// ChaCha20-Poly1305 encryption
    ChaCha20Poly1305,
}

impl EncryptionAlgorithm {
    /// Convert a string representation to an encryption algorithm
    pub fn from_str(s: &str) -> Option<Self> {
        let normalized = s.replace('-', "").to_lowercase();
        match normalized.as_str() {
            "aes128gcm" => Some(EncryptionAlgorithm::Aes128Gcm),
            "aes256gcm" => Some(EncryptionAlgorithm::Aes256Gcm),
            "chacha20poly1305" => Some(EncryptionAlgorithm::ChaCha20Poly1305),
            _ => None,
        }
    }

    /// Convert the encryption algorithm to its string representation
    pub fn to_string(&self) -> String {
        match self {
            EncryptionAlgorithm::Aes128Gcm => "aes128gcm".to_string(),
            EncryptionAlgorithm::Aes256Gcm => "aes256gcm".to_string(),
            EncryptionAlgorithm::ChaCha20Poly1305 => "chacha20poly1305".to_string(),
        }
    }

    /// Get the appropriate AEAD algorithm from the ring crate
    pub fn get_aead_algo(&self) -> &'static aead::Algorithm {
        match self {
            EncryptionAlgorithm::Aes128Gcm => &aead::AES_128_GCM,
            EncryptionAlgorithm::Aes256Gcm => &aead::AES_256_GCM,
            EncryptionAlgorithm::ChaCha20Poly1305 => &aead::CHACHA20_POLY1305,
        }
    }

    /// Get the required key length in bytes for the algorithm
    pub fn key_len(&self) -> usize {
        match self {
            EncryptionAlgorithm::Aes128Gcm => 16,        // 128 bits
            EncryptionAlgorithm::Aes256Gcm => 32,        // 256 bits
            EncryptionAlgorithm::ChaCha20Poly1305 => 32, // 256 bits
        }
    }

    /// Get the authentication tag length in bytes for the algorithm
    pub fn tag_len(&self) -> usize {
        match self {
            EncryptionAlgorithm::Aes128Gcm => 16,
            EncryptionAlgorithm::Aes256Gcm => 16,
            EncryptionAlgorithm::ChaCha20Poly1305 => 16,
        }
    }

    /// Create an AEAD tag from raw bytes
    pub fn create_tag(&self, tag_bytes: &[u8]) -> Result<aead::Tag, String> {
        let expected_len = self.tag_len();
        if tag_bytes.len() != expected_len {
            return Err(format!(
                "Invalid tag length: expected {} bytes, got {} bytes",
                expected_len,
                tag_bytes.len()
            ));
        }

        let mut tag = [0u8; 16]; // All supported algorithms use 16-byte tags
        tag.copy_from_slice(tag_bytes);
        Ok(aead::Tag::from(tag))
    }
}

/// Encrypt data using the specified algorithm
///
/// This function performs in-place encryption of the input data using the specified
/// encryption algorithm. The encrypted data remains in the input buffer, and the
/// nonce (IV) and authentication tag are returned separately.
///
/// # Arguments
///
/// * `in_out` - The buffer containing the data to encrypt. The encrypted data will be
///              written back to this buffer.
/// * `key` - The encryption key to use
/// * `algo_name` - The name of the encryption algorithm to use
///
/// # Returns
///
/// * `Ok((Vec<u8>, Vec<u8>))` - A tuple containing the nonce (IV) and authentication tag
/// * `Err(CryptoTensorsError)` - If encryption fails
///
/// # Errors
///
/// * `InvalidKeyLength` - If the key length is invalid for the algorithm
/// * `InvalidAlgorithm` - If the algorithm name is not supported
/// * `RandomGeneration` - If random nonce generation fails
/// * `KeyCreation` - If key creation fails
/// * `Encryption` - If the encryption operation fails
pub fn encrypt_data(
    in_out: &mut [u8],
    key: &[u8],
    algo_name: &str,
) -> Result<(Vec<u8>, Vec<u8>), CryptoTensorsError> {
    // If input is empty, return empty IV and tag
    if in_out.is_empty() {
    return Ok((Vec::new(), Vec::new()));
    }

    // Validate inputs
    let algo = EncryptionAlgorithm::from_str(algo_name)
    .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(algo_name.to_string()))?;

    if key.is_empty() {
        return Err(CryptoTensorsError::InvalidKeyLength {
            expected: algo.key_len(),
            actual: 0,
        });
    }

    if key.len() != algo.key_len() {
        return Err(CryptoTensorsError::InvalidKeyLength {
            expected: algo.key_len(),
            actual: key.len(),
        });
    }

    // Create aead key
    let aead_algo = algo.get_aead_algo();
    let key = aead::UnboundKey::new(aead_algo, key)
        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
    let key = aead::LessSafeKey::new(key);

    // Generate a new nonce
    let mut nonce_bytes = vec![0u8; aead_algo.nonce_len()];
    let rng = rand::SystemRandom::new();
    rng.fill(&mut nonce_bytes)
        .map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;
    let nonce = aead::Nonce::assume_unique_for_key(nonce_bytes.clone().try_into().unwrap());

    // Encrypt the data in place
    let tag = key
        .seal_in_place_separate_tag(nonce, aead::Aad::empty(), in_out)
        .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;

    Ok((nonce_bytes, tag.as_ref().to_vec()))
}

/// Decrypt data using the specified algorithm
///
/// This function performs in-place decryption of the input data using the specified
/// encryption algorithm, nonce (IV), and authentication tag.
///
/// # Arguments
///
/// * `in_out` - The buffer containing the encrypted data. The decrypted data will be
///              written back to this buffer.
/// * `key` - The decryption key to use
/// * `algo_name` - The name of the encryption algorithm that was used
/// * `iv` - The nonce (IV) used during encryption
/// * `tag` - The authentication tag from encryption
///
/// # Returns
///
/// * `Ok(())` - If decryption succeeds
/// * `Err(CryptoTensorsError)` - If decryption fails
///
/// # Errors
///
/// * `InvalidKeyLength` - If the key length is invalid for the algorithm
/// * `InvalidAlgorithm` - If the algorithm name is not supported
/// * `InvalidIvLength` - If the IV length is invalid
/// * `InvalidTagLength` - If the tag length is invalid
/// * `KeyCreation` - If key creation fails
/// * `Decryption` - If the decryption operation fails
pub fn decrypt_data(
    in_out: &mut [u8],
    key: &[u8],
    algo_name: &str,
    iv: &[u8],
    tag: &[u8],
) -> Result<(), CryptoTensorsError> {
    // If all inputs are empty, this is an empty data case
    if in_out.is_empty() && iv.is_empty() && tag.is_empty() {
        return Ok(());
    }

    // Validate inputs
    let algo = EncryptionAlgorithm::from_str(algo_name)
    .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(algo_name.to_string()))?;

    if key.is_empty() {
        return Err(CryptoTensorsError::InvalidKeyLength {
            expected: algo.key_len(),
            actual: 0,
        });
    }

    if key.len() != algo.key_len() {
        return Err(CryptoTensorsError::InvalidKeyLength {
            expected: algo.key_len(),
            actual: key.len(),
        });
    }

    let aead_algo = algo.get_aead_algo();
    if iv.is_empty() || tag.is_empty() {
        return Err(CryptoTensorsError::InvalidIvLength {
            expected: aead_algo.nonce_len(),
            actual: 0,
        });
    }
    
    let key = aead::UnboundKey::new(aead_algo, key)
        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
    let key = aead::LessSafeKey::new(key);

    let nonce =
        aead::Nonce::try_assume_unique_for_key(iv).map_err(|_e| CryptoTensorsError::InvalidIvLength {
            expected: aead_algo.nonce_len(),
            actual: iv.len(),
        })?;

    // Create tag using algorithm-specific method
    let tag = algo
        .create_tag(tag)
        .map_err(|_e| CryptoTensorsError::InvalidTagLength {
            expected: algo.tag_len(),
            actual: tag.len(),
        })?;

    // Decrypt in place using separate tag
    key.open_in_place_separate_tag(nonce, aead::Aad::empty(), tag, in_out, 0..)
        .map_err(|e| CryptoTensorsError::Decryption(e.to_string()))?;

    Ok(())
}

