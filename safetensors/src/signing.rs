// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::cryptotensors::CryptoTensorsError;
use ring::signature;
use ring::signature::{Ed25519KeyPair, UnparsedPublicKey};

/// Supported signature algorithms for header signing
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SignatureAlgorithm {
    /// Ed25519 signature algorithm
    Ed25519,
}

impl SignatureAlgorithm {
    /// Convert a string representation to a signature algorithm
    pub fn from_str(s: &str) -> Option<Self> {
        match s.to_uppercase().as_str() {
            "ED25519" => Some(SignatureAlgorithm::Ed25519),
            _ => None,
        }
    }

    /// Convert the signature algorithm to its string representation
    pub fn to_string(&self) -> String {
        match self {
            SignatureAlgorithm::Ed25519 => "ED25519".to_string(),
        }
    }
}

/// Sign data using the specified algorithm
///
/// # Arguments
///
/// * `data` - The data to sign
/// * `key` - The signing key
/// * `algo_name` - The name of the signature algorithm to use
///
/// # Returns
///
/// * `Ok(Vec<u8>)` - The signature
/// * `Err(CryptoTensorsError)` - If signing fails
pub fn sign_data(data: &[u8], key: &[u8], algo_name: &str) -> Result<Vec<u8>, CryptoTensorsError> {
    // Validate inputs
    if key.is_empty() {
        return Err(CryptoTensorsError::MissingSigningKey);
    }

    let algo = SignatureAlgorithm::from_str(algo_name)
        .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(algo_name.to_string()))?;

    match algo {
        SignatureAlgorithm::Ed25519 => {
            // Create Ed25519 key pair from private key
            let key_pair = Ed25519KeyPair::from_seed_unchecked(key).map_err(|e| {
                CryptoTensorsError::Signing(format!("Failed to create Ed25519 key pair: {}", e))
            })?;

            // Sign the data
            Ok(key_pair.sign(data).as_ref().to_vec())
        }
    }
}

/// Verify a signature using the specified algorithm
///
/// # Arguments
///
/// * `data` - The data that was signed
/// * `signature` - The signature to verify
/// * `key` - The verification key
/// * `algo_name` - The name of the signature algorithm that was used
///
/// # Returns
///
/// * `Ok(bool)` - True if the signature is valid, false otherwise
/// * `Err(CryptoTensorsError)` - If verification fails
pub fn verify_signature(
    data: &[u8],
    signature: &[u8],
    key: &[u8],
    algo_name: &str,
) -> Result<bool, CryptoTensorsError> {
    // Validate inputs
    if key.is_empty() {
        return Err(CryptoTensorsError::MissingVerificationKey);
    }

    let algo = SignatureAlgorithm::from_str(algo_name)
        .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(algo_name.to_string()))?;

    match algo {
        SignatureAlgorithm::Ed25519 => {
            // Create Ed25519 public key
            let public_key = UnparsedPublicKey::new(&signature::ED25519, key);

            // Verify the signature
            match public_key.verify(data, signature) {
                Ok(_) => Ok(true),
                Err(_) => Ok(false),
            }
        }
    }
}
