fn main() {
    println!("cargo:rustc-check-cfg=cfg(Py_LIMITED_API)");
    println!("cargo:rustc-check-cfg=cfg(Py_3_11)");
}
