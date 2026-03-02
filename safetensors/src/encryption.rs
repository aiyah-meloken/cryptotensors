// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::cryptotensors::CryptoTensorsError;
use ring::rand::SecureRandom;
use ring::{aead, rand};
use std::fmt;
use std::str::FromStr;
use std::sync::Arc;

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

impl FromStr for EncryptionAlgorithm {
    type Err = ();

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let normalized = s.replace('-', "").to_lowercase();
        match normalized.as_str() {
            "aes128gcm" => Ok(EncryptionAlgorithm::Aes128Gcm),
            "aes256gcm" => Ok(EncryptionAlgorithm::Aes256Gcm),
            "chacha20poly1305" => Ok(EncryptionAlgorithm::ChaCha20Poly1305),
            _ => Err(()),
        }
    }
}

impl fmt::Display for EncryptionAlgorithm {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let s = match self {
            EncryptionAlgorithm::Aes128Gcm => "aes128gcm",
            EncryptionAlgorithm::Aes256Gcm => "aes256gcm",
            EncryptionAlgorithm::ChaCha20Poly1305 => "chacha20poly1305",
        };
        write!(f, "{}", s)
    }
}

impl EncryptionAlgorithm {
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

/// Context holding a prepared key for repeated cryptographic operations.
///
/// This encapsulates `ring::aead::LessSafeKey` to allow sharing the key material
/// across threads and operations without re-initializing the key stream.
#[derive(Clone)]
pub struct PreparedKeyContext {
    /// The algorithm associated with this key
    pub algo: EncryptionAlgorithm,
    /// The prepared key, wrapped in an Arc for cheap cloning across threads
    pub key: Arc<aead::LessSafeKey>,
}

impl fmt::Debug for PreparedKeyContext {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("PreparedKeyContext")
            .field("algo", &self.algo)
            .finish() // Explicitly omit the key material from debug output
    }
}

/// Create a reusable context holding a prepared key
///
/// # Arguments
///
/// * `key` - The encryption key to use
/// * `algo_name` - The name of the encryption algorithm to use
///
/// # Returns
///
/// * `Ok(PreparedKeyContext)` - The prepared key context
/// * `Err(CryptoTensorsError)` - If key creation fails
pub fn prepare_key_context(
    key: &[u8],
    algo_name: &str,
) -> Result<PreparedKeyContext, CryptoTensorsError> {
    let algo = algo_name
        .parse::<EncryptionAlgorithm>()
        .map_err(|_| CryptoTensorsError::InvalidAlgorithm(algo_name.to_string()))?;

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
    let unbound_key = aead::UnboundKey::new(aead_algo, key)
        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
    let less_safe_key = aead::LessSafeKey::new(unbound_key);

    Ok(PreparedKeyContext {
        algo,
        key: Arc::new(less_safe_key),
    })
}

/// Encrypt data using a prepared key context
///
/// # Arguments
///
/// * `in_out` - The buffer containing the data to encrypt.
/// * `ctx` - The prepared key context
pub fn encrypt_data(
    in_out: &mut [u8],
    ctx: &PreparedKeyContext,
) -> Result<(Vec<u8>, Vec<u8>), CryptoTensorsError> {
    if in_out.is_empty() {
        return Ok((Vec::new(), Vec::new()));
    }

    let aead_algo = ctx.algo.get_aead_algo();

    // Generate a new nonce
    let mut nonce_bytes = vec![0u8; aead_algo.nonce_len()];
    let rng = rand::SystemRandom::new();
    rng.fill(&mut nonce_bytes)
        .map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;
    let nonce = aead::Nonce::assume_unique_for_key(nonce_bytes.clone().try_into().unwrap());

    // Encrypt the data in place
    let tag = ctx
        .key
        .seal_in_place_separate_tag(nonce, aead::Aad::empty(), in_out)
        .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;

    Ok((nonce_bytes, tag.as_ref().to_vec()))
}

/// Encrypt data using a prepared key context and a specific IV
///
/// # Arguments
///
/// * `in_out` - The buffer containing the data to encrypt.
/// * `ctx` - The prepared key context
/// * `iv` - The IV to use for encryption
pub fn encrypt_data_with_iv(
    in_out: &mut [u8],
    ctx: &PreparedKeyContext,
    iv: &[u8],
) -> Result<Vec<u8>, CryptoTensorsError> {
    let aead_algo = ctx.algo.get_aead_algo();
    if iv.len() != aead_algo.nonce_len() {
        return Err(CryptoTensorsError::InvalidIvLength {
            expected: aead_algo.nonce_len(),
            actual: iv.len(),
        });
    }

    let mut nonce_bytes = vec![0u8; aead_algo.nonce_len()];
    nonce_bytes.copy_from_slice(iv);
    // Length is verified to be exactly nonce_len()
    let nonce = aead::Nonce::assume_unique_for_key(nonce_bytes.try_into().unwrap());

    // Encrypt the data in place
    let tag = ctx
        .key
        .seal_in_place_separate_tag(nonce, aead::Aad::empty(), in_out)
        .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;

    Ok(tag.as_ref().to_vec())
}

/// Decrypt data using a prepared key context
///
/// # Arguments
///
/// * `in_out` - The buffer containing the encrypted data.
/// * `ctx` - The prepared key context
/// * `iv` - The nonce (IV) used during encryption
/// * `tag` - The authentication tag from encryption
pub fn decrypt_data(
    in_out: &mut [u8],
    ctx: &PreparedKeyContext,
    iv: &[u8],
    tag: &[u8],
) -> Result<(), CryptoTensorsError> {
    // If all inputs are empty, this is an empty data case
    if in_out.is_empty() && iv.is_empty() && tag.is_empty() {
        return Ok(());
    }

    let aead_algo = ctx.algo.get_aead_algo();
    if iv.is_empty() {
        return Err(CryptoTensorsError::InvalidIvLength {
            expected: aead_algo.nonce_len(),
            actual: 0,
        });
    }
    if tag.is_empty() {
        return Err(CryptoTensorsError::InvalidTagLength {
            expected: ctx.algo.tag_len(),
            actual: 0,
        });
    }

    // Length checks should be extremely fast, no allocation
    let nonce = aead::Nonce::try_assume_unique_for_key(iv).map_err(|_e| {
        CryptoTensorsError::InvalidIvLength {
            expected: aead_algo.nonce_len(),
            actual: iv.len(),
        }
    })?;

    // Create tag using algorithm-specific method
    // Only length check and copying into the array, extremely fast
    let tag = ctx
        .algo
        .create_tag(tag)
        .map_err(|_e| CryptoTensorsError::InvalidTagLength {
            expected: ctx.algo.tag_len(),
            actual: tag.len(),
        })?;

    // Decrypt in place using separate tag
    ctx.key
        .open_in_place_separate_tag(nonce, aead::Aad::empty(), tag, in_out, 0..)
        .map_err(|e| CryptoTensorsError::Decryption(e.to_string()))?;

    Ok(())
}

/// Derives the IV for a specific chunk using a base IV and the chunk index.
///
/// Complies with NIST SP 800-38D deterministic IV construction:
/// IV = base_iv[0..8] || (u32_from_be(base_iv[8..12]) + chunk_index).to_be_bytes()
/// Supported algorithms (AES-GCM, ChaCha20-Poly1305) use 12-byte nonces.
///
/// # Arguments
///
/// * `base_iv` - The 12-byte base IV generated for the tensor
/// * `chunk_index` - The zero-based index of the chunk
pub fn derive_chunk_iv(base_iv: &[u8], chunk_index: usize) -> Result<Vec<u8>, CryptoTensorsError> {
    if base_iv.len() < 12 {
        return Err(CryptoTensorsError::InvalidIvLength {
            expected: 12,
            actual: base_iv.len(),
        });
    }

    let mut iv = base_iv[0..12].to_vec();
    let mut counter_bytes = [0u8; 4];
    counter_bytes.copy_from_slice(&iv[8..12]);
    let counter = u32::from_be_bytes(counter_bytes);

    let chunk_idx_u32 = u32::try_from(chunk_index)
        .map_err(|_| CryptoTensorsError::Encryption("Chunk index exceeds u32 max".to_string()))?;
    let new_counter = counter.checked_add(chunk_idx_u32).ok_or_else(|| {
        CryptoTensorsError::Encryption("Chunk index overflowed IV counter".to_string())
    })?;
    iv[8..12].copy_from_slice(&new_counter.to_be_bytes());

    Ok(iv)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_derive_chunk_iv() {
        let base_iv = vec![0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0];

        // Chunk 0
        let iv_0 = derive_chunk_iv(&base_iv, 0).unwrap();
        assert_eq!(iv_0, vec![0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0]);

        // Chunk 1
        let iv_1 = derive_chunk_iv(&base_iv, 1).unwrap();
        assert_eq!(iv_1, vec![0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 1]);

        // Chunk 256 (wraps second byte)
        let iv_256 = derive_chunk_iv(&base_iv, 256).unwrap();
        assert_eq!(iv_256, vec![0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 1, 0]);

        // Base IV with non-zero counter
        let base_iv_non_zero = vec![0, 1, 2, 3, 4, 5, 6, 7, 255, 255, 255, 255];
        let res = derive_chunk_iv(&base_iv_non_zero, 1);
        assert!(res.is_err()); // checked_add overflow should return an error
    }

    #[test]
    fn test_derive_chunk_iv_invalid_length() {
        let short_iv = vec![0; 11];
        let res = derive_chunk_iv(&short_iv, 0);
        assert!(res.is_err());
        match res.unwrap_err() {
            CryptoTensorsError::InvalidIvLength { expected, actual } => {
                assert_eq!(expected, 12);
                assert_eq!(actual, 11);
            }
            _ => panic!("Expected InvalidIvLength error"),
        }
    }
}
