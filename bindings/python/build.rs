fn main() {
    pyo3_build_config::use_pyo3_cfgs();

    // Silence the unexpected_cfgs lint for PyPy since we are now properly setting it
    println!("cargo:rustc-check-cfg=cfg(PyPy)");
}
