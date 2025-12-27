window.BENCHMARK_DATA = {
  "lastUpdate": 1766798586526,
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
          "id": "059fc564b9cc54e06b842f77730a4b6a647401d2",
          "message": "chore: update benchmark tests and workflows for improved compatibility\n\n- Added a step to discard changes to lock files in the GitHub Actions workflow before switching branches.\n- Updated test assertions in `test_crypto_flax.py`, `test_crypto_paddle.py`, and `test_crypto_tf.py` to use framework-specific functions for better compatibility with data types.",
          "timestamp": "2025-12-26T21:35:36+08:00",
          "tree_id": "6fd94cae025e06e865a018cd7675fdff70f59fdc",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/059fc564b9cc54e06b842f77730a4b6a647401d2"
        },
        "date": 1766756440559,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.399078127935576,
            "unit": "iter/sec",
            "range": "stddev: 0.05032029625319536",
            "extra": "mean: 416.8267753999771 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.143757994435448,
            "unit": "iter/sec",
            "range": "stddev: 0.05232234868994391",
            "extra": "mean: 318.0906423999659 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5298182128342757,
            "unit": "iter/sec",
            "range": "stddev: 0.0837715395260766",
            "extra": "mean: 1.8874398346000134 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 1.6996474524288396,
            "unit": "iter/sec",
            "range": "stddev: 0.021030574445522483",
            "extra": "mean: 588.3573081999884 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.6969081637248298,
            "unit": "iter/sec",
            "range": "stddev: 0.0316756221828465",
            "extra": "mean: 370.79497679997075 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.979464177324918,
            "unit": "iter/sec",
            "range": "stddev: 0.0003134486153000796",
            "extra": "mean: 77.04478292308838 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.062823118241395,
            "unit": "iter/sec",
            "range": "stddev: 0.0041556492518262135",
            "extra": "mean: 124.02603719999661 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.455249831444239,
            "unit": "iter/sec",
            "range": "stddev: 0.0013365472202647873",
            "extra": "mean: 183.3096615000045 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6852021500595427,
            "unit": "iter/sec",
            "range": "stddev: 0.018352188940463518",
            "extra": "mean: 1.459423324799991 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.6079384628673323,
            "unit": "iter/sec",
            "range": "stddev: 0.02064540633789614",
            "extra": "mean: 383.44463039995844 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.491372977384154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400453422522113",
            "extra": "mean: 80.05525107692463 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 279.5257108554135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004660453489378093",
            "extra": "mean: 3.5774884426186353 msec\nrounds: 244"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.391523730661792,
            "unit": "iter/sec",
            "range": "stddev: 0.001034262819358189",
            "extra": "mean: 87.7845689166558 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.32205304761016,
            "unit": "iter/sec",
            "range": "stddev: 0.0009966747990733315",
            "extra": "mean: 17.75503458928743 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6711226463253833,
            "unit": "iter/sec",
            "range": "stddev: 0.12603427642441561",
            "extra": "mean: 1.4900406140000313 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.9211812307864373,
            "unit": "iter/sec",
            "range": "stddev: 0.000974596477630487",
            "extra": "mean: 342.32727139999497 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.006210400230348,
            "unit": "iter/sec",
            "range": "stddev: 0.00035707203540380147",
            "extra": "mean: 37.028519928566894 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 47.62279795486248,
            "unit": "iter/sec",
            "range": "stddev: 0.02856208279369843",
            "extra": "mean: 20.99834623215153 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2004963155582304,
            "unit": "iter/sec",
            "range": "stddev: 0.016640091871435076",
            "extra": "mean: 312.4515391999694 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5049224476743523,
            "unit": "iter/sec",
            "range": "stddev: 0.00787304934929622",
            "extra": "mean: 285.313017600015 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.690306358587341,
            "unit": "iter/sec",
            "range": "stddev: 0.010592431769742864",
            "extra": "mean: 1.4486321726000368 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6023437304846766,
            "unit": "iter/sec",
            "range": "stddev: 0.07051358901885728",
            "extra": "mean: 624.0858194000111 msec\nrounds: 5"
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
          "id": "ae25f3ce8379916024548b13851f722092d152cc",
          "message": "refactor: clean up import statements and improve test compatibility",
          "timestamp": "2025-12-26T22:02:45+08:00",
          "tree_id": "2673aca2aeeda22a7941e8c5dcfa5e3b57c4b337",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/ae25f3ce8379916024548b13851f722092d152cc"
        },
        "date": 1766758055386,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.738909556207455,
            "unit": "iter/sec",
            "range": "stddev: 0.004273123277929196",
            "extra": "mean: 365.1088067999922 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.746617179348607,
            "unit": "iter/sec",
            "range": "stddev: 0.048145758054826425",
            "extra": "mean: 266.9074400000113 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5886779317199567,
            "unit": "iter/sec",
            "range": "stddev: 0.121112418011898",
            "extra": "mean: 1.6987217392000276 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.109610264329979,
            "unit": "iter/sec",
            "range": "stddev: 0.008393647608954283",
            "extra": "mean: 474.0212052000061 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7697368408881715,
            "unit": "iter/sec",
            "range": "stddev: 0.0323229136779243",
            "extra": "mean: 361.0451307999824 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 8.258250330669386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374914439713513",
            "extra": "mean: 121.09102533332185 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.3959639891270825,
            "unit": "iter/sec",
            "range": "stddev: 0.0017354254681453238",
            "extra": "mean: 156.34859759998108 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.663894637060291,
            "unit": "iter/sec",
            "range": "stddev: 0.002881239868931382",
            "extra": "mean: 176.55695666666324 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6669634990387014,
            "unit": "iter/sec",
            "range": "stddev: 0.14359733951513692",
            "extra": "mean: 1.499332424399995 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.6189190568101006,
            "unit": "iter/sec",
            "range": "stddev: 0.007401584683225702",
            "extra": "mean: 381.83692519997976 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.13453096955431,
            "unit": "iter/sec",
            "range": "stddev: 0.0010457388372889797",
            "extra": "mean: 98.67254863635563 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 276.442955782448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008863341883033591",
            "extra": "mean: 3.617382823771313 msec\nrounds: 244"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.66780796302491,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451194903584733",
            "extra": "mean: 85.70590150000612 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.039688366938236,
            "unit": "iter/sec",
            "range": "stddev: 0.00021919888191526918",
            "extra": "mean: 17.84449609091635 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6900959110672561,
            "unit": "iter/sec",
            "range": "stddev: 0.007395631909341334",
            "extra": "mean: 1.4490739387999951 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.945444617356716,
            "unit": "iter/sec",
            "range": "stddev: 0.0006936757624210547",
            "extra": "mean: 339.50731720001386 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.980897335827237,
            "unit": "iter/sec",
            "range": "stddev: 0.00042430975528765674",
            "extra": "mean: 37.063259518508524 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 45.3887114168468,
            "unit": "iter/sec",
            "range": "stddev: 0.02815193737380837",
            "extra": "mean: 22.03190989089928 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2294173673461213,
            "unit": "iter/sec",
            "range": "stddev: 0.012694955300146117",
            "extra": "mean: 309.6533789999967 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5829599646599237,
            "unit": "iter/sec",
            "range": "stddev: 0.011661774512812417",
            "extra": "mean: 279.0988484000309 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6328591043041175,
            "unit": "iter/sec",
            "range": "stddev: 0.14415245726981066",
            "extra": "mean: 1.5801305428000205 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.8889379113612268,
            "unit": "iter/sec",
            "range": "stddev: 0.02736788155160986",
            "extra": "mean: 529.3980251999756 msec\nrounds: 5"
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
          "id": "9dcfe4738f1ae55befea09275137db9d316c3e93",
          "message": "fix: update GitHub Actions workflow and improve test file handling\n\n- Removed Docker meta steps from the workflow to streamline the build process.\n- Switched to using GitHub Actions Cache for faster builds and to avoid permission errors.\n- Refactored test cases in `test_crypto_numpy.py`, `test_crypto_pt.py`, and `test_crypto_tf.py` to ensure proper cleanup of temporary files, enhancing reliability and preventing potential file access issues.",
          "timestamp": "2025-12-27T09:18:24+08:00",
          "tree_id": "b94692865f02156324f7533ddf197e7f19a5f489",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/9dcfe4738f1ae55befea09275137db9d316c3e93"
        },
        "date": 1766798586169,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.250066194359681,
            "unit": "iter/sec",
            "range": "stddev: 0.03800443659440056",
            "extra": "mean: 444.4313694000357 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.3450434644464355,
            "unit": "iter/sec",
            "range": "stddev: 0.006801421964663604",
            "extra": "mean: 230.1472950000516 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5620480929449907,
            "unit": "iter/sec",
            "range": "stddev: 0.18500535008293537",
            "extra": "mean: 1.7792071755999586 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.059411329743061,
            "unit": "iter/sec",
            "range": "stddev: 0.03172065892770066",
            "extra": "mean: 485.57565240002987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.717211045453366,
            "unit": "iter/sec",
            "range": "stddev: 0.06233714551340116",
            "extra": "mean: 368.02441299996644 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.79500404933489,
            "unit": "iter/sec",
            "range": "stddev: 0.0026761915750927374",
            "extra": "mean: 78.15550476922138 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.725314363780711,
            "unit": "iter/sec",
            "range": "stddev: 0.0007640210628178261",
            "extra": "mean: 114.60905112497244 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.453220764843428,
            "unit": "iter/sec",
            "range": "stddev: 0.043919447611198294",
            "extra": "mean: 224.55657439995775 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.690050057604382,
            "unit": "iter/sec",
            "range": "stddev: 0.008409101265471883",
            "extra": "mean: 1.4491702289999921 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.562018887280373,
            "unit": "iter/sec",
            "range": "stddev: 0.028519526926155923",
            "extra": "mean: 390.31718499995804 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.500104719466814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388193664604671",
            "extra": "mean: 86.95572991672407 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 280.33621579304287,
            "unit": "iter/sec",
            "range": "stddev: 0.00005833211187729561",
            "extra": "mean: 3.567145247969838 msec\nrounds: 246"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.645953012887468,
            "unit": "iter/sec",
            "range": "stddev: 0.00046139550154439566",
            "extra": "mean: 85.86673833334164 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 57.05536424325338,
            "unit": "iter/sec",
            "range": "stddev: 0.00011035239215323075",
            "extra": "mean: 17.52683578947175 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6578876883545739,
            "unit": "iter/sec",
            "range": "stddev: 0.07777935459728919",
            "extra": "mean: 1.5200162850000651 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.780424507117095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650970053431459",
            "extra": "mean: 359.6573104000072 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.335480702015662,
            "unit": "iter/sec",
            "range": "stddev: 0.03930948262695559",
            "extra": "mean: 44.77181455556294 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.203148385702164,
            "unit": "iter/sec",
            "range": "stddev: 0.00039535280909289426",
            "extra": "mean: 17.481555267855647 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.9656166600167233,
            "unit": "iter/sec",
            "range": "stddev: 0.01859840715111931",
            "extra": "mean: 337.1979978000127 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.6203267788345888,
            "unit": "iter/sec",
            "range": "stddev: 0.0035587600900590204",
            "extra": "mean: 276.2181595999209 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6478843093689906,
            "unit": "iter/sec",
            "range": "stddev: 0.10811555205366385",
            "extra": "mean: 1.5434854426000129 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7522453107575742,
            "unit": "iter/sec",
            "range": "stddev: 0.10559626703626315",
            "extra": "mean: 570.6963482000447 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}