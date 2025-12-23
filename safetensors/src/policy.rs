// Copyright 2025-2026 aiyah-meloken
// SPDX-License-Identifier: Apache-2.0
//
// This file is part of CryptoTensors, a derivative work based on safetensors.
// This file is NEW and was not present in the original safetensors project.

use crate::cryptotensors::CryptoTensorsError;
use serde::{Deserialize, Serialize};
use regorus::Engine;

/// Access policy for tensor model loading and remote KMS validation
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AccessPolicy {
    /// OPA policy content for tensor model loading validation
    #[serde(rename = "local")]
    local_policy: String,
    
    /// OPA policy content for KMS key release validation
    #[serde(rename = "remote")]
    remote_policy: String,
}

impl AccessPolicy {
    /// Create a new AccessPolicy
    pub fn new(local: Option<String>, remote: Option<String>) -> Self {
        let default_policy = "package model\nallow = true".to_string();
        Self {
            local_policy: local.unwrap_or_else(|| default_policy.clone()),
            remote_policy: remote.unwrap_or(default_policy),
        }
    }

    /// Validate tensor model loading using local Rego policy
    /// Currently does not validate based on input; input parameter is reserved for future use.
    pub fn evaluate(&self, _input: String) -> Result<bool, CryptoTensorsError> {
        let mut engine = Engine::new();
        // Load local policy
        engine
            .add_policy(String::from("model.rego"), self.local_policy.clone())
            .map_err(|e| CryptoTensorsError::Policy(format!("Failed to add policy: {e}")))?;

        // Input parsing and setting will be implemented in the future
        // let input_value = regorus::Value::from_json_str(&input)
        //     .map_err(|e| CryptoTensorsError::Policy(format!("Invalid input JSON: {e}")))?;
        // engine.set_input(input_value);

        // Evaluate policy rule
        let result = engine
            .eval_rule(String::from("data.model.allow"))
            .map_err(|e| CryptoTensorsError::Policy(format!("Policy evaluation failed: {e}")))?;

        // Parse result
        match result {
            regorus::Value::Bool(allowed) => Ok(allowed),
            regorus::Value::Undefined => Err(CryptoTensorsError::Policy("Policy returned undefined".to_string())),
            _ => Err(CryptoTensorsError::Policy("Policy did not return a boolean".to_string())),
        }
    }
}

