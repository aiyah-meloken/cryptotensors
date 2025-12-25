window.BENCHMARK_DATA = {
  "lastUpdate": 1766632432139,
  "repoUrl": "https://github.com/aiyah-meloken/cryptotensors",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "aiyah_meloken@protonmail.com",
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "email": "aiyah_meloken@protonmail.com",
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "distinct": true,
          "id": "b279009be27d5039e974519d06b37cd2fc7485e9",
          "message": "chore: update uv.lock to reflect changes in cryptotensors package\n\n- Downgraded revision from 3 to 2.\n- Added new package 'cryptotensors' with optional dependencies for various frameworks.\n- Removed 'safetensors' package and its dependencies.\n- Updated package metadata to include new extras and dependencies for testing and development.",
          "timestamp": "2025-12-24T15:24:51+08:00",
          "tree_id": "1e7ff9b044c76dac8f2ba127b584823f6c25cb3c",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/b279009be27d5039e974519d06b37cd2fc7485e9"
        },
        "date": 1766561421823,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.999008696385104,
            "unit": "iter/sec",
            "range": "stddev: 0.0076934215802737255",
            "extra": "mean: 500.2479487999949 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.1859036415722453,
            "unit": "iter/sec",
            "range": "stddev: 0.037800872222377435",
            "extra": "mean: 313.88268839998545 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.7088560010456115,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039327958433651",
            "extra": "mean: 212.36580600000252 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.039766785556294,
            "unit": "iter/sec",
            "range": "stddev: 0.0019716146687715243",
            "extra": "mean: 247.53904199999397 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.439011899087923,
            "unit": "iter/sec",
            "range": "stddev: 0.009712919513191073",
            "extra": "mean: 118.49728522222829 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 260.06664675894035,
            "unit": "iter/sec",
            "range": "stddev: 0.000026049322205296702",
            "extra": "mean: 3.845168200007265 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.280940086313626,
            "unit": "iter/sec",
            "range": "stddev: 0.004549099360001296",
            "extra": "mean: 88.6450944999903 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 49.531808736095705,
            "unit": "iter/sec",
            "range": "stddev: 0.003300620872872793",
            "extra": "mean: 20.189046705885023 msec\nrounds: 51"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1542291772332183,
            "unit": "iter/sec",
            "range": "stddev: 0.0026087042066044114",
            "extra": "mean: 317.03466799998523 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4698385419377105,
            "unit": "iter/sec",
            "range": "stddev: 0.0026179372925535954",
            "extra": "mean: 288.1978478000178 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aiyah_meloken@protonmail.com",
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "email": "aiyah_meloken@protonmail.com",
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "distinct": true,
          "id": "ed1b870d8e4aea9552d40f9a3bcac740fff38fa5",
          "message": "feat: add GitHub Actions workflow to check for Safetensors releases\n\n- Introduced a new workflow that checks for new Safetensors releases daily and allows manual triggering.\n- The workflow reads the current version from VERSION_BINDING.md, fetches the latest release from GitHub, and compares versions.\n- If a new version is detected, it creates or updates an issue in the repository with release details.\n- Includes a test mode for manual issue creation regardless of version changes.",
          "timestamp": "2025-12-25T11:10:25+08:00",
          "tree_id": "882417b36da3649b457171ce72221c9094429d67",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/ed1b870d8e4aea9552d40f9a3bcac740fff38fa5"
        },
        "date": 1766632431236,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.8999838694788203,
            "unit": "iter/sec",
            "range": "stddev: 0.011866575945370486",
            "extra": "mean: 526.3202578000346 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.46339307950531,
            "unit": "iter/sec",
            "range": "stddev: 0.010776861087456605",
            "extra": "mean: 224.04479780007023 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 3.1397977884823187,
            "unit": "iter/sec",
            "range": "stddev: 0.02806660945747909",
            "extra": "mean: 318.4918479999851 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 3.255234902916476,
            "unit": "iter/sec",
            "range": "stddev: 0.0017601945035026247",
            "extra": "mean: 307.19749260001663 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 5.424432720311787,
            "unit": "iter/sec",
            "range": "stddev: 0.016692428608719848",
            "extra": "mean: 184.35107440000138 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 306.3011567435464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777126470349146",
            "extra": "mean: 3.264760768883611 msec\nrounds: 225"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 14.08238737377391,
            "unit": "iter/sec",
            "range": "stddev: 0.00029867539133659397",
            "extra": "mean: 71.01068685713992 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.279586211899336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006945213968333419",
            "extra": "mean: 18.08986044444636 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.6632089777093273,
            "unit": "iter/sec",
            "range": "stddev: 0.01939613213116517",
            "extra": "mean: 375.4868687999533 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.982726245469218,
            "unit": "iter/sec",
            "range": "stddev: 0.0031923088765644925",
            "extra": "mean: 335.26375460000963 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}