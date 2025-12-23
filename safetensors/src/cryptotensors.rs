// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::encryption::{decrypt_data, encrypt_data, EncryptionAlgorithm};
use crate::key::{KeyMaterial, ValidateMode};
use crate::policy::AccessPolicy;
use crate::signing::{sign_data, verify_signature, SignatureAlgorithm};
use crate::tensor::{Metadata, TensorInfo};
use base64::{engine::general_purpose::STANDARD as BASE64, Engine as _};
use once_cell::sync::OnceCell;
use ring::rand::{self, SecureRandom};
use serde::{de::Error, Deserialize, Deserializer, Serialize, Serializer};
use std::collections::HashMap;
use std::sync::Arc;
use thiserror::Error;
use zeroize::Zeroizing;

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

/// Serialize and deserialize OnceCell<String>
mod cryptor_serde {
    use super::*;

    pub fn serialize<S>(cell: &OnceCell<String>, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        match cell.get() {
            Some(value) => value.serialize(serializer),
            None => serializer.serialize_none(),
        }
    }

    pub fn deserialize<'de, D>(deserializer: D) -> Result<OnceCell<String>, D::Error>
    where
        D: Deserializer<'de>,
    {
        let value: Option<String> = Option::deserialize(deserializer)?;
        let cell = OnceCell::new();
        if let Some(v) = value {
            cell.set(v).map_err(|_| D::Error::custom("Failed to set OnceCell value"))?;
        }
        Ok(cell)
    }
}

/// Configuration for serializing tensors with encryption
pub struct SerializeCryptoConfig {
    /// CryptoTensors version
    version: String,
    /// The names of the tensors to encrypt
    tensors: Option<Vec<String>>,
    /// The key material for encryption
    enc_key: KeyMaterial,
    /// The key material for signing
    sign_key: KeyMaterial,
    /// Access policy for model loading and KMS validation
    policy: AccessPolicy,
}

impl SerializeCryptoConfig {
    /// Create a new configuration for serializing tensors with encryption
    pub fn new(
        version: String,
        tensors: Option<Vec<String>>,
        enc_key: KeyMaterial,
        sign_key: KeyMaterial,
        policy: AccessPolicy,
    ) -> Result<Self, CryptoTensorsError> {
        if version != "1" {
            return Err(CryptoTensorsError::UnsupportedVersion(version));
        }
        enc_key.validate(ValidateMode::ForCreation)?;
        sign_key.validate(ValidateMode::ForCreation)?;
        Ok(Self {
            tensors,
            enc_key,
            sign_key,
            policy,
            version,
        })
    }
}

/// Information about encrypted tensor data and methods for encryption/decryption
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SingleCryptor<'data> {
    /// Algorithm used for encryption
    #[serde(skip)]
    enc_algo: String,
    /// Encrypted tensor key encoded in base64
    #[serde(with = "cryptor_serde")]
    wrapped_key: OnceCell<String>,
    /// Initialization vector for key encryption encoded in base64
    #[serde(with = "cryptor_serde")]
    key_iv: OnceCell<String>,
    /// Authentication tag for key encryption encoded in base64
    #[serde(with = "cryptor_serde")]
    key_tag: OnceCell<String>,
    /// Initialization vector for data encryption encoded in base64
    #[serde(with = "cryptor_serde")]
    iv: OnceCell<String>,
    /// Authentication tag for data encryption encoded in base64
    #[serde(with = "cryptor_serde")]
    tag: OnceCell<String>,
    /// Buffer for decrypted data
    #[serde(skip)]
    buffer: OnceCell<Vec<u8>>,
    /// Master key for key encryption/decryption
    #[serde(skip)]
    master_key: Arc<[u8]>,
    /// Phantom data for lifetime tracking
    #[serde(skip)]
    _phantom: std::marker::PhantomData<&'data ()>,
}

impl<'data> SingleCryptor<'data> {
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
        let alg = EncryptionAlgorithm::from_str(&key_material.alg)
            .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(key_material.alg.clone()))?;
        let master_key = key_material.get_master_key_bytes()?;
        
        Ok(Self {
            enc_algo: alg.to_string(),
            wrapped_key: OnceCell::new(),
            key_iv: OnceCell::new(),
            key_tag: OnceCell::new(),
            iv: OnceCell::new(),
            tag: OnceCell::new(),
            buffer: OnceCell::new(),
            master_key: Arc::from(master_key),
            _phantom: std::marker::PhantomData,
        })
    }

    /// Generate a random key for data encryption
    ///
    /// # Returns
    ///
    /// * `Ok(Vec<u8>)` - A randomly generated key of the appropriate length
    /// * `Err(CryptoTensorsError)` - If key generation fails
    ///
    /// # Errors
    ///
    /// * `InvalidAlgorithm` - If the algorithm name is not supported
    /// * `RandomGeneration` - If random number generation fails
    fn random_key(&self) -> Result<Vec<u8>, CryptoTensorsError> {
        let algo = EncryptionAlgorithm::from_str(&self.enc_algo)
            .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(self.enc_algo.clone()))?;

        let mut key = vec![0u8; algo.key_len()];
        let rng = rand::SystemRandom::new();
        rng.fill(&mut key)
            .map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;
        Ok(key)
    }

    /// Wrap (encrypt) a key using the master key
    ///
    /// # Arguments
    ///
    /// * `key` - The key to wrap
    ///
    /// # Returns
    ///
    /// * `Ok(())` - If key wrapping succeeds
    /// * `Err(CryptoTensorsError)` - If key wrapping fails
    ///
    /// # Errors
    ///
    /// * `Encryption` - If key encryption fails
    fn wrap_key(&self, key: &[u8]) -> Result<(), CryptoTensorsError> {
        let mut key_buf = key.to_vec();
        let (key_iv, key_tag) =
            encrypt_data(&mut key_buf, &self.master_key, &self.enc_algo)?;
        self.wrapped_key.set(BASE64.encode(&key_buf))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set wrapped key".to_string()))?;
        self.key_iv.set(BASE64.encode(&key_iv))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set key iv".to_string()))?;
        self.key_tag.set(BASE64.encode(&key_tag))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set key tag".to_string()))?;
        Ok(())
    }

    /// Unwrap (decrypt) a key using the master key
    ///
    /// # Returns
    ///
    /// * `Ok(Vec<u8>)` - The unwrapped key
    /// * `Err(CryptoTensorsError)` - If key unwrapping fails
    ///
    /// # Errors
    ///
    /// * `MissingMasterKey` - If the master key is not set
    /// * `Decryption` - If key decryption fails
    fn unwrap_key(&self) -> Result<Vec<u8>, CryptoTensorsError> {
        // Validate master key
        if self.master_key.is_empty() {
            return Err(CryptoTensorsError::MissingMasterKey);
        }

        let mut data_key = BASE64.decode(&self.wrapped_key.get().ok_or_else(|| CryptoTensorsError::KeyUnwrap("wrapped_key is empty".to_string()))?)
            .map_err(|e| CryptoTensorsError::KeyUnwrap(e.to_string()))?;
        decrypt_data(
            &mut data_key,
            &self.master_key,
            &self.enc_algo,
            BASE64.decode(&self.key_iv.get().ok_or_else(|| CryptoTensorsError::KeyUnwrap("key_iv is empty".to_string()))?)
                .map_err(|e| CryptoTensorsError::KeyUnwrap(e.to_string()))?.as_slice(),
            BASE64.decode(&self.key_tag.get().ok_or_else(|| CryptoTensorsError::KeyUnwrap("key_tag is empty".to_string()))?)
                .map_err(|e| CryptoTensorsError::KeyUnwrap(e.to_string()))?.as_slice(),
        )?;
        Ok(data_key)
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
    fn decrypt(&'data self, data: &[u8]) -> Result<&'data [u8], CryptoTensorsError> {
        self.buffer
            .get_or_try_init(|| {
                let data_key = Zeroizing::new(self.unwrap_key()?);

                let mut buffer = data.to_vec();
                decrypt_data(
                    &mut buffer,
                    data_key.as_slice(),
                    &self.enc_algo,
                    BASE64.decode(&self.iv.get().ok_or_else(|| CryptoTensorsError::KeyUnwrap("iv is empty".to_string()))?)
                        .map_err(|e| CryptoTensorsError::KeyUnwrap(e.to_string()))?.as_slice(),
                    BASE64.decode(&self.tag.get().ok_or_else(|| CryptoTensorsError::KeyUnwrap("tag is empty".to_string()))?)
                        .map_err(|e| CryptoTensorsError::KeyUnwrap(e.to_string()))?.as_slice(),
                )?;

                Ok(buffer)
            })
            .map(|vec_ref| vec_ref.as_slice())
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
        // Generate random data encryption key
        let data_key = Zeroizing::new(self.random_key()?);
        // Copy data to buffer, prepare in-place encryption
        let mut buffer = data.to_vec();
        let (iv, tag) = encrypt_data(&mut buffer, &data_key, &self.enc_algo)?;
        self.iv.set(BASE64.encode(&iv))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set iv".to_string()))?;
        self.tag.set(BASE64.encode(&tag))
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set tag".to_string()))?;
        self.wrap_key(&data_key)?;
        self.buffer.set(buffer)
            .map_err(|_| CryptoTensorsError::Encryption("Failed to set buffer".to_string()))?;
        Ok(())
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
        let alg = SignatureAlgorithm::from_str(&key_material.alg)
            .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(key_material.alg.clone()))?;

        let priv_key = key_material.d_priv.get()
            .and_then(|k| k.as_ref())
            .map(|k| BASE64.decode(k)
                .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 private key: {}", e))))
            .transpose()?;

        let pub_key = key_material.x_pub.get()
            .and_then(|k| k.as_ref())
            .map(|k| BASE64.decode(k)
                .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 public key: {}", e))))
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
                self.signature
                    .set(signature)
                    .map_err(|_| CryptoTensorsError::Signing("Signature already set".to_string()))?;
                Ok(())
            }
            None => Err(CryptoTensorsError::MissingSigningKey),
        }
    }

    /// Verify the header signature
    fn verify(&self, data: &[u8]) -> Result<bool, CryptoTensorsError> {
        match &self.pub_key {
            Some(key) => {
                match self.signature.get() {
                    Some(signature) => verify_signature(data, signature, key, &self.alg),
                    None => Err(CryptoTensorsError::MissingSignature("No signature to verify".to_string())),
                }
            }
            None => Err(CryptoTensorsError::MissingVerificationKey),
        }
    }
}


/// Manager for handling encryption and decryption of multiple tensors
#[derive(Debug)]
pub struct CryptoTensors<'data> {
    /// Mapping from tensor names to their encryptors
    cryptors: HashMap<String, SingleCryptor<'data>>,
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

impl<'data> CryptoTensors<'data> {
    /// Get the encryptor for a specific tensor
    pub fn get(&self, tensor_name: &str) -> Option<&SingleCryptor<'data>> {
        self.cryptors.get(tensor_name)
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
        // Check version
        if config.version != "1" {
            return Err(CryptoTensorsError::UnsupportedVersion(config.version.clone()));
        }
        config.enc_key.validate(ValidateMode::ForCreation)?;
        config.sign_key.validate(ValidateMode::ForCreation)?;

        // Determine which tensors need to be encrypted
        let matched_tensors = match &config.tensors {
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
                let cryptor = SingleCryptor::new(&config.enc_key)?;
                Ok((name.clone(), cryptor))
            })
            .collect::<Result<HashMap<String, SingleCryptor<'data>>, CryptoTensorsError>>()?;

        // Create signer
        let signer = HeaderSigner::new(&config.sign_key)?;

        Ok(Some(Self {
            cryptors,
            enc_key: config.enc_key.clone(),
            sign_key: config.sign_key.clone(),
            signer,
            policy: config.policy.clone(),
            version: config.version.clone(),
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
        let crypto_json = serde_json::to_string(&self.cryptors)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        new_metadata.insert("__encryption__".to_string(), crypto_json);

        // Add policy information
        let policy_json = serde_json::to_string(&self.policy)
            .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        new_metadata.insert("__policy__".to_string(), policy_json);

        // Add signature information
        let header = Metadata::new(Some(new_metadata.clone()), tensors)
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Failed to create metadata: {}", e)))?;
        let header_json = serde_json::to_string(&header)?;
        self.signer.sign(&header_json.as_bytes())?;
        let signature = self.signer.signature.get()
            .ok_or_else(|| CryptoTensorsError::Signing("Failed to get signature".to_string()))?;
        new_metadata.insert("__signature__".to_string(), BASE64.encode(signature));

        Ok(Some(new_metadata))
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
        let key_materials = metadata
            .get("__crypto_keys__")
            .ok_or_else(|| CryptoTensorsError::InvalidKey("Missing __crypto_keys__ in metadata".to_string()))?;
        let signature_hex = metadata
            .get("__signature__")
            .ok_or_else(|| CryptoTensorsError::MissingSignature("Missing __signature__ in metadata".to_string()))?;
        let policy_str = metadata.get("__policy__")
            .ok_or_else(|| CryptoTensorsError::Policy("Missing __policy__ in metadata".to_string()))?;

        // Parse key materials
        let key_materials: serde_json::Value = serde_json::from_str(key_materials)
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Failed to parse key materials: {}", e)))?;
        let version = key_materials.get("version")
            .and_then(|v| v.as_str())
            .ok_or(CryptoTensorsError::MissingVersion)?;
        if version != "1" {
            return Err(CryptoTensorsError::UnsupportedVersion(version.to_string()));
        }
        let enc_key = KeyMaterial::from_header(&key_materials["enc"])?;
        let sign_key = KeyMaterial::from_header(&key_materials["sign"])?;


        // Load keys
        sign_key.load_key()?;

        // Create signer and verify signature
        let signer = HeaderSigner::new(&sign_key)?;
        let signature = BASE64.decode(signature_hex)
            .map_err(|_| CryptoTensorsError::InvalidSignatureFormat)?;
        signer.signature.set(signature)
            .expect("Failed to set signature");
        
        // Build JSON for verification by cloning metadata and removing signature
        // We can't directly modify Metadata's private fields, so we work with JSON
        let mut header_for_verify: serde_json::Value = serde_json::to_value(&header)
            .map_err(|e| CryptoTensorsError::Verification(e.to_string()))?;
        if let Some(meta) = header_for_verify.get_mut("__metadata__") {
            if let Some(obj) = meta.as_object_mut() {
                obj.remove("__signature__");
            }
        }
        let header_for_verify_json = serde_json::to_string(&header_for_verify)
            .map_err(|e| CryptoTensorsError::Verification(e.to_string()))?;
        if !signer.verify(header_for_verify_json.as_bytes())? {
            return Err(CryptoTensorsError::Verification("Signature verification failed".to_string()));
        }

        // Verify policy
        let policy: AccessPolicy = serde_json::from_str(policy_str)
            .map_err(|e| CryptoTensorsError::Policy(format!("Failed to parse policy: {}", e)))?;
        if !policy.evaluate(String::new())? {
            return Err(CryptoTensorsError::Policy("Policy evaluation denied".to_string()));
        }

        // Initialize cryptors after verification
        enc_key.load_key()?;
        let master_key: Arc<[u8]> = Arc::from(enc_key.get_master_key_bytes()?);

        let mut cryptors: HashMap<String, SingleCryptor<'data>> = serde_json::from_str(encryption_info)
        .map_err(|e| CryptoTensorsError::Encryption(e.to_string()))?;
        for cryptor in cryptors.values_mut() {
            cryptor.master_key = master_key.clone();
            cryptor.enc_algo = enc_key.alg.clone();
        }

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
    pub fn silent_decrypt(
        &'data self,
        tensor_name: &str,
        data: &'data [u8],
    ) -> Result<&'data [u8], CryptoTensorsError> {
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
    pub fn silent_encrypt(
        &self,
        tensor_name: &str,
        data: &[u8],
    ) -> Result<(), CryptoTensorsError> {
        match self.get(tensor_name) {
            Some(cryptor) => cryptor.encrypt(data),
            None => Ok(()),
        }
    }

    /// Get encrypted data for a specific tensor
    ///
    /// # Arguments
    ///
    /// * `tensor_name` - The name of the tensor
    ///
    /// # Returns
    ///
    /// * `Some(&[u8])` - The encrypted data if available
    /// * `None` - If no encrypted data is available
    pub fn get_buffer(&self, tensor_name: &str) -> Option<&[u8]> {
        match self.get(tensor_name) {
            Some(cryptor) => cryptor.buffer.get().map(|buf| buf.as_slice()),
            None => None,
        }
    }
}

