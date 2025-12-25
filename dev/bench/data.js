window.BENCHMARK_DATA = {
  "lastUpdate": 1766656800599,
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
          "id": "be6554257140fa944524c93062fb9c6f1a600a2a",
          "message": "fix: improve issue body formatting in Safetensors version update alert",
          "timestamp": "2025-12-25T11:13:29+08:00",
          "tree_id": "281d7f471be28f30aeed8c721810aace250a345f",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/be6554257140fa944524c93062fb9c6f1a600a2a"
        },
        "date": 1766632666122,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.1605444679222874,
            "unit": "iter/sec",
            "range": "stddev: 0.011473345966926328",
            "extra": "mean: 462.84629399998494 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.0740134976096796,
            "unit": "iter/sec",
            "range": "stddev: 0.03500927088177261",
            "extra": "mean: 325.30761519999487 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.311891770799175,
            "unit": "iter/sec",
            "range": "stddev: 0.003750051873813334",
            "extra": "mean: 231.9167671999935 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 3.2602034021864075,
            "unit": "iter/sec",
            "range": "stddev: 0.00043703064299067696",
            "extra": "mean: 306.7293283999902 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.973634585422374,
            "unit": "iter/sec",
            "range": "stddev: 0.00673511612487133",
            "extra": "mean: 125.41332177777853 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 274.5310299476331,
            "unit": "iter/sec",
            "range": "stddev: 0.00010101498664407607",
            "extra": "mean: 3.642575486606197 msec\nrounds: 224"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.594891007720259,
            "unit": "iter/sec",
            "range": "stddev: 0.001247471854059536",
            "extra": "mean: 86.24488141666593 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.54872339148363,
            "unit": "iter/sec",
            "range": "stddev: 0.00014642243283018088",
            "extra": "mean: 18.33223470370205 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.354094692015037,
            "unit": "iter/sec",
            "range": "stddev: 0.012200075046950217",
            "extra": "mean: 298.1430436000096 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4550965491036485,
            "unit": "iter/sec",
            "range": "stddev: 0.0040970832612352475",
            "extra": "mean: 289.42751260002524 msec\nrounds: 5"
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
          "id": "da5ebc009f49e7134620f17bb1fbf861d0431557",
          "message": "fix: update GitHub Actions workflow to use github.event.inputs for test mode checks",
          "timestamp": "2025-12-25T11:18:37+08:00",
          "tree_id": "97fc29fe70faad7f7fd847289eb7ef7934601dd1",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/da5ebc009f49e7134620f17bb1fbf861d0431557"
        },
        "date": 1766632911871,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.9951183943044732,
            "unit": "iter/sec",
            "range": "stddev: 0.006356082481131397",
            "extra": "mean: 333.8766180000107 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.852239378393978,
            "unit": "iter/sec",
            "range": "stddev: 0.021792878768963728",
            "extra": "mean: 206.0904093999966 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.7470086249642,
            "unit": "iter/sec",
            "range": "stddev: 0.002808548928346203",
            "extra": "mean: 129.08208166666668 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.035141004340476,
            "unit": "iter/sec",
            "range": "stddev: 0.002464178415205442",
            "extra": "mean: 198.6041699999987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.761872503795699,
            "unit": "iter/sec",
            "range": "stddev: 0.0014342661645633805",
            "extra": "mean: 102.43936290001443 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 265.40531872803103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006701891960375765",
            "extra": "mean: 3.7678220044441937 msec\nrounds: 225"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.488478834528001,
            "unit": "iter/sec",
            "range": "stddev: 0.0008949132234219036",
            "extra": "mean: 87.04372566667 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.73131585480716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002292286465312078",
            "extra": "mean: 18.964063076928447 msec\nrounds: 52"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.3698215839670405,
            "unit": "iter/sec",
            "range": "stddev: 0.008616515295825945",
            "extra": "mean: 296.7516158000194 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5131625916779057,
            "unit": "iter/sec",
            "range": "stddev: 0.024379205038192096",
            "extra": "mean: 284.64381420001246 msec\nrounds: 5"
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
          "id": "2f9b6149121b09ae05962a95e8d63ff2eb4d22c0",
          "message": "feat: enhance GitHub Actions workflow for Safetensors release checks\n\n- Updated permissions to allow write access for contents and added read access for pull requests.\n- Configured the checkout step to fetch all history and use the GitHub token.\n- Extracted the release tag from the release data and added validation checks.\n- Implemented logic to check for the existence of an upstream branch and create it if it doesn't exist, based on the latest release tag.\n- Enhanced issue creation to include details about the newly created upstream branch and tasks for integrating changes.\n- Added a step to assign the created issue to a GitHub Copilot Agent for further action.",
          "timestamp": "2025-12-25T17:56:29+08:00",
          "tree_id": "58a0f99e25ce6b660713cb80c427eb7ce7daa5e0",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/2f9b6149121b09ae05962a95e8d63ff2eb4d22c0"
        },
        "date": 1766656799729,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.173948047822574,
            "unit": "iter/sec",
            "range": "stddev: 0.0020388933569293662",
            "extra": "mean: 459.9925932000076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.489434729966552,
            "unit": "iter/sec",
            "range": "stddev: 0.0045373926186545455",
            "extra": "mean: 222.74519180000425 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.359164631441409,
            "unit": "iter/sec",
            "range": "stddev: 0.0021923861295367686",
            "extra": "mean: 157.25335920000134 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 3.8394478547171573,
            "unit": "iter/sec",
            "range": "stddev: 0.0014101572653156431",
            "extra": "mean: 260.4541167999969 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.10325242845891,
            "unit": "iter/sec",
            "range": "stddev: 0.0030049310732548087",
            "extra": "mean: 123.40723787499996 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 268.5199490144816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903434824113911",
            "extra": "mean: 3.7241180913008027 msec\nrounds: 230"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.45958329832432,
            "unit": "iter/sec",
            "range": "stddev: 0.001588193181541139",
            "extra": "mean: 87.26320791666353 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.79811996440066,
            "unit": "iter/sec",
            "range": "stddev: 0.0010572608362247266",
            "extra": "mean: 18.58801015094432 msec\nrounds: 53"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.459953682171692,
            "unit": "iter/sec",
            "range": "stddev: 0.028435065630634093",
            "extra": "mean: 406.51171900000236 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.7180317034627697,
            "unit": "iter/sec",
            "range": "stddev: 0.009665511036127198",
            "extra": "mean: 268.9595140000165 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}