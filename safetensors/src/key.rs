// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.
//
// KeyMaterial is a pure data structure for JWK key storage.
// Key loading is delegated to the registry module via KeyProvider implementations.

use crate::encryption::EncryptionAlgorithm;
use crate::signing::SignatureAlgorithm;
use crate::cryptotensors::CryptoTensorsError;
use crate::registry;
use once_cell::sync::OnceCell;
use ring::signature::{Ed25519KeyPair, KeyPair};
use ring::rand::{self, SecureRandom};
use serde::{Deserialize, Serialize, de::Error, Deserializer};
use base64::{Engine as _, engine::general_purpose::STANDARD as BASE64};

/// Validation mode for Key Material
///
/// Different validation modes apply different rules:
/// - `ForCreation`: Used when creating a new key (requires full key material + algorithm)
/// - `FromHeader`: Used when loading from header (requires algorithm, key material can be empty)
/// - `FromJwk`: Used when loading from JWK (requires key material, algorithm is optional)
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ValidateMode {
    /// Validate for key creation (requires full key material and algorithm)
    ForCreation,
    /// Validate when loading from header (requires algorithm, key material can be empty)
    FromHeader,
    /// Validate when loading from JWK (requires key material, algorithm is optional)
    FromJwk,
}

/// JSON Web Key (JWK) type
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum JwkKeyType {
    /// Symmetric key type
    Oct,
    /// Asymmetric key type
    Okp,
}

/// Serialize and deserialize OnceCell<Option<String>>
mod key_material_serde {
    use super::*;

    pub fn deserialize<'de, D>(deserializer: D) -> Result<OnceCell<Option<String>>, D::Error>
    where
        D: Deserializer<'de>,
    {
        let value: Option<String> = Option::deserialize(deserializer)?;
        let cell = OnceCell::new();
        if let Some(v) = value {
            cell.set(Some(v)).map_err(|_| D::Error::custom("Failed to set OnceCell value"))?;
        }
        Ok(cell)
    }
}

/// Key Material structure for managing cryptographic keys
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct KeyMaterial {
    /// The key type (symmetric or asymmetric)
    #[serde(rename = "kty")]
    pub key_type: JwkKeyType,

    /// The algorithm used for encryption or signing
    pub alg: String,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    kid: Option<String>,
    
    /// The master key encoded in base64 for encryption
    #[serde(skip_serializing, default)]
    #[serde(with = "key_material_serde")]
    pub k: OnceCell<Option<String>>,

    /// The public key encoded in base64 for signing
    #[serde(skip_serializing, default)]
    #[serde(with = "key_material_serde")]
    #[serde(rename = "x")]
    pub x_pub: OnceCell<Option<String>>,

    /// The private key encoded in base64 for signing
    #[serde(skip_serializing, default)]
    #[serde(with = "key_material_serde")]
    #[serde(rename = "d")]
    pub d_priv: OnceCell<Option<String>>,

    #[serde(skip_serializing_if = "Option::is_none")]
    jku: Option<String>,
}

impl KeyMaterial {
    /// Create a new KeyMaterial
    fn new_internal(
        key_type: JwkKeyType,
        alg: String,
        kid: Option<String>,
        jku: Option<String>,
        k: Option<Vec<u8>>,
        x_pub: Option<Vec<u8>>,
        d_priv: Option<Vec<u8>>,
    ) -> Result<Self, CryptoTensorsError> {
        let key_material = Self {
            key_type,
            alg,
            kid,
            k: OnceCell::new(), 
            x_pub: OnceCell::new(),
            d_priv: OnceCell::new(),
            jku,
        };

        if let Some(k) = k {
            key_material.k.set(Some(BASE64.encode(&k)))
                .map_err(|_| CryptoTensorsError::KeyCreation("Failed to set key".to_string()))?;
        }
        if let Some(x_pub) = x_pub {
            key_material.x_pub.set(Some(BASE64.encode(&x_pub)))
                .map_err(|_| CryptoTensorsError::KeyCreation("Failed to set public key".to_string()))?;
        }
        if let Some(d_priv) = d_priv {
            key_material.d_priv.set(Some(BASE64.encode(&d_priv)))
                .map_err(|_| CryptoTensorsError::KeyCreation("Failed to set private key".to_string()))?;
        }

        Ok(key_material)
    }

    /// Load key from the registry
    ///
    /// This method retrieves the appropriate key from registered KeyProviders.
    /// Users must register providers before calling this method.
    ///
    /// # Example
    ///
    /// ```ignore
    /// use safetensors::registry::{register_provider, FileKeyProvider};
    /// use safetensors::key::KeyMaterial;
    ///
    /// // Register a provider first
    /// register_provider(Box::new(FileKeyProvider::new("/path/to/keys.jwk")));
    ///
    /// // Then load key
    /// let key = KeyMaterial::new_enc_key(Some("aes256gcm"), None, None)?;
    /// key.load_key()?;
    /// ```
    pub fn load_key(&self) -> Result<(), CryptoTensorsError> {
        // Get key from registry based on key type
        let jwk = match self.key_type {
            JwkKeyType::Oct => registry::get_master_key()?,
            JwkKeyType::Okp => registry::get_verify_key()?,
        };
        
        // Parse and validate the JWK
        let key = Self::from_jwk(&jwk, false)?;
        
        // Update this key material with the loaded key
        self.update_from_key(&key)
    }

    /// Update this key material from another key material
    fn update_from_key(&self, key: &KeyMaterial) -> Result<(), CryptoTensorsError> {
        // Update key fields based on key type
        match self.key_type {
            JwkKeyType::Oct => {
                if let Some(Some(k)) = key.k.get() {
                    self.k.set(Some(k.clone()))
                        .map_err(|_| CryptoTensorsError::MissingMasterKey)?;
                } else {
                    return Err(CryptoTensorsError::MissingMasterKey);
                }
            }
            JwkKeyType::Okp => {
                if let Some(Some(x_pub)) = key.x_pub.get() {
                    self.x_pub.set(Some(x_pub.clone()))
                        .map_err(|_| CryptoTensorsError::MissingVerificationKey)?;
                } else {
                    return Err(CryptoTensorsError::MissingVerificationKey);
                }
                // No need to validate private key as this is only used for verification
            }
        }

        Ok(())
    }

    /// Validate the Key Material based on different scenarios
    pub fn validate(&self, mode: ValidateMode) -> Result<(), CryptoTensorsError> {
        // Validate key type
        if self.key_type != JwkKeyType::Oct && self.key_type != JwkKeyType::Okp {
            return Err(CryptoTensorsError::InvalidKey("Invalid key type".to_string()));
        }

        // Validate algorithm based on mode
        match mode {
            ValidateMode::ForCreation | ValidateMode::FromHeader => {
                if self.alg.is_empty() {
                    return Err(CryptoTensorsError::InvalidAlgorithm("Missing alg field".to_string()));
                }
            }
            ValidateMode::FromJwk => {
                // Algorithm is optional when loading from JWK
            }
        }

        // Validate key existence based on mode and key type
        match mode {
            ValidateMode::ForCreation => {
                match self.key_type {
                    JwkKeyType::Oct => {
                        if self.k.get().and_then(|k| k.as_ref()).is_none() {
                            return Err(CryptoTensorsError::MissingMasterKey);
                        }
                    }
                    JwkKeyType::Okp => {
                        // For signing keys, both private and public keys are required
                        // Private key is needed for signing, public key is needed for verification
                        if self.d_priv.get().and_then(|k| k.as_ref()).is_none() {
                            return Err(CryptoTensorsError::MissingSigningKey);
                        }
                        if self.x_pub.get().and_then(|k| k.as_ref()).is_none() {
                            return Err(CryptoTensorsError::MissingVerificationKey);
                        }
                    }
                }
            }
            ValidateMode::FromJwk => {
                match self.key_type {
                    JwkKeyType::Oct => {
                        if self.k.get().and_then(|k| k.as_ref()).is_none() {
                            return Err(CryptoTensorsError::MissingMasterKey);
                        }
                    }
                    JwkKeyType::Okp => {
                        if self.x_pub.get().and_then(|k| k.as_ref()).is_none() {
                            return Err(CryptoTensorsError::MissingVerificationKey);
                        }
                    }
                }
            }
            ValidateMode::FromHeader => {
                // Keys are not required when loading from header (will be loaded from registry)
            }
        }

        // Validate algorithm based on key type if algorithm is present
        if !self.alg.is_empty() {
            match self.key_type {
                JwkKeyType::Oct => {
                    if EncryptionAlgorithm::from_str(&self.alg).is_none() {
                        return Err(CryptoTensorsError::InvalidAlgorithm("Invalid encryption algorithm".to_string()));
                    }
                }
                JwkKeyType::Okp => {
                    if SignatureAlgorithm::from_str(&self.alg).is_none() {
                        return Err(CryptoTensorsError::InvalidAlgorithm("Invalid signature algorithm".to_string()));
                    }
                }
            }
        }
        
        Ok(())
    }

    /// Create a new symmetric encryption key (kty=oct)
    ///
    /// # Arguments  
    /// * `alg` - Optional algorithm name (default: "aes256gcm")
    /// * `kid` - Optional key ID
    /// * `jku` - Optional JWK URL
    /// * `key_b64` - Optional base64-encoded key string
    ///
    /// # Returns
    /// * `Ok(KeyMaterial)` - The generated key material
    /// * `Err(CryptoTensorsError)` - If input is invalid
    pub fn new_enc_key(
        key_b64: Option<String>,
        alg: Option<String>,
        kid: Option<String>,
        jku: Option<String>,
    ) -> Result<Self, CryptoTensorsError> {
        let alg = alg.unwrap_or_else(|| "aes256gcm".to_string());
        let enc_alg = EncryptionAlgorithm::from_str(&alg)
            .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(alg.clone()))?;
        let key_bytes = if let Some(ref b64_str) = key_b64 {
            let bytes = BASE64.decode(b64_str)
                .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 key: {}", e)))?;
            if bytes.len() != enc_alg.key_len() {
                return Err(CryptoTensorsError::InvalidKeyLength {
                    expected: enc_alg.key_len(),
                    actual: bytes.len(),
                });
            }
            bytes
        } else {
            // Generate random key
            let mut key = vec![0u8; enc_alg.key_len()];
            let rng = rand::SystemRandom::new();
            rng.fill(&mut key)
                .map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;
            key
        };
        KeyMaterial::new_internal(
            JwkKeyType::Oct,
            alg,
            kid,
            jku,
            Some(key_bytes),
            None,
            None,
        )
    }

    /// Create a new signing key (kty=okp)
    ///
    /// # Arguments
    /// * `alg` - Optional algorithm name (default: "ed25519")
    /// * `kid` - Optional key ID
    /// * `jku` - Optional JWK URL
    /// * `public_b64` - Optional base64-encoded public key string
    /// * `private_b64` - Optional base64-encoded private key string
    ///
    /// # Returns
    /// * `Ok(KeyMaterial)` - The generated key material
    /// * `Err(CryptoTensorsError)` - If input is invalid
    pub fn new_sign_key(
        public_b64: Option<String>,
        private_b64: Option<String>,
        alg: Option<String>,
        kid: Option<String>,
        jku: Option<String>,
    ) -> Result<Self, CryptoTensorsError> {
        let alg = alg.unwrap_or_else(|| "ed25519".to_string());
        let sig_alg = SignatureAlgorithm::from_str(&alg)
            .ok_or_else(|| CryptoTensorsError::InvalidAlgorithm(alg.clone()))?;
        match sig_alg {
            SignatureAlgorithm::Ed25519 => {
                let public = if let Some(pub_b64) = public_b64 {
                    let pub_bytes = BASE64.decode(&pub_b64)
                        .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 public key: {}", e)))?;
                    if pub_bytes.len() != 32 {
                        return Err(CryptoTensorsError::InvalidKeyLength {
                            expected: 32,
                            actual: pub_bytes.len(),
                        });
                    }
                    Some(pub_bytes)
                } else { None };
                let private = if let Some(priv_b64) = private_b64 {
                    let priv_bytes = BASE64.decode(&priv_b64)
                        .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 private key: {}", e)))?;
                    if priv_bytes.len() != 32 {
                        return Err(CryptoTensorsError::InvalidKeyLength {
                            expected: 32,
                            actual: priv_bytes.len(),
                        });
                    }
                    Some(priv_bytes)
                } else { None };
                // If both are None, generate new key pair
                let (public, private) = if public.is_none() && private.is_none() {
                    let rng = rand::SystemRandom::new();
                    let mut private_key = [0u8; 32];
                    rng.fill(&mut private_key).map_err(|e| CryptoTensorsError::RandomGeneration(e.to_string()))?;
                    let key_pair = Ed25519KeyPair::from_seed_unchecked(&private_key)
                        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
                    (Some(key_pair.public_key().as_ref().to_vec()), Some(private_key.to_vec()))
                } else if public.is_some() && private.is_some() {
                    // Try to verify the key pair
                    Ed25519KeyPair::from_seed_and_public_key(private.clone().unwrap().as_slice(), public.clone().unwrap().as_slice() )
                        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
                    (public, private)
                } else if private.is_some() && public.is_none() {
                    // If only private key is provided, derive public key from it
                    let private_key = private.clone().unwrap();
                    let key_pair = Ed25519KeyPair::from_seed_unchecked(&private_key)
                        .map_err(|e| CryptoTensorsError::KeyCreation(e.to_string()))?;
                    (Some(key_pair.public_key().as_ref().to_vec()), private)
                } else {
                    // Only public key provided (verification-only key) - this is valid for verification
                    (public, private)
                };
                KeyMaterial::new_internal(
                    JwkKeyType::Okp,
                    alg,
                    kid,
                    jku,
                    None,
                    public,
                    private,
                )
            }
        }
    }

    /// Convert this KeyMaterial to a JWK JSON string
    ///
    /// # Returns
    /// * `Ok(String)` - JWK JSON string
    /// * `Err(CryptoTensorsError)` - If serialization fails
    pub fn to_jwk(&self) -> Result<String, CryptoTensorsError> {
        // Only include JWK-relevant fields
        #[derive(Serialize)]
        struct JwkOut<'a> {
            #[serde(rename = "kty")]
            key_type: &'a JwkKeyType,
            alg: &'a String,
            #[serde(skip_serializing_if = "Option::is_none")]
            kid: &'a Option<String>,
            #[serde(skip_serializing_if = "Option::is_none")]
            jku: &'a Option<String>,
            #[serde(skip_serializing_if = "Option::is_none")]
            k: Option<&'a String>,
            #[serde(skip_serializing_if = "Option::is_none")]
            #[serde(rename = "x")]
            x_pub: Option<&'a String>,
            #[serde(skip_serializing_if = "Option::is_none")]
            #[serde(rename = "d")]
            d_priv: Option<&'a String>,
        }
        let jwk = JwkOut {
            key_type: &self.key_type,
            alg: &self.alg,
            kid: &self.kid,
            jku: &self.jku,
            k: self.k.get().and_then(|v| v.as_ref()),
            x_pub: self.x_pub.get().and_then(|v| v.as_ref()),
            d_priv: self.d_priv.get().and_then(|v| v.as_ref()),
        };
        serde_json::to_string(&jwk).map_err(|e| CryptoTensorsError::KeyCreation(format!("Failed to serialize JWK: {}", e)))
    }

    /// Get the master key as decoded bytes
    ///
    /// # Returns
    /// * `Ok(Vec<u8>)` - The decoded master key bytes
    /// * `Err(CryptoTensorsError::MissingMasterKey)` - If no master key is set
    /// * `Err(CryptoTensorsError::InvalidKey)` - If base64 decoding fails
    pub fn get_master_key_bytes(&self) -> Result<Vec<u8>, CryptoTensorsError> {
        let k = self.k.get()
            .and_then(|v| v.as_ref())
            .ok_or(CryptoTensorsError::MissingMasterKey)?;
        BASE64.decode(k)
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 master key: {}", e)))
    }

    /// Get the public key as decoded bytes
    ///
    /// # Returns
    /// * `Ok(Vec<u8>)` - The decoded public key bytes
    /// * `Err(CryptoTensorsError::MissingVerificationKey)` - If no public key is set
    /// * `Err(CryptoTensorsError::InvalidKey)` - If base64 decoding fails
    pub fn get_public_key_bytes(&self) -> Result<Vec<u8>, CryptoTensorsError> {
        let x = self.x_pub.get()
            .and_then(|v| v.as_ref())
            .ok_or(CryptoTensorsError::MissingVerificationKey)?;
        BASE64.decode(x)
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 public key: {}", e)))
    }

    /// Get the private key as decoded bytes
    ///
    /// # Returns
    /// * `Ok(Vec<u8>)` - The decoded private key bytes
    /// * `Err(CryptoTensorsError::MissingSigningKey)` - If no private key is set
    /// * `Err(CryptoTensorsError::InvalidKey)` - If base64 decoding fails
    pub fn get_private_key_bytes(&self) -> Result<Vec<u8>, CryptoTensorsError> {
        let d = self.d_priv.get()
            .and_then(|v| v.as_ref())
            .ok_or(CryptoTensorsError::MissingSigningKey)?;
        BASE64.decode(d)
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Invalid base64 private key: {}", e)))
    }

    /// Parse KeyMaterial from a serde_json::Value (header)
    ///
    /// # Arguments
    /// * `header` - serde_json::Value containing key material
    ///
    /// # Returns
    /// * `Ok<KeyMaterial>` - Key material
    /// * `Err(CryptoTensorsError)` - If parsing or validation fails
    pub fn from_header(header: &serde_json::Value) -> Result<Self, CryptoTensorsError> {
        let key: KeyMaterial = serde_json::from_value(header.clone())
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Failed to parse key material: {}", e)))?;
        key.validate(ValidateMode::FromHeader)?;
        Ok(key)
    }


    /// Create KeyMaterial from JWK string
    ///
    /// # Arguments
    /// * `jwk_str` - JSON Web Key as a string
    /// * `load_key` - Whether to immediately load the key
    ///
    /// # Returns
    /// * `Ok(KeyMaterial)` - Successfully created key material
    /// * `Err(CryptoTensorsError)` - If parsing or validation fails
    pub fn from_jwk(jwk_str: &serde_json::Value, is_for_save: bool) -> Result<Self, CryptoTensorsError> {
        let key_material: KeyMaterial = serde_json::from_value(jwk_str.clone())
            .map_err(|e| CryptoTensorsError::InvalidKey(format!("Failed to parse JWK: {}", e)))?;
        
        // Requires symmetric key or private key for creation mode
        // Requires symmetric key or public key for JWK loading mode
        key_material.validate(if is_for_save { ValidateMode::ForCreation } else { ValidateMode::FromJwk })?;
        
        Ok(key_material)
    }
}

