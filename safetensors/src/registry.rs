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
use crate::key::KeyMaterial;
use base64::{engine::general_purpose::STANDARD as BASE64, Engine as _};
use ring::signature;
use serde_json::Value;
use std::collections::HashMap;
use std::fs::File;
use std::io::Read;
use std::path::Path;
use std::sync::{OnceLock, RwLock};

// ============================================================================
// Security Constants
// ============================================================================

/// Hardcoded public keys for verifying provider signatures (Ed25519, Base64)
/// Each provider can have its own trusted public key.
///
/// To add a new provider:
/// 1. Generate Ed25519 key pair using: python scripts/generate_signing_keys.py
/// 2. Add the public key (base64) here with the provider name
/// 3. Store the private key as a GitHub Secret (ED25519_SIGNING_KEY) in the provider's repo
///
/// The signature verification uses Ed25519 algorithm:
/// - Library file (.so/.dylib/.pyd) is signed with the private key
/// - Signature is stored in <library_file>.sig (base64 encoded)
/// - This public key is used to verify the signature before loading the library
const PROVIDER_PUBLIC_KEYS: &[(&str, &str)] = &[
    // KoalaVault vLLM Client provider
    // Ed25519 public key for verifying library signatures
    (
        "koalavault-vllm",
        "vM5cRuHaIyKt3RAELcqc4+nXbSbCh53ABYt2/lOGqw8=",
    ),
    // Add more providers and their public keys here
    // ("aws-kms", "..."),
];

// ============================================================================
// Priority Constants
// ============================================================================

/// Priority for direct key providers registered via Python (highest)
pub const PRIORITY_DIRECT: i32 = 100;
/// @deprecated Use PRIORITY_DIRECT instead
pub const PRIORITY_TEMP: i32 = PRIORITY_DIRECT;
/// Priority for native providers loaded from shared libraries
pub const PRIORITY_NATIVE: i32 = 50;
/// Priority for file-based providers
pub const PRIORITY_FILE: i32 = 10;
/// Priority for environment-based providers (default fallback)
pub const PRIORITY_ENV: i32 = 0;

// ============================================================================
// File JWK Path Parser
// ============================================================================

/// Parsed file path from file:// JWK URL
#[cfg(feature = "provider-file")]
#[derive(Debug, Clone)]
pub struct FileJwkPath {
    /// The file path extracted from the URL
    pub path: String,
}

#[cfg(feature = "provider-file")]
impl FileJwkPath {
    /// Parse a file:// JWK URL and extract the file path
    ///
    /// # Arguments
    /// * `url` - URL string like:
    ///   - Unix: "file:///path/to/keys.jwk" or "file://~/keys.jwk"
    ///   - Windows: "file:///C:/path/to/keys.jwk" or "file:///C:\\path\\to\\keys.jwk"
    ///
    /// # Returns
    /// * `Ok(FileJwkPath)` - Parsed path
    /// * `Err(CryptoTensorsError::InvalidJwkUrl)` - If URL format is invalid
    pub fn parse(url: &str) -> Result<Self, CryptoTensorsError> {
        if let Some((scheme, rest)) = url.split_once("://") {
            match scheme.to_lowercase().as_str() {
                "file" => (),
                _ => return Err(CryptoTensorsError::InvalidJwkUrl(url.to_string())),
            };

            let path = if let Some(path_str) = rest.strip_prefix('/') {
                // Handle absolute paths: file:///path or file:///C:/path
                #[cfg(windows)]
                {
                    // Check for Windows drive letter (C:, D:, etc.)
                    if let Some(colon_pos) = path_str.find(':') {
                        if colon_pos == 1
                            && path_str
                                .chars()
                                .next()
                                .map(|c| c.is_ascii_alphabetic())
                                .unwrap_or(false)
                        {
                            // Windows path: C:/path or C:\path
                            let drive = &path_str[..2]; // C:
                            let rest_path = &path_str[2..];
                            // Normalize backslashes to forward slashes
                            let normalized = rest_path.replace('\\', "/");
                            format!("{}:{}", drive, normalized)
                        } else {
                            // Unix-style absolute path on Windows
                            rest.to_string()
                        }
                    } else {
                        // Unix-style absolute path on Windows
                        rest.to_string()
                    }
                }

                #[cfg(not(windows))]
                {
                    // Unix absolute path: restore leading slash
                    format!("/{}", path_str)
                }
            } else if let Some(stripped) = rest.strip_prefix('~') {
                // Handle home directory expansion
                let home = if cfg!(windows) {
                    std::env::var("USERPROFILE")
                        .or_else(|_| std::env::var("HOME"))
                        .map_err(|e| {
                            CryptoTensorsError::KeyLoad(format!(
                                "Failed to get home directory: {}",
                                e
                            ))
                        })?
                } else {
                    std::env::var("HOME").map_err(|e| {
                        CryptoTensorsError::KeyLoad(format!("Failed to get HOME: {}", e))
                    })?
                };
                format!("{}{}", home, stripped)
            } else {
                // Relative path: return as-is, will be resolved against search paths
                rest.to_string()
            };

            Ok(Self { path })
        } else {
            Err(CryptoTensorsError::InvalidJwkUrl(
                "Missing URL scheme".to_string(),
            ))
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
#[cfg(feature = "provider-file")]
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

    Err(CryptoTensorsError::KeyLoad(format!(
        "Failed to parse JWK from {}",
        path
    )))
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
    let matching: Vec<_> = keys
        .iter()
        .filter(|k| k.get("kty").and_then(|v| v.as_str()) == Some(kty))
        .collect();

    if matching.is_empty() {
        return None;
    }

    // Filter by algorithm if specified
    let matching: Vec<_> = if let Some(alg_filter) = alg {
        matching
            .into_iter()
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
        if let Some(key) = matching
            .iter()
            .find(|k| k.get("kid").and_then(|v| v.as_str()) == Some(kid_filter))
        {
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

/// Direct key provider - supports managing multiple keys
///
/// Each key is identified by a kid, and the corresponding key is returned based on the requested kid.
#[derive(Clone)]
pub struct DirectKeyProvider {
    /// Encryption key set (kid -> JWK)
    enc_keys: HashMap<String, Value>,

    /// Signing key set (kid -> JWK)
    /// May contain private key (d) and/or public key (x)
    sign_keys: HashMap<String, Value>,

    /// Default encryption key kid (used when kid is not specified)
    default_enc_kid: Option<String>,

    /// Default signing key kid (used when kid is not specified)
    default_sign_kid: Option<String>,
}

impl DirectKeyProvider {
    /// Create an empty provider
    pub fn new() -> Self {
        Self {
            enc_keys: HashMap::new(),
            sign_keys: HashMap::new(),
            default_enc_kid: None,
            default_sign_kid: None,
        }
    }

    /// Create from a single key pair (simple scenario)
    /// kid is extracted from JWK
    pub fn from_single_keys(enc_key: Value, sign_key: Value) -> Self {
        let enc_kid = enc_key
            .get("kid")
            .and_then(|v| v.as_str())
            .map(String::from);
        let sign_kid = sign_key
            .get("kid")
            .and_then(|v| v.as_str())
            .map(String::from);

        let mut provider = Self::new();

        if let Some(kid) = &enc_kid {
            provider.enc_keys.insert(kid.clone(), enc_key);
            provider.default_enc_kid = Some(kid.clone());
        }

        if let Some(kid) = &sign_kid {
            provider.sign_keys.insert(kid.clone(), sign_key);
            provider.default_sign_kid = Some(kid.clone());
        }

        provider
    }

    /// Add encryption key
    pub fn add_enc_key(&mut self, kid: &str, key: Value) -> &mut Self {
        self.enc_keys.insert(kid.to_string(), key);
        // If it is the first key, set as default
        if self.default_enc_kid.is_none() {
            self.default_enc_kid = Some(kid.to_string());
        }
        self
    }

    /// Add signing key
    pub fn add_sign_key(&mut self, kid: &str, key: Value) -> &mut Self {
        self.sign_keys.insert(kid.to_string(), key);
        if self.default_sign_kid.is_none() {
            self.default_sign_kid = Some(kid.to_string());
        }
        self
    }

    /// Set default encryption key kid
    pub fn set_default_enc_kid(&mut self, kid: &str) -> &mut Self {
        self.default_enc_kid = Some(kid.to_string());
        self
    }

    /// Set default signing key kid
    pub fn set_default_sign_kid(&mut self, kid: &str) -> &mut Self {
        self.default_sign_kid = Some(kid.to_string());
        self
    }

    /// Builder: Create from KeyMaterial
    pub fn from_key_material(
        enc_key: &KeyMaterial,
        sign_key: &KeyMaterial,
    ) -> Result<Self, CryptoTensorsError> {
        let enc_jwk = enc_key.to_jwk()?;
        let sign_jwk = sign_key.to_jwk()?;

        let enc_val: Value = serde_json::from_str(&enc_jwk)?;
        let sign_val: Value = serde_json::from_str(&sign_jwk)?;

        Ok(Self::from_single_keys(enc_val, sign_val))
    }
}

impl Default for DirectKeyProvider {
    fn default() -> Self {
        Self::new()
    }
}

impl KeyProvider for DirectKeyProvider {
    fn name(&self) -> &str {
        "DirectKeyProvider"
    }

    fn is_ready(&self) -> bool {
        !self.enc_keys.is_empty() || !self.sign_keys.is_empty()
    }

    fn matches(&self, _jku: Option<&str>, kid: Option<&str>) -> bool {
        match kid {
            Some(k) => self.enc_keys.contains_key(k) || self.sign_keys.contains_key(k),
            None => {
                // When no kid, match if there is a default key
                self.default_enc_kid.is_some() || self.default_sign_kid.is_some()
            }
        }
    }

    fn get_master_key(
        &self,
        _jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<Value, CryptoTensorsError> {
        // Use specified kid or default kid
        let kid = kid.or(self.default_enc_kid.as_deref()).ok_or_else(|| {
            CryptoTensorsError::InvalidKey("No enc_kid specified and no default".to_string())
        })?;

        self.enc_keys
            .get(kid)
            .cloned()
            .ok_or_else(|| CryptoTensorsError::InvalidKey(format!("Key not found: {}", kid)))
    }

    fn get_verify_key(
        &self,
        _jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<Value, CryptoTensorsError> {
        let kid = kid.or(self.default_sign_kid.as_deref()).ok_or_else(|| {
            CryptoTensorsError::InvalidKey("No sign_kid specified and no default".to_string())
        })?;

        // Return signing key (should contain public key)
        self.sign_keys
            .get(kid)
            .cloned()
            .ok_or_else(|| CryptoTensorsError::InvalidKey(format!("Key not found: {}", kid)))
    }

    fn get_signing_key(
        &self,
        _jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<Value, CryptoTensorsError> {
        let kid = kid.or(self.default_sign_kid.as_deref()).ok_or_else(|| {
            CryptoTensorsError::InvalidKey("No sign_kid specified and no default".to_string())
        })?;

        // Return signing key (should contain private key d)
        self.sign_keys
            .get(kid)
            .cloned()
            .ok_or_else(|| CryptoTensorsError::InvalidKey(format!("Key not found: {}", kid)))
    }
}

/// File-based key provider
///
/// Uses search paths to locate JWK files. When a relative path is provided via `jku`,
/// it will be resolved against these search paths.
#[cfg(feature = "provider-file")]
pub struct FileKeyProvider {
    search_paths: Vec<String>,
}

#[cfg(feature = "provider-file")]
impl FileKeyProvider {
    /// Create a new file-based key provider with a list of search paths
    ///
    /// # Arguments
    /// * `search_paths` - List of directory paths to search for JWK files.
    ///   Paths are normalized and deduplicated.
    ///
    /// # Example
    /// ```
    /// use cryptotensors::registry::FileKeyProvider;
    /// let provider = FileKeyProvider::new(vec![
    ///     "/etc/keys".to_string(),
    ///     "~/.config/keys".to_string(),
    /// ]);
    /// ```
    pub fn new(search_paths: Vec<String>) -> Self {
        let mut normalized_paths = Vec::new();
        let mut seen = std::collections::HashSet::new();

        for path in search_paths {
            // Normalize path (expand ~, resolve to absolute if possible)
            let normalized = Self::normalize_path(&path);
            if seen.insert(normalized.clone()) {
                normalized_paths.push(normalized);
            }
        }

        Self {
            search_paths: normalized_paths,
        }
    }

    /// Normalize a path (expand ~, convert to absolute if relative)
    fn normalize_path(path: &str) -> String {
        let expanded = if let Some(stripped) = path.strip_prefix('~') {
            let home = if cfg!(windows) {
                std::env::var("USERPROFILE")
                    .or_else(|_| std::env::var("HOME"))
                    .unwrap_or_else(|_| "~".to_string())
            } else {
                std::env::var("HOME").unwrap_or_else(|_| "~".to_string())
            };
            format!("{}{}", home, stripped)
        } else {
            path.to_string()
        };

        // Try to canonicalize if it's an absolute path
        if Path::new(&expanded).is_absolute() {
            if let Ok(canonical) = std::fs::canonicalize(&expanded) {
                return canonical.to_string_lossy().to_string();
            }
        }

        expanded
    }

    /// Resolve a file path against search paths
    ///
    /// If the path is absolute, return it as-is.
    /// If the path is relative, try to resolve it against each search path.
    fn resolve_path(&self, file_path: &str) -> Vec<String> {
        let path = Path::new(file_path);

        if path.is_absolute() {
            // Absolute path: use as-is
            vec![file_path.to_string()]
        } else {
            // Relative path: try each search path
            self.search_paths
                .iter()
                .map(|search_path| {
                    Path::new(search_path)
                        .join(file_path)
                        .to_string_lossy()
                        .to_string()
                })
                .collect()
        }
    }
}

#[cfg(feature = "provider-file")]
impl KeyProvider for FileKeyProvider {
    fn is_ready(&self) -> bool {
        // FileKeyProvider can always handle absolute file:// paths,
        // so it's always ready even without search_paths configured.
        // For relative paths, search_paths are used to resolve them.
        // If search_paths are configured, verify at least one exists.
        if self.search_paths.is_empty() {
            // No search paths configured, but can still handle absolute paths
            true
        } else {
            // Check if any search path exists (as directory)
            self.search_paths.iter().any(|p| {
                let path = Path::new(p);
                path.exists() && path.is_dir()
            })
        }
    }

    fn matches(&self, jku: Option<&str>, _kid: Option<&str>) -> bool {
        jku.map(|j| j.starts_with("file://")).unwrap_or(false)
    }

    fn get_master_key(
        &self,
        jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError> {
        let paths = if let Some(jku_str) = jku {
            // Parse jku to get file path
            let parsed = FileJwkPath::parse(jku_str)?;
            // Resolve against search paths (handles relative paths)
            self.resolve_path(&parsed.path)
        } else {
            // No jku: try each search path as a directory, look for default filenames
            let mut paths = Vec::new();
            for search_path in &self.search_paths {
                paths.push(
                    Path::new(search_path)
                        .join("keys.jwk")
                        .to_string_lossy()
                        .to_string(),
                );
            }
            paths
        };

        // Try each resolved path
        for path in paths {
            if let Ok(keys) = load_jwks_from_file(&path) {
                if let Some(key) = select_jwk(&keys, "oct", None, kid) {
                    return Ok(key);
                }
            }
        }
        Err(CryptoTensorsError::NoSuitableKey)
    }

    fn get_verify_key(
        &self,
        jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError> {
        let paths = if let Some(jku_str) = jku {
            // Parse jku to get file path
            let parsed = FileJwkPath::parse(jku_str)?;
            // Resolve against search paths (handles relative paths)
            self.resolve_path(&parsed.path)
        } else {
            // No jku: try each search path as a directory, look for default filenames
            let mut paths = Vec::new();
            for search_path in &self.search_paths {
                paths.push(
                    Path::new(search_path)
                        .join("keys.jwk")
                        .to_string_lossy()
                        .to_string(),
                );
            }
            paths
        };

        // Try each resolved path
        for path in paths {
            if let Ok(keys) = load_jwks_from_file(&path) {
                if let Some(key) = select_jwk(&keys, "okp", None, kid) {
                    return Ok(key);
                }
            }
        }
        Err(CryptoTensorsError::NoSuitableKey)
    }

    fn name(&self) -> &str {
        "file"
    }
}

/// Environment variable-based key provider
///
/// Loads JWK Set from CRYPTOTENSOR_KEYS environment variable.
#[cfg(feature = "provider-env")]
pub struct EnvKeyProvider {
    env_var: String,
}

#[cfg(feature = "provider-env")]
impl Default for EnvKeyProvider {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(feature = "provider-env")]
impl EnvKeyProvider {
    /// Create a new environment-based key provider using default variable
    pub fn new() -> Self {
        Self {
            env_var: "CRYPTOTENSOR_KEYS".to_string(),
        }
    }

    fn get_keys(&self) -> Result<Vec<serde_json::Value>, CryptoTensorsError> {
        let val = std::env::var(&self.env_var)
            .map_err(|_| CryptoTensorsError::Registry(format!("{} not set", self.env_var)))?;

        let jwk_set: serde_json::Value = serde_json::from_str(&val).map_err(|e| {
            CryptoTensorsError::KeyLoad(format!(
                "Failed to parse JWK Set from {}: {}",
                self.env_var, e
            ))
        })?;

        if let Some(keys) = jwk_set.get("keys").and_then(|k| k.as_array()) {
            Ok(keys.clone())
        } else if jwk_set.get("kty").is_some() {
            Ok(vec![jwk_set])
        } else {
            Err(CryptoTensorsError::KeyLoad(format!(
                "Invalid JWK format in {}",
                self.env_var
            )))
        }
    }
}

#[cfg(feature = "provider-env")]
impl KeyProvider for EnvKeyProvider {
    fn is_ready(&self) -> bool {
        std::env::var(&self.env_var).is_ok()
    }

    fn matches(&self, _jku: Option<&str>, _kid: Option<&str>) -> bool {
        true
    }

    fn get_master_key(
        &self,
        _jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError> {
        let keys = self.get_keys()?;
        select_jwk(&keys, "oct", None, kid).ok_or(CryptoTensorsError::NoSuitableKey)
    }

    fn get_verify_key(
        &self,
        _jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError> {
        let keys = self.get_keys()?;
        select_jwk(&keys, "okp", None, kid).ok_or(CryptoTensorsError::NoSuitableKey)
    }

    fn name(&self) -> &str {
        "env"
    }
}

// ============================================================================
// Global Registry
// ============================================================================

/// Trait for key providers (KMS, HSM, file-based, etc.)
pub trait KeyProvider: Send + Sync {
    /// Provider name for logging/debugging
    fn name(&self) -> &str;

    /// Initialize the provider with configuration
    fn initialize(&mut self, _config_json: &str) -> Result<(), CryptoTensorsError> {
        Ok(())
    }

    /// Check if the provider is ready to provide keys
    fn is_ready(&self) -> bool;

    /// Check if the provider matches the requested JKU/KID
    fn matches(&self, jku: Option<&str>, kid: Option<&str>) -> bool;

    /// Get the master key for encryption/decryption
    fn get_master_key(
        &self,
        jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError>;

    /// Get the verification key for signature verification
    fn get_verify_key(
        &self,
        jku: Option<&str>,
        kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError>;

    /// Get the signing key (private key) for creating signatures
    fn get_signing_key(
        &self,
        _jku: Option<&str>,
        _kid: Option<&str>,
    ) -> Result<serde_json::Value, CryptoTensorsError> {
        Err(CryptoTensorsError::Registry(
            "get_signing_key not implemented for this provider".to_string(),
        ))
    }
}

struct ProviderEntry {
    provider: Box<dyn KeyProvider>,
    priority: i32,
    enabled: bool,
    /// The loaded dynamic library (if any) to keep it alive in memory
    _lib: Option<std::sync::Arc<libloading::Library>>,
}

static PROVIDERS: OnceLock<RwLock<Vec<ProviderEntry>>> = OnceLock::new();

fn get_providers() -> &'static RwLock<Vec<ProviderEntry>> {
    PROVIDERS.get_or_init(|| {
        let entries = vec![
            #[cfg(feature = "provider-env")]
            ProviderEntry {
                provider: Box::new(EnvKeyProvider::new()),
                priority: PRIORITY_ENV,
                enabled: true,
                _lib: None,
            },
            #[cfg(feature = "provider-file")]
            ProviderEntry {
                provider: Box::new(FileKeyProvider::new(Vec::new())),
                priority: PRIORITY_FILE,
                enabled: true,
                _lib: None,
            },
        ];

        RwLock::new(entries)
    })
}

/// Register a key provider with a specific priority
/// If a provider with the same name already exists, it will be removed first
pub fn register_provider_with_priority(provider: Box<dyn KeyProvider>, priority: i32) {
    register_provider_full(provider, priority, None);
}

/// Internal helper to register provider with full details
fn register_provider_full(
    provider: Box<dyn KeyProvider>,
    priority: i32,
    lib: Option<std::sync::Arc<libloading::Library>>,
) {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        // Remove any existing provider with the same name
        let provider_name = provider.name();
        guard.retain(|entry| entry.provider.name() != provider_name);

        guard.push(ProviderEntry {
            provider,
            priority,
            enabled: true,
            _lib: lib,
        });
        // Sort by priority descending
        guard.sort_by(|a, b| b.priority.cmp(&a.priority));
    }
}

/// Register a key provider with default priority (0)
pub fn register_provider(provider: Box<dyn KeyProvider>) {
    register_provider_with_priority(provider, 0);
}

/// Disable and remove a provider by name
pub fn disable_provider(name: &str) {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        guard.retain(|entry| entry.provider.name() != name);
    }
}

/// Enable a provider by name
pub fn enable_provider(name: &str) {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        for entry in guard.iter_mut() {
            if entry.provider.name() == name {
                entry.enabled = true;
            }
        }
    }
}

/// Clear all registered providers
pub fn clear_providers() {
    let providers = get_providers();
    if let Ok(mut guard) = providers.write() {
        guard.clear();
    }
}

/// Function signature for creating a provider in a dynamic library
/// Note: This uses `dyn KeyProvider` which is not FFI-safe, but acceptable here
/// as it's only used within Rust code via libloading, not exposed to C.
#[allow(improper_ctypes_definitions)]
pub type CreateProviderFn = unsafe extern "C" fn() -> *mut dyn KeyProvider;

/// Verify the signature of a library file using the hardcoded public key.
/// Expects a signature file at <lib_path>.sig
fn verify_library_signature(provider_name: &str, lib_path: &str) -> Result<(), CryptoTensorsError> {
    let sig_path = format!("{}.sig", lib_path);

    // Find the public key for this provider
    let public_key_str = PROVIDER_PUBLIC_KEYS
        .iter()
        .find(|(name, _)| *name == provider_name)
        .map(|(_, key)| *key)
        .ok_or_else(|| {
            CryptoTensorsError::Registry(format!(
                "No trusted public key configured for provider: {}",
                provider_name
            ))
        })?;

    // Read library file
    let mut lib_file = File::open(lib_path)
        .map_err(|e| CryptoTensorsError::Registry(format!("Failed to open library: {}", e)))?;
    let mut lib_data = Vec::new();
    lib_file
        .read_to_end(&mut lib_data)
        .map_err(|e| CryptoTensorsError::Registry(format!("Failed to read library: {}", e)))?;

    // Read signature file
    let sig_path_obj = std::path::Path::new(&sig_path);
    if !sig_path_obj.exists() {
        return Err(CryptoTensorsError::Registry(format!(
            "Signature file missing: {}",
            sig_path
        )));
    }

    let mut sig_file = File::open(&sig_path).map_err(|e| {
        CryptoTensorsError::Registry(format!("Failed to open signature file: {}", e))
    })?;
    let mut sig_base64 = String::new();
    sig_file
        .read_to_string(&mut sig_base64)
        .map_err(|e| CryptoTensorsError::Registry(format!("Failed to read signature: {}", e)))?;

    let signature = BASE64
        .decode(sig_base64.trim())
        .map_err(|e| CryptoTensorsError::Registry(format!("Invalid signature encoding: {}", e)))?;

    // Decode public key
    let public_key_bytes = BASE64
        .decode(public_key_str)
        .map_err(|e| CryptoTensorsError::Registry(format!("Invalid public key encoding: {}", e)))?;

    // Verify signature
    let peer_public_key = signature::UnparsedPublicKey::new(&signature::ED25519, public_key_bytes);
    peer_public_key.verify(&lib_data, &signature).map_err(|e| {
        CryptoTensorsError::Registry(format!("Signature verification failed: {}", e))
    })?;

    Ok(())
}

/// Dynamically load a native provider from a shared library
pub fn load_provider_native(
    name: &str,
    lib_path: &str,
    config_json: &str,
) -> Result<(), CryptoTensorsError> {
    // SECURITY: Verify the signature of the library before loading it
    verify_library_signature(name, lib_path)?;

    let lib = unsafe {
        libloading::Library::new(lib_path)
            .map_err(|e| CryptoTensorsError::Registry(format!("Failed to load library: {}", e)))?
    };

    let lib = std::sync::Arc::new(lib);

    let create_fn: libloading::Symbol<CreateProviderFn> = unsafe {
        lib.get(b"cryptotensors_create_provider").map_err(|e| {
            CryptoTensorsError::Registry(format!("Missing symbol in provider library: {}", e))
        })?
    };

    let mut provider = unsafe { Box::from_raw(create_fn()) };
    provider.initialize(config_json)?;

    register_provider_full(provider, PRIORITY_NATIVE, Some(lib));

    Ok(())
}

/// Get the number of registered providers
pub fn provider_count() -> usize {
    let providers = get_providers();
    if let Ok(guard) = providers.read() {
        guard.len()
    } else {
        0
    }
}

/// Get master key from registered providers
pub fn get_master_key(
    jku: Option<&str>,
    kid: Option<&str>,
) -> Result<serde_json::Value, CryptoTensorsError> {
    let providers = get_providers();
    let guard = providers
        .read()
        .map_err(|_| CryptoTensorsError::Registry("Failed to acquire read lock".to_string()))?;

    for entry in guard.iter() {
        if entry.enabled && entry.provider.is_ready() && entry.provider.matches(jku, kid) {
            match entry.provider.get_master_key(jku, kid) {
                Ok(key) => return Ok(key),
                Err(_) => continue,
            }
        }
    }

    Err(CryptoTensorsError::Registry(
        "No suitable provider found for master key".to_string(),
    ))
}

/// Get verification key from registered providers
pub fn get_verify_key(
    jku: Option<&str>,
    kid: Option<&str>,
) -> Result<serde_json::Value, CryptoTensorsError> {
    let providers = get_providers();
    let guard = providers
        .read()
        .map_err(|_| CryptoTensorsError::Registry("Failed to acquire read lock".to_string()))?;

    for entry in guard.iter() {
        if entry.enabled && entry.provider.is_ready() && entry.provider.matches(jku, kid) {
            match entry.provider.get_verify_key(jku, kid) {
                Ok(key) => {
                    return Ok(key);
                }
                Err(_) => continue,
            }
        }
    }

    Err(CryptoTensorsError::Registry(format!(
        "No suitable provider found for verify key (jku={:?}, kid={:?})",
        jku, kid
    )))
}

/// Get signing key from registered providers
pub fn get_signing_key(
    jku: Option<&str>,
    kid: Option<&str>,
) -> Result<serde_json::Value, CryptoTensorsError> {
    let providers = get_providers();
    let guard = providers
        .read()
        .map_err(|_| CryptoTensorsError::Registry("Failed to acquire read lock".to_string()))?;

    for entry in guard.iter() {
        if entry.enabled && entry.provider.is_ready() && entry.provider.matches(jku, kid) {
            match entry.provider.get_signing_key(jku, kid) {
                Ok(key) => return Ok(key),
                Err(_) => continue,
            }
        }
    }

    Err(CryptoTensorsError::Registry(format!(
        "No suitable provider found for signing key (jku={:?}, kid={:?})",
        jku, kid
    )))
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::Mutex;

    static TEST_MUTEX: Mutex<()> = Mutex::new(());

    struct TestProvider {
        name: String,
        ready: bool,
    }

    impl KeyProvider for TestProvider {
        fn is_ready(&self) -> bool {
            self.ready
        }
        fn matches(&self, _jku: Option<&str>, _kid: Option<&str>) -> bool {
            true
        }
        fn name(&self) -> &str {
            &self.name
        }

        fn get_master_key(
            &self,
            _jku: Option<&str>,
            _kid: Option<&str>,
        ) -> Result<serde_json::Value, CryptoTensorsError> {
            Ok(serde_json::json!({"kty": "oct", "k": "AAA"}))
        }

        fn get_verify_key(
            &self,
            _jku: Option<&str>,
            _kid: Option<&str>,
        ) -> Result<serde_json::Value, CryptoTensorsError> {
            Ok(serde_json::json!({"kty": "okp", "x": "AAA"}))
        }
    }

    #[test]
    fn test_priority_and_disable() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_providers();

        register_provider_with_priority(
            Box::new(TestProvider {
                name: "low".into(),
                ready: true,
            }),
            0,
        );
        register_provider_with_priority(
            Box::new(TestProvider {
                name: "high".into(),
                ready: true,
            }),
            10,
        );

        {
            let providers = get_providers();
            let guard = providers.read().unwrap();
            assert_eq!(guard[0].provider.name(), "high");
            assert_eq!(guard[1].provider.name(), "low");
        }

        disable_provider("high");

        let providers = get_providers();
        let guard = providers.read().unwrap();
        // After disable, the provider should be removed
        assert_eq!(guard.len(), 1);
        assert_eq!(guard[0].provider.name(), "low");
    }

    #[test]
    fn test_direct_key_provider_single_keys() {
        // Create encryption and signing keys
        let enc_key =
            KeyMaterial::new_enc_key(None, None, Some("test-enc".to_string()), None).unwrap();
        let sign_key =
            KeyMaterial::new_sign_key(None, None, None, Some("test-sign".to_string()), None)
                .unwrap();

        // Convert to JWK values
        let enc_jwk: serde_json::Value = serde_json::from_str(&enc_key.to_jwk().unwrap()).unwrap();
        let sign_jwk: serde_json::Value =
            serde_json::from_str(&sign_key.to_jwk().unwrap()).unwrap();

        // Create provider
        let provider = DirectKeyProvider::from_single_keys(enc_jwk.clone(), sign_jwk.clone());

        assert!(provider.is_ready());
        assert!(provider.matches(None, Some("test-enc")));
        assert!(provider.matches(None, Some("test-sign")));

        // Get keys
        let retrieved_enc = provider.get_master_key(None, Some("test-enc")).unwrap();
        assert_eq!(
            retrieved_enc.get("kid").and_then(|v| v.as_str()),
            Some("test-enc")
        );

        let retrieved_sign = provider.get_signing_key(None, Some("test-sign")).unwrap();
        assert_eq!(
            retrieved_sign.get("kid").and_then(|v| v.as_str()),
            Some("test-sign")
        );
    }

    #[test]
    fn test_direct_key_provider_multiple_keys() {
        let mut provider = DirectKeyProvider::new();

        // Create multiple keys
        let enc1 =
            KeyMaterial::new_enc_key(None, None, Some("user1-enc".to_string()), None).unwrap();
        let enc2 =
            KeyMaterial::new_enc_key(None, None, Some("user2-enc".to_string()), None).unwrap();
        let sign1 =
            KeyMaterial::new_sign_key(None, None, None, Some("user1-sign".to_string()), None)
                .unwrap();
        let sign2 =
            KeyMaterial::new_sign_key(None, None, None, Some("user2-sign".to_string()), None)
                .unwrap();

        // Add keys
        provider
            .add_enc_key(
                "user1-enc",
                serde_json::from_str(&enc1.to_jwk().unwrap()).unwrap(),
            )
            .add_enc_key(
                "user2-enc",
                serde_json::from_str(&enc2.to_jwk().unwrap()).unwrap(),
            )
            .add_sign_key(
                "user1-sign",
                serde_json::from_str(&sign1.to_jwk().unwrap()).unwrap(),
            )
            .add_sign_key(
                "user2-sign",
                serde_json::from_str(&sign2.to_jwk().unwrap()).unwrap(),
            );

        assert!(provider.is_ready());

        // Test retrieval
        let user1_enc = provider.get_master_key(None, Some("user1-enc")).unwrap();
        assert_eq!(
            user1_enc.get("kid").and_then(|v| v.as_str()),
            Some("user1-enc")
        );

        let user2_sign = provider.get_signing_key(None, Some("user2-sign")).unwrap();
        assert_eq!(
            user2_sign.get("kid").and_then(|v| v.as_str()),
            Some("user2-sign")
        );
    }

    #[test]
    fn test_direct_key_provider_default_keys() {
        let enc1 = KeyMaterial::new_enc_key(None, None, Some("enc1".to_string()), None).unwrap();
        let enc2 = KeyMaterial::new_enc_key(None, None, Some("enc2".to_string()), None).unwrap();
        let sign1 =
            KeyMaterial::new_sign_key(None, None, None, Some("sign1".to_string()), None).unwrap();

        let mut provider = DirectKeyProvider::new();
        provider
            .add_enc_key(
                "enc1",
                serde_json::from_str(&enc1.to_jwk().unwrap()).unwrap(),
            )
            .add_enc_key(
                "enc2",
                serde_json::from_str(&enc2.to_jwk().unwrap()).unwrap(),
            )
            .add_sign_key(
                "sign1",
                serde_json::from_str(&sign1.to_jwk().unwrap()).unwrap(),
            )
            .set_default_enc_kid("enc2")
            .set_default_sign_kid("sign1");

        // Should return enc2 when no kid specified (using default)
        let key = provider.get_master_key(None, None).unwrap();
        assert_eq!(key.get("kid").and_then(|v| v.as_str()), Some("enc2"));

        // Should return sign1 when no kid specified
        let key = provider.get_signing_key(None, None).unwrap();
        assert_eq!(key.get("kid").and_then(|v| v.as_str()), Some("sign1"));

        // Should still be able to get enc1 with explicit kid
        let key = provider.get_master_key(None, Some("enc1")).unwrap();
        assert_eq!(key.get("kid").and_then(|v| v.as_str()), Some("enc1"));
    }
}
