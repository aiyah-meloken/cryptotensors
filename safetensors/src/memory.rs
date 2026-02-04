//! Secure memory allocation using OS-managed memory (mmap/VirtualAlloc)
//!
//! This module provides page-aligned memory allocation using OS primitives,
//! which offers better alignment for SIMD operations and GPU DMA transfers
//! compared to standard heap allocation.
//!
//! # Features
//!
//! - **Page alignment**: Memory is guaranteed to be PAGE_SIZE aligned (4KB on x86, 16KB on ARM64)
//! - **Secure cleanup**: Memory is zeroed before deallocation
//! - **Zero-copy sharing**: Compatible with Python buffer protocol via Arc

use std::sync::Arc;

/// Error type for secure memory operations
#[derive(Debug, Clone)]
pub enum SecureMemoryError {
    /// Memory allocation failed
    AllocationFailed(String),
}

impl std::fmt::Display for SecureMemoryError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SecureMemoryError::AllocationFailed(msg) => write!(f, "allocation failed: {}", msg),
        }
    }
}

impl std::error::Error for SecureMemoryError {}

/// OS-managed memory buffer with page alignment
///
/// This buffer uses mmap (Unix) or VirtualAlloc (Windows) to allocate
/// page-aligned memory, which provides optimal alignment for:
/// - SIMD operations (SSE/AVX require 16/32/64 byte alignment)
/// - GPU DMA transfers (typically require 64-256 byte alignment)
/// - Large page support (transparent huge pages on Linux)
pub struct MmapBuffer {
    ptr: *mut u8,
    len: usize,
}

// SAFETY: MmapBuffer owns its memory exclusively
// The memory is allocated per-process and not shared with other processes
unsafe impl Send for MmapBuffer {}
unsafe impl Sync for MmapBuffer {}

impl MmapBuffer {
    /// Allocate a new page-aligned buffer of the specified size
    ///
    /// # Arguments
    ///
    /// * `len` - Size in bytes to allocate
    ///
    /// # Returns
    ///
    /// * `Ok(MmapBuffer)` - Successfully allocated buffer
    /// * `Err(SecureMemoryError)` - Allocation failed
    pub fn allocate(len: usize) -> Result<Self, SecureMemoryError> {
        if len == 0 {
            return Ok(Self {
                ptr: std::ptr::null_mut(),
                len: 0,
            });
        }

        #[cfg(unix)]
        {
            Self::allocate_unix(len)
        }

        #[cfg(windows)]
        {
            Self::allocate_windows(len)
        }
    }

    #[cfg(unix)]
    fn allocate_unix(len: usize) -> Result<Self, SecureMemoryError> {
        let ptr = unsafe {
            libc::mmap(
                std::ptr::null_mut(),
                len,
                libc::PROT_READ | libc::PROT_WRITE,
                libc::MAP_PRIVATE | libc::MAP_ANONYMOUS,
                -1,
                0,
            )
        };

        if ptr == libc::MAP_FAILED {
            let errno = std::io::Error::last_os_error();
            return Err(SecureMemoryError::AllocationFailed(format!(
                "mmap failed: {}",
                errno
            )));
        }

        Ok(Self {
            ptr: ptr as *mut u8,
            len,
        })
    }

    #[cfg(windows)]
    fn allocate_windows(len: usize) -> Result<Self, SecureMemoryError> {
        use std::ffi::c_void;

        // Windows constants
        const MEM_COMMIT: u32 = 0x1000;
        const MEM_RESERVE: u32 = 0x2000;
        const PAGE_READWRITE: u32 = 0x04;

        extern "system" {
            fn VirtualAlloc(
                lpAddress: *mut c_void,
                dwSize: usize,
                flAllocationType: u32,
                flProtect: u32,
            ) -> *mut c_void;
        }

        let ptr = unsafe {
            VirtualAlloc(
                std::ptr::null_mut(),
                len,
                MEM_COMMIT | MEM_RESERVE,
                PAGE_READWRITE,
            )
        };

        if ptr.is_null() {
            let errno = std::io::Error::last_os_error();
            return Err(SecureMemoryError::AllocationFailed(format!(
                "VirtualAlloc failed: {}",
                errno
            )));
        }

        Ok(Self {
            ptr: ptr as *mut u8,
            len,
        })
    }

    /// Get the buffer as a slice
    #[inline]
    pub fn as_slice(&self) -> &[u8] {
        if self.ptr.is_null() || self.len == 0 {
            &[]
        } else {
            unsafe { std::slice::from_raw_parts(self.ptr, self.len) }
        }
    }

    /// Get the buffer as a mutable slice
    #[inline]
    pub fn as_mut_slice(&mut self) -> &mut [u8] {
        if self.ptr.is_null() || self.len == 0 {
            &mut []
        } else {
            unsafe { std::slice::from_raw_parts_mut(self.ptr, self.len) }
        }
    }

    /// Get the raw pointer to the buffer
    #[inline]
    pub fn as_ptr(&self) -> *const u8 {
        self.ptr
    }

    /// Get the length of the buffer
    #[inline]
    pub fn len(&self) -> usize {
        self.len
    }

    /// Check if the buffer is empty
    #[inline]
    pub fn is_empty(&self) -> bool {
        self.len == 0
    }
}

impl Drop for MmapBuffer {
    fn drop(&mut self) {
        if self.ptr.is_null() || self.len == 0 {
            return;
        }

        // Secure cleanup: zero memory before deallocation
        unsafe {
            std::ptr::write_bytes(self.ptr, 0, self.len);
        }

        #[cfg(unix)]
        unsafe {
            libc::munmap(self.ptr as *mut libc::c_void, self.len);
        }

        #[cfg(windows)]
        {
            const MEM_RELEASE: u32 = 0x8000;

            extern "system" {
                fn VirtualFree(
                    lpAddress: *mut std::ffi::c_void,
                    dwSize: usize,
                    dwFreeType: u32,
                ) -> i32;
            }

            unsafe {
                VirtualFree(self.ptr as *mut std::ffi::c_void, 0, MEM_RELEASE);
            }
        }
    }
}

impl std::fmt::Debug for MmapBuffer {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("MmapBuffer")
            .field("ptr", &self.ptr)
            .field("len", &self.len)
            .finish()
    }
}

/// Type alias for Arc-wrapped MmapBuffer for zero-copy sharing
pub type SharedMmapBuffer = Arc<MmapBuffer>;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_allocate_and_write() {
        let mut buf = MmapBuffer::allocate(4096).expect("allocation failed");
        assert_eq!(buf.len(), 4096);

        // Write some data
        let data = b"Hello, MmapBuffer!";
        buf.as_mut_slice()[..data.len()].copy_from_slice(data);

        // Read it back
        assert_eq!(&buf.as_slice()[..data.len()], data);
    }

    #[test]
    fn test_allocate_zero_length() {
        let buf = MmapBuffer::allocate(0).expect("allocation failed");
        assert!(buf.is_empty());
        assert_eq!(buf.len(), 0);
    }

    #[test]
    fn test_large_allocation() {
        // Allocate 10MB
        let size = 10 * 1024 * 1024;
        let buf = MmapBuffer::allocate(size).expect("allocation failed");
        assert_eq!(buf.len(), size);
    }

    #[test]
    fn test_alignment() {
        let buf = MmapBuffer::allocate(4096).expect("allocation failed");
        let ptr = buf.as_ptr() as usize;

        // Should be at least page-aligned (4KB = 4096 bytes)
        assert_eq!(ptr % 4096, 0, "buffer should be page-aligned");
    }
}
