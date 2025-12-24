window.BENCHMARK_DATA = {
  "lastUpdate": 1766561422285,
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
      }
    ]
  }
}