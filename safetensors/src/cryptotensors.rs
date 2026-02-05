// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::encryption::{decrypt_data, encrypt_data, EncryptionAlgorithm};
use crate::key::{resolve_key, KeyLookupParams, KeyMaterial, KeyRole, ValidateMode};
use crate::memory::MmapBuffer;
use crate::policy::AccessPolicy;
use crate::signing::{sign_data, verify_signature, SignatureAlgorithm};
use crate::tensor::{Metadata, TensorInfo};
use base64::{engine::general_purpose::STANDARD as BASE64, Engine as _};
use once_cell::sync::OnceCell;
use rayon::prelude::*;
use ring::rand::{self, SecureRandom};
use serde::{de::Error, Deserialize, Deserializer, Serialize, Serializer};
use std::collections::HashMap;
use std::sync::Arc;
use thiserror::Error;
use zeroize::Zeroizing;

// ============================================================================
// Version Constants
// ============================================================================

/// Supported CryptoTensors format version
pub const CRYPTOTENSORS_VERSION: &str = "1";

// ============================================================================
// Error Types - Organized by category using thiserror
// ============================================================================

/// Error types for CryptoTensors operations
///
/// Errors are organized into logical categories:
/// - **Key management**: `KeyUnwrap`, `KeyCreation`, `KeyLoad`, `InvalidKey`, `NoSuitableKey`, etc.
/// - **Encryption/Decryption**: `Encryption`, `Decryption`, `InvalidAlgorithm`, `InvalidKeyLength`, etc.
/// - **Signature**: `Signing`, `Verification`, `MissingSignature`, `InvalidSignatureFormat`
/// - **Policy**: `Policy`
/// - **Version**: `UnsupportedVersion`, `MissingVersion`
/// - **Registry**: `Registry`
#[derive(Debug, Error)]
pub enum CryptoTensorsError {
    // ========================================================================
    // Key Management Errors
    // ========================================================================
    /// Failed to unwrap (decrypt) a tensor's encryption key
    #[error("failed to unwrap key: {0}")]
    KeyUnwrap(String),

    /// Failed to create or derive a key
    #[error("failed to create key: {0}")]
    KeyCreation(String),

    /// Failed to load key from external source (file, URL, etc.)
    #[error("failed to load key: {0}")]
    KeyLoad(String),

    /// Invalid key identifier or format
    #[error("invalid key: {0}")]
    InvalidKey(String),

    /// Invalid JWK URL format
    #[error("invalid JWK URL: {0}")]
    InvalidJwkUrl(String),

    /// No suitable key found for the operation
    #[error("no suitable key found")]
    NoSuitableKey,

    /// Ambiguous key set - multiple keys without key ID
    #[error("multiple keys found without key ID (kid)")]
    AmbiguousKeySet,

    /// Master key required but not available
    #[error("master key is required but not available")]
    MissingMasterKey,

    /// Signing key required but not available
    #[error("signing key is required but not available")]
    MissingSigningKey,

    /// Verification key required but not available
    #[error("verification key is required but not available")]
    MissingVerificationKey,

    // ========================================================================
    // Encryption/Decryption Errors
    // ========================================================================
    /// Encryption operation failed
    #[error("encryption failed: {0}")]
    Encryption(String),

    /// Decryption operation failed
    #[error("decryption failed: {0}")]
    Decryption(String),

    /// Invalid or unsupported algorithm
    #[error("invalid algorithm: {0}")]
    InvalidAlgorithm(String),

    /// Key length does not match algorithm requirements
    #[error("invalid key length: expected {expected} bytes, got {actual} bytes")]
    InvalidKeyLength {
        /// Expected key length in bytes
        expected: usize,
        /// Actual key length in bytes
        actual: usize,
    },

    /// IV (initialization vector) length is incorrect
    #[error("invalid IV length: expected {expected} bytes, got {actual} bytes")]
    InvalidIvLength {
        /// Expected IV length in bytes
        expected: usize,
        /// Actual IV length in bytes
        actual: usize,
    },

    /// Authentication tag length is incorrect
    #[error("invalid tag length: expected {expected} bytes, got {actual} bytes")]
    InvalidTagLength {
        /// Expected tag length in bytes
        expected: usize,
        /// Actual tag length in bytes
        actual: usize,
    },

    /// Random number generation failed
    #[error("random generation failed: {0}")]
    RandomGeneration(String),

    // ========================================================================
    // Signature Errors
    // ========================================================================
    /// Signing operation failed
    #[error("signing failed: {0}")]
    Signing(String),

    /// Signature verification failed
    #[error("verification failed: {0}")]
    Verification(String),

    /// Required signature is missing
    #[error("missing signature: {0}")]
    MissingSignature(String),

    /// Signature format is invalid
    #[error("invalid signature format")]
    InvalidSignatureFormat,

    // ========================================================================
    // Policy Errors
    // ========================================================================
    /// Access policy evaluation failed or denied
    #[error("policy error: {0}")]
    Policy(String),

    // ========================================================================
    // Version Errors
    // ========================================================================
    /// CryptoTensors version is not supported
    #[error("unsupported version: {0}")]
    UnsupportedVersion(String),

    /// Version field is missing from metadata
    #[error("version field is missing")]
    MissingVersion,

    // ========================================================================
    // Registry Errors
    // ========================================================================
    /// Key provider registry error
    #[error("registry error: {0}")]
    Registry(String),

    // ========================================================================
    // Serialization Errors
    // ========================================================================
    /// JSON serialization/deserialization error
    #[error("JSON error: {0}")]
    Json(String),
}

// ============================================================================
// From Implementations
// ============================================================================

impl From<serde_json::Error> for CryptoTensorsError {
    fn from(error: serde_json::Error) -> Self {
        CryptoTensorsError::Json(error.to_string())
    }
}

/// Serialize and deserialize OnceCell<Vec<u8>> with Base64 encoding/decoding
mod cryptor_serde {
    use super::*;

    pub fn serialize<S>(cell: &OnceCell<Vec<u8>>, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        match cell.get() {
            Some(value) => BASE64.encode(value).serialize(serializer),
            None => serializer.serialize_none(),
        }
    }

    pub fn deserialize<'de, D>(deserializer: D) -> Result<OnceCell<Vec<u8>>, D::Error>
    where
        D: Deserializer<'de>,
    {
        let value: Option<String> = Option::deserialize(deserializer)?;
        let cell = OnceCell::new();
        if let Some(v) = value {
            let decoded = BASE64
                .decode(v)
                .map_err(|e| D::Error::custom(format!("Base64 decode error: {}", e)))?;
            cell.set(decoded)
                .map_err(|_| D::Error::custom("Failed to set OnceCell value"))?;
        }
        Ok(cell)
    }
}

/// Configuration for serializing tensors with encryption
///
/// Key loading: (1) Direct keys (`enc_key`/`sign_key`) — use as-is, ignore kid/jku.
/// (2) Registry — when no direct keys, use `enc_kid`/`enc_jku`/`sign_kid`/`sign_jku` to lookup.
#[derive(Default)]
pub struct SerializeCryptoConfig {
    /// Directly provided encryption key. When set, enc_kid/enc_jku are ignored.
    pub enc_key: Option<KeyMaterial>,
    /// Directly provided signing key. When set, sign_kid/sign_jku are ignored.
    pub sign_key: Option<KeyMaterial>,

    /// Encryption key identifier (registry lookup when no direct keys)
    pub enc_kid: Option<String>,
    /// Encryption key JWK URL (registry lookup)
    pub enc_jku: Option<String>,
    /// Signing key identifier (registry lookup)
    pub sign_kid: Option<String>,
    /// Signing key JWK URL (registry lookup)
    pub sign_jku: Option<String>,

    /// Access policy
    pub policy: Option<AccessPolicy>,

    /// Tensors to encrypt (None = all)
    pub tensor_filter: Option<Vec<String>>,
}

impl SerializeCryptoConfig {
    /// Create a new empty configuration
    pub fn new() -> Self {
        Self::default()
    }

    /// Use directly provided keys
    pub fn with_keys(enc_key: KeyMaterial, sign_key: KeyMaterial) -> Self {
        let mut config = Self::new();
        config.enc_key = Some(enc_key);
        config.sign_key = Some(sign_key);
        config
    }

    /// Only specify kid (lookup from global Registry)
    pub fn with_kids(enc_kid: &str, sign_kid: &str) -> Self {
        let mut config = Self::new();
        config.enc_kid = Some(enc_kid.to_string());
        config.sign_kid = Some(sign_kid.to_string());
        config
    }

    // Builder methods
    /// Set encryption key identifier
    pub fn enc_kid(mut self, kid: &str) -> Self {
        self.enc_kid = Some(kid.to_string());
        self
    }
    /// Set signing key identifier
    pub fn sign_kid(mut self, kid: &str) -> Self {
        self.sign_kid = Some(kid.to_string());
        self
    }
    /// Set encryption key JWK URL
    pub fn enc_jku(mut self, jku: &str) -> Self {
        self.enc_jku = Some(jku.to_string());
        self
    }
    /// Set signing key JWK URL
    pub fn sign_jku(mut self, jku: &str) -> Self {
        self.sign_jku = Some(jku.to_string());
        self
    }
    /// Set access policy
    pub fn policy(mut self, policy: AccessPolicy) -> Self {
        self.policy = Some(policy);
        self
    }
    /// Set tensor filter
    pub fn tensor_filter(mut self, filter: Vec<String>) -> Self {
        self.tensor_filter = Some(filter);
        self
    }
}

/// Configuration for deserialization (optional)
///
/// Key loading: (1) Direct keys — use as-is. (2) Registry — when no direct keys, lookup by kid/jku from header.
#[derive(Default)]
pub struct DeserializeCryptoConfig {
    /// Directly provided encryption key. When set, registry is not used.
    pub enc_key: Option<KeyMaterial>,
    /// Directly provided signing key. When set, registry is not used.
    pub sign_key: Option<KeyMaterial>,
    // kid/jku are read from header for registry lookup
}

impl DeserializeCryptoConfig {
    /// Create a new empty configuration
    pub fn new() -> Self {
        Self::default()
    }

    /// Use directly provided keys
    pub fn with_keys(enc_key: KeyMaterial, sign_key: KeyMaterial) -> Self {
        let mut config = Self::new();
        config.enc_key = Some(enc_key);
        config.sign_key = Some(sign_key);
        config
    }
}

#[derive(Clone, Copy)]
enum SerializeKeyKind {
    Enc,
    Sign,
}

#[derive(Clone, Copy)]
enum DeserializeKeyKind {
    Enc,
    Sign,
}

/// Information about encrypted tensor data and methods for encryption/decryption
#[derive(Debug, Serialize, Deserialize)]
pub struct SingleCryptor {
    /// Algorithm used for encryption
    #[serde(rename = "data_alg")]
    enc_algo: String,
    /// Encrypted tensor key
    #[serde(with = "cryptor_serde")]
    wrapped_key: OnceCell<Vec<u8>>,
    /// Initialization vector for key encryption
    #[serde(with = "cryptor_serde")]
    key_iv: OnceCell<Vec<u8>>,
    /// Authentication tag for key encryption
    #[serde(with = "cryptor_serde")]
    key_tag: OnceCell<Vec<u8>>,
    /// Initialization vector for data encryption
    #[serde(with = "cryptor_serde")]
    iv: OnceCell<Vec<u8>>,
    /// Authentication tag for data encryption
    #[serde(with = "cryptor_serde")]
    tag: OnceCell<Vec<u8>>,
    /// Buffer for decrypted data (Arc for zero-copy sharing with Python)
    /// Uses OS-managed memory (mmap) for page alignment and better DMA performance
    #[serde(skip)]
    buffer: OnceCell<Arc<MmapBuffer>>,
    /// Decrypted Data Encryption Key (DEK)
    /// Populated immediately upon loading/creation.
    #[serde(skip)]
    data_key: OnceCell<Zeroizing<Vec<u8>>>,
}

impl SingleCryptor {
    /// Create a new SingleCryptor from key material
    ///
    /// # Arguments
    ///
    /// * `key_material` - The key material containing encryption key
    ///
    /// # Returns
    ///
    /// * `Ok(Self)` - If the key material contains valid encryption key
    /// * `Err(CryptoTensorsError)` - If the key material is invalid or missing required key
    fn new(key_material: &KeyMaterial) -> Result<Self, CryptoTensorsError> {
        let alg = key_material
            .alg
            .parse::<EncryptionAlgorithm>()
            .map_err(|_| CryptoTensorsError::InvalidAlgorithm(key_material.alg.clone()))?;
        let master_key = key_material.get_master_key_bytes()?;

        let cryptor = Self {
            enc_algo: alg.to_string(),
            wrapped_key: OnceCell::new(),
            key_iv: OnceCell::new(),
            key_tag: OnceCell::new(),
            iv: OnceCell::new(),
            tag: OnceCell::new(),
            buffer: OnceCell::new(),
            data_key: OnceCell::new(),
        };

        let rng = rand::SystemRandom::new();
        let mut key = vec![0u8; alg.key_len()];
        rng.fill(&mut key)
            .map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;

        // Wrap it with master key immediately so we can serialize the header
        cryptor.wrap_key(&key, &master_key)?;

        cryptor
            .data_key
            .set(Zeroizing::new(key))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set data key".to_string()))?;

        Ok(cryptor)
    }

    /// Initialize the cryptor by unwrapping the DEK using the master key.
    pub fn init_and_unwrap(&self, master_key: &[u8]) -> Result<(), CryptoTensorsError> {
        let mut data_key = self
            .wrapped_key
            .get()
            .ok_or_else(|| CryptoTensorsError::KeyUnwrap("wrapped_key is empty".to_string()))?
            .clone();

        decrypt_data(
            &mut data_key,
            master_key,
            &self.enc_algo,
            self.key_iv
                .get()
                .ok_or_else(|| CryptoTensorsError::KeyUnwrap("key_iv is empty".to_string()))?
                .as_slice(),
            self.key_tag
                .get()
                .ok_or_else(|| CryptoTensorsError::KeyUnwrap("key_tag is empty".to_string()))?
                .as_slice(),
        )?;

        self.data_key
            .set(Zeroizing::new(data_key))
            .map_err(|_| CryptoTensorsError::KeyUnwrap("Failed to set data key".to_string()))?;
        Ok(())
    }

    /// Wrap the key using the master key (for serialization)
    fn wrap_key(&self, key: &[u8], master_key: &[u8]) -> Result<(), CryptoTensorsError> {
        let mut key_buf = key.to_vec();

        let (key_iv, key_tag) = encrypt_data(&mut key_buf, master_key, &self.enc_algo)?;
        self.wrapped_key
            .set(key_buf)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set wrapped key".to_string()))?;
        self.key_iv
            .set(key_iv)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set key iv".to_string()))?;
        self.key_tag
            .set(key_tag)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set key tag".to_string()))?;
        Ok(())
    }

    /// Decrypt data using the master key
    ///
    /// # Arguments
    ///
    /// * `data` - The encrypted data to decrypt
    ///
    /// # Returns
    ///
    /// * `Ok(&[u8])` - A reference to the decrypted data
    /// * `Err(CryptoTensorsError)` - If decryption fails
    ///
    /// # Errors
    ///
    /// * `KeyUnwrap` - If key unwrapping fails
    /// * `Decryption` - If data decryption fails
    fn decrypt(&self, data: &[u8]) -> Result<&[u8], CryptoTensorsError> {
        self.buffer
            .get_or_try_init(|| {
                // Feature: MmapBuffer-based decryption buffer (shared via Arc)
                let mut buffer = MmapBuffer::allocate(data.len())
                    .map_err(|e| CryptoTensorsError::Decryption(e.to_string()))?;

                // Use cached data_key.
                let dek = self.data_key.get().ok_or(CryptoTensorsError::Decryption(
                    "Data key not initialized".to_string(),
                ))?;

                let in_out = buffer.as_mut_slice();
                in_out.copy_from_slice(data);

                decrypt_data(
                    in_out,
                    dek,
                    &self.enc_algo,
                    self.iv
                        .get()
                        .ok_or_else(|| CryptoTensorsError::Decryption("iv is empty".to_string()))?,
                    self.tag.get().ok_or_else(|| {
                        CryptoTensorsError::Decryption("tag is empty".to_string())
                    })?,
                )?;

                Ok(Arc::new(buffer))
            })
            .map(|buf| buf.as_slice())
    }

    /// Encrypt data using the master key
    ///
    /// # Arguments
    ///
    /// * `data` - The data to encrypt
    ///
    /// # Returns
    ///
    /// * `Ok(())` - If encryption succeeds
    /// * `Err(CryptoTensorsError)` - If encryption fails
    ///
    /// # Errors
    ///
    /// * `RandomGeneration` - If key generation fails
    /// * `Encryption` - If data encryption fails
    /// * `KeyCreation` - If key creation fails
    fn encrypt(&self, data: &[u8]) -> Result<(), CryptoTensorsError> {
        // 1. Get DEK (must be set by with_new_key or init)
        let dek = self.data_key.get().ok_or(CryptoTensorsError::Encryption(
            "Data key not initialized for encryption".to_string(),
        ))?;

        // Allocate page-aligned buffer using OS mmap
        let mut mmap_buf = MmapBuffer::allocate(data.len()).map_err(|e| {
            CryptoTensorsError::Encryption(format!("failed to allocate buffer: {}", e))
        })?;

        // Copy data to mmap buffer
        mmap_buf.as_mut_slice().copy_from_slice(data);

        // 2. Encrypt the data
        // encrypt_data handles IV generation internally and performs in-place encryption
        let (iv, tag) = encrypt_data(mmap_buf.as_mut_slice(), dek, &self.enc_algo)?;

        self.iv
            .set(iv)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set iv".to_string()))?;
        self.tag
            .set(tag)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set tag".to_string()))?;

        self.buffer
            .set(Arc::new(mmap_buf))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set buffer".to_string()))?;
        Ok(())
    }

    /// Returns the internal buffer as an Arc.
    /// This is used for zero-copy sharing with Python.
    pub fn buffer_arc(&self) -> Option<Arc<MmapBuffer>> {
        self.buffer.get().cloned()
    }

    /// Create a new SingleCryptor with a new master key (Rewrap).
    ///
    /// If the DEK is already unwrapped (data_key set), it will be
    /// re-encrypted with the new master key.
    pub fn with_new_key(&self, new_key: &KeyMaterial) -> Result<Self, CryptoTensorsError> {
        // Check algorithm consistency
        if !new_key.alg.is_empty() && new_key.alg != self.enc_algo {
            return Err(CryptoTensorsError::InvalidAlgorithm(format!(
                "Algorithm mismatch: current={}, new={}",
                self.enc_algo, new_key.alg
            )));
        }

        // Get new master key
        let new_master_key = new_key.get_master_key_bytes()?;

        // Create new SingleCryptor
        let new_cryptor = Self {
            enc_algo: self.enc_algo.clone(),
            wrapped_key: OnceCell::new(),
            key_iv: OnceCell::new(),
            key_tag: OnceCell::new(),
            iv: self.iv.clone(),     // Preserve data encryption IV
            tag: self.tag.clone(),   // Preserve data encryption tag
            buffer: OnceCell::new(), // Buffer cleared (fresh start)
            data_key: OnceCell::new(),
        };

        // Clone/Set data_key from self
        if let Some(dek) = self.data_key.get() {
            // Set data_key in new cryptor
            // Note: zeroizing clone
            // We need to clone Zeroizing<Vec<u8>> or create new.
            // Zeroizing implies we should be careful.
            let dek_clone = Zeroizing::new(dek.to_vec());
            new_cryptor.data_key.set(dek_clone).map_err(|_| {
                CryptoTensorsError::Encryption("Failed to set data key".to_string())
            })?;

            // Re-wrap with new master key
            new_cryptor.wrap_key(dek, &new_master_key)?;
        }

        Ok(new_cryptor)
    }
}

impl Clone for SingleCryptor {
    fn clone(&self) -> Self {
        let cloned = Self {
            enc_algo: self.enc_algo.clone(),
            wrapped_key: OnceCell::new(),
            key_iv: OnceCell::new(),
            key_tag: OnceCell::new(),
            iv: OnceCell::new(),
            tag: OnceCell::new(),
            buffer: OnceCell::new(),
            data_key: OnceCell::new(),
        };

        if let Some(val) = self.wrapped_key.get() {
            let _ = cloned.wrapped_key.set(val.clone());
        }
        if let Some(val) = self.key_iv.get() {
            let _ = cloned.key_iv.set(val.clone());
        }
        if let Some(val) = self.key_tag.get() {
            let _ = cloned.key_tag.set(val.clone());
        }
        if let Some(val) = self.iv.get() {
            let _ = cloned.iv.set(val.clone());
        }
        if let Some(val) = self.tag.get() {
            let _ = cloned.tag.set(val.clone());
        }
        // Clone decrypted DEK (data_key) if available
        if let Some(val) = self.data_key.get() {
            // Zeroizing clone
            let _ = cloned.data_key.set(Zeroizing::new(val.to_vec()));
        }
        // Buffer clone
        if let Some(buf) = self.buffer.get() {
            let _ = cloned.buffer.set(buf.clone());
        }

        cloned
    }
}

/// Information about header signature and methods for signing/verifying
#[derive(Debug, Clone)]
struct HeaderSigner {
    /// The algorithm used for signing
    alg: String,
    /// Private key for signing
    priv_key: Option<Vec<u8>>,
    /// Public key for verification
    pub_key: Option<Vec<u8>>,
    /// The signature of the header
    signature: OnceCell<Vec<u8>>,
}

impl HeaderSigner {
    /// Create a new header signer from key material
    ///
    /// # Arguments
    ///
    /// * `key_material` - The key material containing signing keys
    ///
    /// # Returns
    ///
    /// * `Ok(Self)` - If the key material contains valid signing keys
    /// * `Err(CryptoTensorsError)` - If the key material is invalid or missing required keys
    fn new(key_material: &KeyMaterial) -> Result<Self, CryptoTensorsError> {
        let alg = key_material
            .alg
            .parse::<SignatureAlgorithm>()
            .map_err(|_| CryptoTensorsError::InvalidAlgorithm(key_material.alg.clone()))?;

        let priv_key = key_material
            .d_priv
            .get()
            .and_then(|k| k.as_ref())
            .map(|k| {
                BASE64.decode(k).map_err(|e| {
                    CryptoTensorsError::InvalidKey(format!("Invalid base64 private key: {}", e))
                })
            })
            .transpose()?;

        let pub_key = key_material
            .x_pub
            .get()
            .and_then(|k| k.as_ref())
            .map(|k| {
                BASE64.decode(k).map_err(|e| {
                    CryptoTensorsError::InvalidKey(format!("Invalid base64 public key: {}", e))
                })
            })
            .transpose()?;

        Ok(Self {
            alg: alg.to_string(),
            priv_key,
            pub_key,
            signature: OnceCell::new(),
        })
    }

    /// Sign the header data
    fn sign(&self, data: &[u8]) -> Result<(), CryptoTensorsError> {
        match &self.priv_key {
            Some(key) => {
                let signature = sign_data(data, key, &self.alg)?;
                self.signature.set(signature).map_err(|_| {
                    CryptoTensorsError::Signing("Signature already set".to_string())
                })?;
                Ok(())
            }
            None => Err(CryptoTensorsError::MissingSigningKey),
        }
    }

    /// Verify the header signature
    fn verify(&self, data: &[u8]) -> Result<bool, CryptoTensorsError> {
        match &self.pub_key {
            Some(key) => match self.signature.get() {
                Some(signature) => verify_signature(data, signature, key, &self.alg),
                None => Err(CryptoTensorsError::MissingSignature(
                    "No signature to verify".to_string(),
                )),
            },
            None => Err(CryptoTensorsError::MissingVerificationKey),
        }
    }
}

/// Manager for handling encryption and decryption of multiple tensors
/// The main structure holding crypto configuration and methods
#[derive(Debug, Clone)]
pub struct CryptoTensors {
    /// Mapping from tensor names to their encryptors
    cryptors: HashMap<String, SingleCryptor>,
    /// Signer for signing/verifying the file header
    signer: HeaderSigner,
    /// Key material for encryption/decryption
    enc_key: KeyMaterial,
    /// Key material for signing/verification
    sign_key: KeyMaterial,
    /// Access policy for model loading and KMS validation
    policy: AccessPolicy,
    /// CryptoTensors version
    version: String,
}

impl CryptoTensors {
    /// Get the encryptor for a specific tensor
    pub fn get(&self, tensor_name: &str) -> Option<&SingleCryptor> {
        self.cryptors.get(tensor_name)
    }

    /// Get the encryption key material
    pub fn enc_key(&self) -> &KeyMaterial {
        &self.enc_key
    }

    /// Get the signing key
    pub fn sign_key(&self) -> &KeyMaterial {
        &self.sign_key
    }

    /// Get the policy
    pub fn policy(&self) -> &AccessPolicy {
        &self.policy
    }

    /// Create a new encryptor mapping from encryption configuration
    ///
    /// # Arguments
    ///
    /// * `tensor_names` - List of all available tensor names
    /// * `config` - serialization configuration (it is up to the caller to ensure that the configuration exists)
    ///
    /// # Returns
    ///
    /// A new CryptoTensors instance. If no configuration is provided or no tensors
    /// are selected for encryption, the manager will be initialized without any
    /// encryptors.
    pub fn from_serialize_config(
        tensors: Vec<String>,
        config: &SerializeCryptoConfig,
    ) -> Result<Option<Self>, CryptoTensorsError> {
        let enc_key = Self::resolve_key_from_serialize_config(config, SerializeKeyKind::Enc)?;
        let sign_key = Self::resolve_key_from_serialize_config(config, SerializeKeyKind::Sign)?;

        enc_key.validate(ValidateMode::ForCreation)?;
        sign_key.validate(ValidateMode::ForCreation)?;

        // Determine which tensors need to be encrypted
        let matched_tensors = match &config.tensor_filter {
            None => tensors,
            Some(names) => names
                .iter()
                .filter(|name| tensors.contains(name))
                .cloned()
                .collect(),
        };

        // Return None if no tensors need encryption
        if matched_tensors.is_empty() {
            return Ok(None);
        }

        // Create cryptor for each tensor
        let cryptors = matched_tensors
            .iter()
            .map(|name| {
                let cryptor = SingleCryptor::new(&enc_key)?;
                Ok((name.clone(), cryptor))
            })
            .collect::<Result<HashMap<String, SingleCryptor>, CryptoTensorsError>>()?;

        // Create signer
        let signer = HeaderSigner::new(&sign_key)?;

        Ok(Some(Self {
            cryptors,
            enc_key: enc_key.sanitize(),
            sign_key: sign_key.sanitize(),
            signer,
            policy: config.policy.clone().unwrap_or_default(),
            version: CRYPTOTENSORS_VERSION.to_string(),
        }))
    }

    /// Generate the metadata for serialization
    ///
    /// # Arguments
    ///
    /// * `tensors` - List of tensor names and their information
    /// * `metadata` - Optional metadata containing additional information
    ///
    /// # Returns
    ///
    /// * `Ok(Some(HashMap))` - If there are encryptors to serialize
    /// * `Ok(None)` - If there are no encryptors to serialize
    /// * `Err(CryptoTensorsError)` - If serialization fails
    ///
    /// # Errors
    ///
    /// * `Encryption` - If JSON serialization fails
    pub fn generate_metadata(
        &self,
        tensors: Vec<(String, TensorInfo)>,
        metadata: Option<HashMap<String, String>>,
    ) -> Result<Option<HashMap<String, String>>, CryptoTensorsError> {
        // Initialize with base metadata or empty HashMap
        let mut new_metadata = metadata.unwrap_or_default();

        // Remove any legacy crypto fields to avoid circular signing dependencies
        // and to ensure we sign a header without an existing signature.
        new_metadata.remove("__signature__");
        new_metadata.remove("__encryption__");
        new_metadata.remove("__crypto_keys__");
        new_metadata.remove("__policy__");

        // Add key material information
        let key_material = serde_json::json!({
            "version": self.version,
            "enc": self.enc_key,
            "sign": self.sign_key
        });
        let key_material_json = serde_json::to_string(&key_material)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        new_metadata.insert("__crypto_keys__".to_string(), key_material_json);

        // Add encryption information
        // Use BTreeMap to ensure deterministic ordering of cryptors
        let sorted_cryptors: std::collections::BTreeMap<_, _> = self.cryptors.iter().collect();
        let crypto_json = serde_json::to_string(&sorted_cryptors)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        new_metadata.insert("__encryption__".to_string(), crypto_json);

        // Add policy information
        let policy_json = serde_json::to_string(&self.policy)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        new_metadata.insert("__policy__".to_string(), policy_json);

        // Add signature information
        let header = Metadata::new(Some(new_metadata.clone()), tensors).map_err(|e| {
            CryptoTensorsError::InvalidKey(format!("Failed to create metadata: {}", e))
        })?;

        // Use Metadata's Serialize implementation directly for signing to match verification
        let header_json = serde_json::to_string(&header)?;
        self.signer.sign(header_json.as_bytes())?;
        let signature =
            self.signer.signature.get().ok_or_else(|| {
                CryptoTensorsError::Signing("Failed to get signature".to_string())
            })?;
        new_metadata.insert("__signature__".to_string(), BASE64.encode(signature));

        Ok(Some(new_metadata))
    }

    /// enc_key/sign_key are independent: registry allowed for a key iff that key is not directly provided.
    fn params_for_serialize<'a>(
        config: &'a SerializeCryptoConfig,
        kind: SerializeKeyKind,
    ) -> KeyLookupParams<'a> {
        let (direct, jku, kid, registry_allowed) = match kind {
            SerializeKeyKind::Enc => (
                config.enc_key.as_ref(),
                config.enc_jku.as_deref(),
                config.enc_kid.as_deref(),
                config.enc_key.is_none(),
            ),
            SerializeKeyKind::Sign => (
                config.sign_key.as_ref(),
                config.sign_jku.as_deref(),
                config.sign_kid.as_deref(),
                config.sign_key.is_none(),
            ),
        };
        KeyLookupParams {
            direct,
            jku,
            kid,
            registry_allowed,
        }
    }

    /// enc_key/sign_key are independent: registry allowed for a key iff that key is not directly provided.
    fn params_for_deserialize<'a>(
        key: &'a KeyMaterial,
        config: Option<&'a DeserializeCryptoConfig>,
        kind: DeserializeKeyKind,
    ) -> KeyLookupParams<'a> {
        let (direct, registry_allowed) = match config {
            None => (None, true),
            Some(c) => {
                let direct = match kind {
                    DeserializeKeyKind::Enc => c.enc_key.as_ref(),
                    DeserializeKeyKind::Sign => c.sign_key.as_ref(),
                };
                let registry_allowed = match kind {
                    DeserializeKeyKind::Enc => c.enc_key.is_none(),
                    DeserializeKeyKind::Sign => c.sign_key.is_none(),
                };
                (direct, registry_allowed)
            }
        };
        KeyLookupParams {
            direct,
            jku: key.jku.as_deref(),
            kid: key.kid.as_deref(),
            registry_allowed,
        }
    }

    fn resolve_key_from_deserialize_config(
        key: &mut KeyMaterial,
        config: Option<&DeserializeCryptoConfig>,
        kind: DeserializeKeyKind,
    ) -> Result<(), CryptoTensorsError> {
        let params = Self::params_for_deserialize(key, config, kind);
        let role = match kind {
            DeserializeKeyKind::Enc => KeyRole::Master,
            DeserializeKeyKind::Sign => KeyRole::Verify,
        };
        let resolved = resolve_key(role, &params, false)?;
        if params.direct.is_some() {
            *key = resolved;
        } else {
            key.update_from_key(&resolved)?;
            if !resolved.alg.is_empty() {
                key.alg = resolved.alg.clone();
            }
        }
        Ok(())
    }

    fn resolve_key_from_serialize_config(
        config: &SerializeCryptoConfig,
        kind: SerializeKeyKind,
    ) -> Result<KeyMaterial, CryptoTensorsError> {
        let params = Self::params_for_serialize(config, kind);
        let role = match kind {
            SerializeKeyKind::Enc => KeyRole::Master,
            SerializeKeyKind::Sign => KeyRole::Signing,
        };
        let mut out = resolve_key(role, &params, true)?;
        // Only overlay kid/jku when key came from registry (not direct).
        // Direct keys ignore config's kid/jku and use the key's own kid/jku.
        if params.direct.is_none() {
            let (kid, jku) = match kind {
                SerializeKeyKind::Enc => (config.enc_kid.clone(), config.enc_jku.clone()),
                SerializeKeyKind::Sign => (config.sign_kid.clone(), config.sign_jku.clone()),
            };
            if kid.is_some() {
                out.kid = kid;
            }
            if jku.is_some() {
                out.jku = jku;
            }
        }
        Ok(out)
    }

    /// Create a new encryptor mapping from metadata
    ///
    /// # Arguments
    ///
    /// * `header` - The Metadata object containing the header
    ///
    /// # Returns
    ///
    /// * `Ok(CryptoTensors)` - If valid encryption metadata was found and verified
    /// * `Err(CryptoTensorsError)` - If verification fails or metadata is invalid
    pub fn from_header(header: &Metadata) -> Result<Option<Self>, CryptoTensorsError> {
        Self::from_header_with_config(header, None)
    }

    /// Create a new encryptor mapping from metadata with optional config
    ///
    /// # Arguments
    ///
    /// * `header` - The Metadata object containing the header
    /// * `config` - Optional deserialization configuration
    ///
    /// # Returns
    ///
    /// * `Ok(CryptoTensors)` - If valid encryption metadata was found and verified
    /// * `Err(CryptoTensorsError)` - If verification fails or metadata is invalid
    pub fn from_header_with_config(
        header: &Metadata,
        config: Option<&DeserializeCryptoConfig>,
    ) -> Result<Option<Self>, CryptoTensorsError> {
        // return None if the header does not contain metadata or metadata does not contain encryption info
        let metadata = match header.metadata().as_ref() {
            Some(m) => m,
            None => return Ok(None),
        };
        let encryption_info = match metadata.get("__encryption__") {
            Some(info) => info,
            None => return Ok(None),
        };

        // Verify required fields exist
        let key_materials = metadata.get("__crypto_keys__").ok_or_else(|| {
            CryptoTensorsError::InvalidKey("Missing __crypto_keys__ in metadata".to_string())
        })?;
        let signature_hex = metadata.get("__signature__").ok_or_else(|| {
            CryptoTensorsError::MissingSignature("Missing __signature__ in metadata".to_string())
        })?;
        let policy_str = metadata.get("__policy__").ok_or_else(|| {
            CryptoTensorsError::Policy("Missing __policy__ in metadata".to_string())
        })?;

        // Parse key materials
        let key_materials: serde_json::Value =
            serde_json::from_str(key_materials).map_err(|e| {
                CryptoTensorsError::InvalidKey(format!("Failed to parse key materials: {}", e))
            })?;
        let version = key_materials
            .get("version")
            .and_then(|v| v.as_str())
            .ok_or(CryptoTensorsError::MissingVersion)?;
        if version != CRYPTOTENSORS_VERSION {
            return Err(CryptoTensorsError::UnsupportedVersion(version.to_string()));
        }
        let mut enc_key = KeyMaterial::from_header(&key_materials["enc"])?;
        let mut sign_key = KeyMaterial::from_header(&key_materials["sign"])?;

        // Load keys from config or registry
        Self::resolve_key_from_deserialize_config(&mut enc_key, config, DeserializeKeyKind::Enc)?;
        Self::resolve_key_from_deserialize_config(&mut sign_key, config, DeserializeKeyKind::Sign)?;

        // Create signer and verify signature
        let signer = HeaderSigner::new(&sign_key)?;
        let signature = BASE64
            .decode(signature_hex)
            .map_err(|_| CryptoTensorsError::InvalidSignatureFormat)?;
        signer
            .signature
            .set(signature)
            .expect("Failed to set signature");

        // Build Metadata for verification by reconstructing it with the same tensor order
        let mut metadata_map = header.metadata().clone().unwrap_or_default();
        metadata_map.remove("__signature__");

        let mut tensors_vec = Vec::new();
        for key in header.offset_keys() {
            let info = header
                .info(&key)
                .ok_or_else(|| {
                    CryptoTensorsError::Verification(format!("Tensor {} not found in header", key))
                })?
                .clone();
            tensors_vec.push((key, info));
        }

        let header_for_verify = Metadata::new(Some(metadata_map), tensors_vec)
            .map_err(|e| CryptoTensorsError::Verification(e.to_string()))?;

        let header_for_verify_json = serde_json::to_string(&header_for_verify)
            .map_err(|e| CryptoTensorsError::Verification(e.to_string()))?;

        if !signer.verify(header_for_verify_json.as_bytes())? {
            return Err(CryptoTensorsError::Verification(
                "Signature verification failed".to_string(),
            ));
        }

        // Verify policy
        let policy: AccessPolicy = serde_json::from_str(policy_str)
            .map_err(|e| CryptoTensorsError::Policy(format!("Failed to parse policy: {}", e)))?;
        if !policy.evaluate(String::new())? {
            return Err(CryptoTensorsError::Policy(
                "Policy evaluation denied".to_string(),
            ));
        }

        // Initialize cryptors after verification
        // Key should already be loaded by resolve_key_from_deserialize_config; fallback via resolve_key when allowed
        // Initialize cryptors after verification
        // Key should already be loaded by resolve_key_from_deserialize_config; fallback via resolve_key when allowed
        if enc_key.k.get().and_then(|v| v.as_ref()).is_none() {
            let params = Self::params_for_deserialize(&enc_key, config, DeserializeKeyKind::Enc);
            if params.registry_allowed {
                let resolved = resolve_key(KeyRole::Master, &params, false)?;
                enc_key.update_from_key(&resolved)?;
                if !resolved.alg.is_empty() {
                    enc_key.alg = resolved.alg.clone();
                }
            } else {
                return Err(CryptoTensorsError::KeyLoad(
                    "encryption key material missing: provide enc_key or provider when not using registry".to_string(),
                ));
            }
        }
        let master_key = enc_key.get_master_key_bytes()?;

        let cryptors: HashMap<String, SingleCryptor> = serde_json::from_str(encryption_info)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;

        // Parallel unwrap of all DEKs (Always Eager Mode)
        cryptors
            .par_iter()
            .try_for_each(|(_, cryptor)| cryptor.init_and_unwrap(&master_key))?;

        // Sanitize enc_key in CryptoTensors (remove secret)
        enc_key = enc_key.sanitize();

        Ok(Some(Self {
            cryptors,
            signer,
            enc_key,
            sign_key,
            policy,
            version: version.to_string(),
        }))
    }

    /// Silently decrypt data for a tensor
    ///
    /// If no encryptor exists for the tensor, returns the original data unchanged.
    ///
    /// # Arguments
    ///
    /// * `tensor_name` - The name of the tensor
    /// * `data` - The encrypted data to decrypt
    ///
    /// # Returns
    ///
    /// * `Ok(&[u8])` - The decrypted data, or the original data if no encryptor exists
    /// * `Err(CryptoTensorsError)` - If decryption fails
    pub fn silent_decrypt<'a>(
        &'a self,
        tensor_name: &str,
        data: &'a [u8],
    ) -> Result<&'a [u8], CryptoTensorsError> {
        match self.get(tensor_name) {
            Some(cryptor) => cryptor.decrypt(data),
            None => Ok(data), // Return original data if no cryptor is found
        }
    }

    /// Silently encrypt data for a tensor
    ///
    /// If no encryptor exists for the tensor, does nothing.
    ///
    /// # Arguments
    ///
    /// * `tensor_name` - The name of the tensor
    /// * `data` - The data to encrypt
    ///
    /// # Returns
    ///
    /// * `Ok(())` - If encryption succeeds or no encryptor exists
    /// * `Err(CryptoTensorsError)` - If encryption fails
    ///
    /// # Errors
    ///
    /// * `RandomGeneration` - If key generation fails
    /// * `Encryption` - If data encryption fails
    /// * `KeyCreation` - If key creation fails
    pub fn silent_encrypt(&self, tensor_name: &str, data: &[u8]) -> Result<(), CryptoTensorsError> {
        match self.get(tensor_name) {
            Some(cryptor) => cryptor.encrypt(data),
            None => Ok(()),
        }
    }

    /// Get decrypted buffer as Arc for zero-copy sharing
    ///
    /// Returns the cached decrypted data if available. Use `silent_decrypt` first
    /// to populate the cache.
    ///
    /// # Arguments
    ///
    /// * `tensor_name` - The name of the tensor
    ///
    /// # Returns
    ///
    /// * `Some(Arc<MmapBuffer>)` - The decrypted data Arc if available (page-aligned)
    /// * `None` - If no decrypted data is available
    pub fn get_buffer(&self, tensor_name: &str) -> Option<Arc<MmapBuffer>> {
        match self.get(tensor_name) {
            Some(cryptor) => cryptor.buffer.get().cloned(),
            None => None,
        }
    }

    /// Rewrap (re-encrypt) the DEKs with new keys
    ///
    /// This method decrypts each tensor's DEK with the old key and re-encrypts it with the new key.
    /// It's useful for key rotation or transferring encrypted data between users.
    ///
    /// # Arguments
    ///
    /// * `old_config` - Configuration for decryption (None = use already loaded keys)
    /// * `new_config` - Configuration for encryption with new keys
    ///
    /// # Returns
    ///
    /// * `Ok(())` - If rewrap succeeds
    /// * `Err(CryptoTensorsError)` - If rewrap fails
    ///
    /// # Example
    ///
    /// ```no_run
    /// use cryptotensors::{CryptoTensors, DeserializeCryptoConfig, SerializeCryptoConfig};
    ///
    /// // Assuming cryptotensors is already loaded
    /// let new_config = SerializeCryptoConfig::with_kids("new-enc", "new-sign");
    /// // cryptotensors.rewrap(None, &new_config)?;
    /// ```
    pub fn rewrap(&mut self, new_config: &SerializeCryptoConfig) -> Result<(), CryptoTensorsError> {
        // 1. Resolve new encryption and signing keys
        let new_enc_key =
            Self::resolve_key_from_serialize_config(new_config, SerializeKeyKind::Enc)?;
        let new_sign_key =
            Self::resolve_key_from_serialize_config(new_config, SerializeKeyKind::Sign)?;

        new_enc_key.validate(ValidateMode::ForCreation)?;
        new_sign_key.validate(ValidateMode::ForCreation)?;

        // 3. Rewrap each cryptor's DEK using with_new_key
        let cryptor_names: Vec<String> = self.cryptors.keys().cloned().collect();
        for name in cryptor_names {
            let old_cryptor = self.cryptors.get(&name).ok_or_else(|| {
                CryptoTensorsError::KeyUnwrap(format!("Cryptor {} not found", name))
            })?;
            let new_cryptor = old_cryptor.with_new_key(&new_enc_key)?;
            self.cryptors.insert(name, new_cryptor);
        }

        // 4. Update keys and signer
        self.signer = HeaderSigner::new(&new_sign_key)?;
        self.enc_key = new_enc_key.sanitize();
        self.sign_key = new_sign_key.sanitize();

        // 5. Update policy if provided
        if let Some(policy) = &new_config.policy {
            self.policy = policy.clone();
        }

        Ok(())
    }

    /// Parallelly encrypt all provided tensors.
    /// This is used during serialization to speed up the encryption process.
    pub fn par_encrypt_all<S: AsRef<str> + Sync, V: crate::tensor::View + Sync>(
        &self,
        tensors: &[(S, V)],
    ) -> Result<(), CryptoTensorsError> {
        tensors.par_iter().try_for_each(|(name, tensor)| {
            if let Some(cryptor) = self.get(name.as_ref()) {
                cryptor.encrypt(tensor.data().as_ref())?;
            }
            Ok::<(), CryptoTensorsError>(())
        })
    }

    /// Parallelly decrypt all provided tensors.
    /// This is used during deserialization to speed up the decryption process.
    pub fn par_decrypt_all(
        &self,
        data: &[u8],
        metadata: &crate::tensor::Metadata,
    ) -> Result<(), CryptoTensorsError> {
        metadata
            .index_map()
            .par_iter()
            .try_for_each(|(name, &index)| {
                if let Some(cryptor) = self.get(name) {
                    let info = metadata.get_tensor(index).ok_or_else(|| {
                        CryptoTensorsError::Decryption(format!(
                            "Tensor info for {} not found",
                            name
                        ))
                    })?;
                    let raw_data = &data[info.data_offsets.0..info.data_offsets.1];
                    cryptor.decrypt(raw_data)?;
                }
                Ok::<(), CryptoTensorsError>(())
            })
    }
}
