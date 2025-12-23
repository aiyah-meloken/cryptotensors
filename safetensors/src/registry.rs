// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.
//
// This module provides a pluggable KeyProvider registry interface that allows
// different key management systems (KMS, HSM, etc.) to be integrated without
// modifying the core cryptotensors library.

use crate::cryptotensors::CryptoTensorsError;
use std::path::Path;
use std::sync::{OnceLock, RwLock};

// ============================================================================
// JWK URL Parser
// ============================================================================

/// Parsed JWK URL with scheme and path
#[derive(Debug, Clone)]
pub struct JwkUrl {
    /// The file path extracted from the URL
    pub path: String,
}

impl JwkUrl {
    /// Parse a JWK URL (supports file:// scheme)
    ///
    /// # Arguments
    /// * `url` - URL string like "file:///path/to/keys.jwk" or "file://~/keys.jwk"
    ///
    /// # Returns
    /// * `Ok(JwkUrl)` - Parsed URL with resolved path
    /// * `Err(CryptoTensorsError::InvalidJwkUrl)` - If URL format is invalid
    pub fn parse(url: &str) -> Result<Self, CryptoTensorsError> {
        if let Some((scheme, rest)) = url.split_once("://") {
            match scheme.to_lowercase().as_str() {
                "file" => (),
                _ => return Err(CryptoTensorsError::InvalidJwkUrl(url.to_string())),
            };

            // Handle Unix path
            let path = if rest.starts_with('/') {
                rest.to_string()
            } else if rest.starts_with('~') {
                let home = std::env::var("HOME")
                    .map_err(|e| CryptoTensorsError::KeyLoad(format!("Failed to get HOME: {}", e)))?;
                format!("{}{}", home, &rest[1..])
            } else {
                return Err(CryptoTensorsError::InvalidJwkUrl("Only absolute paths and ~ are supported".to_string()));
            };

            Ok(Self { path })
        } else {
            Err(CryptoTensorsError::InvalidJwkUrl("Missing URL scheme".to_string()))
        }
    }
}

// ============================================================================
// JWK File Loader (shared utility)
// ============================================================================

/// Load JWK(s) from a file and return as JSON values
///
/// Supports both single JWK and JWK Set formats.
///
/// # Arguments
/// * `path` - File path to the JWK file
///
/// # Returns
/// * `Ok(Vec<serde_json::Value>)` - List of JWK values
/// * `Err(CryptoTensorsError)` - If file cannot be read or parsed
pub fn load_jwks_from_file(path: &str) -> Result<Vec<serde_json::Value>, CryptoTensorsError> {
    let content = std::fs::read_to_string(path)
        .map_err(|e| CryptoTensorsError::KeyLoad(format!("Failed to read file {}: {}", path, e)))?;
    
    // Try to parse as a single JWK first
    if let Ok(jwk) = serde_json::from_str::<serde_json::Value>(&content) {
        if jwk.get("kty").is_some() {
            return Ok(vec![jwk]);
        }
        
        // Try to parse as JWK Set
        if let Some(keys) = jwk.get("keys").and_then(|k| k.as_array()) {
            return Ok(keys.clone());
        }
    }
    
    Err(CryptoTensorsError::KeyLoad(format!("Failed to parse JWK from {}", path)))
}

/// Select a key from a list of JWKs based on key type and optional filters
///
/// # Arguments
/// * `keys` - List of JWK values
/// * `kty` - Key type to filter by ("oct" or "okp")
/// * `alg` - Optional algorithm to filter by
/// * `kid` - Optional key ID to filter by
///
/// # Returns
/// * `Some(serde_json::Value)` - Matching JWK
/// * `None` - No matching key found
pub fn select_jwk(
    keys: &[serde_json::Value], 
    kty: &str,
    alg: Option<&str>,
    kid: Option<&str>,
) -> Option<serde_json::Value> {
    // Filter by key type
    let matching: Vec<_> = keys.iter()
        .filter(|k| k.get("kty").and_then(|v| v.as_str()) == Some(kty))
        .collect();
    
    if matching.is_empty() {
        return None;
    }
    
    // Filter by algorithm if specified
    let matching: Vec<_> = if let Some(alg_filter) = alg {
        matching.into_iter()
            .filter(|k| {
                let key_alg = k.get("alg").and_then(|v| v.as_str());
                key_alg.is_none() || key_alg == Some(alg_filter)
            })
            .collect()
    } else {
        matching
    };
    
    if matching.is_empty() {
        return None;
    }
    
    // Filter by kid if specified
    if let Some(kid_filter) = kid {
        if let Some(key) = matching.iter().find(|k| k.get("kid").and_then(|v| v.as_str()) == Some(kid_filter)) {
            return Some((*key).clone());
        }
        return None;
    }
    
    // Return first matching key
    matching.first().map(|k| (*k).clone())
}

// ============================================================================
// Built-in Key Providers
// ============================================================================

/// File-based key provider
///
/// Loads JWK(s) from a specified file path.
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::{register_provider, FileKeyProvider};
///
/// register_provider(Box::new(FileKeyProvider::new("/path/to/keys.jwk")));
/// ```
pub struct FileKeyProvider {
    path: String,
    master_alg: Option<String>,
    verify_alg: Option<String>,
}

impl FileKeyProvider {
    /// Create a new file-based key provider
    ///
    /// # Arguments
    /// * `path` - Path to the JWK file (supports file:// URLs or direct paths)
    pub fn new(path: &str) -> Self {
        // Handle file:// URL or direct path
        let resolved_path = if path.starts_with("file://") {
            JwkUrl::parse(path).map(|u| u.path).unwrap_or_else(|_| path.to_string())
        } else {
            path.to_string()
        };
        
        Self {
            path: resolved_path,
            master_alg: None,
            verify_alg: None,
        }
    }
    
    /// Set the algorithm filter for master key selection
    pub fn with_master_alg(mut self, alg: &str) -> Self {
        self.master_alg = Some(alg.to_string());
        self
    }
    
    /// Set the algorithm filter for verify key selection
    pub fn with_verify_alg(mut self, alg: &str) -> Self {
        self.verify_alg = Some(alg.to_string());
        self
    }
}

impl KeyProvider for FileKeyProvider {
    fn is_ready(&self) -> bool {
        Path::new(&self.path).exists()
    }
    
    fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        let keys = load_jwks_from_file(&self.path)?;
        select_jwk(&keys, "oct", self.master_alg.as_deref(), None)
            .ok_or_else(|| CryptoTensorsError::NoSuitableKey)
    }
    
    fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        let keys = load_jwks_from_file(&self.path)?;
        select_jwk(&keys, "okp", self.verify_alg.as_deref(), None)
            .ok_or_else(|| CryptoTensorsError::NoSuitableKey)
    }
    
    fn name(&self) -> &str {
        "file"
    }
}

/// Environment variable-based key provider
///
/// Loads JWK(s) from a file path specified by the CRYPTOTENSOR_KEY_JKU environment variable.
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::{register_provider, EnvKeyProvider};
///
/// // Set CRYPTOTENSOR_KEY_JKU=/path/to/keys.jwk before this
/// register_provider(Box::new(EnvKeyProvider::new()));
/// ```
pub struct EnvKeyProvider {
    env_var: String,
}

impl EnvKeyProvider {
    /// Create a new environment-based key provider using default variable
    pub fn new() -> Self {
        Self {
            env_var: "CRYPTOTENSOR_KEY_JKU".to_string(),
        }
    }
    
    /// Create a new environment-based key provider with custom variable name
    pub fn with_env_var(env_var: &str) -> Self {
        Self {
            env_var: env_var.to_string(),
        }
    }
    
    fn get_file_provider(&self) -> Option<FileKeyProvider> {
        std::env::var(&self.env_var).ok().map(|path| FileKeyProvider::new(&path))
    }
}

impl Default for EnvKeyProvider {
    fn default() -> Self {
        Self::new()
    }
}

impl KeyProvider for EnvKeyProvider {
    fn is_ready(&self) -> bool {
        self.get_file_provider().map(|p| p.is_ready()).unwrap_or(false)
    }
    
    fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()
            .ok_or_else(|| CryptoTensorsError::Registry("CRYPTOTENSOR_KEY_JKU not set".to_string()))?
            .get_master_key()
    }
    
    fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()
            .ok_or_else(|| CryptoTensorsError::Registry("CRYPTOTENSOR_KEY_JKU not set".to_string()))?
            .get_verify_key()
    }
    
    fn name(&self) -> &str {
        "env"
    }
}

/// Default path key provider
///
/// Loads JWK(s) from ~/.cryptotensor/keys.jwk
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::{register_provider, DefaultPathKeyProvider};
///
/// register_provider(Box::new(DefaultPathKeyProvider::new()));
/// ```
pub struct DefaultPathKeyProvider;

impl DefaultPathKeyProvider {
    /// Create a new default path key provider
    pub fn new() -> Self {
        Self
    }
    
    fn get_default_path() -> Option<String> {
        std::env::var("HOME").ok().map(|home| {
            Path::new(&home).join(".cryptotensor/keys.jwk").to_string_lossy().to_string()
        })
    }
    
    fn get_file_provider(&self) -> Option<FileKeyProvider> {
        Self::get_default_path().map(|path| FileKeyProvider::new(&path))
    }
}

impl Default for DefaultPathKeyProvider {
    fn default() -> Self {
        Self::new()
    }
}

impl KeyProvider for DefaultPathKeyProvider {
    fn is_ready(&self) -> bool {
        self.get_file_provider().map(|p| p.is_ready()).unwrap_or(false)
    }
    
    fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()
            .ok_or_else(|| CryptoTensorsError::Registry("HOME not set".to_string()))?
            .get_master_key()
    }
    
    fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()
            .ok_or_else(|| CryptoTensorsError::Registry("HOME not set".to_string()))?
            .get_verify_key()
    }
    
    fn name(&self) -> &str {
        "default-path"
    }
}

/// JKU-based key provider
///
/// Loads JWK(s) from a URL specified in the JWK (jku field).
/// This is used when loading keys specified in a CryptoTensors header.
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::{register_provider, JkuKeyProvider};
///
/// register_provider(Box::new(JkuKeyProvider::new("file:///path/to/keys.jwk")));
/// ```
pub struct JkuKeyProvider {
    jku: String,
}

impl JkuKeyProvider {
    /// Create a new JKU-based key provider
    pub fn new(jku: &str) -> Self {
        Self {
            jku: jku.to_string(),
        }
    }
    
    fn get_file_provider(&self) -> Result<FileKeyProvider, CryptoTensorsError> {
        let url = JwkUrl::parse(&self.jku)?;
        Ok(FileKeyProvider::new(&url.path))
    }
}

impl KeyProvider for JkuKeyProvider {
    fn is_ready(&self) -> bool {
        self.get_file_provider().map(|p| p.is_ready()).unwrap_or(false)
    }
    
    fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()?.get_master_key()
    }
    
    fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
        self.get_file_provider()?.get_verify_key()
    }
    
    fn name(&self) -> &str {
        "jku"
    }
}

// ============================================================================
// Convenience functions for registering built-in providers
// ============================================================================

/// Register default key providers in order: Env -> DefaultPath
///
/// This is a convenience function that registers the most common providers.
/// After calling this, keys will be loaded from:
/// 1. CRYPTOTENSOR_KEY_JKU environment variable (if set)
/// 2. ~/.cryptotensor/keys.jwk (if exists)
pub fn register_default_providers() {
    register_provider(Box::new(EnvKeyProvider::new()));
    register_provider(Box::new(DefaultPathKeyProvider::new()));
}

/// Trait for key providers (KMS, HSM, file-based, etc.)
///
/// Implementations of this trait can be registered with the global registry
/// to provide keys for encryption and signature verification.
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::{KeyProvider, register_provider};
///
/// struct MyKmsProvider { /* ... */ }
///
/// impl KeyProvider for MyKmsProvider {
///     fn is_ready(&self) -> bool { true }
///     fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> { /* ... */ }
///     fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> { /* ... */ }
///     fn name(&self) -> &str { "my-kms" }
/// }
///
/// // Register the provider
/// register_provider(Box::new(MyKmsProvider { /* ... */ }));
/// ```
pub trait KeyProvider: Send + Sync {
    /// Check if the provider is ready to provide keys
    ///
    /// This method should return `true` only if the provider has been properly
    /// initialized and can successfully return keys.
    fn is_ready(&self) -> bool;

    /// Get the master key for encryption/decryption
    ///
    /// Returns a JWK (JSON Web Key) as a serde_json::Value containing
    /// the symmetric key for tensor encryption.
    ///
    /// # Returns
    ///
    /// * `Ok(serde_json::Value)` - A valid JWK with `kty: "oct"` and the key material
    /// * `Err(CryptoTensorsError)` - If the key cannot be retrieved
    fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError>;

    /// Get the verification key for signature verification
    ///
    /// Returns a JWK (JSON Web Key) as a serde_json::Value containing
    /// the public key for header signature verification.
    ///
    /// # Returns
    ///
    /// * `Ok(serde_json::Value)` - A valid JWK with `kty: "okp"` and the public key
    /// * `Err(CryptoTensorsError)` - If the key cannot be retrieved
    fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError>;

    /// Provider name for logging/debugging
    ///
    /// Returns a human-readable name for the provider, useful for error messages
    /// and debugging.
    fn name(&self) -> &str;
}

/// Global registry for key providers
static PROVIDERS: OnceLock<RwLock<Vec<Box<dyn KeyProvider>>>> = OnceLock::new();

/// Get or initialize the global providers list
fn get_providers() -> &'static RwLock<Vec<Box<dyn KeyProvider>>> {
    PROVIDERS.get_or_init(|| RwLock::new(Vec::new()))
}

/// Register a key provider
///
/// Providers are tried in registration order when looking for keys.
/// The first ready provider that successfully returns a key wins.
///
/// # Arguments
///
/// * `provider` - A boxed KeyProvider implementation
///
/// # Example
///
/// ```ignore
/// use safetensors::registry::register_provider;
///
/// register_provider(Box::new(MyProvider::new()));
/// ```
pub fn register_provider(provider: Box<dyn KeyProvider>) {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        guard.push(provider);
    }
}

/// Clear all registered providers
///
/// This is primarily useful for testing purposes.
pub fn clear_providers() {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        guard.clear();
    }
}

/// Get the number of registered providers
///
/// This is primarily useful for testing purposes.
pub fn provider_count() -> usize {
    let providers = get_providers();
    if let Ok(guard) = providers.read() {
        guard.len()
    } else {
        0
    }
}

/// Get master key from registered providers
///
/// Tries each registered provider in order until one successfully returns a key.
/// The first ready provider that returns a key wins.
///
/// # Returns
///
/// * `Ok(serde_json::Value)` - A valid JWK with the master key
/// * `Err(CryptoTensorsError::Registry)` - If no provider is available or all providers fail
pub fn get_master_key() -> Result<serde_json::Value, CryptoTensorsError> {
    let providers = get_providers();
    let guard = providers.read()
        .map_err(|_| CryptoTensorsError::Registry("Failed to acquire read lock".to_string()))?;

    if guard.is_empty() {
        return Err(CryptoTensorsError::Registry("No key providers registered".to_string()));
    }

    for provider in guard.iter() {
        if provider.is_ready() {
            match provider.get_master_key() {
                Ok(key) => return Ok(key),
                Err(_) => continue, // Try next provider
            }
        }
    }

    Err(CryptoTensorsError::Registry("No ready provider could provide master key".to_string()))
}

/// Get verification key from registered providers
///
/// Tries each registered provider in order until one successfully returns a key.
/// The first ready provider that returns a key wins.
///
/// # Returns
///
/// * `Ok(serde_json::Value)` - A valid JWK with the verification key
/// * `Err(CryptoTensorsError::Registry)` - If no provider is available or all providers fail
pub fn get_verify_key() -> Result<serde_json::Value, CryptoTensorsError> {
    let providers = get_providers();
    let guard = providers.read()
        .map_err(|_| CryptoTensorsError::Registry("Failed to acquire read lock".to_string()))?;

    if guard.is_empty() {
        return Err(CryptoTensorsError::Registry("No key providers registered".to_string()));
    }

    for provider in guard.iter() {
        if provider.is_ready() {
            match provider.get_verify_key() {
                Ok(key) => return Ok(key),
                Err(_) => continue, // Try next provider
            }
        }
    }

    Err(CryptoTensorsError::Registry("No ready provider could provide verify key".to_string()))
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::Mutex;
    
    // Mutex to ensure tests run sequentially (static PROVIDERS is shared)
    static TEST_MUTEX: Mutex<()> = Mutex::new(());

    struct TestProvider {
        name: String,
        ready: bool,
    }

    impl KeyProvider for TestProvider {
        fn is_ready(&self) -> bool {
            self.ready
        }

        fn get_master_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
            if self.ready {
                Ok(serde_json::json!({
                    "kty": "oct",
                    "alg": "aes256gcm",
                    "k": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
                }))
            } else {
                Err(CryptoTensorsError::Registry("Not ready".to_string()))
            }
        }

        fn get_verify_key(&self) -> Result<serde_json::Value, CryptoTensorsError> {
            if self.ready {
                Ok(serde_json::json!({
                    "kty": "okp",
                    "alg": "ed25519",
                    "x": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
                }))
            } else {
                Err(CryptoTensorsError::Registry("Not ready".to_string()))
            }
        }

        fn name(&self) -> &str {
            &self.name
        }
    }

    #[test]
    fn test_register_and_get_provider() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_providers();
        
        register_provider(Box::new(TestProvider {
            name: "test".to_string(),
            ready: true,
        }));

        assert_eq!(provider_count(), 1);
        
        let key = get_master_key();
        assert!(key.is_ok());
        
        clear_providers();
    }

    #[test]
    fn test_no_providers() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_providers();
        
        let result = get_master_key();
        assert!(result.is_err());
        
        if let Err(CryptoTensorsError::Registry(msg)) = result {
            assert!(msg.contains("No key providers registered"));
        } else {
            panic!("Expected Registry error");
        }
    }

    #[test]
    fn test_not_ready_provider() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_providers();
        
        register_provider(Box::new(TestProvider {
            name: "not-ready".to_string(),
            ready: false,
        }));

        let result = get_master_key();
        assert!(result.is_err());
        
        clear_providers();
    }

    #[test]
    fn test_fallback_to_ready_provider() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_providers();
        
        // First provider not ready
        register_provider(Box::new(TestProvider {
            name: "first".to_string(),
            ready: false,
        }));
        
        // Second provider ready
        register_provider(Box::new(TestProvider {
            name: "second".to_string(),
            ready: true,
        }));

        let result = get_master_key();
        assert!(result.is_ok());
        
        clear_providers();
    }
}

