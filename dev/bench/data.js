window.BENCHMARK_DATA = {
  "lastUpdate": 1775181373486,
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
          "id": "580317a09ff3ce36eda57676815145030f357674",
          "message": "style: improve code formatting in test_crypto_tf.py",
          "timestamp": "2025-12-27T09:57:45+08:00",
          "tree_id": "8866e7438d76d331bfa6529e992d3b7cd75a8a53",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/580317a09ff3ce36eda57676815145030f357674"
        },
        "date": 1766800932683,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.3812179854082207,
            "unit": "iter/sec",
            "range": "stddev: 0.02204905518178322",
            "extra": "mean: 419.9531525999987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.7913747254732586,
            "unit": "iter/sec",
            "range": "stddev: 0.014718578335031053",
            "extra": "mean: 263.7565718000019 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.577845027597824,
            "unit": "iter/sec",
            "range": "stddev: 0.17580046231013263",
            "extra": "mean: 1.7305678031999832 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.088048428571597,
            "unit": "iter/sec",
            "range": "stddev: 0.04427534378082806",
            "extra": "mean: 478.91609519999747 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7171140361505595,
            "unit": "iter/sec",
            "range": "stddev: 0.10317110967646109",
            "extra": "mean: 368.0375526000148 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 10.292912417193014,
            "unit": "iter/sec",
            "range": "stddev: 0.002416737502325979",
            "extra": "mean: 97.15423190909758 msec\nrounds: 11"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.472468450391913,
            "unit": "iter/sec",
            "range": "stddev: 0.016644522921924438",
            "extra": "mean: 182.73289449999197 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.376072428206537,
            "unit": "iter/sec",
            "range": "stddev: 0.0028652592280919756",
            "extra": "mean: 228.5154134000095 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7139988056976194,
            "unit": "iter/sec",
            "range": "stddev: 0.03468110319005719",
            "extra": "mean: 1.4005625668000108 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.5470393843062245,
            "unit": "iter/sec",
            "range": "stddev: 0.0020379260094198354",
            "extra": "mean: 392.6126961999785 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.467103136620105,
            "unit": "iter/sec",
            "range": "stddev: 0.0010649917413627077",
            "extra": "mean: 95.5374172727323 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 269.77292313815036,
            "unit": "iter/sec",
            "range": "stddev: 0.00012883336068196354",
            "extra": "mean: 3.7068212345680864 msec\nrounds: 243"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.708599513218727,
            "unit": "iter/sec",
            "range": "stddev: 0.0004103579608939571",
            "extra": "mean: 85.4073110000068 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.278256841457804,
            "unit": "iter/sec",
            "range": "stddev: 0.00022963247789058186",
            "extra": "mean: 18.090295482147262 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6895812182998227,
            "unit": "iter/sec",
            "range": "stddev: 0.008414169162877384",
            "extra": "mean: 1.4501555051999844 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.8341422092343227,
            "unit": "iter/sec",
            "range": "stddev: 0.0036149534255184097",
            "extra": "mean: 352.84044559999757 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.23972008620398,
            "unit": "iter/sec",
            "range": "stddev: 0.03834201866289779",
            "extra": "mean: 44.964594703704584 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.453200866831445,
            "unit": "iter/sec",
            "range": "stddev: 0.00041208102129355623",
            "extra": "mean: 17.405470625002447 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1227436557165715,
            "unit": "iter/sec",
            "range": "stddev: 0.018943702283799494",
            "extra": "mean: 320.23121659998424 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.21887152167431,
            "unit": "iter/sec",
            "range": "stddev: 0.011649715652691028",
            "extra": "mean: 310.66788260000067 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6895886575453608,
            "unit": "iter/sec",
            "range": "stddev: 0.006879880012498758",
            "extra": "mean: 1.450139860999991 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0093771830049585,
            "unit": "iter/sec",
            "range": "stddev: 0.027809282407621882",
            "extra": "mean: 497.66664439999886 msec\nrounds: 5"
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
          "id": "6d6a605bbd702aa661e307511a5777f99f127c2e",
          "message": "feat: update Python package metadata and enhance cross-compilation support\n\n- Updated the `cryptotensors` package version to 0.1.0 in `pyproject.toml` and `Cargo.lock`.\n- Enhanced the GitHub Actions workflow for building wheels by adding environment variables to support ARM64 cross-compilation.\n- Improved the description of the `cryptotensors` package for clarity and detail.",
          "timestamp": "2026-01-04T17:43:34+08:00",
          "tree_id": "864ad101ca96fec1a96ecd952142c3a261f514c7",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/6d6a605bbd702aa661e307511a5777f99f127c2e"
        },
        "date": 1767520093666,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.2598238406582496,
            "unit": "iter/sec",
            "range": "stddev: 0.03213761447468464",
            "extra": "mean: 306.7650428000036 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.499687929093183,
            "unit": "iter/sec",
            "range": "stddev: 0.01589968018135559",
            "extra": "mean: 222.2376342000075 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6117806984919789,
            "unit": "iter/sec",
            "range": "stddev: 0.1492163628890791",
            "extra": "mean: 1.6345726539999874 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.798196152923636,
            "unit": "iter/sec",
            "range": "stddev: 0.017246628719464092",
            "extra": "mean: 357.3730879999857 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.909105544748038,
            "unit": "iter/sec",
            "range": "stddev: 0.03472530125546528",
            "extra": "mean: 343.7482705999969 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.87340282785802,
            "unit": "iter/sec",
            "range": "stddev: 0.0004924784856161291",
            "extra": "mean: 77.67953923076203 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.642966628135505,
            "unit": "iter/sec",
            "range": "stddev: 0.0013347595081094996",
            "extra": "mean: 130.83924720000368 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.243657606725901,
            "unit": "iter/sec",
            "range": "stddev: 0.0017724980834867528",
            "extra": "mean: 235.64577839999856 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6667951008271189,
            "unit": "iter/sec",
            "range": "stddev: 0.00639650741101046",
            "extra": "mean: 1.49971107880001 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.762325419921734,
            "unit": "iter/sec",
            "range": "stddev: 0.027969840206915387",
            "extra": "mean: 362.0138281999857 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 15.069361710159672,
            "unit": "iter/sec",
            "range": "stddev: 0.0012519327818557133",
            "extra": "mean: 66.35981133333644 msec\nrounds: 15"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 275.1990435123798,
            "unit": "iter/sec",
            "range": "stddev: 0.000058490321360744416",
            "extra": "mean: 3.633733559669931 msec\nrounds: 243"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.670989223389606,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410168791366542",
            "extra": "mean: 85.68253991666097 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.7385544633301,
            "unit": "iter/sec",
            "range": "stddev: 0.0001584070267667374",
            "extra": "mean: 17.940903018177323 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.690286854390295,
            "unit": "iter/sec",
            "range": "stddev: 0.00776496764226052",
            "extra": "mean: 1.4486731040000222 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.6244868738426,
            "unit": "iter/sec",
            "range": "stddev: 0.0014418414318135443",
            "extra": "mean: 381.02686279999034 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.324294732686454,
            "unit": "iter/sec",
            "range": "stddev: 0.00033671944309577624",
            "extra": "mean: 36.597467923069885 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 47.65295868512784,
            "unit": "iter/sec",
            "range": "stddev: 0.027891730466712783",
            "extra": "mean: 20.985055862063252 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.161271828365169,
            "unit": "iter/sec",
            "range": "stddev: 0.03042077882566584",
            "extra": "mean: 316.3283812000259 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.262684243240966,
            "unit": "iter/sec",
            "range": "stddev: 0.004843688738735124",
            "extra": "mean: 306.49610119999124 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6899552705999847,
            "unit": "iter/sec",
            "range": "stddev: 0.008923974638312649",
            "extra": "mean: 1.4493693179999922 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7478396962656506,
            "unit": "iter/sec",
            "range": "stddev: 0.0887118056312464",
            "extra": "mean: 572.1348485999897 msec\nrounds: 5"
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
          "id": "fb844240af7a84d01c5edb9d9f55ec993eca4a29",
          "message": "refactor: clean up import statements and enhance serialization error handling\n\n- Removed duplicate import statements for `cryptotensors` in `bindings/python/src/lib.rs`.\n- Improved the formatting of the `serialize_to_file` function call for better readability and error handling in the same file.\n- Added documentation note regarding FFI safety for the `CreateProviderFn` type in `safetensors/src/registry.rs`.",
          "timestamp": "2026-01-04T18:22:34+08:00",
          "tree_id": "1df97dc963d28dc53371a6ebe041b2b8b5cea652",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/fb844240af7a84d01c5edb9d9f55ec993eca4a29"
        },
        "date": 1767522430995,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.9855434534925835,
            "unit": "iter/sec",
            "range": "stddev: 0.0067385304897728425",
            "extra": "mean: 503.6404508000032 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.536500705544774,
            "unit": "iter/sec",
            "range": "stddev: 0.005680780795403278",
            "extra": "mean: 220.43422119999718 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6099869542651282,
            "unit": "iter/sec",
            "range": "stddev: 0.18774065458180153",
            "extra": "mean: 1.6393793227999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.2559375396227264,
            "unit": "iter/sec",
            "range": "stddev: 0.0482015813902968",
            "extra": "mean: 443.2746839999993 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.5619685927276117,
            "unit": "iter/sec",
            "range": "stddev: 0.09705466605866171",
            "extra": "mean: 390.32484740000086 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 8.126092006252136,
            "unit": "iter/sec",
            "range": "stddev: 0.0010396611294508373",
            "extra": "mean: 123.0603836666641 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.46811435370887,
            "unit": "iter/sec",
            "range": "stddev: 0.0037582148010377446",
            "extra": "mean: 223.80805880000025 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.172909189284643,
            "unit": "iter/sec",
            "range": "stddev: 0.001852319889470632",
            "extra": "mean: 239.640968599997 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7404986843367349,
            "unit": "iter/sec",
            "range": "stddev: 0.005239013958433831",
            "extra": "mean: 1.3504412919999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.0611441461447244,
            "unit": "iter/sec",
            "range": "stddev: 0.0008198909578388627",
            "extra": "mean: 485.16742599999816 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.553765167591306,
            "unit": "iter/sec",
            "range": "stddev: 0.003066894202884396",
            "extra": "mean: 132.38431137499518 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 303.3785947398398,
            "unit": "iter/sec",
            "range": "stddev: 0.000052173939935333264",
            "extra": "mean: 3.2962114576921393 msec\nrounds: 260"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.821594193158894,
            "unit": "iter/sec",
            "range": "stddev: 0.002226605061995524",
            "extra": "mean: 72.35055421428578 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.15657285303564,
            "unit": "iter/sec",
            "range": "stddev: 0.00011101849334561161",
            "extra": "mean: 18.1302054909121 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7189113520909329,
            "unit": "iter/sec",
            "range": "stddev: 0.09339292365991739",
            "extra": "mean: 1.3909920841999905 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.5536412649144253,
            "unit": "iter/sec",
            "range": "stddev: 0.0010685295289910197",
            "extra": "mean: 391.5976819999855 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.583695534187676,
            "unit": "iter/sec",
            "range": "stddev: 0.03243568123350978",
            "extra": "mean: 37.61704232257553 msec\nrounds: 31"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.219731331723644,
            "unit": "iter/sec",
            "range": "stddev: 0.00032851545814022664",
            "extra": "mean: 17.47648890909039 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.101196564193668,
            "unit": "iter/sec",
            "range": "stddev: 0.001310169075705653",
            "extra": "mean: 322.45618080000895 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.117512352985212,
            "unit": "iter/sec",
            "range": "stddev: 0.003569466004168356",
            "extra": "mean: 320.7685766000054 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6993860247869944,
            "unit": "iter/sec",
            "range": "stddev: 0.09575670422230081",
            "extra": "mean: 1.4298255391999874 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6099194711679592,
            "unit": "iter/sec",
            "range": "stddev: 0.04178882461785533",
            "extra": "mean: 621.14908100001 msec\nrounds: 5"
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
          "id": "4afb6b724ce2083b08f4eb464db5731c85315c40",
          "message": "style: improve error message formatting in provider library\n\n- Reformatted error messages in the `_find_provider_native_lib` function for better readability and consistency.\n- Enhanced clarity of the ValueError messages when a provider module is not found or lacks the required method.",
          "timestamp": "2026-01-04T18:32:06+08:00",
          "tree_id": "1ee3b70c4d18f74be80851425845d4cd905fab6b",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/4afb6b724ce2083b08f4eb464db5731c85315c40"
        },
        "date": 1767522996142,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.2015896122506695,
            "unit": "iter/sec",
            "range": "stddev: 0.009079622872332039",
            "extra": "mean: 454.21725939999646 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.581535054480558,
            "unit": "iter/sec",
            "range": "stddev: 0.0065005742902633",
            "extra": "mean: 218.26745580000306 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6026365293923627,
            "unit": "iter/sec",
            "range": "stddev: 0.1553787651428432",
            "extra": "mean: 1.6593750150000006 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.5284220248508418,
            "unit": "iter/sec",
            "range": "stddev: 0.021086347498649446",
            "extra": "mean: 395.50359479999884 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.5739981349324186,
            "unit": "iter/sec",
            "range": "stddev: 0.1079683463622624",
            "extra": "mean: 388.50067000000195 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 8.266731697554217,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766508316000911",
            "extra": "mean: 120.96679033333795 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.639935695836451,
            "unit": "iter/sec",
            "range": "stddev: 0.003754941412830138",
            "extra": "mean: 215.52022820000047 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 3.580024506900331,
            "unit": "iter/sec",
            "range": "stddev: 0.004542339221911599",
            "extra": "mean: 279.32769679999296 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7198142944537029,
            "unit": "iter/sec",
            "range": "stddev: 0.025441165063828878",
            "extra": "mean: 1.3892472096000006 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.0023242379056363,
            "unit": "iter/sec",
            "range": "stddev: 0.05104814675723285",
            "extra": "mean: 499.41961499999934 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 6.011038526886191,
            "unit": "iter/sec",
            "range": "stddev: 0.0027576655460438424",
            "extra": "mean: 166.36060399999053 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 303.06376742098104,
            "unit": "iter/sec",
            "range": "stddev: 0.00003383290792109632",
            "extra": "mean: 3.299635613025677 msec\nrounds: 261"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 14.035714127240123,
            "unit": "iter/sec",
            "range": "stddev: 0.00020991849688490206",
            "extra": "mean: 71.24682014285456 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.012533867328706,
            "unit": "iter/sec",
            "range": "stddev: 0.00013667703412286272",
            "extra": "mean: 18.51422120754982 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6899892321757163,
            "unit": "iter/sec",
            "range": "stddev: 0.09847241417116262",
            "extra": "mean: 1.4492979793999665 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.3698075405880275,
            "unit": "iter/sec",
            "range": "stddev: 0.006482476550460175",
            "extra": "mean: 421.97519539998893 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.223076269357048,
            "unit": "iter/sec",
            "range": "stddev: 0.03225051128599024",
            "extra": "mean: 38.134351199998186 msec\nrounds: 30"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.82121907439361,
            "unit": "iter/sec",
            "range": "stddev: 0.0003565061714822441",
            "extra": "mean: 17.914334666666594 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.7275980488839076,
            "unit": "iter/sec",
            "range": "stddev: 0.0038138725764545953",
            "extra": "mean: 366.62293419999514 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.8336028391886345,
            "unit": "iter/sec",
            "range": "stddev: 0.009497045242626836",
            "extra": "mean: 352.9076079999754 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6451639845273747,
            "unit": "iter/sec",
            "range": "stddev: 0.11379300537072046",
            "extra": "mean: 1.549993527200013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6147357951901191,
            "unit": "iter/sec",
            "range": "stddev: 0.029200518598029322",
            "extra": "mean: 619.2963598000006 msec\nrounds: 5"
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
          "id": "5904c71f76ccb1fb32f1560b2eca59051d88fdcd",
          "message": "feat: implement end-to-end integration tests for CryptoTensors\n\n- Added a comprehensive suite of integration tests to validate the functionality of CryptoTensors with popular ML frameworks.\n- Created scripts for converting models to encrypted format, loading encrypted models, and comparing outputs to ensure encryption transparency.\n- Introduced a Docker-based testing environment to streamline the testing process and ensure consistency across different setups.\n- Updated README files to include instructions for running integration tests and utilizing the compatible package for seamless model loading.\n- Enhanced the GitHub Actions workflow to automate integration testing on pull requests and pushes to the main branch.",
          "timestamp": "2026-01-04T20:31:13+08:00",
          "tree_id": "99d69c9995fda111614aa156a9d525d449abe07f",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/5904c71f76ccb1fb32f1560b2eca59051d88fdcd"
        },
        "date": 1767530208707,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.760208562639759,
            "unit": "iter/sec",
            "range": "stddev: 0.035585184429446345",
            "extra": "mean: 362.2914635999962 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.293907081281646,
            "unit": "iter/sec",
            "range": "stddev: 0.0038702341319576034",
            "extra": "mean: 232.88813219999156 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5886220817733094,
            "unit": "iter/sec",
            "range": "stddev: 0.20362665470162045",
            "extra": "mean: 1.6988829182000018 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.3526032142246014,
            "unit": "iter/sec",
            "range": "stddev: 0.018882796532940938",
            "extra": "mean: 425.0610531999939 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.774193276551916,
            "unit": "iter/sec",
            "range": "stddev: 0.04180894579577783",
            "extra": "mean: 360.4651516000047 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.71430352241353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005538407521037822",
            "extra": "mean: 78.65157523077379 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.452770755785799,
            "unit": "iter/sec",
            "range": "stddev: 0.005063961212785057",
            "extra": "mean: 134.17828519999375 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.2738867571458945,
            "unit": "iter/sec",
            "range": "stddev: 0.0009525797150247282",
            "extra": "mean: 233.97905859999923 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6670298680762641,
            "unit": "iter/sec",
            "range": "stddev: 0.00947655096416033",
            "extra": "mean: 1.4991832418000002 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.595344343729117,
            "unit": "iter/sec",
            "range": "stddev: 0.032677340374982905",
            "extra": "mean: 385.3053265999961 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.57835971457713,
            "unit": "iter/sec",
            "range": "stddev: 0.0018474536665844569",
            "extra": "mean: 104.40200929999719 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 276.4480579554708,
            "unit": "iter/sec",
            "range": "stddev: 0.00007003148946116129",
            "extra": "mean: 3.6173160607302086 msec\nrounds: 247"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.76019703434099,
            "unit": "iter/sec",
            "range": "stddev: 0.0013769815209884267",
            "extra": "mean: 85.03258891665648 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.55858951951737,
            "unit": "iter/sec",
            "range": "stddev: 0.00017364255101025256",
            "extra": "mean: 17.68078038181836 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6714713773317497,
            "unit": "iter/sec",
            "range": "stddev: 0.018624566532942886",
            "extra": "mean: 1.4892667561999986 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.7428306456710723,
            "unit": "iter/sec",
            "range": "stddev: 0.00044223102752345673",
            "extra": "mean: 364.5868554000117 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.113592410292313,
            "unit": "iter/sec",
            "range": "stddev: 0.040291935258799816",
            "extra": "mean: 43.26458571427899 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 59.28594166954498,
            "unit": "iter/sec",
            "range": "stddev: 0.00011027071986499799",
            "extra": "mean: 16.867405186442323 msec\nrounds: 59"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.145753550679305,
            "unit": "iter/sec",
            "range": "stddev: 0.025739371882016922",
            "extra": "mean: 317.88885680000476 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.6212587446003583,
            "unit": "iter/sec",
            "range": "stddev: 0.0019890304398963933",
            "extra": "mean: 276.1470721999899 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6576302285323904,
            "unit": "iter/sec",
            "range": "stddev: 0.1270514110126552",
            "extra": "mean: 1.5206113657999936 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7064723649382156,
            "unit": "iter/sec",
            "range": "stddev: 0.07245927556088172",
            "extra": "mean: 586.0042158000056 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "7653b6408b25300f1802345229d36cd54246c238",
          "message": "[WIP] Add functions to read metadata in Python",
          "timestamp": "2026-01-04T12:31:26Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/5/commits/7653b6408b25300f1802345229d36cd54246c238"
        },
        "date": 1767534049060,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.709466948451693,
            "unit": "iter/sec",
            "range": "stddev: 0.01990876313138485",
            "extra": "mean: 369.0762866000057 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.491939085942344,
            "unit": "iter/sec",
            "range": "stddev: 0.01994930859841367",
            "extra": "mean: 222.62100640000426 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5739426480928476,
            "unit": "iter/sec",
            "range": "stddev: 0.1785324967944981",
            "extra": "mean: 1.742334366199998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.2236110293865736,
            "unit": "iter/sec",
            "range": "stddev: 0.06269034512251516",
            "extra": "mean: 449.71894220000763 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.6704776875714438,
            "unit": "iter/sec",
            "range": "stddev: 0.06439545673030189",
            "extra": "mean: 374.464839999996 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 13.177817230929056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006422308605453127",
            "extra": "mean: 75.88510164285367 msec\nrounds: 14"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.770845582205375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005454689415145227",
            "extra": "mean: 114.01409255554995 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.240154434966891,
            "unit": "iter/sec",
            "range": "stddev: 0.010774777508112562",
            "extra": "mean: 190.83407033333324 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6946099920980155,
            "unit": "iter/sec",
            "range": "stddev: 0.025812156344085933",
            "extra": "mean: 1.4396568022000054 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.5409015890865336,
            "unit": "iter/sec",
            "range": "stddev: 0.001130205728014914",
            "extra": "mean: 393.56109040000433 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.181321092998951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461421148154267",
            "extra": "mean: 75.86492984615435 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.25183818453735,
            "unit": "iter/sec",
            "range": "stddev: 0.000060052788272515886",
            "extra": "mean: 3.659627714287002 msec\nrounds: 238"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.640246913033653,
            "unit": "iter/sec",
            "range": "stddev: 0.0009263776012587758",
            "extra": "mean: 85.90883058333532 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.06601835334413,
            "unit": "iter/sec",
            "range": "stddev: 0.00015153742611537333",
            "extra": "mean: 17.836115874997812 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6721768494752886,
            "unit": "iter/sec",
            "range": "stddev: 0.11167981252586627",
            "extra": "mean: 1.4877037207999877 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.8681606718278303,
            "unit": "iter/sec",
            "range": "stddev: 0.00042774985627434977",
            "extra": "mean: 348.6555023999813 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.93485761002059,
            "unit": "iter/sec",
            "range": "stddev: 0.03700245046847023",
            "extra": "mean: 43.601753148146194 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.754843853941296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105128230577169",
            "extra": "mean: 17.314565035080744 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.412430207817173,
            "unit": "iter/sec",
            "range": "stddev: 0.01801873142745165",
            "extra": "mean: 293.0462863999992 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.518081283949421,
            "unit": "iter/sec",
            "range": "stddev: 0.0083201440666515",
            "extra": "mean: 284.2458486000055 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6331616328698706,
            "unit": "iter/sec",
            "range": "stddev: 0.15728891765297623",
            "extra": "mean: 1.5793755465999992 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6670067832823467,
            "unit": "iter/sec",
            "range": "stddev: 0.041638061567613016",
            "extra": "mean: 599.8775829999886 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "241ff14e456166cab42d8d2e541611a40c6fb8ac",
          "message": "Merge pull request #5 from aiyah-meloken/copilot/add-read-metadata-functions\n\nAdd split metadata accessors for Python bindings",
          "timestamp": "2026-01-05T14:40:42+08:00",
          "tree_id": "af11e7ebf486e8d1cf4166fe8cab938f7f7fb46f",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/241ff14e456166cab42d8d2e541611a40c6fb8ac"
        },
        "date": 1767595505533,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.323608202393896,
            "unit": "iter/sec",
            "range": "stddev: 0.07058138207938396",
            "extra": "mean: 430.365153199989 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.896601633826896,
            "unit": "iter/sec",
            "range": "stddev: 0.008699017107535595",
            "extra": "mean: 256.6338810000161 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5480410121773945,
            "unit": "iter/sec",
            "range": "stddev: 0.06238408656270923",
            "extra": "mean: 1.8246809595999935 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.175612255296623,
            "unit": "iter/sec",
            "range": "stddev: 0.015537176989285627",
            "extra": "mean: 459.64072759999226 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7481514169256265,
            "unit": "iter/sec",
            "range": "stddev: 0.08082843949291825",
            "extra": "mean: 363.88096880000376 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.850288065846954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007090355044280031",
            "extra": "mean: 77.81926715384421 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.558665241307561,
            "unit": "iter/sec",
            "range": "stddev: 0.0011169015160656368",
            "extra": "mean: 132.29849028570177 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.065759207905852,
            "unit": "iter/sec",
            "range": "stddev: 0.011634824623915897",
            "extra": "mean: 197.40377680000165 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6889644112783573,
            "unit": "iter/sec",
            "range": "stddev: 0.00814399101779375",
            "extra": "mean: 1.451453781400005 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.5433002112886687,
            "unit": "iter/sec",
            "range": "stddev: 0.02280072660621779",
            "extra": "mean: 393.1899174000023 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.519339856531357,
            "unit": "iter/sec",
            "range": "stddev: 0.000954756747612798",
            "extra": "mean: 95.06299954546193 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 262.4423217243276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007964080711341683",
            "extra": "mean: 3.8103610478282977 msec\nrounds: 230"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.294838394494201,
            "unit": "iter/sec",
            "range": "stddev: 0.0010869407759613958",
            "extra": "mean: 88.53601663636564 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.72744650354919,
            "unit": "iter/sec",
            "range": "stddev: 0.0005311175140180518",
            "extra": "mean: 18.965454735849725 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7091666468174461,
            "unit": "iter/sec",
            "range": "stddev: 0.01613256679918458",
            "extra": "mean: 1.4101057974000013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.9869522482311535,
            "unit": "iter/sec",
            "range": "stddev: 0.0014852899018469863",
            "extra": "mean: 334.7894164000081 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.99727425745943,
            "unit": "iter/sec",
            "range": "stddev: 0.042723643482087924",
            "extra": "mean: 45.460177851848755 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 54.84653790607075,
            "unit": "iter/sec",
            "range": "stddev: 0.00035677933684842046",
            "extra": "mean: 18.232691400003823 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.183227935658809,
            "unit": "iter/sec",
            "range": "stddev: 0.0153193220550217",
            "extra": "mean: 314.1465268000161 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.175475369821518,
            "unit": "iter/sec",
            "range": "stddev: 0.0038613602813415368",
            "extra": "mean: 314.913480200039 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6246104085487453,
            "unit": "iter/sec",
            "range": "stddev: 0.16281784769971436",
            "extra": "mean: 1.6009979762000057 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.647963645995844,
            "unit": "iter/sec",
            "range": "stddev: 0.09964727740800332",
            "extra": "mean: 606.8095023999831 msec\nrounds: 5"
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
          "id": "21a998454247943a941af6969f6606556be59e5e",
          "message": "fix: bump cryptotensors and cryptotensors-python package versions to 0.1.1 in Cargo.lock",
          "timestamp": "2026-01-06T18:44:20+08:00",
          "tree_id": "8f06bf47a07ecf473f66faf4a4b3792c6bf3d5e2",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/21a998454247943a941af6969f6606556be59e5e"
        },
        "date": 1767696531313,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.1765246042498907,
            "unit": "iter/sec",
            "range": "stddev: 0.004260068064551201",
            "extra": "mean: 459.44805679999945 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.553273451461424,
            "unit": "iter/sec",
            "range": "stddev: 0.01534010799292112",
            "extra": "mean: 219.6222148000004 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6330357679072354,
            "unit": "iter/sec",
            "range": "stddev: 0.15453038654793239",
            "extra": "mean: 1.5796895699999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 1.9412223466509548,
            "unit": "iter/sec",
            "range": "stddev: 0.06759071553477629",
            "extra": "mean: 515.139340799999 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7499584661398027,
            "unit": "iter/sec",
            "range": "stddev: 0.03781415866673826",
            "extra": "mean: 363.64185580000026 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 9.512154100206526,
            "unit": "iter/sec",
            "range": "stddev: 0.001396471372018037",
            "extra": "mean: 105.1286585000014 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.599075146728145,
            "unit": "iter/sec",
            "range": "stddev: 0.001708882210004803",
            "extra": "mean: 116.29157588888954 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.657614899918522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006582428147920961",
            "extra": "mean: 176.75292816667346 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6908576055976728,
            "unit": "iter/sec",
            "range": "stddev: 0.00693477501422531",
            "extra": "mean: 1.4474762843999998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.62511093515368,
            "unit": "iter/sec",
            "range": "stddev: 0.019048550315830633",
            "extra": "mean: 380.93628219999687 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.308530406452679,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536532064837789",
            "extra": "mean: 81.24446761538287 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 257.60291532205247,
            "unit": "iter/sec",
            "range": "stddev: 0.00012520775945425405",
            "extra": "mean: 3.8819436447363587 msec\nrounds: 228"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.577669159215828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880557361722884",
            "extra": "mean: 86.37317116666783 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.4564431303871,
            "unit": "iter/sec",
            "range": "stddev: 0.00014266146422054951",
            "extra": "mean: 19.063435115384664 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7193294494314576,
            "unit": "iter/sec",
            "range": "stddev: 0.021612554107637797",
            "extra": "mean: 1.3901835950000077 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.2127127877747665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007077453430248818",
            "extra": "mean: 311.26342939999745 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.071376587392344,
            "unit": "iter/sec",
            "range": "stddev: 0.04191993507940784",
            "extra": "mean: 45.30755007692733 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.28471256358001,
            "unit": "iter/sec",
            "range": "stddev: 0.00027699955723961426",
            "extra": "mean: 18.088183037036742 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2773017230834705,
            "unit": "iter/sec",
            "range": "stddev: 0.006574369680555184",
            "extra": "mean: 305.1290618000053 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.262417183588812,
            "unit": "iter/sec",
            "range": "stddev: 0.002829793578798973",
            "extra": "mean: 306.5211907999924 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7196486764513105,
            "unit": "iter/sec",
            "range": "stddev: 0.023511164703277868",
            "extra": "mean: 1.3895669272000077 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.8406620852685225,
            "unit": "iter/sec",
            "range": "stddev: 0.07772530984040166",
            "extra": "mean: 543.2827720000091 msec\nrounds: 5"
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
          "id": "b3479e2561d92caf9a06ca5640343916d81f0e2f",
          "message": "feat: add metadata accessors for non-reserved and reserved fields\n\n- Implemented `metadata` and `reserved_metadata` methods in the `SafeTensors` struct to retrieve non-reserved and reserved metadata fields, respectively.",
          "timestamp": "2026-01-06T20:31:40+08:00",
          "tree_id": "5da367b83cc662d4fa40059130e6d045684be770",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/b3479e2561d92caf9a06ca5640343916d81f0e2f"
        },
        "date": 1767702976606,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.4529519498816765,
            "unit": "iter/sec",
            "range": "stddev: 0.004186965198987976",
            "extra": "mean: 407.6720704000081 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.54140796253576,
            "unit": "iter/sec",
            "range": "stddev: 0.02857198257008806",
            "extra": "mean: 282.37356740000337 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6024083768352744,
            "unit": "iter/sec",
            "range": "stddev: 0.12427063007794693",
            "extra": "mean: 1.6600034768 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.2019527364303473,
            "unit": "iter/sec",
            "range": "stddev: 0.013849809007869794",
            "extra": "mean: 454.1423543999997 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.813790625791045,
            "unit": "iter/sec",
            "range": "stddev: 0.0638702870056162",
            "extra": "mean: 355.39246980001167 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 15.513311940980458,
            "unit": "iter/sec",
            "range": "stddev: 0.0018588318716177812",
            "extra": "mean: 64.46076787499955 msec\nrounds: 16"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.448623494268318,
            "unit": "iter/sec",
            "range": "stddev: 0.01306492290061917",
            "extra": "mean: 183.53259333333463 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.561092338711961,
            "unit": "iter/sec",
            "range": "stddev: 0.004185011748588337",
            "extra": "mean: 179.82078683333214 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7033239810139856,
            "unit": "iter/sec",
            "range": "stddev: 0.0192075052642877",
            "extra": "mean: 1.4218198539999947 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.5157048561136133,
            "unit": "iter/sec",
            "range": "stddev: 0.008950024271076155",
            "extra": "mean: 397.50290959999575 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.885234171074714,
            "unit": "iter/sec",
            "range": "stddev: 0.006210856073397491",
            "extra": "mean: 101.16098240000326 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 263.084849539764,
            "unit": "iter/sec",
            "range": "stddev: 0.000055261142307935765",
            "extra": "mean: 3.801055065502185 msec\nrounds: 229"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.181824324336857,
            "unit": "iter/sec",
            "range": "stddev: 0.0004519394610092767",
            "extra": "mean: 89.43084518181297 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.59096802087763,
            "unit": "iter/sec",
            "range": "stddev: 0.00025956525433940036",
            "extra": "mean: 19.014671865386063 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6852858358621164,
            "unit": "iter/sec",
            "range": "stddev: 0.047985643172144196",
            "extra": "mean: 1.4592451028000029 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.8572760519232814,
            "unit": "iter/sec",
            "range": "stddev: 0.0008788364757482154",
            "extra": "mean: 349.9836844000015 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.375918266694555,
            "unit": "iter/sec",
            "range": "stddev: 0.042428416130284925",
            "extra": "mean: 46.78161600000513 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 53.27413314954984,
            "unit": "iter/sec",
            "range": "stddev: 0.00028324033090637395",
            "extra": "mean: 18.770835692301638 msec\nrounds: 52"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.6230991333093243,
            "unit": "iter/sec",
            "range": "stddev: 0.04217707165338499",
            "extra": "mean: 381.22844359999135 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5703469577699085,
            "unit": "iter/sec",
            "range": "stddev: 0.004208157444358572",
            "extra": "mean: 280.0848242000029 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6851420905267225,
            "unit": "iter/sec",
            "range": "stddev: 0.02855366717115876",
            "extra": "mean: 1.4595512578000012 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9099492731453924,
            "unit": "iter/sec",
            "range": "stddev: 0.08828510281171409",
            "extra": "mean: 523.5741147999988 msec\nrounds: 5"
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
          "id": "5c7622b82d4624055b829d263f1d38aa2acc20bd",
          "message": "style: format code for improved readability in registry.rs\n\n- Reformatted the public key entry and method calls in the `verify_library_signature` function for better clarity and consistency.\n- Enhanced the error handling formatting for file operations to improve code maintainability.",
          "timestamp": "2026-01-06T20:34:22+08:00",
          "tree_id": "b203d7ac11dfc74f82815941aa9fc8e0ccf74019",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/5c7622b82d4624055b829d263f1d38aa2acc20bd"
        },
        "date": 1767703153354,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.963166233532589,
            "unit": "iter/sec",
            "range": "stddev: 0.012704862008617314",
            "extra": "mean: 337.4768478000078 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.08731817603924,
            "unit": "iter/sec",
            "range": "stddev: 0.028205210107247195",
            "extra": "mean: 244.65920119999964 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6030951363956529,
            "unit": "iter/sec",
            "range": "stddev: 0.19140170767550116",
            "extra": "mean: 1.6581131891999916 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.0586281079627664,
            "unit": "iter/sec",
            "range": "stddev: 0.05600481288812033",
            "extra": "mean: 485.76039359999186 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.715346381415209,
            "unit": "iter/sec",
            "range": "stddev: 0.05342052995974752",
            "extra": "mean: 368.27714019999576 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 8.25737941148151,
            "unit": "iter/sec",
            "range": "stddev: 0.0006994142776815995",
            "extra": "mean: 121.10379699999561 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.646267904949419,
            "unit": "iter/sec",
            "range": "stddev: 0.0025111280568334824",
            "extra": "mean: 177.10813883333762 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.275917131075427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005454090456336187",
            "extra": "mean: 189.54050549997228 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6894889400540115,
            "unit": "iter/sec",
            "range": "stddev: 0.028089509534125517",
            "extra": "mean: 1.450349587800008 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.5180680295079387,
            "unit": "iter/sec",
            "range": "stddev: 0.035342064700381134",
            "extra": "mean: 397.1298583999783 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.563678540220874,
            "unit": "iter/sec",
            "range": "stddev: 0.0019873821842063036",
            "extra": "mean: 116.77224866665863 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 272.44503649864794,
            "unit": "iter/sec",
            "range": "stddev: 0.00004916902811881516",
            "extra": "mean: 3.670465106839862 msec\nrounds: 234"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.58158204016996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580464970716807",
            "extra": "mean: 86.34398966665913 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.44003296738107,
            "unit": "iter/sec",
            "range": "stddev: 0.00022009250479545212",
            "extra": "mean: 17.71792019643113 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6534772692804939,
            "unit": "iter/sec",
            "range": "stddev: 0.06572530517068029",
            "extra": "mean: 1.5302751097999816 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.7012139906666377,
            "unit": "iter/sec",
            "range": "stddev: 0.00690228492634621",
            "extra": "mean: 370.20391700000346 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.556748638132383,
            "unit": "iter/sec",
            "range": "stddev: 0.0010037307941808172",
            "extra": "mean: 37.65521200001558 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.36381027538787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735204187551487",
            "extra": "mean: 17.741880740746613 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.990371467382704,
            "unit": "iter/sec",
            "range": "stddev: 0.0190725100185257",
            "extra": "mean: 334.40661499998896 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.193144095850815,
            "unit": "iter/sec",
            "range": "stddev: 0.0018409374495657964",
            "extra": "mean: 313.1709593999858 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6474989956319349,
            "unit": "iter/sec",
            "range": "stddev: 0.1515468462524993",
            "extra": "mean: 1.5444039399999951 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.690176869738291,
            "unit": "iter/sec",
            "range": "stddev: 0.09752562445571022",
            "extra": "mean: 591.6540557999951 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "ba94031bb56ca034336125c1b6411611d5fcc8e8",
          "message": "Add crypto config and key management features",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/6/commits/ba94031bb56ca034336125c1b6411611d5fcc8e8"
        },
        "date": 1769163448820,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.9106835607625505,
            "unit": "iter/sec",
            "range": "stddev: 0.0020639557422379136",
            "extra": "mean: 523.3729020000055 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.3974567920279086,
            "unit": "iter/sec",
            "range": "stddev: 0.02739202864295396",
            "extra": "mean: 417.1086642000091 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5822216393448677,
            "unit": "iter/sec",
            "range": "stddev: 0.08970388244041799",
            "extra": "mean: 1.7175589714000126 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 1.7028826768842997,
            "unit": "iter/sec",
            "range": "stddev: 0.017889615885890556",
            "extra": "mean: 587.2395165999706 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.690542255959593,
            "unit": "iter/sec",
            "range": "stddev: 0.06882438646510436",
            "extra": "mean: 371.6722894000213 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.839467938134677,
            "unit": "iter/sec",
            "range": "stddev: 0.019900767283329582",
            "extra": "mean: 127.55967724997674 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.367695494031565,
            "unit": "iter/sec",
            "range": "stddev: 0.007699591522817648",
            "extra": "mean: 119.50721685717066 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.810996629704714,
            "unit": "iter/sec",
            "range": "stddev: 0.000497969717197606",
            "extra": "mean: 207.85713999998734 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6850061693313196,
            "unit": "iter/sec",
            "range": "stddev: 0.021149771252869487",
            "extra": "mean: 1.4598408668000276 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.4837588523733505,
            "unit": "iter/sec",
            "range": "stddev: 0.007238718398828879",
            "extra": "mean: 402.6155756000435 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.181005993564247,
            "unit": "iter/sec",
            "range": "stddev: 0.0007458493382496912",
            "extra": "mean: 82.09502569232322 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 268.1098930223578,
            "unit": "iter/sec",
            "range": "stddev: 0.00007000325933003501",
            "extra": "mean: 3.729813878656874 msec\nrounds: 239"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.455774813315239,
            "unit": "iter/sec",
            "range": "stddev: 0.00032401632776694075",
            "extra": "mean: 87.2922186666661 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.269919312825586,
            "unit": "iter/sec",
            "range": "stddev: 0.0003006431056669163",
            "extra": "mean: 18.42641398148662 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7136891547754501,
            "unit": "iter/sec",
            "range": "stddev: 0.006467101057784893",
            "extra": "mean: 1.4011702340000283 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.8617811158689865,
            "unit": "iter/sec",
            "range": "stddev: 0.004255556176256258",
            "extra": "mean: 349.4327341999906 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.18110161812187,
            "unit": "iter/sec",
            "range": "stddev: 0.04156256837816295",
            "extra": "mean: 45.08342359258677 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 54.7783376227337,
            "unit": "iter/sec",
            "range": "stddev: 0.0013225273019292507",
            "extra": "mean: 18.25539151785043 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1758680633683976,
            "unit": "iter/sec",
            "range": "stddev: 0.016599810868320256",
            "extra": "mean: 314.87454139999045 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.577351359546457,
            "unit": "iter/sec",
            "range": "stddev: 0.00047277697154661085",
            "extra": "mean: 279.53642220002166 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7135156526195604,
            "unit": "iter/sec",
            "range": "stddev: 0.008630170037303134",
            "extra": "mean: 1.4015109497999902 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.789147895031045,
            "unit": "iter/sec",
            "range": "stddev: 0.06269579927583417",
            "extra": "mean: 558.9252865999924 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "1c3916d0cd0fff05696970a67cf1e3f88907f47b",
          "message": "Add crypto config and key management features",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/6/commits/1c3916d0cd0fff05696970a67cf1e3f88907f47b"
        },
        "date": 1769396132672,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.9647913191584079,
            "unit": "iter/sec",
            "range": "stddev: 0.030693877508819627",
            "extra": "mean: 508.9599033999889 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.1218380812294955,
            "unit": "iter/sec",
            "range": "stddev: 0.011521428248063448",
            "extra": "mean: 242.61020940000435 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6581251215942849,
            "unit": "iter/sec",
            "range": "stddev: 0.1002830447872483",
            "extra": "mean: 1.5194679054000175 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.3078910135580157,
            "unit": "iter/sec",
            "range": "stddev: 0.00932343159722236",
            "extra": "mean: 433.29602399999203 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.85191422441995,
            "unit": "iter/sec",
            "range": "stddev: 0.09553441530352488",
            "extra": "mean: 350.64168180001616 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 10.858471014550075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197150946094599",
            "extra": "mean: 92.09399727273069 msec\nrounds: 11"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 3.9030271667939425,
            "unit": "iter/sec",
            "range": "stddev: 0.002044625180840218",
            "extra": "mean: 256.21138600001814 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.196662430292602,
            "unit": "iter/sec",
            "range": "stddev: 0.003127247542033726",
            "extra": "mean: 238.28459320000093 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6992138759089849,
            "unit": "iter/sec",
            "range": "stddev: 0.02654894808991422",
            "extra": "mean: 1.4301775672000077 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.0080730617527593,
            "unit": "iter/sec",
            "range": "stddev: 0.054830702501995156",
            "extra": "mean: 497.98984860000246 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 6.161617136627539,
            "unit": "iter/sec",
            "range": "stddev: 0.0037953889491383814",
            "extra": "mean: 162.29505628571619 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 295.1887609072861,
            "unit": "iter/sec",
            "range": "stddev: 0.00006493893831522396",
            "extra": "mean: 3.387662853173747 msec\nrounds: 252"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.859173075668231,
            "unit": "iter/sec",
            "range": "stddev: 0.0004906493682910426",
            "extra": "mean: 72.15437707143175 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.768350559735026,
            "unit": "iter/sec",
            "range": "stddev: 0.00016575886072429187",
            "extra": "mean: 18.950753423076513 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7105229103092632,
            "unit": "iter/sec",
            "range": "stddev: 0.023121975062062157",
            "extra": "mean: 1.4074141529999906 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.2793713376416798,
            "unit": "iter/sec",
            "range": "stddev: 0.014273926719394406",
            "extra": "mean: 438.71745840001495 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 30.431317518059487,
            "unit": "iter/sec",
            "range": "stddev: 0.0003152907595779186",
            "extra": "mean: 32.86088416666644 msec\nrounds: 30"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 47.53239092618716,
            "unit": "iter/sec",
            "range": "stddev: 0.024299156123020003",
            "extra": "mean: 21.03828527272898 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.5837917315327004,
            "unit": "iter/sec",
            "range": "stddev: 0.011829575967544468",
            "extra": "mean: 387.0280982000054 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.8368022989637387,
            "unit": "iter/sec",
            "range": "stddev: 0.008149486873916974",
            "extra": "mean: 352.50958459998856 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6543663159176315,
            "unit": "iter/sec",
            "range": "stddev: 0.04953285622502866",
            "extra": "mean: 1.5281960205999894 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6833012759995745,
            "unit": "iter/sec",
            "range": "stddev: 0.02405436904595138",
            "extra": "mean: 594.070719399997 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "38f0b6d8d4120edad801905a42b22821d979aa62",
          "message": "Add crypto config and key management features",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/6/commits/38f0b6d8d4120edad801905a42b22821d979aa62"
        },
        "date": 1769397156645,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.0702388569134573,
            "unit": "iter/sec",
            "range": "stddev: 0.009839346522334199",
            "extra": "mean: 483.036050000004 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.292779509192092,
            "unit": "iter/sec",
            "range": "stddev: 0.035626687857896175",
            "extra": "mean: 303.69479560001196 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5825310205626801,
            "unit": "iter/sec",
            "range": "stddev: 0.162652966840504",
            "extra": "mean: 1.7166467787999977 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.622699754557954,
            "unit": "iter/sec",
            "range": "stddev: 0.008507121204058027",
            "extra": "mean: 381.2864961999992 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8781933216716755,
            "unit": "iter/sec",
            "range": "stddev: 0.037957206723391756",
            "extra": "mean: 347.4401779999937 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.747929704346003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535948840322888",
            "extra": "mean: 78.44411000000115 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.798408560048829,
            "unit": "iter/sec",
            "range": "stddev: 0.0005501439797267053",
            "extra": "mean: 128.23129133333566 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.295853163559851,
            "unit": "iter/sec",
            "range": "stddev: 0.003037505132528863",
            "extra": "mean: 188.82698766666786 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6669360604599975,
            "unit": "iter/sec",
            "range": "stddev: 0.009585835398753802",
            "extra": "mean: 1.4993941087999985 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.4882628628318697,
            "unit": "iter/sec",
            "range": "stddev: 0.006085251641732024",
            "extra": "mean: 401.88680020000334 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.13159000969271,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294113334155727",
            "extra": "mean: 89.83442609090534 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.11926088844064,
            "unit": "iter/sec",
            "range": "stddev: 0.000057171543084769374",
            "extra": "mean: 3.661404167348212 msec\nrounds: 245"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.7313136755845,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930672759946021",
            "extra": "mean: 85.2419454166693 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.934742717133986,
            "unit": "iter/sec",
            "range": "stddev: 0.0025427618909213876",
            "extra": "mean: 18.540924636362828 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7086916858237471,
            "unit": "iter/sec",
            "range": "stddev: 0.019058719219608347",
            "extra": "mean: 1.411050842000003 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.787173772577033,
            "unit": "iter/sec",
            "range": "stddev: 0.0011669228443370613",
            "extra": "mean: 358.7863842000047 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.04014200613731,
            "unit": "iter/sec",
            "range": "stddev: 0.04047064354524811",
            "extra": "mean: 45.371758481480725 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.41684400435519,
            "unit": "iter/sec",
            "range": "stddev: 0.0004064198083314594",
            "extra": "mean: 18.045055036360612 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.080983889528964,
            "unit": "iter/sec",
            "range": "stddev: 0.018688459951764685",
            "extra": "mean: 324.57164200001216 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4953992949773203,
            "unit": "iter/sec",
            "range": "stddev: 0.007681551576219499",
            "extra": "mean: 286.0903478000182 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6293846300537201,
            "unit": "iter/sec",
            "range": "stddev: 0.13778936656103813",
            "extra": "mean: 1.5888535440000282 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.513872443864956,
            "unit": "iter/sec",
            "range": "stddev: 0.10553811535332802",
            "extra": "mean: 660.5576341999949 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "7c9eac39ccbea2b06f18add2fc84752916f2d8ad",
          "message": "Add crypto config and key management features",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/6/commits/7c9eac39ccbea2b06f18add2fc84752916f2d8ad"
        },
        "date": 1769397816082,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.6317751004924066,
            "unit": "iter/sec",
            "range": "stddev: 0.03447422803444014",
            "extra": "mean: 379.97167759999684 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.8831387443707475,
            "unit": "iter/sec",
            "range": "stddev: 0.015560856743793712",
            "extra": "mean: 257.5236338000195 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5993031392512757,
            "unit": "iter/sec",
            "range": "stddev: 0.17761362754964874",
            "extra": "mean: 1.668604641800016 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.360198827850731,
            "unit": "iter/sec",
            "range": "stddev: 0.014999835181780235",
            "extra": "mean: 423.6931178000077 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7872853101714994,
            "unit": "iter/sec",
            "range": "stddev: 0.03439787009253617",
            "extra": "mean: 358.7720267999657 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.962315606086984,
            "unit": "iter/sec",
            "range": "stddev: 0.0004020543076313219",
            "extra": "mean: 77.14670976923361 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.625210020394578,
            "unit": "iter/sec",
            "range": "stddev: 0.0028758477355881992",
            "extra": "mean: 131.1439288000429 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.17659820301431,
            "unit": "iter/sec",
            "range": "stddev: 0.001332729917665628",
            "extra": "mean: 239.4293037999887 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6363541593494028,
            "unit": "iter/sec",
            "range": "stddev: 0.1381317538012846",
            "extra": "mean: 1.5714519741999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.7116758270987282,
            "unit": "iter/sec",
            "range": "stddev: 0.006083112239370436",
            "extra": "mean: 368.77564420003637 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.807555017926054,
            "unit": "iter/sec",
            "range": "stddev: 0.0006265926419551422",
            "extra": "mean: 67.53309366667206 msec\nrounds: 15"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 266.9950097639918,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332829027930737",
            "extra": "mean: 3.7453883534525327 msec\nrounds: 232"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.497263978362271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005361066773851742",
            "extra": "mean: 86.97721491669579 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.02880980996242,
            "unit": "iter/sec",
            "range": "stddev: 0.00023744136062590337",
            "extra": "mean: 18.857673849058028 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7128133115293447,
            "unit": "iter/sec",
            "range": "stddev: 0.008795768184033832",
            "extra": "mean: 1.402891870600024 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.3221395413967594,
            "unit": "iter/sec",
            "range": "stddev: 0.0016391842108750187",
            "extra": "mean: 301.01083579997976 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.38847189556275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308147949630053",
            "extra": "mean: 36.5117120740866 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.76342192098928,
            "unit": "iter/sec",
            "range": "stddev: 0.0001912761419169445",
            "extra": "mean: 17.616978789473443 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2840799631327338,
            "unit": "iter/sec",
            "range": "stddev: 0.004331710443074552",
            "extra": "mean: 304.499284800022 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.597729262379259,
            "unit": "iter/sec",
            "range": "stddev: 0.007402980835275319",
            "extra": "mean: 277.9530996000176 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6954117519533991,
            "unit": "iter/sec",
            "range": "stddev: 0.02267378803240027",
            "extra": "mean: 1.4379969812000126 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7981574964153912,
            "unit": "iter/sec",
            "range": "stddev: 0.039840143506237866",
            "extra": "mean: 556.1248121999824 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "f3b97b5d0671ba9d6409f90e4b552bd09935b853",
          "message": "Add crypto config and key management features",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/6/commits/f3b97b5d0671ba9d6409f90e4b552bd09935b853"
        },
        "date": 1769398501967,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.595901190186334,
            "unit": "iter/sec",
            "range": "stddev: 0.05449653416015862",
            "extra": "mean: 385.222674799968 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.4014225073596025,
            "unit": "iter/sec",
            "range": "stddev: 0.007787199990817726",
            "extra": "mean: 227.19927440001584 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5875288682764745,
            "unit": "iter/sec",
            "range": "stddev: 0.12209860988600721",
            "extra": "mean: 1.702044025400005 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.5471017531943705,
            "unit": "iter/sec",
            "range": "stddev: 0.019286583694460152",
            "extra": "mean: 392.6030826000101 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.555587143294078,
            "unit": "iter/sec",
            "range": "stddev: 0.1348902673552367",
            "extra": "mean: 391.29951120000896 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 13.308984419585709,
            "unit": "iter/sec",
            "range": "stddev: 0.001123959051761806",
            "extra": "mean: 75.13721321428436 msec\nrounds: 14"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.286467122664518,
            "unit": "iter/sec",
            "range": "stddev: 0.0006714497997290839",
            "extra": "mean: 137.2407208000027 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.047590031572189,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636116949358169",
            "extra": "mean: 198.11434639998424 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6891875341462979,
            "unit": "iter/sec",
            "range": "stddev: 0.008876818799831418",
            "extra": "mean: 1.4509838766000143 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.669532751063243,
            "unit": "iter/sec",
            "range": "stddev: 0.029669650006532683",
            "extra": "mean: 374.59738960000095 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.855288530542806,
            "unit": "iter/sec",
            "range": "stddev: 0.000983320919657997",
            "extra": "mean: 101.46836359999725 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 276.1212548860794,
            "unit": "iter/sec",
            "range": "stddev: 0.000036790016561011194",
            "extra": "mean: 3.621597331985814 msec\nrounds: 247"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.932286434229853,
            "unit": "iter/sec",
            "range": "stddev: 0.0009688972031780678",
            "extra": "mean: 83.80623491666483 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.373208840168694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909144658480322",
            "extra": "mean: 17.738922807024085 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.662134046152057,
            "unit": "iter/sec",
            "range": "stddev: 0.14411781811746358",
            "extra": "mean: 1.5102682090000143 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.9260522692432245,
            "unit": "iter/sec",
            "range": "stddev: 0.001729964942019008",
            "extra": "mean: 341.75739460000614 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.091134328054594,
            "unit": "iter/sec",
            "range": "stddev: 0.03660699420967663",
            "extra": "mean: 43.306664185182505 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.84965354644878,
            "unit": "iter/sec",
            "range": "stddev: 0.00010323482665405232",
            "extra": "mean: 17.59025671428154 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.4342694852941773,
            "unit": "iter/sec",
            "range": "stddev: 0.004721331368648783",
            "extra": "mean: 291.1827403999837 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.3123160586011755,
            "unit": "iter/sec",
            "range": "stddev: 0.007526754472115142",
            "extra": "mean: 301.90355700002556 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7192381061488092,
            "unit": "iter/sec",
            "range": "stddev: 0.02337374328313956",
            "extra": "mean: 1.3903601484000092 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.5943445730724024,
            "unit": "iter/sec",
            "range": "stddev: 0.06809952302903527",
            "extra": "mean: 627.2169873999928 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "270270ca004a635974991c04e701701485e96756",
          "message": "Merge pull request #6 from aiyah-meloken/feature/crypto-config-and-key-management\n\nAdd crypto config and key management features",
          "timestamp": "2026-01-26T12:38:09+08:00",
          "tree_id": "97b3307e07d1c3a170aa6e9e1c72725fb8fcf457",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/270270ca004a635974991c04e701701485e96756"
        },
        "date": 1769402550055,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.7756140000817493,
            "unit": "iter/sec",
            "range": "stddev: 0.005419678815492262",
            "extra": "mean: 360.28064420000305 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.6860925283698402,
            "unit": "iter/sec",
            "range": "stddev: 0.026683408860261465",
            "extra": "mean: 271.28998860000024 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6058272787705324,
            "unit": "iter/sec",
            "range": "stddev: 0.1373428638348338",
            "extra": "mean: 1.650635478199996 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.3584326142310523,
            "unit": "iter/sec",
            "range": "stddev: 0.022595336173438577",
            "extra": "mean: 424.01041859999964 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.909313696081921,
            "unit": "iter/sec",
            "range": "stddev: 0.025118512094858155",
            "extra": "mean: 343.72367659999554 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.906793006124579,
            "unit": "iter/sec",
            "range": "stddev: 0.0015114088879498093",
            "extra": "mean: 77.47858042857558 msec\nrounds: 14"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.644819482712142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964111953957567",
            "extra": "mean: 115.67621533333276 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.8311343437328045,
            "unit": "iter/sec",
            "range": "stddev: 0.0020130075329663952",
            "extra": "mean: 171.49321916665863 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6890303468650352,
            "unit": "iter/sec",
            "range": "stddev: 0.0069221522147280435",
            "extra": "mean: 1.451314887000001 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.7805925128772007,
            "unit": "iter/sec",
            "range": "stddev: 0.0007232427696009314",
            "extra": "mean: 359.6355795999955 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.396534585581554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006202786099000244",
            "extra": "mean: 74.64617014285783 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 265.439775416159,
            "unit": "iter/sec",
            "range": "stddev: 0.00005534875360837878",
            "extra": "mean: 3.76733290416702 msec\nrounds: 240"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.633870045349738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300996742618941",
            "extra": "mean: 85.95591974999905 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.91954752213181,
            "unit": "iter/sec",
            "range": "stddev: 0.0001323818273538178",
            "extra": "mean: 18.546149698113474 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6718918926030798,
            "unit": "iter/sec",
            "range": "stddev: 0.14335494489757422",
            "extra": "mean: 1.4883346726000013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.200323315607295,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929526892790568",
            "extra": "mean: 312.46842939999624 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.7533602170317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476630331147119",
            "extra": "mean: 37.37848224999344 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.071737058963265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002930451370661249",
            "extra": "mean: 17.83429678571277 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.425979324001102,
            "unit": "iter/sec",
            "range": "stddev: 0.00997519496873125",
            "extra": "mean: 291.8873423999912 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.530484658226165,
            "unit": "iter/sec",
            "range": "stddev: 0.00986238314831817",
            "extra": "mean: 283.2472299999836 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7193359088357506,
            "unit": "iter/sec",
            "range": "stddev: 0.039218612437064315",
            "extra": "mean: 1.3901711116000115 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0658114195545147,
            "unit": "iter/sec",
            "range": "stddev: 0.054443257889597786",
            "extra": "mean: 484.0712906000135 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "166ce5a65c50c7fe407964218f1869bdd397f6dc",
          "message": "Fix parameter order inconsistency in rewrap functions",
          "timestamp": "2026-01-06T12:34:36Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/7/commits/166ce5a65c50c7fe407964218f1869bdd397f6dc"
        },
        "date": 1769402834387,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.3283898290260643,
            "unit": "iter/sec",
            "range": "stddev: 0.0658161146716416",
            "extra": "mean: 300.4455762000134 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.319280461917952,
            "unit": "iter/sec",
            "range": "stddev: 0.013881492088538352",
            "extra": "mean: 231.5200433999962 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.590566129679638,
            "unit": "iter/sec",
            "range": "stddev: 0.14370880513635587",
            "extra": "mean: 1.6932904712000094 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.745650890773623,
            "unit": "iter/sec",
            "range": "stddev: 0.0135332196936997",
            "extra": "mean: 364.2123634000086 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8334424050930127,
            "unit": "iter/sec",
            "range": "stddev: 0.03791244713760309",
            "extra": "mean: 352.92759020001085 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 13.028475990995947,
            "unit": "iter/sec",
            "range": "stddev: 0.0010028056000075632",
            "extra": "mean: 76.75494821428889 msec\nrounds: 14"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.38081586648673,
            "unit": "iter/sec",
            "range": "stddev: 0.014664603941901829",
            "extra": "mean: 135.4863768571428 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.359723324563486,
            "unit": "iter/sec",
            "range": "stddev: 0.00015279452682399945",
            "extra": "mean: 229.37235360001296 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6703603960671115,
            "unit": "iter/sec",
            "range": "stddev: 0.02032038059022868",
            "extra": "mean: 1.4917349024000033 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.3897386248470887,
            "unit": "iter/sec",
            "range": "stddev: 0.00024314621992289412",
            "extra": "mean: 418.4558050000078 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.734048279711557,
            "unit": "iter/sec",
            "range": "stddev: 0.0009319608766485589",
            "extra": "mean: 102.73217999999815 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.6747762354684,
            "unit": "iter/sec",
            "range": "stddev: 0.00017343088064335213",
            "extra": "mean: 3.653972111553332 msec\nrounds: 251"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.351615099992092,
            "unit": "iter/sec",
            "range": "stddev: 0.002597144264229731",
            "extra": "mean: 88.09319125000077 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.98964618790661,
            "unit": "iter/sec",
            "range": "stddev: 0.00042251466094926795",
            "extra": "mean: 18.185241574075107 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6845700745745915,
            "unit": "iter/sec",
            "range": "stddev: 0.05658492170139913",
            "extra": "mean: 1.4607708358000082 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.725221723916857,
            "unit": "iter/sec",
            "range": "stddev: 0.0024068152643963348",
            "extra": "mean: 366.9426201999954 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.16082127139887,
            "unit": "iter/sec",
            "range": "stddev: 0.035868036439669404",
            "extra": "mean: 43.1763618518525 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.45828260795957,
            "unit": "iter/sec",
            "range": "stddev: 0.00040308075730144643",
            "extra": "mean: 17.403931245614228 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.11379279609977,
            "unit": "iter/sec",
            "range": "stddev: 0.02792437073267627",
            "extra": "mean: 321.15174819999766 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4717098990993,
            "unit": "iter/sec",
            "range": "stddev: 0.012940294910344272",
            "extra": "mean: 288.0425004000017 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6857526689918351,
            "unit": "iter/sec",
            "range": "stddev: 0.017122991782089744",
            "extra": "mean: 1.4582517068000016 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.64442701366428,
            "unit": "iter/sec",
            "range": "stddev: 0.07673666256420515",
            "extra": "mean: 608.1145539999966 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dadf35ebf8149c4e5afac98c90f2d549ce7bf04",
          "message": "Merge pull request #7 from aiyah-meloken/copilot/sub-pr-6\n\nFix parameter order inconsistency in rewrap functions",
          "timestamp": "2026-01-26T14:03:56+08:00",
          "tree_id": "97c2b4f82864a9b9e9be8e55b54888794002214a",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/7dadf35ebf8149c4e5afac98c90f2d549ce7bf04"
        },
        "date": 1769407685741,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.8718813315169418,
            "unit": "iter/sec",
            "range": "stddev: 0.0066292527843020525",
            "extra": "mean: 534.2218991999971 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.761677960916083,
            "unit": "iter/sec",
            "range": "stddev: 0.00855470885575279",
            "extra": "mean: 210.01000239999712 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.658071455957004,
            "unit": "iter/sec",
            "range": "stddev: 0.18326065705542985",
            "extra": "mean: 1.5195918178000056 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.718275318505325,
            "unit": "iter/sec",
            "range": "stddev: 0.013258709651280684",
            "extra": "mean: 367.88032219998286 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.902833932672931,
            "unit": "iter/sec",
            "range": "stddev: 0.12066445762963218",
            "extra": "mean: 344.49094339998965 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 11.527249193764817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004354556193118742",
            "extra": "mean: 86.75096574999941 msec\nrounds: 12"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.504536636866,
            "unit": "iter/sec",
            "range": "stddev: 0.003374216085327984",
            "extra": "mean: 221.9984163999925 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.382117755004348,
            "unit": "iter/sec",
            "range": "stddev: 0.001582566014269269",
            "extra": "mean: 228.20016620000843 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7194894274282932,
            "unit": "iter/sec",
            "range": "stddev: 0.0663306629463612",
            "extra": "mean: 1.3898744885999919 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.07302630957665,
            "unit": "iter/sec",
            "range": "stddev: 0.005530399420197705",
            "extra": "mean: 482.38654540000425 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.115370300392413,
            "unit": "iter/sec",
            "range": "stddev: 0.003305323536725794",
            "extra": "mean: 140.54082328573259 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 303.8947440153026,
            "unit": "iter/sec",
            "range": "stddev: 0.00007421733544375404",
            "extra": "mean: 3.2906130155039635 msec\nrounds: 258"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 14.024503654858194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001653366379151106",
            "extra": "mean: 71.30377121429125 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.283015037952666,
            "unit": "iter/sec",
            "range": "stddev: 0.0001141171044189465",
            "extra": "mean: 18.088738454541314 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7247640893650086,
            "unit": "iter/sec",
            "range": "stddev: 0.046777849200713366",
            "extra": "mean: 1.3797593102000065 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.599367889667777,
            "unit": "iter/sec",
            "range": "stddev: 0.0014134631726819451",
            "extra": "mean: 384.7089147999782 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.841982258927864,
            "unit": "iter/sec",
            "range": "stddev: 0.030802685663618254",
            "extra": "mean: 35.916982875001224 msec\nrounds: 32"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 60.33422674622284,
            "unit": "iter/sec",
            "range": "stddev: 0.00019202616261208803",
            "extra": "mean: 16.574340203383876 msec\nrounds: 59"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.5820578855641267,
            "unit": "iter/sec",
            "range": "stddev: 0.0015175717011893896",
            "extra": "mean: 279.16913459998796 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5554475609691165,
            "unit": "iter/sec",
            "range": "stddev: 0.00161212479381003",
            "extra": "mean: 281.2585428000034 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6800640124941121,
            "unit": "iter/sec",
            "range": "stddev: 0.11045428257630804",
            "extra": "mean: 1.4704498130000048 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7470262563682104,
            "unit": "iter/sec",
            "range": "stddev: 0.03273386116653377",
            "extra": "mean: 572.4012426000058 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "82def28c79c5e38d829dcffc8e094dde382c8b6b",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/82def28c79c5e38d829dcffc8e094dde382c8b6b"
        },
        "date": 1770030571467,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.8517541766198704,
            "unit": "iter/sec",
            "range": "stddev: 0.01307454391600759",
            "extra": "mean: 540.0284836000026 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.549235481233804,
            "unit": "iter/sec",
            "range": "stddev: 0.006653338111492016",
            "extra": "mean: 219.8171547999948 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6747609767168049,
            "unit": "iter/sec",
            "range": "stddev: 0.08486706630845826",
            "extra": "mean: 1.482006272599989 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.3511457251221493,
            "unit": "iter/sec",
            "range": "stddev: 0.008394738336826671",
            "extra": "mean: 298.40540579999697 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9455548559503444,
            "unit": "iter/sec",
            "range": "stddev: 0.08221097843856144",
            "extra": "mean: 339.4946109999921 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.59309362119987,
            "unit": "iter/sec",
            "range": "stddev: 0.0011971953788955743",
            "extra": "mean: 79.40860523077092 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.446784528239893,
            "unit": "iter/sec",
            "range": "stddev: 0.0013744016733182654",
            "extra": "mean: 224.8815956000044 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.23824013052812,
            "unit": "iter/sec",
            "range": "stddev: 0.0022002292602986894",
            "extra": "mean: 235.94698959999505 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7081287839727236,
            "unit": "iter/sec",
            "range": "stddev: 0.046434941483233606",
            "extra": "mean: 1.4121725068000046 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.0115080806110606,
            "unit": "iter/sec",
            "range": "stddev: 0.0032728241559464234",
            "extra": "mean: 332.059543999992 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.6044768330771255,
            "unit": "iter/sec",
            "range": "stddev: 0.0030756121539779677",
            "extra": "mean: 131.50148550000296 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 306.8840082281987,
            "unit": "iter/sec",
            "range": "stddev: 0.000035811934433413106",
            "extra": "mean: 3.258560150375776 msec\nrounds: 266"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.937627611176879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003278462654646695",
            "extra": "mean: 71.74822199999653 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.26328706539548,
            "unit": "iter/sec",
            "range": "stddev: 0.00014338903754937673",
            "extra": "mean: 18.095195800001108 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7043710327090453,
            "unit": "iter/sec",
            "range": "stddev: 0.05872520221120244",
            "extra": "mean: 1.4197063104000052 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.4421051055427245,
            "unit": "iter/sec",
            "range": "stddev: 0.0035936968976730756",
            "extra": "mean: 225.1184913999964 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 29.68068480463366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487028335140845",
            "extra": "mean: 33.69194499999821 msec\nrounds: 30"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 48.687303540798816,
            "unit": "iter/sec",
            "range": "stddev: 0.024515454551113775",
            "extra": "mean: 20.539235637932247 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.9744514896846996,
            "unit": "iter/sec",
            "range": "stddev: 0.0028144424984505386",
            "extra": "mean: 336.19643939999264 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.439682082072793,
            "unit": "iter/sec",
            "range": "stddev: 0.004167927729357827",
            "extra": "mean: 290.72454259999176 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6902697567099293,
            "unit": "iter/sec",
            "range": "stddev: 0.07851818676050665",
            "extra": "mean: 1.4487089870000318 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.1306133906879765,
            "unit": "iter/sec",
            "range": "stddev: 0.014917123192923697",
            "extra": "mean: 469.34840659998827 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "fbe24c82a21e8e0aef56205677608cce705fcd4d",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/fbe24c82a21e8e0aef56205677608cce705fcd4d"
        },
        "date": 1770041419924,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.9037465080196492,
            "unit": "iter/sec",
            "range": "stddev: 0.009232070773957999",
            "extra": "mean: 525.2800180000008 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.505980139930687,
            "unit": "iter/sec",
            "range": "stddev: 0.010091356889530514",
            "extra": "mean: 221.92729859998508 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6212687658737948,
            "unit": "iter/sec",
            "range": "stddev: 0.19035322466568183",
            "extra": "mean: 1.609609326800023 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.4338084786153167,
            "unit": "iter/sec",
            "range": "stddev: 0.01054696043506247",
            "extra": "mean: 291.22183319998385 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.847785084175506,
            "unit": "iter/sec",
            "range": "stddev: 0.11603077719003087",
            "extra": "mean: 351.15009399999053 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.840520491524055,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674826223756898",
            "extra": "mean: 77.87846300000794 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.527318158301477,
            "unit": "iter/sec",
            "range": "stddev: 0.003928688553983463",
            "extra": "mean: 220.88131759999214 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.369007052140907,
            "unit": "iter/sec",
            "range": "stddev: 0.002678063758762269",
            "extra": "mean: 228.88495900000407 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6981580057355531,
            "unit": "iter/sec",
            "range": "stddev: 0.08001134803355457",
            "extra": "mean: 1.4323405185999944 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.1674481646063346,
            "unit": "iter/sec",
            "range": "stddev: 0.0016838089708687476",
            "extra": "mean: 315.7115595999926 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.263674138694377,
            "unit": "iter/sec",
            "range": "stddev: 0.004404124692138984",
            "extra": "mean: 137.67137414285864 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 311.07832063319364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003417998363691712",
            "extra": "mean: 3.214624529168475 msec\nrounds: 240"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.967704237421799,
            "unit": "iter/sec",
            "range": "stddev: 0.00041087271969488453",
            "extra": "mean: 71.59372671428953 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.04780230151024,
            "unit": "iter/sec",
            "range": "stddev: 0.00015087993947382285",
            "extra": "mean: 18.16602949056451 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7186792403152956,
            "unit": "iter/sec",
            "range": "stddev: 0.042572127820952",
            "extra": "mean: 1.391441332799991 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.485963741544755,
            "unit": "iter/sec",
            "range": "stddev: 0.001188553066934114",
            "extra": "mean: 222.91753960000733 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.185368046623502,
            "unit": "iter/sec",
            "range": "stddev: 0.032924899234516414",
            "extra": "mean: 38.189266548382385 msec\nrounds: 31"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.59599485237586,
            "unit": "iter/sec",
            "range": "stddev: 0.00018072242686758275",
            "extra": "mean: 17.362318379309137 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.3388241721407943,
            "unit": "iter/sec",
            "range": "stddev: 0.004187211825008225",
            "extra": "mean: 299.506637200011 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.441910094450161,
            "unit": "iter/sec",
            "range": "stddev: 0.0035382294191790755",
            "extra": "mean: 290.5363512000008 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7040292537875107,
            "unit": "iter/sec",
            "range": "stddev: 0.043328403667010094",
            "extra": "mean: 1.4203955227999927 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.2233214343156797,
            "unit": "iter/sec",
            "range": "stddev: 0.007440721457995964",
            "extra": "mean: 449.7775195999907 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "93aafe90abf633eb7aad7aea14616a5b1d9588cc",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/93aafe90abf633eb7aad7aea14616a5b1d9588cc"
        },
        "date": 1770082328359,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.806671109649439,
            "unit": "iter/sec",
            "range": "stddev: 0.005449067238925235",
            "extra": "mean: 356.29397280000603 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.9913350893181665,
            "unit": "iter/sec",
            "range": "stddev: 0.012408427188783742",
            "extra": "mean: 250.5427325999904 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6496225005906057,
            "unit": "iter/sec",
            "range": "stddev: 0.25967606184994235",
            "extra": "mean: 1.5393555473999867 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.1358411162327977,
            "unit": "iter/sec",
            "range": "stddev: 0.010005029147015133",
            "extra": "mean: 318.8937076000002 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.878708073585239,
            "unit": "iter/sec",
            "range": "stddev: 0.06770754570245487",
            "extra": "mean: 347.3780509999983 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.255483899909198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005339895711630378",
            "extra": "mean: 57.952590944451124 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.2968727573520695,
            "unit": "iter/sec",
            "range": "stddev: 0.0010015545378712107",
            "extra": "mean: 137.04500999999425 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.888638358296473,
            "unit": "iter/sec",
            "range": "stddev: 0.0010406907319166676",
            "extra": "mean: 169.81854533333754 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6894020677158996,
            "unit": "iter/sec",
            "range": "stddev: 0.04024938758958608",
            "extra": "mean: 1.4505323480000016 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.6452982677200234,
            "unit": "iter/sec",
            "range": "stddev: 0.00035741417668701746",
            "extra": "mean: 274.3259746000035 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.910054683485349,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660169050079643",
            "extra": "mean: 91.65856899999862 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 275.4804341393137,
            "unit": "iter/sec",
            "range": "stddev: 0.00006160954560301432",
            "extra": "mean: 3.6300218675214095 msec\nrounds: 234"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.43222749847629,
            "unit": "iter/sec",
            "range": "stddev: 0.0007261173898038267",
            "extra": "mean: 87.47201716667045 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.416065069283434,
            "unit": "iter/sec",
            "range": "stddev: 0.00022523802565092933",
            "extra": "mean: 18.37692598181775 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.684975191189051,
            "unit": "iter/sec",
            "range": "stddev: 0.015006801023990051",
            "extra": "mean: 1.4599068883999962 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.396740892246856,
            "unit": "iter/sec",
            "range": "stddev: 0.00048110819303077767",
            "extra": "mean: 227.44119440001214 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.199867978370023,
            "unit": "iter/sec",
            "range": "stddev: 0.039359833939054616",
            "extra": "mean: 45.045312925929515 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 61.14017242251526,
            "unit": "iter/sec",
            "range": "stddev: 0.00034520251598756503",
            "extra": "mean: 16.355858355933314 msec\nrounds: 59"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.13738523411093,
            "unit": "iter/sec",
            "range": "stddev: 0.019417639153607332",
            "extra": "mean: 318.73675859999366 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5388780770420993,
            "unit": "iter/sec",
            "range": "stddev: 0.01300623233246923",
            "extra": "mean: 282.5754316000143 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.645412587834665,
            "unit": "iter/sec",
            "range": "stddev: 0.08887216711034522",
            "extra": "mean: 1.5493964927999968 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9650847661067403,
            "unit": "iter/sec",
            "range": "stddev: 0.10671316411589041",
            "extra": "mean: 508.8839001999986 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "10b05310dc16d8d61bffa224c757f97973a3cbe7",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/10b05310dc16d8d61bffa224c757f97973a3cbe7"
        },
        "date": 1770083656647,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.2574680273911696,
            "unit": "iter/sec",
            "range": "stddev: 0.003889567010998272",
            "extra": "mean: 442.97415859999774 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.621850806428535,
            "unit": "iter/sec",
            "range": "stddev: 0.004568783862743759",
            "extra": "mean: 177.87736359999258 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6405380626311628,
            "unit": "iter/sec",
            "range": "stddev: 0.0758665613266728",
            "extra": "mean: 1.5611874740000018 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.960946324072397,
            "unit": "iter/sec",
            "range": "stddev: 0.009671813889966907",
            "extra": "mean: 252.46492080000283 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.807532758629114,
            "unit": "iter/sec",
            "range": "stddev: 0.0846193859918145",
            "extra": "mean: 356.18462400000226 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.061771366923836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373330429046532",
            "extra": "mean: 58.610561499998326 msec\nrounds: 16"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.524470061026387,
            "unit": "iter/sec",
            "range": "stddev: 0.0014269166786272304",
            "extra": "mean: 132.899724749997 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.2547849216343705,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480837147565308",
            "extra": "mean: 159.87759971428414 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6789744769337465,
            "unit": "iter/sec",
            "range": "stddev: 0.05334646631798295",
            "extra": "mean: 1.4728094117999944 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.362503677470653,
            "unit": "iter/sec",
            "range": "stddev: 0.0030237152613139945",
            "extra": "mean: 229.22616779999885 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.99903518561052,
            "unit": "iter/sec",
            "range": "stddev: 0.001312422494474787",
            "extra": "mean: 76.92878630769192 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 356.7883802697196,
            "unit": "iter/sec",
            "range": "stddev: 0.00005471526364469623",
            "extra": "mean: 2.8027818597792753 msec\nrounds: 271"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.20559680282875,
            "unit": "iter/sec",
            "range": "stddev: 0.0005293001631276439",
            "extra": "mean: 75.72546814285529 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 68.7903280895881,
            "unit": "iter/sec",
            "range": "stddev: 0.00031930738661710363",
            "extra": "mean: 14.536927323528163 msec\nrounds: 68"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6854717991957497,
            "unit": "iter/sec",
            "range": "stddev: 0.04261560359880324",
            "extra": "mean: 1.4588492206000012 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 5.722813895154434,
            "unit": "iter/sec",
            "range": "stddev: 0.003154261063615768",
            "extra": "mean: 174.73921366667375 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 28.764706712619912,
            "unit": "iter/sec",
            "range": "stddev: 0.00043068321653113494",
            "extra": "mean: 34.764825172414184 msec\nrounds: 29"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 46.887534576494076,
            "unit": "iter/sec",
            "range": "stddev: 0.036156081021956034",
            "extra": "mean: 21.327630233331263 msec\nrounds: 60"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.6171802275005804,
            "unit": "iter/sec",
            "range": "stddev: 0.018088611857238854",
            "extra": "mean: 276.4584392000245 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.122341171851611,
            "unit": "iter/sec",
            "range": "stddev: 0.0055129574866242875",
            "extra": "mean: 195.22323219999862 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.684193762833988,
            "unit": "iter/sec",
            "range": "stddev: 0.07388709770485839",
            "extra": "mean: 1.4615742708000083 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.5829557328428305,
            "unit": "iter/sec",
            "range": "stddev: 0.0464822121797648",
            "extra": "mean: 387.1533635999981 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "546a51203b1f6834df9458a32358b206125c7978",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/546a51203b1f6834df9458a32358b206125c7978"
        },
        "date": 1770087131025,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.3514192314674682,
            "unit": "iter/sec",
            "range": "stddev: 0.06573757086905606",
            "extra": "mean: 298.3810532000007 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.1202999574936126,
            "unit": "iter/sec",
            "range": "stddev: 0.005191354668776455",
            "extra": "mean: 195.3010582000161 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6460341858731639,
            "unit": "iter/sec",
            "range": "stddev: 0.19212519530520553",
            "extra": "mean: 1.5479057020000027 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.3956476234971813,
            "unit": "iter/sec",
            "range": "stddev: 0.007963872080803758",
            "extra": "mean: 294.49463280000145 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7370216055936796,
            "unit": "iter/sec",
            "range": "stddev: 0.0632519118016337",
            "extra": "mean: 365.3606525999976 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 18.28212935644119,
            "unit": "iter/sec",
            "range": "stddev: 0.0002540349863810235",
            "extra": "mean: 54.69822363157487 msec\nrounds: 19"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.62872654529844,
            "unit": "iter/sec",
            "range": "stddev: 0.0009132187202178633",
            "extra": "mean: 115.89195633333323 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.9674491460722034,
            "unit": "iter/sec",
            "range": "stddev: 0.0006953941835864696",
            "extra": "mean: 201.31056616668275 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6912903492710534,
            "unit": "iter/sec",
            "range": "stddev: 0.05189238231475631",
            "extra": "mean: 1.4465701728 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.5210661263170606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005332385341302748",
            "extra": "mean: 284.0048905999879 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.960354530742658,
            "unit": "iter/sec",
            "range": "stddev: 0.005795033147618491",
            "extra": "mean: 83.60956169230768 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 292.4033450712739,
            "unit": "iter/sec",
            "range": "stddev: 0.00005268780370161213",
            "extra": "mean: 3.4199335160008104 msec\nrounds: 250"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.78998049120807,
            "unit": "iter/sec",
            "range": "stddev: 0.001041014506436627",
            "extra": "mean: 84.81778241666404 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 59.08379659894543,
            "unit": "iter/sec",
            "range": "stddev: 0.00022004926938306462",
            "extra": "mean: 16.925114118645663 msec\nrounds: 59"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6995603060324265,
            "unit": "iter/sec",
            "range": "stddev: 0.032363886631061364",
            "extra": "mean: 1.4294693272000019 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.246984638570867,
            "unit": "iter/sec",
            "range": "stddev: 0.0004371158501764404",
            "extra": "mean: 235.46117659999481 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 28.627321371599635,
            "unit": "iter/sec",
            "range": "stddev: 0.0002365541883390208",
            "extra": "mean: 34.93166499999794 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 62.66922492470959,
            "unit": "iter/sec",
            "range": "stddev: 0.00012006732413594684",
            "extra": "mean: 15.956795399997267 msec\nrounds: 60"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.469044659222338,
            "unit": "iter/sec",
            "range": "stddev: 0.005662053594213925",
            "extra": "mean: 288.26380120000294 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4652803728442514,
            "unit": "iter/sec",
            "range": "stddev: 0.00681601914674025",
            "extra": "mean: 288.57693820001487 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6896051605354275,
            "unit": "iter/sec",
            "range": "stddev: 0.06855533132006826",
            "extra": "mean: 1.4501051576000008 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.589146568925609,
            "unit": "iter/sec",
            "range": "stddev: 0.006156336592056251",
            "extra": "mean: 386.2276520000023 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "cdc35e83efda0d714156854937826c24dcba9fdf",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/cdc35e83efda0d714156854937826c24dcba9fdf"
        },
        "date": 1770087608182,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.389331285629227,
            "unit": "iter/sec",
            "range": "stddev: 0.06780577327843472",
            "extra": "mean: 418.52714440000796 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.187621651037104,
            "unit": "iter/sec",
            "range": "stddev: 0.01084036114501381",
            "extra": "mean: 238.79903280000008 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6277839346961719,
            "unit": "iter/sec",
            "range": "stddev: 0.15304606651317648",
            "extra": "mean: 1.5929047316000038 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.873593282121909,
            "unit": "iter/sec",
            "range": "stddev: 0.011469836951166169",
            "extra": "mean: 347.996359199999 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8293514378537497,
            "unit": "iter/sec",
            "range": "stddev: 0.04696958893507539",
            "extra": "mean: 353.43788919999497 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.055330836076056,
            "unit": "iter/sec",
            "range": "stddev: 0.0008525155794541446",
            "extra": "mean: 58.63269435294469 msec\nrounds: 17"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.799570635000803,
            "unit": "iter/sec",
            "range": "stddev: 0.002492878323059007",
            "extra": "mean: 128.21218587501093 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.645541521242368,
            "unit": "iter/sec",
            "range": "stddev: 0.0025449151881625546",
            "extra": "mean: 215.2601576000052 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6620526610139511,
            "unit": "iter/sec",
            "range": "stddev: 0.03451606280338053",
            "extra": "mean: 1.510453863999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.3953782711276577,
            "unit": "iter/sec",
            "range": "stddev: 0.000737238876934142",
            "extra": "mean: 294.5179947999975 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.232062838364712,
            "unit": "iter/sec",
            "range": "stddev: 0.0014606945444604832",
            "extra": "mean: 81.75235961538672 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 274.9076369249505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009628896142943792",
            "extra": "mean: 3.6375853766223267 msec\nrounds: 231"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.251381216041862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007106575653235753",
            "extra": "mean: 88.87797691666795 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.955698939586775,
            "unit": "iter/sec",
            "range": "stddev: 0.00032648821967161076",
            "extra": "mean: 18.533723400000472 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6940614584397509,
            "unit": "iter/sec",
            "range": "stddev: 0.023940481872004593",
            "extra": "mean: 1.4407945980000079 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.20619182714207,
            "unit": "iter/sec",
            "range": "stddev: 0.0008737033296345397",
            "extra": "mean: 237.74474419999478 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.959314793483223,
            "unit": "iter/sec",
            "range": "stddev: 0.04634825694453865",
            "extra": "mean: 47.71148340741202 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.14345160969925,
            "unit": "iter/sec",
            "range": "stddev: 0.000525735354065026",
            "extra": "mean: 17.49981794642354 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1099531660769735,
            "unit": "iter/sec",
            "range": "stddev: 0.009108063161263055",
            "extra": "mean: 321.54825060000576 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.036154592648468,
            "unit": "iter/sec",
            "range": "stddev: 0.0037731718705165326",
            "extra": "mean: 329.36399300000403 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.670918824850932,
            "unit": "iter/sec",
            "range": "stddev: 0.04587328946509198",
            "extra": "mean: 1.4904932802000075 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9515575128173872,
            "unit": "iter/sec",
            "range": "stddev: 0.01981097939685205",
            "extra": "mean: 512.4112373999878 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "c6b1afa808885ee3d8ce0a60d5ed37986b7f476b",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/c6b1afa808885ee3d8ce0a60d5ed37986b7f476b"
        },
        "date": 1770088431004,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.672122807959551,
            "unit": "iter/sec",
            "range": "stddev: 0.05812440378402866",
            "extra": "mean: 374.23429680000595 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.303329639771155,
            "unit": "iter/sec",
            "range": "stddev: 0.014396298198190608",
            "extra": "mean: 232.37820100000022 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6337026276502143,
            "unit": "iter/sec",
            "range": "stddev: 0.10588733463564917",
            "extra": "mean: 1.5780272265999997 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.222489352052555,
            "unit": "iter/sec",
            "range": "stddev: 0.013917870114850187",
            "extra": "mean: 310.3191013999947 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.773369760768622,
            "unit": "iter/sec",
            "range": "stddev: 0.04296440688284553",
            "extra": "mean: 360.5721869999968 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.80377691895166,
            "unit": "iter/sec",
            "range": "stddev: 0.00017270426058512125",
            "extra": "mean: 56.16785722222377 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.687756797195087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008251411103837704",
            "extra": "mean: 115.10451124999932 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.509122922879837,
            "unit": "iter/sec",
            "range": "stddev: 0.001291749511840699",
            "extra": "mean: 221.77261900000076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6758564607943678,
            "unit": "iter/sec",
            "range": "stddev: 0.03708317728920817",
            "extra": "mean: 1.4796041142000036 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.3783617057068316,
            "unit": "iter/sec",
            "range": "stddev: 0.0013278590999435348",
            "extra": "mean: 296.00146079999945 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.079177296230377,
            "unit": "iter/sec",
            "range": "stddev: 0.0007759804836648353",
            "extra": "mean: 90.25940945454894 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 263.4082561200636,
            "unit": "iter/sec",
            "range": "stddev: 0.00007230252767765038",
            "extra": "mean: 3.7963882177792936 msec\nrounds: 225"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.56495687690677,
            "unit": "iter/sec",
            "range": "stddev: 0.0007141057226127478",
            "extra": "mean: 86.46811316666714 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.75710836395585,
            "unit": "iter/sec",
            "range": "stddev: 0.00015379978305777206",
            "extra": "mean: 18.262469109092972 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6794667781016809,
            "unit": "iter/sec",
            "range": "stddev: 0.05269777510787793",
            "extra": "mean: 1.4717423018000033 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.076513517135803,
            "unit": "iter/sec",
            "range": "stddev: 0.002277014480950513",
            "extra": "mean: 245.3076620000047 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.18506150318645,
            "unit": "iter/sec",
            "range": "stddev: 0.03727378604106307",
            "extra": "mean: 43.13122050000016 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 60.813605176132405,
            "unit": "iter/sec",
            "range": "stddev: 0.00035034619482521414",
            "extra": "mean: 16.44368882758609 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1248011728074356,
            "unit": "iter/sec",
            "range": "stddev: 0.015219040549973967",
            "extra": "mean: 320.0203611999939 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5794013427627274,
            "unit": "iter/sec",
            "range": "stddev: 0.007904620760676107",
            "extra": "mean: 279.3763270000227 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6380293233004304,
            "unit": "iter/sec",
            "range": "stddev: 0.06390433208612961",
            "extra": "mean: 1.5673260828000024 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.926692258095364,
            "unit": "iter/sec",
            "range": "stddev: 0.06628887092476914",
            "extra": "mean: 519.0242477999846 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "54cbed73a0e9731639d210e70a4e0d6935db2e84",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/54cbed73a0e9731639d210e70a4e0d6935db2e84"
        },
        "date": 1770088579391,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.780356298744934,
            "unit": "iter/sec",
            "range": "stddev: 0.07143668403283357",
            "extra": "mean: 359.6661336000011 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.494708570625092,
            "unit": "iter/sec",
            "range": "stddev: 0.002705246931918396",
            "extra": "mean: 222.48383499999136 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6617476947917496,
            "unit": "iter/sec",
            "range": "stddev: 0.18852916638370668",
            "extra": "mean: 1.5111499561999948 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.3841586654344007,
            "unit": "iter/sec",
            "range": "stddev: 0.009037794700747732",
            "extra": "mean: 295.49441939999497 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.899414536705486,
            "unit": "iter/sec",
            "range": "stddev: 0.061053684727327244",
            "extra": "mean: 344.8972153999989 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 18.27781568351012,
            "unit": "iter/sec",
            "range": "stddev: 0.0003347576104806233",
            "extra": "mean: 54.71113273683901 msec\nrounds: 19"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.058918906559837,
            "unit": "iter/sec",
            "range": "stddev: 0.0010837470791345625",
            "extra": "mean: 124.08612266665386 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.933375192042861,
            "unit": "iter/sec",
            "range": "stddev: 0.0011568113597375603",
            "extra": "mean: 168.5381368333291 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6936657424113577,
            "unit": "iter/sec",
            "range": "stddev: 0.036414438706421935",
            "extra": "mean: 1.441616529199996 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.636439887879884,
            "unit": "iter/sec",
            "range": "stddev: 0.0008467970892533118",
            "extra": "mean: 274.99423360000037 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.410272280060132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004448937669820873",
            "extra": "mean: 74.56970142857651 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.46810585968075,
            "unit": "iter/sec",
            "range": "stddev: 0.000137679158518258",
            "extra": "mean: 3.656733558951515 msec\nrounds: 229"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.653472561332988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613827615251821",
            "extra": "mean: 85.81133174999422 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.20743967556736,
            "unit": "iter/sec",
            "range": "stddev: 0.0001278027194012135",
            "extra": "mean: 17.791239127276725 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6855943475413792,
            "unit": "iter/sec",
            "range": "stddev: 0.03572275593413972",
            "extra": "mean: 1.458588454800008 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.460067215460775,
            "unit": "iter/sec",
            "range": "stddev: 0.0017101738742906494",
            "extra": "mean: 224.21186760000182 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.75472758665573,
            "unit": "iter/sec",
            "range": "stddev: 0.00031416241822599604",
            "extra": "mean: 36.02989785714174 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 60.01604252819642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598140448032812",
            "extra": "mean: 16.66221160000987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1282312712991556,
            "unit": "iter/sec",
            "range": "stddev: 0.011812362014926511",
            "extra": "mean: 319.66945959999293 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.3989661552270167,
            "unit": "iter/sec",
            "range": "stddev: 0.0030554064408939118",
            "extra": "mean: 294.20710719998624 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6630822648817363,
            "unit": "iter/sec",
            "range": "stddev: 0.10973646919388842",
            "extra": "mean: 1.508108500199978 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.022190557423272,
            "unit": "iter/sec",
            "range": "stddev: 0.042560790955969895",
            "extra": "mean: 494.5132378000153 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "e9f9e558926103babbf0b04f71badbcdf4ea3295",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/e9f9e558926103babbf0b04f71badbcdf4ea3295"
        },
        "date": 1770089331889,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.586104626368924,
            "unit": "iter/sec",
            "range": "stddev: 0.05836094966624054",
            "extra": "mean: 386.6819578000104 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.248091124925939,
            "unit": "iter/sec",
            "range": "stddev: 0.012487546954481265",
            "extra": "mean: 235.3998467999986 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6239385547946791,
            "unit": "iter/sec",
            "range": "stddev: 0.1690793174413268",
            "extra": "mean: 1.6027219223999907 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.3923940152858356,
            "unit": "iter/sec",
            "range": "stddev: 0.002384520128530684",
            "extra": "mean: 294.77707940000073 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.829413514967734,
            "unit": "iter/sec",
            "range": "stddev: 0.04307013061779836",
            "extra": "mean: 353.4301348000042 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.957258187933224,
            "unit": "iter/sec",
            "range": "stddev: 0.00020645014017744152",
            "extra": "mean: 55.687788722221086 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.989963074815181,
            "unit": "iter/sec",
            "range": "stddev: 0.0011727621622993818",
            "extra": "mean: 111.2351621111145 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.990683033583901,
            "unit": "iter/sec",
            "range": "stddev: 0.00018141021291329722",
            "extra": "mean: 200.37337439999305 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6938892958076214,
            "unit": "iter/sec",
            "range": "stddev: 0.03914357978796439",
            "extra": "mean: 1.4411520772000017 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.611774536104367,
            "unit": "iter/sec",
            "range": "stddev: 0.0005540999180056457",
            "extra": "mean: 276.8722105999984 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.431580805773839,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544742164366231",
            "extra": "mean: 74.45140035714408 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 270.3630083451547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006398637409681895",
            "extra": "mean: 3.69873085123896 msec\nrounds: 242"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.572085367452482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175291512570233",
            "extra": "mean: 86.41484816665705 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.10249127254161,
            "unit": "iter/sec",
            "range": "stddev: 0.00022446431764370112",
            "extra": "mean: 18.483437203704618 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6994373493049555,
            "unit": "iter/sec",
            "range": "stddev: 0.03793455243049881",
            "extra": "mean: 1.4297206189999998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.401822528134376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005647188243161249",
            "extra": "mean: 227.17862740000783 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.09586090182058,
            "unit": "iter/sec",
            "range": "stddev: 0.0008134104423132848",
            "extra": "mean: 36.90600581481468 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 49.85676400984158,
            "unit": "iter/sec",
            "range": "stddev: 0.026704968793216276",
            "extra": "mean: 20.057458999998534 msec\nrounds: 59"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.269753091285152,
            "unit": "iter/sec",
            "range": "stddev: 0.016156671088193013",
            "extra": "mean: 305.83349020000696 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.7195622170195075,
            "unit": "iter/sec",
            "range": "stddev: 0.0024051566830153555",
            "extra": "mean: 268.84884339999076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6798933019889679,
            "unit": "iter/sec",
            "range": "stddev: 0.0351700436499472",
            "extra": "mean: 1.470819019800001 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.194373487780725,
            "unit": "iter/sec",
            "range": "stddev: 0.07239694252742403",
            "extra": "mean: 455.710937799995 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "e83fe1020722e5c41a3c0f0dfc32c7d9baac29cf",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/e83fe1020722e5c41a3c0f0dfc32c7d9baac29cf"
        },
        "date": 1770090862510,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.736095055348156,
            "unit": "iter/sec",
            "range": "stddev: 0.07544827184910882",
            "extra": "mean: 365.48437819999435 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.720763326383768,
            "unit": "iter/sec",
            "range": "stddev: 0.004512718365177742",
            "extra": "mean: 268.7620556000013 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6491702683706422,
            "unit": "iter/sec",
            "range": "stddev: 0.12774007588672726",
            "extra": "mean: 1.5404279104000067 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.0504377981005923,
            "unit": "iter/sec",
            "range": "stddev: 0.010209492319302056",
            "extra": "mean: 327.8217968000092 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9179038717683246,
            "unit": "iter/sec",
            "range": "stddev: 0.05824896344657451",
            "extra": "mean: 342.7117698000018 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.103815598717254,
            "unit": "iter/sec",
            "range": "stddev: 0.001056350037371024",
            "extra": "mean: 58.46648627777521 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.5007804084725445,
            "unit": "iter/sec",
            "range": "stddev: 0.004870358126589619",
            "extra": "mean: 153.8276848571424 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.7813278635658385,
            "unit": "iter/sec",
            "range": "stddev: 0.0027658123686498917",
            "extra": "mean: 209.14692079999213 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6806738266999698,
            "unit": "iter/sec",
            "range": "stddev: 0.027337818576799677",
            "extra": "mean: 1.469132440200002 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.124444096953484,
            "unit": "iter/sec",
            "range": "stddev: 0.002199471935781967",
            "extra": "mean: 320.0569346000009 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.5504950167212,
            "unit": "iter/sec",
            "range": "stddev: 0.002297224573324661",
            "extra": "mean: 104.70661450000023 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 262.1678958480293,
            "unit": "iter/sec",
            "range": "stddev: 0.00045345935501334595",
            "extra": "mean: 3.814349566964787 msec\nrounds: 224"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.414728135490925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006789772111652747",
            "extra": "mean: 87.60611625000318 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.649627968517926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665592432997425",
            "extra": "mean: 18.993486537036013 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6898997460607462,
            "unit": "iter/sec",
            "range": "stddev: 0.04991753119609814",
            "extra": "mean: 1.4494859662000068 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.3134044852807305,
            "unit": "iter/sec",
            "range": "stddev: 0.002066985891142475",
            "extra": "mean: 231.83543380001765 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.048224998092177,
            "unit": "iter/sec",
            "range": "stddev: 0.04102773143726604",
            "extra": "mean: 45.35512496296321 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 61.20188967234491,
            "unit": "iter/sec",
            "range": "stddev: 0.0003712252427005782",
            "extra": "mean: 16.33936477049444 msec\nrounds: 61"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.107883348000031,
            "unit": "iter/sec",
            "range": "stddev: 0.014311639583597992",
            "extra": "mean: 321.76239840002836 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.537230533149936,
            "unit": "iter/sec",
            "range": "stddev: 0.0052177674818855305",
            "extra": "mean: 282.7070474000152 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6854320473576961,
            "unit": "iter/sec",
            "range": "stddev: 0.06959930510622764",
            "extra": "mean: 1.4589338269999872 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0150770133639235,
            "unit": "iter/sec",
            "range": "stddev: 0.006921735762745022",
            "extra": "mean: 496.2589485999956 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "4d2a28dc8a7727dcdc27788e0dfdb012ae7a5ff2",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/4d2a28dc8a7727dcdc27788e0dfdb012ae7a5ff2"
        },
        "date": 1770091381088,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.480481289927781,
            "unit": "iter/sec",
            "range": "stddev: 0.05740523940140189",
            "extra": "mean: 403.1475682000064 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.387845234829622,
            "unit": "iter/sec",
            "range": "stddev: 0.02019102854003338",
            "extra": "mean: 227.90229519998775 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6401362424600018,
            "unit": "iter/sec",
            "range": "stddev: 0.14713355035944897",
            "extra": "mean: 1.5621674476000067 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.330514192950493,
            "unit": "iter/sec",
            "range": "stddev: 0.008631879179361068",
            "extra": "mean: 300.25393740000936 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9023132717858777,
            "unit": "iter/sec",
            "range": "stddev: 0.05944241342446673",
            "extra": "mean: 344.5527433999814 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.992519430118488,
            "unit": "iter/sec",
            "range": "stddev: 0.0004818903606280085",
            "extra": "mean: 55.57865333334336 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.846146997223896,
            "unit": "iter/sec",
            "range": "stddev: 0.0013116163155164626",
            "extra": "mean: 146.06756185712908 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.007360208608825,
            "unit": "iter/sec",
            "range": "stddev: 0.0009909819693066032",
            "extra": "mean: 199.70602439999539 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6723566415392568,
            "unit": "iter/sec",
            "range": "stddev: 0.04104188040564274",
            "extra": "mean: 1.4873059002000104 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.543735011312052,
            "unit": "iter/sec",
            "range": "stddev: 0.0013317311196758403",
            "extra": "mean: 282.18814240000256 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.127528948712134,
            "unit": "iter/sec",
            "range": "stddev: 0.0012241500854754193",
            "extra": "mean: 76.17579849999905 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 280.8020713781808,
            "unit": "iter/sec",
            "range": "stddev: 0.00006010791597236384",
            "extra": "mean: 3.561227291137793 msec\nrounds: 237"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.573098051579404,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096498828190984",
            "extra": "mean: 86.40728658334733 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.45354882743972,
            "unit": "iter/sec",
            "range": "stddev: 0.00020941923988091325",
            "extra": "mean: 17.713678250001205 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7089110541880518,
            "unit": "iter/sec",
            "range": "stddev: 0.037785217901340255",
            "extra": "mean: 1.4106142006000255 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.36165387997242,
            "unit": "iter/sec",
            "range": "stddev: 0.00029919903794055043",
            "extra": "mean: 229.27082879999716 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.911402038485313,
            "unit": "iter/sec",
            "range": "stddev: 0.03639477605922274",
            "extra": "mean: 41.82105249999576 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 63.84427361804916,
            "unit": "iter/sec",
            "range": "stddev: 0.00009301697572034426",
            "extra": "mean: 15.663111870964947 msec\nrounds: 62"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.271692541070904,
            "unit": "iter/sec",
            "range": "stddev: 0.006025302551632365",
            "extra": "mean: 305.65219299998034 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4596802207194384,
            "unit": "iter/sec",
            "range": "stddev: 0.0032366739842773712",
            "extra": "mean: 289.044054999988 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6981153762333681,
            "unit": "iter/sec",
            "range": "stddev: 0.01855690648132819",
            "extra": "mean: 1.4324279825999953 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.925497522296048,
            "unit": "iter/sec",
            "range": "stddev: 0.0702466956844191",
            "extra": "mean: 519.3462927999803 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "a0c6d69382c498da0a3619a421d24fb8e4471b6f",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/a0c6d69382c498da0a3619a421d24fb8e4471b6f"
        },
        "date": 1770094209535,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.8365896562811828,
            "unit": "iter/sec",
            "range": "stddev: 0.07731716681227727",
            "extra": "mean: 352.53601020001497 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.483305155685675,
            "unit": "iter/sec",
            "range": "stddev: 0.019006514227511404",
            "extra": "mean: 223.04972900000166 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6024645463019358,
            "unit": "iter/sec",
            "range": "stddev: 0.2103471652951168",
            "extra": "mean: 1.6598487099999943 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.471515735019038,
            "unit": "iter/sec",
            "range": "stddev: 0.0043253419356319095",
            "extra": "mean: 288.0586108000216 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.673941089888348,
            "unit": "iter/sec",
            "range": "stddev: 0.0685351144624692",
            "extra": "mean: 373.97981719999507 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 18.05313442040256,
            "unit": "iter/sec",
            "range": "stddev: 0.000539959690683627",
            "extra": "mean: 55.39204310526046 msec\nrounds: 19"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.651577202854847,
            "unit": "iter/sec",
            "range": "stddev: 0.003315204276776044",
            "extra": "mean: 115.58586100000588 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.903809746547777,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492166552118924",
            "extra": "mean: 203.92308260001073 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6795639481048341,
            "unit": "iter/sec",
            "range": "stddev: 0.06256886621878202",
            "extra": "mean: 1.4715318592000017 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.575258178581571,
            "unit": "iter/sec",
            "range": "stddev: 0.0014500001675759365",
            "extra": "mean: 279.70008039999357 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.491584695646749,
            "unit": "iter/sec",
            "range": "stddev: 0.0006841192782062514",
            "extra": "mean: 80.0538942307692 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 267.75050042601345,
            "unit": "iter/sec",
            "range": "stddev: 0.0001359978601138449",
            "extra": "mean: 3.734820283842295 msec\nrounds: 229"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.50864612215075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004256219924262589",
            "extra": "mean: 86.89119375000114 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.5443957695743,
            "unit": "iter/sec",
            "range": "stddev: 0.00027587139653117645",
            "extra": "mean: 18.67609085185033 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6906120789855389,
            "unit": "iter/sec",
            "range": "stddev: 0.03882419399916239",
            "extra": "mean: 1.4479908916 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.285711426532409,
            "unit": "iter/sec",
            "range": "stddev: 0.00042259444887600943",
            "extra": "mean: 233.333489000006 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.49197372043064,
            "unit": "iter/sec",
            "range": "stddev: 0.04008867544496821",
            "extra": "mean: 44.46030448148922 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 58.786634095118984,
            "unit": "iter/sec",
            "range": "stddev: 0.000324185633898412",
            "extra": "mean: 17.01066943859998 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.216685485960099,
            "unit": "iter/sec",
            "range": "stddev: 0.01778734385021699",
            "extra": "mean: 310.8790102000057 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.749811370426378,
            "unit": "iter/sec",
            "range": "stddev: 0.003602863711731376",
            "extra": "mean: 266.6800809999927 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6986296496930806,
            "unit": "iter/sec",
            "range": "stddev: 0.05543959932728019",
            "extra": "mean: 1.431373547399994 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.2233697923068703,
            "unit": "iter/sec",
            "range": "stddev: 0.05022974746114429",
            "extra": "mean: 449.7677369999906 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "d1eed3033359c12f1db65c25d6f974dbe8b1ff4a",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/d1eed3033359c12f1db65c25d6f974dbe8b1ff4a"
        },
        "date": 1770102296512,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.7817180319172503,
            "unit": "iter/sec",
            "range": "stddev: 0.06933613507099408",
            "extra": "mean: 359.4900663999965 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.241380420709194,
            "unit": "iter/sec",
            "range": "stddev: 0.01528479635872887",
            "extra": "mean: 235.7722959999876 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6457662814211518,
            "unit": "iter/sec",
            "range": "stddev: 0.20713324756713508",
            "extra": "mean: 1.5485478705999924 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.112675049926903,
            "unit": "iter/sec",
            "range": "stddev: 0.012837636367951414",
            "extra": "mean: 321.26707219999844 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8210943254525613,
            "unit": "iter/sec",
            "range": "stddev: 0.044735580019845976",
            "extra": "mean: 354.4723729999987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 17.96522146909652,
            "unit": "iter/sec",
            "range": "stddev: 0.00033552574611302774",
            "extra": "mean: 55.66310450000205 msec\nrounds: 18"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.819553194026684,
            "unit": "iter/sec",
            "range": "stddev: 0.0010021584464510829",
            "extra": "mean: 113.38442866666772 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.577520875967907,
            "unit": "iter/sec",
            "range": "stddev: 0.0011135676059357915",
            "extra": "mean: 179.29112633333943 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6626157219827367,
            "unit": "iter/sec",
            "range": "stddev: 0.04345983013478401",
            "extra": "mean: 1.5091703483999936 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.469808269380636,
            "unit": "iter/sec",
            "range": "stddev: 0.001002394386984856",
            "extra": "mean: 288.2003621999843 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.459866306107305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006511562590992344",
            "extra": "mean: 74.29494300001019 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 270.44032816953444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007345806640379342",
            "extra": "mean: 3.697673371306949 msec\nrounds: 237"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.230407991738275,
            "unit": "iter/sec",
            "range": "stddev: 0.0012931924725939257",
            "extra": "mean: 89.04395999999792 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.86131012401131,
            "unit": "iter/sec",
            "range": "stddev: 0.0003688673694909201",
            "extra": "mean: 18.56620267307982 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.694283837018,
            "unit": "iter/sec",
            "range": "stddev: 0.04728106360499684",
            "extra": "mean: 1.4403331125999899 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.28298402901679,
            "unit": "iter/sec",
            "range": "stddev: 0.0004800391063468487",
            "extra": "mean: 233.48207540002477 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.50045510920804,
            "unit": "iter/sec",
            "range": "stddev: 0.03737835656084778",
            "extra": "mean: 44.44354548147616 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 60.507534049216886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002660764032235111",
            "extra": "mean: 16.52686753333228 msec\nrounds: 60"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2647145167354403,
            "unit": "iter/sec",
            "range": "stddev: 0.017185513301841347",
            "extra": "mean: 306.3054962000024 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5420693327980466,
            "unit": "iter/sec",
            "range": "stddev: 0.009019085641657107",
            "extra": "mean: 282.32084300000224 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6810645645291131,
            "unit": "iter/sec",
            "range": "stddev: 0.04593712589106014",
            "extra": "mean: 1.468289574999983 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.2704550560045784,
            "unit": "iter/sec",
            "range": "stddev: 0.03197382286625941",
            "extra": "mean: 440.4403413999944 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "7eb7e9e2bd28d200dc97ca262915473d0456ac3d",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/7eb7e9e2bd28d200dc97ca262915473d0456ac3d"
        },
        "date": 1770108545015,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.801274912204158,
            "unit": "iter/sec",
            "range": "stddev: 0.08448156943680403",
            "extra": "mean: 356.9803148000062 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.348387168805891,
            "unit": "iter/sec",
            "range": "stddev: 0.01788235780971678",
            "extra": "mean: 229.97032260000196 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6215608692912757,
            "unit": "iter/sec",
            "range": "stddev: 0.19138852698818162",
            "extra": "mean: 1.6088528886000062 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.902709979906458,
            "unit": "iter/sec",
            "range": "stddev: 0.019430293961413648",
            "extra": "mean: 344.5056539999996 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7894027189866315,
            "unit": "iter/sec",
            "range": "stddev: 0.06291977224897542",
            "extra": "mean: 358.49968639999474 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 13.09270889561116,
            "unit": "iter/sec",
            "range": "stddev: 0.00040684351475165617",
            "extra": "mean: 76.37838799999689 msec\nrounds: 14"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.925492876240962,
            "unit": "iter/sec",
            "range": "stddev: 0.0011358796785657934",
            "extra": "mean: 126.17511814284757 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.809074359006438,
            "unit": "iter/sec",
            "range": "stddev: 0.0009772330284929798",
            "extra": "mean: 172.14446539999813 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6743626371254005,
            "unit": "iter/sec",
            "range": "stddev: 0.030268167822058205",
            "extra": "mean: 1.4828816796000013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.6544838288983503,
            "unit": "iter/sec",
            "range": "stddev: 0.020072109011644905",
            "extra": "mean: 376.72107439999536 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.341490387258851,
            "unit": "iter/sec",
            "range": "stddev: 0.0059925784697803875",
            "extra": "mean: 96.69786100000071 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 274.2884230178966,
            "unit": "iter/sec",
            "range": "stddev: 0.00006639199170119078",
            "extra": "mean: 3.645797328947977 msec\nrounds: 228"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.683299059889313,
            "unit": "iter/sec",
            "range": "stddev: 0.0008871180406269925",
            "extra": "mean: 85.59226249999578 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.180880677179665,
            "unit": "iter/sec",
            "range": "stddev: 0.00021731885940458597",
            "extra": "mean: 18.12221892307629 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6955530861219951,
            "unit": "iter/sec",
            "range": "stddev: 0.05574985916819183",
            "extra": "mean: 1.4377047848000017 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.8527196663962835,
            "unit": "iter/sec",
            "range": "stddev: 0.0018275325316650316",
            "extra": "mean: 350.5426810000074 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.657264564248614,
            "unit": "iter/sec",
            "range": "stddev: 0.03839785219880701",
            "extra": "mean: 44.13595459259109 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 58.56486544784886,
            "unit": "iter/sec",
            "range": "stddev: 0.0003772253908075773",
            "extra": "mean: 17.075084051725263 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1420488592267772,
            "unit": "iter/sec",
            "range": "stddev: 0.018542608103365",
            "extra": "mean: 318.26366959999746 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.456040108821917,
            "unit": "iter/sec",
            "range": "stddev: 0.0019058761734527417",
            "extra": "mean: 289.3484937999972 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6946947641947754,
            "unit": "iter/sec",
            "range": "stddev: 0.04124938788604701",
            "extra": "mean: 1.4394811239999854 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6372628074040358,
            "unit": "iter/sec",
            "range": "stddev: 0.041549482716307325",
            "extra": "mean: 610.7754939999836 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "7eb7e9e2bd28d200dc97ca262915473d0456ac3d",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/7eb7e9e2bd28d200dc97ca262915473d0456ac3d"
        },
        "date": 1770172915496,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.7404135723862666,
            "unit": "iter/sec",
            "range": "stddev: 0.06356932333696318",
            "extra": "mean: 364.90842479999515 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.465705677112317,
            "unit": "iter/sec",
            "range": "stddev: 0.005860636277493405",
            "extra": "mean: 223.92877459999454 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6445973751631079,
            "unit": "iter/sec",
            "range": "stddev: 0.08287243063601951",
            "extra": "mean: 1.5513559913999984 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.8535023099785715,
            "unit": "iter/sec",
            "range": "stddev: 0.0034930536144466323",
            "extra": "mean: 350.446536000004 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8262021068087906,
            "unit": "iter/sec",
            "range": "stddev: 0.0577438458057528",
            "extra": "mean: 353.83173680000937 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 12.933741567186349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004595225365272493",
            "extra": "mean: 77.31714715384896 msec\nrounds: 13"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.538317214449677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524885266410154",
            "extra": "mean: 152.94455242856688 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.015633114524916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003065646768381987",
            "extra": "mean: 166.23354200000526 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6814574625632198,
            "unit": "iter/sec",
            "range": "stddev: 0.0702598896288522",
            "extra": "mean: 1.4674430245999814 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.6733293976828945,
            "unit": "iter/sec",
            "range": "stddev: 0.0023542979509288287",
            "extra": "mean: 374.0653885999791 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.063829823186285,
            "unit": "iter/sec",
            "range": "stddev: 0.002568016898139044",
            "extra": "mean: 90.38461509090791 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 261.8657296721427,
            "unit": "iter/sec",
            "range": "stddev: 0.000050692757014770024",
            "extra": "mean: 3.8187509348856197 msec\nrounds: 215"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.381698386063459,
            "unit": "iter/sec",
            "range": "stddev: 0.0016546694225477504",
            "extra": "mean: 87.86034966666041 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.73438457673173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001434943329953428",
            "extra": "mean: 18.96295951922866 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6938036797433395,
            "unit": "iter/sec",
            "range": "stddev: 0.05223464811600916",
            "extra": "mean: 1.441329916799998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.9755906024384116,
            "unit": "iter/sec",
            "range": "stddev: 0.00154986624051711",
            "extra": "mean: 336.06773700001895 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.80427275550435,
            "unit": "iter/sec",
            "range": "stddev: 0.03766341130932822",
            "extra": "mean: 43.851431296296276 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 59.51398282143319,
            "unit": "iter/sec",
            "range": "stddev: 0.00013620756411162499",
            "extra": "mean: 16.802773946425628 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.34748881016827,
            "unit": "iter/sec",
            "range": "stddev: 0.01772868935182664",
            "extra": "mean: 298.7313944000107 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.3884032050750306,
            "unit": "iter/sec",
            "range": "stddev: 0.002899046265453752",
            "extra": "mean: 295.12426340000957 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6941411610596205,
            "unit": "iter/sec",
            "range": "stddev: 0.06319025908329966",
            "extra": "mean: 1.4406291632000034 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.8352741710064775,
            "unit": "iter/sec",
            "range": "stddev: 0.048383782096208604",
            "extra": "mean: 544.8777167999879 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "ae6c60161bd5e23edb693903f6161da81403b07a",
          "message": "feat: use OS-managed memory (mmap) for decrypted buffers",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/9/commits/ae6c60161bd5e23edb693903f6161da81403b07a"
        },
        "date": 1770180285876,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.9577238355305522,
            "unit": "iter/sec",
            "range": "stddev: 0.002122094045513514",
            "extra": "mean: 510.79727479999514 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.528191461802877,
            "unit": "iter/sec",
            "range": "stddev: 0.008365318670015246",
            "extra": "mean: 220.83871859999817 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6091642723324804,
            "unit": "iter/sec",
            "range": "stddev: 0.22423337896530524",
            "extra": "mean: 1.6415933196000083 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.0124719503772863,
            "unit": "iter/sec",
            "range": "stddev: 0.03330195015855467",
            "extra": "mean: 496.9013355999948 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 3.0599383589860074,
            "unit": "iter/sec",
            "range": "stddev: 0.06355147801496085",
            "extra": "mean: 326.80396880000444 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.36616095743407,
            "unit": "iter/sec",
            "range": "stddev: 0.0010324440794318931",
            "extra": "mean: 135.75592575000428 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.431847683621191,
            "unit": "iter/sec",
            "range": "stddev: 0.007999388213959307",
            "extra": "mean: 225.63952359998893 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.3847633294307435,
            "unit": "iter/sec",
            "range": "stddev: 0.002016198191449258",
            "extra": "mean: 228.0624802000034 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6713328954791877,
            "unit": "iter/sec",
            "range": "stddev: 0.12162789270125011",
            "extra": "mean: 1.4895739606000007 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 1.9550328233627932,
            "unit": "iter/sec",
            "range": "stddev: 0.002391903876458876",
            "extra": "mean: 511.5003635999983 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 6.574164990862635,
            "unit": "iter/sec",
            "range": "stddev: 0.00140823891761694",
            "extra": "mean: 152.11057242857302 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 305.4131673068247,
            "unit": "iter/sec",
            "range": "stddev: 0.00003443593308894931",
            "extra": "mean: 3.274253067797101 msec\nrounds: 236"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 14.156471980274134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188059068991126",
            "extra": "mean: 70.63906892857322 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.060481601557775,
            "unit": "iter/sec",
            "range": "stddev: 0.00008638071409586506",
            "extra": "mean: 18.161846226417822 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6949128411795328,
            "unit": "iter/sec",
            "range": "stddev: 0.039100823921441326",
            "extra": "mean: 1.4390293872000086 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.4242000791969427,
            "unit": "iter/sec",
            "range": "stddev: 0.003766144345899627",
            "extra": "mean: 412.5072054000043 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.909322409876452,
            "unit": "iter/sec",
            "range": "stddev: 0.03344512485007396",
            "extra": "mean: 43.65035255555569 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 40.08851331270048,
            "unit": "iter/sec",
            "range": "stddev: 0.0008718716700958325",
            "extra": "mean: 24.94480132500172 msec\nrounds: 40"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1706782312767476,
            "unit": "iter/sec",
            "range": "stddev: 0.003972625849148778",
            "extra": "mean: 315.3899345999946 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.2279648792695514,
            "unit": "iter/sec",
            "range": "stddev: 0.0036862038723857477",
            "extra": "mean: 309.79271379999886 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6762044544918899,
            "unit": "iter/sec",
            "range": "stddev: 0.05324604001932319",
            "extra": "mean: 1.4788426686000093 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.6018659436682334,
            "unit": "iter/sec",
            "range": "stddev: 0.03216664803966914",
            "extra": "mean: 624.2719648000161 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "e2709894f2188d479c6debdb3f88e6251aa8d1e0",
          "message": "feat: use OS-managed memory (mmap) for decrypted buffers",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/9/commits/e2709894f2188d479c6debdb3f88e6251aa8d1e0"
        },
        "date": 1770256370197,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.700820569463402,
            "unit": "iter/sec",
            "range": "stddev: 0.07974930660707787",
            "extra": "mean: 370.25784359998397 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.451168898496424,
            "unit": "iter/sec",
            "range": "stddev: 0.01944002822503131",
            "extra": "mean: 224.6600887999989 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6840990430297629,
            "unit": "iter/sec",
            "range": "stddev: 0.13774855737457667",
            "extra": "mean: 1.4617766392000249 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.1675171049930264,
            "unit": "iter/sec",
            "range": "stddev: 0.017203004265891234",
            "extra": "mean: 315.70468820000315 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.818471651255806,
            "unit": "iter/sec",
            "range": "stddev: 0.05611421688409757",
            "extra": "mean: 354.8022203999949 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.183219937885366,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789698035460285",
            "extra": "mean: 139.21333450001327 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.70885784642264,
            "unit": "iter/sec",
            "range": "stddev: 0.0015651910269802623",
            "extra": "mean: 175.1663864999955 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.0614387338174955,
            "unit": "iter/sec",
            "range": "stddev: 0.00043262494017987313",
            "extra": "mean: 197.5722818333452 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7310533541154558,
            "unit": "iter/sec",
            "range": "stddev: 0.02882871828318107",
            "extra": "mean: 1.3678892167999948 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.0355995867761556,
            "unit": "iter/sec",
            "range": "stddev: 0.003387757825870375",
            "extra": "mean: 329.4242114000326 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.451547300920431,
            "unit": "iter/sec",
            "range": "stddev: 0.0027684862365163656",
            "extra": "mean: 118.32152911113604 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 277.0912596311541,
            "unit": "iter/sec",
            "range": "stddev: 0.00004412690770965012",
            "extra": "mean: 3.608919318967819 msec\nrounds: 232"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.523861570416223,
            "unit": "iter/sec",
            "range": "stddev: 0.0007622450825162014",
            "extra": "mean: 86.7764675833295 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.779088235597925,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182915038224768",
            "extra": "mean: 18.25514137254579 msec\nrounds: 51"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.713565442042067,
            "unit": "iter/sec",
            "range": "stddev: 0.05300193985918969",
            "extra": "mean: 1.4014131586000302 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.570348076990332,
            "unit": "iter/sec",
            "range": "stddev: 0.010707191474830685",
            "extra": "mean: 280.08473639997646 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 17.788240900137772,
            "unit": "iter/sec",
            "range": "stddev: 0.045260883869593885",
            "extra": "mean: 56.216913499988344 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 39.64367689894408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967941226959423",
            "extra": "mean: 25.224703615386275 msec\nrounds: 39"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.0815104143350958,
            "unit": "iter/sec",
            "range": "stddev: 0.034555854906095265",
            "extra": "mean: 324.5161838000058 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.2162267500888357,
            "unit": "iter/sec",
            "range": "stddev: 0.002865845313371121",
            "extra": "mean: 310.92335140001524 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7094113101560098,
            "unit": "iter/sec",
            "range": "stddev: 0.0629713585380672",
            "extra": "mean: 1.409619477000001 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9574697716133755,
            "unit": "iter/sec",
            "range": "stddev: 0.043549450708295454",
            "extra": "mean: 510.8635722000372 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "ae6c60161bd5e23edb693903f6161da81403b07a",
          "message": "feat: use OS-managed memory (mmap) for decrypted buffers",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/9/commits/ae6c60161bd5e23edb693903f6161da81403b07a"
        },
        "date": 1770256643056,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.6484814879214027,
            "unit": "iter/sec",
            "range": "stddev: 0.07174038992997639",
            "extra": "mean: 377.57484979999845 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.024042569470613,
            "unit": "iter/sec",
            "range": "stddev: 0.0035651942475296676",
            "extra": "mean: 248.50631740000608 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.605574188613101,
            "unit": "iter/sec",
            "range": "stddev: 0.1785863026572605",
            "extra": "mean: 1.651325335200005 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 2.2337601623248977,
            "unit": "iter/sec",
            "range": "stddev: 0.004874882190712266",
            "extra": "mean: 447.6756353999974 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9951035854897445,
            "unit": "iter/sec",
            "range": "stddev: 0.0822027746722072",
            "extra": "mean: 333.87826880000375 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 14.577466988081165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490927034514385",
            "extra": "mean: 68.59902346667089 msec\nrounds: 15"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.820766870842896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184476655551396",
            "extra": "mean: 171.79866883333736 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.099740131012431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006396361044397577",
            "extra": "mean: 196.08842299999196 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6706422734077716,
            "unit": "iter/sec",
            "range": "stddev: 0.05721038655690154",
            "extra": "mean: 1.4911079120000068 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.366584535202363,
            "unit": "iter/sec",
            "range": "stddev: 0.0013168930108125134",
            "extra": "mean: 422.54987519999645 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.082978970089053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006699616048479042",
            "extra": "mean: 90.22844874999929 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 266.04071838650503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432354853323736",
            "extra": "mean: 3.7588231082250947 msec\nrounds: 231"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.241777033562071,
            "unit": "iter/sec",
            "range": "stddev: 0.0005745812511272547",
            "extra": "mean: 88.95390800000058 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.68535699540916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934347964101295",
            "extra": "mean: 18.980605941175213 msec\nrounds: 51"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6805687306969552,
            "unit": "iter/sec",
            "range": "stddev: 0.02984220368198467",
            "extra": "mean: 1.4693593092000015 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 2.6197109878776685,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268036232753322",
            "extra": "mean: 381.7214969999952 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.709449075573666,
            "unit": "iter/sec",
            "range": "stddev: 0.0010284457152892382",
            "extra": "mean: 48.287136772724566 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 30.354921730169956,
            "unit": "iter/sec",
            "range": "stddev: 0.0011356203980698244",
            "extra": "mean: 32.943586838706736 msec\nrounds: 31"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.192796107934549,
            "unit": "iter/sec",
            "range": "stddev: 0.01665004727103418",
            "extra": "mean: 313.2050923999998 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.7198047379861503,
            "unit": "iter/sec",
            "range": "stddev: 0.0019036252893803898",
            "extra": "mean: 268.8313151999978 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6807975262367909,
            "unit": "iter/sec",
            "range": "stddev: 0.020213810979716938",
            "extra": "mean: 1.4688655017999963 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.4057298250533976,
            "unit": "iter/sec",
            "range": "stddev: 0.06319705186088519",
            "extra": "mean: 711.3742500000058 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "e2709894f2188d479c6debdb3f88e6251aa8d1e0",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/e2709894f2188d479c6debdb3f88e6251aa8d1e0"
        },
        "date": 1770257051769,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.5627812295852124,
            "unit": "iter/sec",
            "range": "stddev: 0.06647056766261322",
            "extra": "mean: 390.2010786000062 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.429314924389567,
            "unit": "iter/sec",
            "range": "stddev: 0.010594558430868518",
            "extra": "mean: 225.76854819999426 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6752134975113359,
            "unit": "iter/sec",
            "range": "stddev: 0.2330778598774046",
            "extra": "mean: 1.4810130479999941 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.5674153998301277,
            "unit": "iter/sec",
            "range": "stddev: 0.022812710197914036",
            "extra": "mean: 280.31498659999556 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.979560756680942,
            "unit": "iter/sec",
            "range": "stddev: 0.06426132768892878",
            "extra": "mean: 335.61993920001214 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.981706758208399,
            "unit": "iter/sec",
            "range": "stddev: 0.0010259975517708424",
            "extra": "mean: 125.2864869999889 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.83173936102322,
            "unit": "iter/sec",
            "range": "stddev: 0.0009951096400417187",
            "extra": "mean: 171.47542749999425 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.17738552752223,
            "unit": "iter/sec",
            "range": "stddev: 0.0013936445980773763",
            "extra": "mean: 193.14767939998774 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7253655117575343,
            "unit": "iter/sec",
            "range": "stddev: 0.04437551965859331",
            "extra": "mean: 1.3786153102000072 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.553869988821143,
            "unit": "iter/sec",
            "range": "stddev: 0.0069673771740796754",
            "extra": "mean: 281.3833941999974 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.199869336960774,
            "unit": "iter/sec",
            "range": "stddev: 0.0005581325118918169",
            "extra": "mean: 81.96809099999095 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 291.2101770605836,
            "unit": "iter/sec",
            "range": "stddev: 0.000045244356206242056",
            "extra": "mean: 3.4339459221301847 msec\nrounds: 244"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.68969463611717,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550889508046908",
            "extra": "mean: 85.54543391666887 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 58.56275800315198,
            "unit": "iter/sec",
            "range": "stddev: 0.00017215049351739897",
            "extra": "mean: 17.075698517241587 msec\nrounds: 58"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7158600888119835,
            "unit": "iter/sec",
            "range": "stddev: 0.06649616082430163",
            "extra": "mean: 1.3969210124000142 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.275663041156078,
            "unit": "iter/sec",
            "range": "stddev: 0.004499442766935015",
            "extra": "mean: 233.88185420000127 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 18.841684896601404,
            "unit": "iter/sec",
            "range": "stddev: 0.03946803721360115",
            "extra": "mean: 53.073809772733036 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 41.14446632879115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007222234935760019",
            "extra": "mean: 24.30460495000375 msec\nrounds: 40"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2297772606334676,
            "unit": "iter/sec",
            "range": "stddev: 0.015965150059310835",
            "extra": "mean: 309.61887439998463 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.6242317879875015,
            "unit": "iter/sec",
            "range": "stddev: 0.007816309871687618",
            "extra": "mean: 275.92054220000364 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6845531026797687,
            "unit": "iter/sec",
            "range": "stddev: 0.11678290603432773",
            "extra": "mean: 1.4608070522000047 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0179294386674718,
            "unit": "iter/sec",
            "range": "stddev: 0.041662858928932976",
            "extra": "mean: 495.5574663999869 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "9a1d13f3a55e974e2152340598ad70a740d0abd2",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/9a1d13f3a55e974e2152340598ad70a740d0abd2"
        },
        "date": 1770258311185,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.0431948413357843,
            "unit": "iter/sec",
            "range": "stddev: 0.010382541969579204",
            "extra": "mean: 489.42958339999905 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.8413443795698488,
            "unit": "iter/sec",
            "range": "stddev: 0.012580744828841221",
            "extra": "mean: 260.3255269999977 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6935601484159358,
            "unit": "iter/sec",
            "range": "stddev: 0.09876164079248373",
            "extra": "mean: 1.4418360142000097 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.0237732085524214,
            "unit": "iter/sec",
            "range": "stddev: 0.006941037101949256",
            "extra": "mean: 330.71263320000526 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7995065365818603,
            "unit": "iter/sec",
            "range": "stddev: 0.0660103349767147",
            "extra": "mean: 357.20580999999356 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.284975342826416,
            "unit": "iter/sec",
            "range": "stddev: 0.002348026259767339",
            "extra": "mean: 137.26882424999687 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.772530791871933,
            "unit": "iter/sec",
            "range": "stddev: 0.01781567112852113",
            "extra": "mean: 173.23424266667567 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.522862051837275,
            "unit": "iter/sec",
            "range": "stddev: 0.004925001848156974",
            "extra": "mean: 221.0989387999973 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6880945803593916,
            "unit": "iter/sec",
            "range": "stddev: 0.04067717589844755",
            "extra": "mean: 1.453288586399998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.721564946960288,
            "unit": "iter/sec",
            "range": "stddev: 0.006858763918194216",
            "extra": "mean: 367.4356553999928 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.677754007579068,
            "unit": "iter/sec",
            "range": "stddev: 0.006366513573497098",
            "extra": "mean: 130.24642350000448 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 265.47059869855394,
            "unit": "iter/sec",
            "range": "stddev: 0.00014493317256287602",
            "extra": "mean: 3.766895486364257 msec\nrounds: 220"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.420809585330371,
            "unit": "iter/sec",
            "range": "stddev: 0.0006868832682712877",
            "extra": "mean: 87.55946699999839 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 50.9678437719068,
            "unit": "iter/sec",
            "range": "stddev: 0.00047707059863059004",
            "extra": "mean: 19.620213962262902 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6940236022197493,
            "unit": "iter/sec",
            "range": "stddev: 0.026354335069551815",
            "extra": "mean: 1.4408731875999934 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.5035036118700194,
            "unit": "iter/sec",
            "range": "stddev: 0.015178891018245011",
            "extra": "mean: 285.4285626000092 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 15.861403599171549,
            "unit": "iter/sec",
            "range": "stddev: 0.0528381629487249",
            "extra": "mean: 63.046122857136716 msec\nrounds: 21"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 34.347212170005086,
            "unit": "iter/sec",
            "range": "stddev: 0.001008646077435867",
            "extra": "mean: 29.114444428572433 msec\nrounds: 35"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.5349019701491606,
            "unit": "iter/sec",
            "range": "stddev: 0.03043475103498907",
            "extra": "mean: 394.4925728000271 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.0640638702396945,
            "unit": "iter/sec",
            "range": "stddev: 0.005233200745468278",
            "extra": "mean: 326.3639540000099 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6799510180258111,
            "unit": "iter/sec",
            "range": "stddev: 0.06103619094851732",
            "extra": "mean: 1.4706941728000174 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.7629134792718202,
            "unit": "iter/sec",
            "range": "stddev: 0.0973073581791959",
            "extra": "mean: 567.2428123999907 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "41d914cc36482febee369f4c210ab5d4c2af9f3a",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/41d914cc36482febee369f4c210ab5d4c2af9f3a"
        },
        "date": 1770261941635,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.7037109106554924,
            "unit": "iter/sec",
            "range": "stddev: 0.07185379323334534",
            "extra": "mean: 369.86202779999076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.580368949085158,
            "unit": "iter/sec",
            "range": "stddev: 0.0020833371840294304",
            "extra": "mean: 218.32302400000572 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6582115584016711,
            "unit": "iter/sec",
            "range": "stddev: 0.24149780601268056",
            "extra": "mean: 1.519268367799998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.318915861052955,
            "unit": "iter/sec",
            "range": "stddev: 0.00752591993768285",
            "extra": "mean: 301.30320919998894 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9797129527257855,
            "unit": "iter/sec",
            "range": "stddev: 0.05936488678317083",
            "extra": "mean: 335.60279659999424 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.243574643929003,
            "unit": "iter/sec",
            "range": "stddev: 0.0002783647951002684",
            "extra": "mean: 138.05338512499787 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.562367122319582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007127102916357559",
            "extra": "mean: 152.3840378571403 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.208475719604272,
            "unit": "iter/sec",
            "range": "stddev: 0.00033819751787515974",
            "extra": "mean: 237.6157227999954 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6627243307229896,
            "unit": "iter/sec",
            "range": "stddev: 0.14086931547925802",
            "extra": "mean: 1.5089230221999912 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.0203922045484757,
            "unit": "iter/sec",
            "range": "stddev: 0.00817372599665484",
            "extra": "mean: 331.08283039999833 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.656303004076172,
            "unit": "iter/sec",
            "range": "stddev: 0.0011889094547778978",
            "extra": "mean: 115.52275833333346 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 272.4344373709182,
            "unit": "iter/sec",
            "range": "stddev: 0.0002426256364389386",
            "extra": "mean: 3.670607907173294 msec\nrounds: 237"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.458758228464882,
            "unit": "iter/sec",
            "range": "stddev: 0.0010404125042413066",
            "extra": "mean: 87.26949116666798 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.04906368002238,
            "unit": "iter/sec",
            "range": "stddev: 0.00015441238474298645",
            "extra": "mean: 18.501708113208633 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7146719859180396,
            "unit": "iter/sec",
            "range": "stddev: 0.034066127206162825",
            "extra": "mean: 1.3992433167999991 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.561973417307285,
            "unit": "iter/sec",
            "range": "stddev: 0.010695512975869506",
            "extra": "mean: 280.74325179999846 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 17.706322714159647,
            "unit": "iter/sec",
            "range": "stddev: 0.04115653897821269",
            "extra": "mean: 56.477000681813266 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 39.743406986328594,
            "unit": "iter/sec",
            "range": "stddev: 0.0014867329268545173",
            "extra": "mean: 25.16140602500414 msec\nrounds: 40"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.3719458949052945,
            "unit": "iter/sec",
            "range": "stddev: 0.004638228625465826",
            "extra": "mean: 296.5646636000031 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.191926258985845,
            "unit": "iter/sec",
            "range": "stddev: 0.014777210445072629",
            "extra": "mean: 313.2904455999949 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7302544141473829,
            "unit": "iter/sec",
            "range": "stddev: 0.044222182188019814",
            "extra": "mean: 1.369385765600009 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9968489675368502,
            "unit": "iter/sec",
            "range": "stddev: 0.04140859086979537",
            "extra": "mean: 500.7890011999848 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "647a48884bbaaf6ce4b594758bdcbb1b147c122e",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/647a48884bbaaf6ce4b594758bdcbb1b147c122e"
        },
        "date": 1770262865575,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.805381549286991,
            "unit": "iter/sec",
            "range": "stddev: 0.08758331138241225",
            "extra": "mean: 356.4577517999851 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.450156479384477,
            "unit": "iter/sec",
            "range": "stddev: 0.010602791337767465",
            "extra": "mean: 224.71119939996242 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6577226838575649,
            "unit": "iter/sec",
            "range": "stddev: 0.18699010210283756",
            "extra": "mean: 1.5203976152000223 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.172121176081625,
            "unit": "iter/sec",
            "range": "stddev: 0.009854210261299456",
            "extra": "mean: 315.24646900004427 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.815581793644351,
            "unit": "iter/sec",
            "range": "stddev: 0.07027544542401841",
            "extra": "mean: 355.16638240001157 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.088143968411301,
            "unit": "iter/sec",
            "range": "stddev: 0.001305949179272102",
            "extra": "mean: 141.08065587501528 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.106111432182437,
            "unit": "iter/sec",
            "range": "stddev: 0.017569227684110404",
            "extra": "mean: 140.72394016665157 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.88457037292282,
            "unit": "iter/sec",
            "range": "stddev: 0.0016192767454464658",
            "extra": "mean: 204.7262960000353 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7198151824304964,
            "unit": "iter/sec",
            "range": "stddev: 0.026159081364667554",
            "extra": "mean: 1.389245495799969 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.9581945076808425,
            "unit": "iter/sec",
            "range": "stddev: 0.006512551766274676",
            "extra": "mean: 338.04403240001193 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.108710078471843,
            "unit": "iter/sec",
            "range": "stddev: 0.0028267624485410134",
            "extra": "mean: 123.32417737501089 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 287.0172306637148,
            "unit": "iter/sec",
            "range": "stddev: 0.000055257961288053576",
            "extra": "mean: 3.48411138135346 msec\nrounds: 236"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.403263091626147,
            "unit": "iter/sec",
            "range": "stddev: 0.0006906643354097771",
            "extra": "mean: 87.69419700000942 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.920766540655706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004014044758032389",
            "extra": "mean: 18.20804884905856 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6899291260453106,
            "unit": "iter/sec",
            "range": "stddev: 0.062048401005148836",
            "extra": "mean: 1.449424241199995 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.4948983630045096,
            "unit": "iter/sec",
            "range": "stddev: 0.011926245790426221",
            "extra": "mean: 286.13135380003314 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 17.593210062437667,
            "unit": "iter/sec",
            "range": "stddev: 0.04580598799161379",
            "extra": "mean: 56.84011027271522 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 38.74656308172164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044982304833912",
            "extra": "mean: 25.80874071052102 msec\nrounds: 38"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.8885396507085166,
            "unit": "iter/sec",
            "range": "stddev: 0.025428749426243034",
            "extra": "mean: 346.1956977999989 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.255518858116836,
            "unit": "iter/sec",
            "range": "stddev: 0.0027695125047528277",
            "extra": "mean: 307.1706980000272 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7239149777425734,
            "unit": "iter/sec",
            "range": "stddev: 0.047761659993896796",
            "extra": "mean: 1.381377690399995 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.00260837578128,
            "unit": "iter/sec",
            "range": "stddev: 0.023102550784724972",
            "extra": "mean: 499.3487554000012 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "261e9b59cf47688ea7494907dbe612c5e967fc53",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/261e9b59cf47688ea7494907dbe612c5e967fc53"
        },
        "date": 1770263462225,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.3665307762097942,
            "unit": "iter/sec",
            "range": "stddev: 0.04006963408185291",
            "extra": "mean: 422.5594739999906 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.747251191071162,
            "unit": "iter/sec",
            "range": "stddev: 0.012786367409300914",
            "extra": "mean: 210.64821720005966 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6541395960736035,
            "unit": "iter/sec",
            "range": "stddev: 0.15470062697226022",
            "extra": "mean: 1.528725681800006 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.079503928624321,
            "unit": "iter/sec",
            "range": "stddev: 0.007100185301335443",
            "extra": "mean: 324.727626000049 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.900424057253475,
            "unit": "iter/sec",
            "range": "stddev: 0.062462330047088475",
            "extra": "mean: 344.7771705999912 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.0278434231089,
            "unit": "iter/sec",
            "range": "stddev: 0.00038708703002896466",
            "extra": "mean: 142.291160999946 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.46239244945332,
            "unit": "iter/sec",
            "range": "stddev: 0.0015515550343921608",
            "extra": "mean: 183.06996599998607 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.204044316697957,
            "unit": "iter/sec",
            "range": "stddev: 0.0009255517730344194",
            "extra": "mean: 237.86618899998757 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.679616042283076,
            "unit": "iter/sec",
            "range": "stddev: 0.06412482952454904",
            "extra": "mean: 1.471419062799987 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.7771416056074383,
            "unit": "iter/sec",
            "range": "stddev: 0.01474651117138691",
            "extra": "mean: 360.0824667999859 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.381157519636899,
            "unit": "iter/sec",
            "range": "stddev: 0.01052646429103003",
            "extra": "mean: 135.4801055714623 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 285.53445645339235,
            "unit": "iter/sec",
            "range": "stddev: 0.00017513174018053",
            "extra": "mean: 3.502204295835061 msec\nrounds: 240"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.539255294989688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573275243925136",
            "extra": "mean: 86.66070508329919 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 57.4108747492159,
            "unit": "iter/sec",
            "range": "stddev: 0.00018079613869257668",
            "extra": "mean: 17.418302793124706 msec\nrounds: 58"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7092969371020525,
            "unit": "iter/sec",
            "range": "stddev: 0.04454695543508395",
            "extra": "mean: 1.4098467759999949 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.5486383692172536,
            "unit": "iter/sec",
            "range": "stddev: 0.009526033505508708",
            "extra": "mean: 281.7982268000378 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.873278352192923,
            "unit": "iter/sec",
            "range": "stddev: 0.0007619894375738007",
            "extra": "mean: 47.90814279995175 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 37.12975266831383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007191980313109151",
            "extra": "mean: 26.932579081071832 msec\nrounds: 37"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.0494648918547327,
            "unit": "iter/sec",
            "range": "stddev: 0.03514975719530347",
            "extra": "mean: 327.9263855999943 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.372500174378764,
            "unit": "iter/sec",
            "range": "stddev: 0.00332236882337186",
            "extra": "mean: 296.51592239997626 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7102236089217676,
            "unit": "iter/sec",
            "range": "stddev: 0.028424510366613018",
            "extra": "mean: 1.4080072633999863 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9012851987129264,
            "unit": "iter/sec",
            "range": "stddev: 0.06445652902814529",
            "extra": "mean: 525.9600194000086 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "55f67476729f758145f3bd2bbdb3908bcdd426a3",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/55f67476729f758145f3bd2bbdb3908bcdd426a3"
        },
        "date": 1770264066717,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.2660744273899085,
            "unit": "iter/sec",
            "range": "stddev: 0.00365094337283856",
            "extra": "mean: 441.29177220000315 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 6.726236495018508,
            "unit": "iter/sec",
            "range": "stddev: 0.006331582539632105",
            "extra": "mean: 148.67154920000303 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6700378905743722,
            "unit": "iter/sec",
            "range": "stddev: 0.2025531765825327",
            "extra": "mean: 1.4924529105999909 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.249424354704466,
            "unit": "iter/sec",
            "range": "stddev: 0.0034623274086254415",
            "extra": "mean: 235.32599159999563 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8977922128270377,
            "unit": "iter/sec",
            "range": "stddev: 0.050046992762633476",
            "extra": "mean: 345.0903054999988 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 11.692238989910999,
            "unit": "iter/sec",
            "range": "stddev: 0.0021501033015859",
            "extra": "mean: 85.52681833333035 msec\nrounds: 12"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.113134422379611,
            "unit": "iter/sec",
            "range": "stddev: 0.001444500111487406",
            "extra": "mean: 123.25692487499751 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.426203216181521,
            "unit": "iter/sec",
            "range": "stddev: 0.0017518105859221306",
            "extra": "mean: 184.29092316666149 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6885034118080187,
            "unit": "iter/sec",
            "range": "stddev: 0.1082760311392313",
            "extra": "mean: 1.452425627599996 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.6756672306216958,
            "unit": "iter/sec",
            "range": "stddev: 0.00533535753655045",
            "extra": "mean: 272.0594485999925 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.621372386936672,
            "unit": "iter/sec",
            "range": "stddev: 0.0015206424576856095",
            "extra": "mean: 115.99081388889152 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 363.7362912145626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004726232717763625",
            "extra": "mean: 2.7492445053004486 msec\nrounds: 283"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.631018643987975,
            "unit": "iter/sec",
            "range": "stddev: 0.000790410954685904",
            "extra": "mean: 73.3620887857163 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 72.51800822590184,
            "unit": "iter/sec",
            "range": "stddev: 0.00009875431170583655",
            "extra": "mean: 13.789678239436558 msec\nrounds: 71"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7145746513209869,
            "unit": "iter/sec",
            "range": "stddev: 0.047898053604755235",
            "extra": "mean: 1.3994339124000077 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.489615144838211,
            "unit": "iter/sec",
            "range": "stddev: 0.00644645149358587",
            "extra": "mean: 222.73624079999763 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 19.415970644839515,
            "unit": "iter/sec",
            "range": "stddev: 0.047025659485560756",
            "extra": "mean: 51.50399216666438 msec\nrounds: 24"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 40.20258170676339,
            "unit": "iter/sec",
            "range": "stddev: 0.0005974342095253646",
            "extra": "mean: 24.874024441862332 msec\nrounds: 43"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 4.151211612431374,
            "unit": "iter/sec",
            "range": "stddev: 0.013943132353722871",
            "extra": "mean: 240.8935253999971 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.015702811262065,
            "unit": "iter/sec",
            "range": "stddev: 0.010926488357286268",
            "extra": "mean: 199.3738540000095 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7407106180700086,
            "unit": "iter/sec",
            "range": "stddev: 0.03784119532166053",
            "extra": "mean: 1.3500549007999836 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.755782252180557,
            "unit": "iter/sec",
            "range": "stddev: 0.0565744302611823",
            "extra": "mean: 362.8733726000064 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "434785bb75a34fd333aab272cc778efdbac2fcac",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/434785bb75a34fd333aab272cc778efdbac2fcac"
        },
        "date": 1770266752603,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.892205097657574,
            "unit": "iter/sec",
            "range": "stddev: 0.009178091663024558",
            "extra": "mean: 528.4839372000079 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.559305745322852,
            "unit": "iter/sec",
            "range": "stddev: 0.006319485355348677",
            "extra": "mean: 219.33163859998785 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6806296951094633,
            "unit": "iter/sec",
            "range": "stddev: 0.18922091861426982",
            "extra": "mean: 1.469227697800011 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.01283845848354,
            "unit": "iter/sec",
            "range": "stddev: 0.015210094809175442",
            "extra": "mean: 331.9129166000266 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7626130442677246,
            "unit": "iter/sec",
            "range": "stddev: 0.09672842644877165",
            "extra": "mean: 361.97613780002484 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 7.395452958995873,
            "unit": "iter/sec",
            "range": "stddev: 0.002242424372760198",
            "extra": "mean: 135.21822199999178 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 3.723403115323931,
            "unit": "iter/sec",
            "range": "stddev: 0.02830258975449722",
            "extra": "mean: 268.57151080000676 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.448900475024997,
            "unit": "iter/sec",
            "range": "stddev: 0.0029287967633285956",
            "extra": "mean: 224.77463939994777 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7351404686404129,
            "unit": "iter/sec",
            "range": "stddev: 0.022432676188873697",
            "extra": "mean: 1.3602842486000326 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.528945145347976,
            "unit": "iter/sec",
            "range": "stddev: 0.013698158488368486",
            "extra": "mean: 395.42178359997706 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 6.123194288373138,
            "unit": "iter/sec",
            "range": "stddev: 0.006907828824802352",
            "extra": "mean: 163.31345257145 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 310.5461008168974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003230316656220628",
            "extra": "mean: 3.2201338138507647 msec\nrounds: 231"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.925571939948949,
            "unit": "iter/sec",
            "range": "stddev: 0.0003633339059909679",
            "extra": "mean: 71.81033600000676 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.17765903914521,
            "unit": "iter/sec",
            "range": "stddev: 0.0011153060296659712",
            "extra": "mean: 18.123277018522305 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7415286351290896,
            "unit": "iter/sec",
            "range": "stddev: 0.03735604320108823",
            "extra": "mean: 1.3485655881999947 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.034350725440848,
            "unit": "iter/sec",
            "range": "stddev: 0.016298939220061266",
            "extra": "mean: 329.55979399998796 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.267647268958253,
            "unit": "iter/sec",
            "range": "stddev: 0.03719100101431966",
            "extra": "mean: 47.01977550001857 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 42.879615992664434,
            "unit": "iter/sec",
            "range": "stddev: 0.0007972525349223727",
            "extra": "mean: 23.321104372088442 msec\nrounds: 43"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1895774936636174,
            "unit": "iter/sec",
            "range": "stddev: 0.005455140517187866",
            "extra": "mean: 313.5211487999868 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.088216090227533,
            "unit": "iter/sec",
            "range": "stddev: 0.012624459174414664",
            "extra": "mean: 323.8115374000017 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7287497420920119,
            "unit": "iter/sec",
            "range": "stddev: 0.021687072543476307",
            "extra": "mean: 1.3722131785999863 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0143785608440314,
            "unit": "iter/sec",
            "range": "stddev: 0.015849068129753865",
            "extra": "mean: 496.43101819997355 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "8ec901364dda8d53a35d9be080d3cd90c67aa30e",
          "message": "feat: explicit crypto config support and test refactoring",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/10/commits/8ec901364dda8d53a35d9be080d3cd90c67aa30e"
        },
        "date": 1770267209005,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.2770602347564903,
            "unit": "iter/sec",
            "range": "stddev: 0.0015395075254652864",
            "extra": "mean: 439.1627348000043 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.496331777429878,
            "unit": "iter/sec",
            "range": "stddev: 0.019561256372092356",
            "extra": "mean: 222.40351680000003 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6543860279670731,
            "unit": "iter/sec",
            "range": "stddev: 0.11957943519173546",
            "extra": "mean: 1.5281499868000197 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.1796606115479005,
            "unit": "iter/sec",
            "range": "stddev: 0.009257119773307428",
            "extra": "mean: 314.49897399999145 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.966690714008809,
            "unit": "iter/sec",
            "range": "stddev: 0.05945680740943527",
            "extra": "mean: 337.07591940001294 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 6.96144024139241,
            "unit": "iter/sec",
            "range": "stddev: 0.0010932031964583054",
            "extra": "mean: 143.64843557142746 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.510025000948326,
            "unit": "iter/sec",
            "range": "stddev: 0.0021927059759595255",
            "extra": "mean: 133.15534900000006 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.200823114826256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003343552697329711",
            "extra": "mean: 238.04858539999714 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6851296142358984,
            "unit": "iter/sec",
            "range": "stddev: 0.04173116703791996",
            "extra": "mean: 1.4595778364000012 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 2.9468484639721426,
            "unit": "iter/sec",
            "range": "stddev: 0.009242990016503852",
            "extra": "mean: 339.3455796000012 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.128852202409544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007044796688501992",
            "extra": "mean: 109.54279659999884 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 275.1709906067635,
            "unit": "iter/sec",
            "range": "stddev: 0.00007917307939203123",
            "extra": "mean: 3.6341040085474066 msec\nrounds: 234"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.443253929840543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207739512027522",
            "extra": "mean: 87.38773133333193 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.837162799867286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600872271728613",
            "extra": "mean: 18.235808509086837 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7039606091846612,
            "unit": "iter/sec",
            "range": "stddev: 0.04582779545687818",
            "extra": "mean: 1.420534028399993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 3.5193054134414727,
            "unit": "iter/sec",
            "range": "stddev: 0.006509887287823496",
            "extra": "mean: 284.1469785999948 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 17.70455354695181,
            "unit": "iter/sec",
            "range": "stddev: 0.04510016393168872",
            "extra": "mean: 56.48264427273117 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 40.82718822910219,
            "unit": "iter/sec",
            "range": "stddev: 0.0005665368611048388",
            "extra": "mean: 24.493481999996902 msec\nrounds: 40"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.9675461238483845,
            "unit": "iter/sec",
            "range": "stddev: 0.01658827929346051",
            "extra": "mean: 336.9787555999892 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.117725683463821,
            "unit": "iter/sec",
            "range": "stddev: 0.003263019337726093",
            "extra": "mean: 320.74662799999487 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6935466227186409,
            "unit": "iter/sec",
            "range": "stddev: 0.03569553683812257",
            "extra": "mean: 1.4418641331999993 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.859844187833411,
            "unit": "iter/sec",
            "range": "stddev: 0.053932788567781095",
            "extra": "mean: 537.6794500000187 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "3c0aa4efcf502d50610ac225e318b647591b2c5d",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/3c0aa4efcf502d50610ac225e318b647591b2c5d"
        },
        "date": 1772105342626,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.7057990143315824,
            "unit": "iter/sec",
            "range": "stddev: 0.07530756255398047",
            "extra": "mean: 369.5765999999935 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.8743504847551,
            "unit": "iter/sec",
            "range": "stddev: 0.0023170402479590234",
            "extra": "mean: 205.1555388000054 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6532801976979089,
            "unit": "iter/sec",
            "range": "stddev: 0.1326627580082054",
            "extra": "mean: 1.5307367398000054 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.126068637232681,
            "unit": "iter/sec",
            "range": "stddev: 0.006321321616314784",
            "extra": "mean: 242.36145539999825 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8968481906983197,
            "unit": "iter/sec",
            "range": "stddev: 0.04526298909692342",
            "extra": "mean: 345.20276320000676 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.6079420221937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005024381435052846",
            "extra": "mean: 44.23224365217863 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.185424841220655,
            "unit": "iter/sec",
            "range": "stddev: 0.0018033748409915942",
            "extra": "mean: 108.86812719999455 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.055622775900148,
            "unit": "iter/sec",
            "range": "stddev: 0.002965919363457155",
            "extra": "mean: 165.13578157142612 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7048060004807958,
            "unit": "iter/sec",
            "range": "stddev: 0.031035357352184934",
            "extra": "mean: 1.4188301452000018 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.067909030779587,
            "unit": "iter/sec",
            "range": "stddev: 0.0012801741600662032",
            "extra": "mean: 197.3200374999967 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.584349312801093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693450642026737",
            "extra": "mean: 73.61412585714788 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 286.3275151346999,
            "unit": "iter/sec",
            "range": "stddev: 0.000059040333330575785",
            "extra": "mean: 3.492504028226418 msec\nrounds: 248"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.06008922141881,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724577732479419",
            "extra": "mean: 90.41518381817521 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 59.08671735136852,
            "unit": "iter/sec",
            "range": "stddev: 0.00011855451582479374",
            "extra": "mean: 16.92427748276049 msec\nrounds: 58"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7152338582258251,
            "unit": "iter/sec",
            "range": "stddev: 0.04712455119613133",
            "extra": "mean: 1.3981441013999985 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.595164108354515,
            "unit": "iter/sec",
            "range": "stddev: 0.000665668843191151",
            "extra": "mean: 151.6262497142772 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.501367089310527,
            "unit": "iter/sec",
            "range": "stddev: 0.04168055285880061",
            "extra": "mean: 44.44174418518148 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.39091166809131,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306177436039246",
            "extra": "mean: 17.7333540178576 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.41408203165388,
            "unit": "iter/sec",
            "range": "stddev: 0.004463752180869646",
            "extra": "mean: 292.90450280000186 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.9251633320517727,
            "unit": "iter/sec",
            "range": "stddev: 0.0016551716211504269",
            "extra": "mean: 254.76646839999827 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6712757256359471,
            "unit": "iter/sec",
            "range": "stddev: 0.08365046427693737",
            "extra": "mean: 1.4897008215999903 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.55433925986034,
            "unit": "iter/sec",
            "range": "stddev: 0.030448305516314222",
            "extra": "mean: 391.49067460000424 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "4a296c5f581b1ef0d291003289a71f6e8d9ad5eb",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/4a296c5f581b1ef0d291003289a71f6e8d9ad5eb"
        },
        "date": 1772106086047,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.513834629961019,
            "unit": "iter/sec",
            "range": "stddev: 0.0857290596708687",
            "extra": "mean: 397.7986412000007 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.027647349516642,
            "unit": "iter/sec",
            "range": "stddev: 0.011802900955991815",
            "extra": "mean: 198.90018740000528 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6410730801870084,
            "unit": "iter/sec",
            "range": "stddev: 0.16189532235800508",
            "extra": "mean: 1.5598845605999998 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.240677166189275,
            "unit": "iter/sec",
            "range": "stddev: 0.012966529934280654",
            "extra": "mean: 235.81139539999754 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.6828227641437405,
            "unit": "iter/sec",
            "range": "stddev: 0.0848238149123907",
            "extra": "mean: 372.741730599995 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.350506320510792,
            "unit": "iter/sec",
            "range": "stddev: 0.00029255552784222615",
            "extra": "mean: 42.82562383333044 msec\nrounds: 24"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.939851206010779,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119301345929697",
            "extra": "mean: 111.85868499999667 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.599221399895004,
            "unit": "iter/sec",
            "range": "stddev: 0.000555270389313243",
            "extra": "mean: 178.5962598333318 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6845232601775931,
            "unit": "iter/sec",
            "range": "stddev: 0.13754579240090067",
            "extra": "mean: 1.460870737600004 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.2432401225233,
            "unit": "iter/sec",
            "range": "stddev: 0.001163504180601917",
            "extra": "mean: 190.72176300000385 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.325915465035086,
            "unit": "iter/sec",
            "range": "stddev: 0.00026714704685290244",
            "extra": "mean: 69.80356700000608 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 278.8129094283581,
            "unit": "iter/sec",
            "range": "stddev: 0.0000324808001930056",
            "extra": "mean: 3.5866344999959665 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.781351627013263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199668088689256",
            "extra": "mean: 84.87990441666444 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.99686775037256,
            "unit": "iter/sec",
            "range": "stddev: 0.00013225257792508975",
            "extra": "mean: 17.54482376785457 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6996063319647516,
            "unit": "iter/sec",
            "range": "stddev: 0.07600063005703403",
            "extra": "mean: 1.4293752847999996 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.802689349162627,
            "unit": "iter/sec",
            "range": "stddev: 0.00014222750334432887",
            "extra": "mean: 147.0006858571448 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 23.398625255891996,
            "unit": "iter/sec",
            "range": "stddev: 0.0352554643236604",
            "extra": "mean: 42.737553555553035 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.77056589035556,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793494304725482",
            "extra": "mean: 17.93060522222405 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.855004521380514,
            "unit": "iter/sec",
            "range": "stddev: 0.009891882220823343",
            "extra": "mean: 259.403068000006 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.077599301537236,
            "unit": "iter/sec",
            "range": "stddev: 0.0044567113809917186",
            "extra": "mean: 245.2423414000009 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6807084776151031,
            "unit": "iter/sec",
            "range": "stddev: 0.037563900256317",
            "extra": "mean: 1.4690576551999925 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.350635209966744,
            "unit": "iter/sec",
            "range": "stddev: 0.05762152074432822",
            "extra": "mean: 425.41692379999176 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "58cb1c0a004223ef41c82bbe4b2af62ba52a5b02",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/58cb1c0a004223ef41c82bbe4b2af62ba52a5b02"
        },
        "date": 1772107313959,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.5924600568165674,
            "unit": "iter/sec",
            "range": "stddev: 0.09110082706306226",
            "extra": "mean: 385.7340048000424 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 6.804234563124847,
            "unit": "iter/sec",
            "range": "stddev: 0.006609592970108746",
            "extra": "mean: 146.9673025999782 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6523824583853456,
            "unit": "iter/sec",
            "range": "stddev: 0.10737347612277114",
            "extra": "mean: 1.5328431768000201 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 5.042690042285315,
            "unit": "iter/sec",
            "range": "stddev: 0.0034846915761832463",
            "extra": "mean: 198.3068544000389 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9055914133838954,
            "unit": "iter/sec",
            "range": "stddev: 0.057071575783547025",
            "extra": "mean: 344.16401266666225 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.32527610687602,
            "unit": "iter/sec",
            "range": "stddev: 0.0001673211518128275",
            "extra": "mean: 42.87194695651262 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.681617252027348,
            "unit": "iter/sec",
            "range": "stddev: 0.0023889261941859815",
            "extra": "mean: 103.288528555557 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.917297789484389,
            "unit": "iter/sec",
            "range": "stddev: 0.012685124543188271",
            "extra": "mean: 144.5651221666632 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6939473020429756,
            "unit": "iter/sec",
            "range": "stddev: 0.06002747381828303",
            "extra": "mean: 1.4410316130000183 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.518816979992041,
            "unit": "iter/sec",
            "range": "stddev: 0.0034195943817444193",
            "extra": "mean: 181.19825383327756 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.003152235593202,
            "unit": "iter/sec",
            "range": "stddev: 0.001134554622633776",
            "extra": "mean: 71.41249221430306 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 349.001467874435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005557870972208226",
            "extra": "mean: 2.86531746152937 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.427784536007014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006945324728364563",
            "extra": "mean: 74.47244907143613 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.23162270251077,
            "unit": "iter/sec",
            "range": "stddev: 0.03727730892588868",
            "extra": "mean: 19.145489805966342 msec\nrounds: 67"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7094374934531283,
            "unit": "iter/sec",
            "range": "stddev: 0.06004641074654768",
            "extra": "mean: 1.4095674520000103 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 7.03396537990658,
            "unit": "iter/sec",
            "range": "stddev: 0.005584857418524184",
            "extra": "mean: 142.1673189999808 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 28.719074976972436,
            "unit": "iter/sec",
            "range": "stddev: 0.000527282421987823",
            "extra": "mean: 34.82006300000335 msec\nrounds: 29"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.7453354940319,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007333932694148",
            "extra": "mean: 17.622593844831062 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 4.105599541160935,
            "unit": "iter/sec",
            "range": "stddev: 0.016872119562672358",
            "extra": "mean: 243.56978559999334 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 6.045564257057434,
            "unit": "iter/sec",
            "range": "stddev: 0.0010849406263260563",
            "extra": "mean: 165.41053199999092 msec\nrounds: 6"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6539659991873243,
            "unit": "iter/sec",
            "range": "stddev: 0.07082970881762414",
            "extra": "mean: 1.5291314858000078 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.8882495707386653,
            "unit": "iter/sec",
            "range": "stddev: 0.061498573734775124",
            "extra": "mean: 346.23046780000095 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "c9213c8139f88cab6133873036c2ca242db2cfc3",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/c9213c8139f88cab6133873036c2ca242db2cfc3"
        },
        "date": 1772109117160,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.0033854866757417,
            "unit": "iter/sec",
            "range": "stddev: 0.00673223986161402",
            "extra": "mean: 499.1550585999903 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.499629227096945,
            "unit": "iter/sec",
            "range": "stddev: 0.005224810806104389",
            "extra": "mean: 181.83043959999168 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6801618272198018,
            "unit": "iter/sec",
            "range": "stddev: 0.22100140261845524",
            "extra": "mean: 1.470238346199983 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.6850393424785213,
            "unit": "iter/sec",
            "range": "stddev: 0.007215766318682946",
            "extra": "mean: 271.36752340001067 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.748941752950744,
            "unit": "iter/sec",
            "range": "stddev: 0.14068222283387835",
            "extra": "mean: 363.7763510000127 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 16.233459435218112,
            "unit": "iter/sec",
            "range": "stddev: 0.0011232511063369382",
            "extra": "mean: 61.6011641875005 msec\nrounds: 16"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 4.746663992333198,
            "unit": "iter/sec",
            "range": "stddev: 0.002987929686413299",
            "extra": "mean: 210.6742759999861 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.9368996539335015,
            "unit": "iter/sec",
            "range": "stddev: 0.001600883613433687",
            "extra": "mean: 202.556274199992 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7196614789205455,
            "unit": "iter/sec",
            "range": "stddev: 0.05730740944737732",
            "extra": "mean: 1.3895422073999952 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 3.3749143639945327,
            "unit": "iter/sec",
            "range": "stddev: 0.003858428247848306",
            "extra": "mean: 296.3038146000258 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 7.949738075160529,
            "unit": "iter/sec",
            "range": "stddev: 0.003988047882273615",
            "extra": "mean: 125.79030787499335 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 305.6303267322741,
            "unit": "iter/sec",
            "range": "stddev: 0.0006913759131097294",
            "extra": "mean: 3.2719266137354865 msec\nrounds: 233"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.902465197841382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008592922781689678",
            "extra": "mean: 71.92968914284847 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.99479317276206,
            "unit": "iter/sec",
            "range": "stddev: 0.00010943590293600475",
            "extra": "mean: 17.85880335185231 msec\nrounds: 54"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7360075912835695,
            "unit": "iter/sec",
            "range": "stddev: 0.044726548044382454",
            "extra": "mean: 1.3586816384000031 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 4.8567256510882215,
            "unit": "iter/sec",
            "range": "stddev: 0.0026614380635992373",
            "extra": "mean: 205.90003879999585 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 28.16092728752456,
            "unit": "iter/sec",
            "range": "stddev: 0.03144704402203842",
            "extra": "mean: 35.51019431249358 msec\nrounds: 32"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 58.29349398287275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001613837994773287",
            "extra": "mean: 17.154573035093943 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.6621386041591877,
            "unit": "iter/sec",
            "range": "stddev: 0.0010840404983521023",
            "extra": "mean: 273.0644871999857 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.9539421474591316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006290546319223714",
            "extra": "mean: 252.91214759998866 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.67577569075187,
            "unit": "iter/sec",
            "range": "stddev: 0.04726379851511055",
            "extra": "mean: 1.4797809594 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.514817862621483,
            "unit": "iter/sec",
            "range": "stddev: 0.015576025914392798",
            "extra": "mean: 397.64311159997305 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "0e610cd6e13869c5e24b023000526fa9412029a3",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/0e610cd6e13869c5e24b023000526fa9412029a3"
        },
        "date": 1772154485995,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.629256623244235,
            "unit": "iter/sec",
            "range": "stddev: 0.005549683835006831",
            "extra": "mean: 380.3356398000062 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 6.7333643211741165,
            "unit": "iter/sec",
            "range": "stddev: 0.0031152681138659267",
            "extra": "mean: 148.5141679999913 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.653739088717569,
            "unit": "iter/sec",
            "range": "stddev: 0.18345341911101418",
            "extra": "mean: 1.5296622417999912 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.828825770468111,
            "unit": "iter/sec",
            "range": "stddev: 0.013134735514056795",
            "extra": "mean: 207.08968339999956 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8985548554283604,
            "unit": "iter/sec",
            "range": "stddev: 0.07345193353517768",
            "extra": "mean: 344.9995083333401 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.680976678628486,
            "unit": "iter/sec",
            "range": "stddev: 0.0016075006692422825",
            "extra": "mean: 42.22798804166198 msec\nrounds: 24"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.18467840418333,
            "unit": "iter/sec",
            "range": "stddev: 0.0021215115835674578",
            "extra": "mean: 122.1795103750054 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.348227795083164,
            "unit": "iter/sec",
            "range": "stddev: 0.002272476302344106",
            "extra": "mean: 157.52427799999882 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6904855041852539,
            "unit": "iter/sec",
            "range": "stddev: 0.04694404755343298",
            "extra": "mean: 1.4482563268000264 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.259330536888099,
            "unit": "iter/sec",
            "range": "stddev: 0.0010676376315655208",
            "extra": "mean: 190.1382681666727 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.001433235159267,
            "unit": "iter/sec",
            "range": "stddev: 0.0018093893215870545",
            "extra": "mean: 83.32338150000378 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 346.85526629801814,
            "unit": "iter/sec",
            "range": "stddev: 0.00010279820338950179",
            "extra": "mean: 2.883046899281615 msec\nrounds: 278"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 13.209403414996444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006291063806563065",
            "extra": "mean: 75.7036459999938 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 66.66131800489978,
            "unit": "iter/sec",
            "range": "stddev: 0.0010968708205946534",
            "extra": "mean: 15.00120354545791 msec\nrounds: 66"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7243209183011232,
            "unit": "iter/sec",
            "range": "stddev: 0.044368288313930276",
            "extra": "mean: 1.380603507000012 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 7.359593823133739,
            "unit": "iter/sec",
            "range": "stddev: 0.003288403508887599",
            "extra": "mean: 135.8770638750002 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.73069331828546,
            "unit": "iter/sec",
            "range": "stddev: 0.0008598764892688475",
            "extra": "mean: 36.06112506897206 msec\nrounds: 29"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 59.16265309949828,
            "unit": "iter/sec",
            "range": "stddev: 0.00023854035981093013",
            "extra": "mean: 16.902555034477995 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 4.124367813705349,
            "unit": "iter/sec",
            "range": "stddev: 0.012916858242481557",
            "extra": "mean: 242.46140139998715 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 6.30249807578412,
            "unit": "iter/sec",
            "range": "stddev: 0.001826036507759098",
            "extra": "mean: 158.66724400000484 msec\nrounds: 6"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6287285748452737,
            "unit": "iter/sec",
            "range": "stddev: 0.1289863293323001",
            "extra": "mean: 1.5905114544000072 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.4150413403829463,
            "unit": "iter/sec",
            "range": "stddev: 0.06527599665368461",
            "extra": "mean: 414.0715868000143 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "7c685860d9b9a809269d721d794943365391f9e9",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/7c685860d9b9a809269d721d794943365391f9e9"
        },
        "date": 1772154955025,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.462758426492433,
            "unit": "iter/sec",
            "range": "stddev: 0.046490393226453916",
            "extra": "mean: 288.78711039999985 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.849411670394376,
            "unit": "iter/sec",
            "range": "stddev: 0.0013774132532227805",
            "extra": "mean: 206.21058140000628 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6706928488947365,
            "unit": "iter/sec",
            "range": "stddev: 0.14505649746693888",
            "extra": "mean: 1.4909954707999986 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.9972113950355794,
            "unit": "iter/sec",
            "range": "stddev: 0.011263556720238049",
            "extra": "mean: 250.17440940000597 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.816028173185953,
            "unit": "iter/sec",
            "range": "stddev: 0.04714159448719884",
            "extra": "mean: 355.11008359999323 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.932214529478774,
            "unit": "iter/sec",
            "range": "stddev: 0.00047615468998652805",
            "extra": "mean: 43.606778521739606 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.626699736433439,
            "unit": "iter/sec",
            "range": "stddev: 0.0011140311057604008",
            "extra": "mean: 103.8777595000056 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.102553935398202,
            "unit": "iter/sec",
            "range": "stddev: 0.0009312489712452489",
            "extra": "mean: 195.98029000000375 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6755408932172916,
            "unit": "iter/sec",
            "range": "stddev: 0.025805806203621995",
            "extra": "mean: 1.4802952863999963 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.862182265396291,
            "unit": "iter/sec",
            "range": "stddev: 0.0004623349887581549",
            "extra": "mean: 205.66896619999397 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.955260523271829,
            "unit": "iter/sec",
            "range": "stddev: 0.001124595821603588",
            "extra": "mean: 71.65756585714738 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 265.68238197933096,
            "unit": "iter/sec",
            "range": "stddev: 0.00035594611080224053",
            "extra": "mean: 3.7638927826151303 msec\nrounds: 23"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.30360018139899,
            "unit": "iter/sec",
            "range": "stddev: 0.0007593958565881923",
            "extra": "mean: 88.4673894999916 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.21838362809913,
            "unit": "iter/sec",
            "range": "stddev: 0.00018909129866095318",
            "extra": "mean: 17.787775732139316 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7076852973965932,
            "unit": "iter/sec",
            "range": "stddev: 0.04743321202490229",
            "extra": "mean: 1.4130574757999965 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.5305434651379075,
            "unit": "iter/sec",
            "range": "stddev: 0.0011848787594359062",
            "extra": "mean: 153.1266127142885 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.678419929276888,
            "unit": "iter/sec",
            "range": "stddev: 0.04364574056697216",
            "extra": "mean: 48.359594370369734 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 53.83626294723747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734703370969363",
            "extra": "mean: 18.57484054901908 msec\nrounds: 51"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.4404659379533093,
            "unit": "iter/sec",
            "range": "stddev: 0.013030840904395859",
            "extra": "mean: 290.6583055999931 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.4304762046006685,
            "unit": "iter/sec",
            "range": "stddev: 0.007281489975384647",
            "extra": "mean: 291.50471839999454 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6410333667926488,
            "unit": "iter/sec",
            "range": "stddev: 0.11032670653536454",
            "extra": "mean: 1.5599811988000056 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.5264651111145655,
            "unit": "iter/sec",
            "range": "stddev: 0.03420961830849645",
            "extra": "mean: 395.8099383999979 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "2588fcc32260314cd2f18164b80e25cf2c5c1d1a",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/2588fcc32260314cd2f18164b80e25cf2c5c1d1a"
        },
        "date": 1772157964171,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.817194399842657,
            "unit": "iter/sec",
            "range": "stddev: 0.09160100362299642",
            "extra": "mean: 354.9630795999917 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.845019906365201,
            "unit": "iter/sec",
            "range": "stddev: 0.0030106629328349246",
            "extra": "mean: 206.3975007999943 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.644434254148794,
            "unit": "iter/sec",
            "range": "stddev: 0.1459964972610355",
            "extra": "mean: 1.5517486749999931 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.073918228293647,
            "unit": "iter/sec",
            "range": "stddev: 0.008511250543022375",
            "extra": "mean: 245.4639352000072 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7726216334484097,
            "unit": "iter/sec",
            "range": "stddev: 0.07159471179507866",
            "extra": "mean: 360.66947900001196 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.522155756177565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002208495880315664",
            "extra": "mean: 42.51311020833507 msec\nrounds: 24"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.956488125723704,
            "unit": "iter/sec",
            "range": "stddev: 0.002013967740420155",
            "extra": "mean: 100.43702029999793 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.480332771797851,
            "unit": "iter/sec",
            "range": "stddev: 0.0013341979981640172",
            "extra": "mean: 182.47067133332942 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6612912587429453,
            "unit": "iter/sec",
            "range": "stddev: 0.14305193070686567",
            "extra": "mean: 1.5121929812000077 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.175709256423162,
            "unit": "iter/sec",
            "range": "stddev: 0.002515775426038869",
            "extra": "mean: 193.21023466667478 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.281412957297102,
            "unit": "iter/sec",
            "range": "stddev: 0.000867509283177081",
            "extra": "mean: 70.02108285714469 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 279.1898268582012,
            "unit": "iter/sec",
            "range": "stddev: 0.000056035315466482616",
            "extra": "mean: 3.581792400007089 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.442694317934686,
            "unit": "iter/sec",
            "range": "stddev: 0.000957729203083278",
            "extra": "mean: 87.39200508333529 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.87586109738406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004566775819913162",
            "extra": "mean: 17.896815912279816 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6760059673496565,
            "unit": "iter/sec",
            "range": "stddev: 0.07652269342832271",
            "extra": "mean: 1.4792768826000042 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.553421796682064,
            "unit": "iter/sec",
            "range": "stddev: 0.00434762855584143",
            "extra": "mean: 152.59203985714618 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.25076989861943,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432987649643508",
            "extra": "mean: 38.09412081481814 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 43.77039406807306,
            "unit": "iter/sec",
            "range": "stddev: 0.03017766400849887",
            "extra": "mean: 22.84649296153855 msec\nrounds: 52"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.587897057363653,
            "unit": "iter/sec",
            "range": "stddev: 0.011967446025517",
            "extra": "mean: 278.7147969999978 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.462391566854929,
            "unit": "iter/sec",
            "range": "stddev: 0.01814977078100455",
            "extra": "mean: 288.8177090000113 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6578028753629824,
            "unit": "iter/sec",
            "range": "stddev: 0.14028782994077046",
            "extra": "mean: 1.5202122664000057 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.0281916267185536,
            "unit": "iter/sec",
            "range": "stddev: 0.10445682725889356",
            "extra": "mean: 493.05005840001286 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "68e7b527e56d8ae1539f880ed8bb378042f7ec10",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/68e7b527e56d8ae1539f880ed8bb378042f7ec10"
        },
        "date": 1772162095519,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.745096802522623,
            "unit": "iter/sec",
            "range": "stddev: 0.08632846480288835",
            "extra": "mean: 364.28587840000546 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.797485965369804,
            "unit": "iter/sec",
            "range": "stddev: 0.0037458535132170994",
            "extra": "mean: 208.44250659999943 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.5802790898379988,
            "unit": "iter/sec",
            "range": "stddev: 0.08389098549649758",
            "extra": "mean: 1.723308693199988 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.914238777865564,
            "unit": "iter/sec",
            "range": "stddev: 0.00824000457322954",
            "extra": "mean: 255.47751600000768 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.708563175458826,
            "unit": "iter/sec",
            "range": "stddev: 0.08195683636485718",
            "extra": "mean: 369.199437199984 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.472403187843774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006941302573783468",
            "extra": "mean: 44.499023608696206 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.556538511163856,
            "unit": "iter/sec",
            "range": "stddev: 0.0010993707906442017",
            "extra": "mean: 104.64039869999056 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.205425976425396,
            "unit": "iter/sec",
            "range": "stddev: 0.0016068340359075904",
            "extra": "mean: 161.14929157144584 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6881093467252365,
            "unit": "iter/sec",
            "range": "stddev: 0.05606469064079668",
            "extra": "mean: 1.453257399800009 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.063723555592942,
            "unit": "iter/sec",
            "range": "stddev: 0.0014680064535224314",
            "extra": "mean: 197.4831345000041 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.69037007497285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941304403425887",
            "extra": "mean: 73.0440444285786 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 280.2275533961958,
            "unit": "iter/sec",
            "range": "stddev: 0.00007620564874509044",
            "extra": "mean: 3.5685284615327033 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.298540571090665,
            "unit": "iter/sec",
            "range": "stddev: 0.0009052066050479061",
            "extra": "mean: 88.5070061666795 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.59811152556923,
            "unit": "iter/sec",
            "range": "stddev: 0.001056465204602401",
            "extra": "mean: 17.668434035086694 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7142291566214894,
            "unit": "iter/sec",
            "range": "stddev: 0.054194510681520806",
            "extra": "mean: 1.4001108617999989 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.707302038414348,
            "unit": "iter/sec",
            "range": "stddev: 0.000494455504394557",
            "extra": "mean: 149.09124328571417 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.707665135209915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915297431339069",
            "extra": "mean: 37.4424344074037 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 45.20875007598234,
            "unit": "iter/sec",
            "range": "stddev: 0.02840223940143641",
            "extra": "mean: 22.119611763636467 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.600858511501084,
            "unit": "iter/sec",
            "range": "stddev: 0.0054784963284168296",
            "extra": "mean: 277.7115503999994 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.5672223805313545,
            "unit": "iter/sec",
            "range": "stddev: 0.008145143842086852",
            "extra": "mean: 280.3301541999872 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6620412334080763,
            "unit": "iter/sec",
            "range": "stddev: 0.07927880919605039",
            "extra": "mean: 1.5104799361999994 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.4133357555180037,
            "unit": "iter/sec",
            "range": "stddev: 0.08914391451587769",
            "extra": "mean: 414.3642249999971 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "ea844fa4e1bcf2df408eeb7777fe41ac8c4eb95b",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/ea844fa4e1bcf2df408eeb7777fe41ac8c4eb95b"
        },
        "date": 1772163338202,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.4454078950325444,
            "unit": "iter/sec",
            "range": "stddev: 0.06834968598247541",
            "extra": "mean: 290.2413968000019 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.820140728982882,
            "unit": "iter/sec",
            "range": "stddev: 0.021953937575801434",
            "extra": "mean: 207.4628224000037 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6708920762790138,
            "unit": "iter/sec",
            "range": "stddev: 0.173649757442869",
            "extra": "mean: 1.4905527064000013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.57141195343177,
            "unit": "iter/sec",
            "range": "stddev: 0.002903547618100168",
            "extra": "mean: 218.75079520000327 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8451378661997277,
            "unit": "iter/sec",
            "range": "stddev: 0.04933726849594544",
            "extra": "mean: 351.47681660000103 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.196933481094863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015101579591936",
            "extra": "mean: 45.05126804347549 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.586881898817777,
            "unit": "iter/sec",
            "range": "stddev: 0.00076954602511087",
            "extra": "mean: 131.80645400000554 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 4.32928019598592,
            "unit": "iter/sec",
            "range": "stddev: 0.0024067172542835418",
            "extra": "mean: 230.98528040000588 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6708572955497789,
            "unit": "iter/sec",
            "range": "stddev: 0.05021940319370519",
            "extra": "mean: 1.4906299844000102 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.4149621240353945,
            "unit": "iter/sec",
            "range": "stddev: 0.0017916095462974962",
            "extra": "mean: 226.5025094000066 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 8.497467889583557,
            "unit": "iter/sec",
            "range": "stddev: 0.0034674177751327587",
            "extra": "mean: 117.68211577778705 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 275.02090961053585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006044542445970697",
            "extra": "mean: 3.6360871666671652 msec\nrounds: 18"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.347053772806385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608650545128006",
            "extra": "mean: 88.12860324999387 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.07651629931918,
            "unit": "iter/sec",
            "range": "stddev: 0.0005150966913252871",
            "extra": "mean: 18.15655867857353 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6948003386444038,
            "unit": "iter/sec",
            "range": "stddev: 0.042594124580612736",
            "extra": "mean: 1.439262395800006 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 5.840432077579002,
            "unit": "iter/sec",
            "range": "stddev: 0.0011512806117340386",
            "extra": "mean: 171.22020883333752 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.28458918228611,
            "unit": "iter/sec",
            "range": "stddev: 0.039076519264101696",
            "extra": "mean: 44.87406035714108 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.21917725704119,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127667599778452",
            "extra": "mean: 18.109650481481715 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.5664758700749517,
            "unit": "iter/sec",
            "range": "stddev: 0.027904760020034624",
            "extra": "mean: 280.3888309999934 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.6413789698534487,
            "unit": "iter/sec",
            "range": "stddev: 0.004423771245426534",
            "extra": "mean: 274.6212377999882 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6878567098503622,
            "unit": "iter/sec",
            "range": "stddev: 0.12131695186032655",
            "extra": "mean: 1.4537911539999981 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.4495390641594694,
            "unit": "iter/sec",
            "range": "stddev: 0.0031836968077968756",
            "extra": "mean: 408.24007039999515 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "ca7417499bc05e0aeefe61b89886ac3b54ad99ab",
          "message": "feat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-01T13:08:08Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/8/commits/ca7417499bc05e0aeefe61b89886ac3b54ad99ab"
        },
        "date": 1772164756559,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.1871901189069765,
            "unit": "iter/sec",
            "range": "stddev: 0.07928142254872131",
            "extra": "mean: 313.75599279999733 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.224919923269277,
            "unit": "iter/sec",
            "range": "stddev: 0.013604910883003436",
            "extra": "mean: 191.39049299999442 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6201348457846275,
            "unit": "iter/sec",
            "range": "stddev: 0.1574002579805135",
            "extra": "mean: 1.6125525065999908 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.5011878711309965,
            "unit": "iter/sec",
            "range": "stddev: 0.00346308930128333",
            "extra": "mean: 222.16357740001058 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7867601901752024,
            "unit": "iter/sec",
            "range": "stddev: 0.06533697737436356",
            "extra": "mean: 358.8396315999944 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 21.87369231051147,
            "unit": "iter/sec",
            "range": "stddev: 0.00036076838016099445",
            "extra": "mean: 45.71701868181839 msec\nrounds: 22"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 8.567093785156242,
            "unit": "iter/sec",
            "range": "stddev: 0.0054875462988806575",
            "extra": "mean: 116.72569777777477 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.911348004617199,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537893892281843",
            "extra": "mean: 169.16615283331757 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6908098775129248,
            "unit": "iter/sec",
            "range": "stddev: 0.04201321766493382",
            "extra": "mean: 1.4475762906 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.797442033076321,
            "unit": "iter/sec",
            "range": "stddev: 0.001672747683448693",
            "extra": "mean: 208.4444154000039 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.390213652651086,
            "unit": "iter/sec",
            "range": "stddev: 0.0009532718072013714",
            "extra": "mean: 80.7088584615354 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 284.1111989047189,
            "unit": "iter/sec",
            "range": "stddev: 0.000034574231163406225",
            "extra": "mean: 3.5197486190446354 msec\nrounds: 21"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.55334084173203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162429466165035",
            "extra": "mean: 86.55505050001484 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 58.06196041462606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002815916599479729",
            "extra": "mean: 17.222980293102466 msec\nrounds: 58"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7091154922478025,
            "unit": "iter/sec",
            "range": "stddev: 0.042387786959835215",
            "extra": "mean: 1.4102075204000015 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.526616558144988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005260642760147844",
            "extra": "mean: 153.21874528572314 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.033019579720094,
            "unit": "iter/sec",
            "range": "stddev: 0.042205527849127185",
            "extra": "mean: 45.38642542306967 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.14928754862453,
            "unit": "iter/sec",
            "range": "stddev: 0.0003810436613832328",
            "extra": "mean: 18.132600518516416 msec\nrounds: 54"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.505827158023394,
            "unit": "iter/sec",
            "range": "stddev: 0.012094080946009006",
            "extra": "mean: 285.23938999999245 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.581613634261869,
            "unit": "iter/sec",
            "range": "stddev: 0.007649624531027846",
            "extra": "mean: 279.20376179997675 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7209232077080321,
            "unit": "iter/sec",
            "range": "stddev: 0.041664599483780165",
            "extra": "mean: 1.3871102904000168 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.3847095260135074,
            "unit": "iter/sec",
            "range": "stddev: 0.019533136695175247",
            "extra": "mean: 419.3382837999934 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a64c083edc26bec3eaf4c6b0c7409ff2b9784f0",
          "message": "Merge pull request #8 from aiyah-meloken/feature/zero-copy-decryption\n\nfeat: zero-copy decryption using Arc + Python Buffer Protocol",
          "timestamp": "2026-02-27T14:05:54+08:00",
          "tree_id": "ea863009ea4d65da9cb4041e71abfa39dd274fae",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/5a64c083edc26bec3eaf4c6b0c7409ff2b9784f0"
        },
        "date": 1772172783293,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.8741711518404887,
            "unit": "iter/sec",
            "range": "stddev: 0.07459862993862378",
            "extra": "mean: 347.92639239999517 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.066280532057491,
            "unit": "iter/sec",
            "range": "stddev: 0.012018272460879376",
            "extra": "mean: 197.38346379999712 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6330641852508884,
            "unit": "iter/sec",
            "range": "stddev: 0.13925291519899755",
            "extra": "mean: 1.57961866 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.067421454378211,
            "unit": "iter/sec",
            "range": "stddev: 0.01383801125376799",
            "extra": "mean: 245.85600759999693 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.8174436401617187,
            "unit": "iter/sec",
            "range": "stddev: 0.08081056535523286",
            "extra": "mean: 354.9316783999984 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.33715127507479,
            "unit": "iter/sec",
            "range": "stddev: 0.0007716396065363825",
            "extra": "mean: 42.85013145833479 msec\nrounds: 24"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 6.044002865527605,
            "unit": "iter/sec",
            "range": "stddev: 0.008811884612019493",
            "extra": "mean: 165.45326371427953 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.04637171525596,
            "unit": "iter/sec",
            "range": "stddev: 0.007873781312487954",
            "extra": "mean: 198.16217600000527 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6585906618820695,
            "unit": "iter/sec",
            "range": "stddev: 0.08434574636549251",
            "extra": "mean: 1.5183938338000076 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.6177081736751076,
            "unit": "iter/sec",
            "range": "stddev: 0.004197275477248911",
            "extra": "mean: 216.5576434000002 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.157581740485911,
            "unit": "iter/sec",
            "range": "stddev: 0.0015517348718961425",
            "extra": "mean: 98.44862936364248 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 263.371951753804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570011810449029",
            "extra": "mean: 3.7969115288889395 msec\nrounds: 225"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 10.921691081762363,
            "unit": "iter/sec",
            "range": "stddev: 0.0007447911002813214",
            "extra": "mean: 91.56091236364071 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 53.2305917398196,
            "unit": "iter/sec",
            "range": "stddev: 0.00029378358776095177",
            "extra": "mean: 18.786189807691756 msec\nrounds: 52"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6634196729203738,
            "unit": "iter/sec",
            "range": "stddev: 0.05121872753446678",
            "extra": "mean: 1.5073414925999997 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.517880518853053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005741072334110517",
            "extra": "mean: 153.42410728571767 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.72531676869161,
            "unit": "iter/sec",
            "range": "stddev: 0.04289326902957799",
            "extra": "mean: 48.2501672307675 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 53.34005490487493,
            "unit": "iter/sec",
            "range": "stddev: 0.00046625865604144555",
            "extra": "mean: 18.747637245281624 msec\nrounds: 53"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.306549020957479,
            "unit": "iter/sec",
            "range": "stddev: 0.018705174196897333",
            "extra": "mean: 302.43011480000064 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.877629904378637,
            "unit": "iter/sec",
            "range": "stddev: 0.002319077712536049",
            "extra": "mean: 257.88949039999807 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6492550144243091,
            "unit": "iter/sec",
            "range": "stddev: 0.0910471229504423",
            "extra": "mean: 1.5402268411999784 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 1.9277965248707372,
            "unit": "iter/sec",
            "range": "stddev: 0.08601414222616623",
            "extra": "mean: 518.7269439999909 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "e0f0720f9019f58808bced15391a7f80c1007330",
          "message": "Feature/decryption optimization",
          "timestamp": "2026-02-27T06:06:01Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/11/commits/e0f0720f9019f58808bced15391a7f80c1007330"
        },
        "date": 1772244043168,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.5845256888819663,
            "unit": "iter/sec",
            "range": "stddev: 0.046207893494515054",
            "extra": "mean: 386.91818940000076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.095749655798911,
            "unit": "iter/sec",
            "range": "stddev: 0.00955919588112869",
            "extra": "mean: 196.2419796000006 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6139758913414527,
            "unit": "iter/sec",
            "range": "stddev: 0.23214464237497784",
            "extra": "mean: 1.6287284469999919 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.588990582796408,
            "unit": "iter/sec",
            "range": "stddev: 0.003835768268096526",
            "extra": "mean: 217.91284640000868 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.825305616656484,
            "unit": "iter/sec",
            "range": "stddev: 0.046331475159237134",
            "extra": "mean: 353.94401020000714 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 23.07515862604952,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317794849273476",
            "extra": "mean: 43.336646833322355 msec\nrounds: 24"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.825796266832722,
            "unit": "iter/sec",
            "range": "stddev: 0.0009349606431123871",
            "extra": "mean: 101.77292230000035 msec\nrounds: 10"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.22327614648438,
            "unit": "iter/sec",
            "range": "stddev: 0.0016116547295049416",
            "extra": "mean: 160.6870684285663 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7097485245629079,
            "unit": "iter/sec",
            "range": "stddev: 0.023412796052730583",
            "extra": "mean: 1.4089497412000127 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.146346765908757,
            "unit": "iter/sec",
            "range": "stddev: 0.0011460294950487633",
            "extra": "mean: 194.31259600001263 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.159028172689139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006280489210729157",
            "extra": "mean: 70.62631614285968 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 279.55769639273825,
            "unit": "iter/sec",
            "range": "stddev: 0.00004980671863977243",
            "extra": "mean: 3.577079125001603 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.597819614165102,
            "unit": "iter/sec",
            "range": "stddev: 0.00045510183996843917",
            "extra": "mean: 86.22310341666643 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 57.10047776932731,
            "unit": "iter/sec",
            "range": "stddev: 0.0002909121736446814",
            "extra": "mean: 17.51298831578552 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6856239042481276,
            "unit": "iter/sec",
            "range": "stddev: 0.10642245547491698",
            "extra": "mean: 1.4585255762000089 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.749198703071307,
            "unit": "iter/sec",
            "range": "stddev: 0.000377036445854063",
            "extra": "mean: 148.16573699999935 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.407519064902857,
            "unit": "iter/sec",
            "range": "stddev: 0.00036624273829066577",
            "extra": "mean: 37.86800257692737 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.92718246149105,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435090597019928",
            "extra": "mean: 17.263052637935257 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.381279955232674,
            "unit": "iter/sec",
            "range": "stddev: 0.00942778749183084",
            "extra": "mean: 295.745993599985 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.940662789106486,
            "unit": "iter/sec",
            "range": "stddev: 0.011184038393558178",
            "extra": "mean: 253.76441820000085 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6759417697444097,
            "unit": "iter/sec",
            "range": "stddev: 0.053515214150477906",
            "extra": "mean: 1.4794173769999817 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.904914536911859,
            "unit": "iter/sec",
            "range": "stddev: 0.06330448507105281",
            "extra": "mean: 344.24420659998987 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "30cefc379e385b1d2e0ab6f478d9c6d0e7db8a3f",
          "message": "Feature/decryption optimization",
          "timestamp": "2026-02-27T06:06:01Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/11/commits/30cefc379e385b1d2e0ab6f478d9c6d0e7db8a3f"
        },
        "date": 1772249382518,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.5566804983268665,
            "unit": "iter/sec",
            "range": "stddev: 0.07659422850371514",
            "extra": "mean: 391.1321734000069 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.3953068516842055,
            "unit": "iter/sec",
            "range": "stddev: 0.013770320481324455",
            "extra": "mean: 227.5154008000186 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6422072508259112,
            "unit": "iter/sec",
            "range": "stddev: 0.14572379361701354",
            "extra": "mean: 1.5571297252000023 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 3.817620687773262,
            "unit": "iter/sec",
            "range": "stddev: 0.007415101453268883",
            "extra": "mean: 261.9432577999987 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.872868167563409,
            "unit": "iter/sec",
            "range": "stddev: 0.05874352220896233",
            "extra": "mean: 348.0841938000026 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 21.120981034084814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004315143694562899",
            "extra": "mean: 47.34628559091127 msec\nrounds: 22"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.595191618874078,
            "unit": "iter/sec",
            "range": "stddev: 0.004770257161972654",
            "extra": "mean: 131.662247666668 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.923459011471356,
            "unit": "iter/sec",
            "range": "stddev: 0.0008098660993152198",
            "extra": "mean: 168.820278500012 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6800514094927823,
            "unit": "iter/sec",
            "range": "stddev: 0.04569161074694832",
            "extra": "mean: 1.4704770639999878 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.570477732375195,
            "unit": "iter/sec",
            "range": "stddev: 0.006043142535259013",
            "extra": "mean: 218.7955085999988 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.242510963705296,
            "unit": "iter/sec",
            "range": "stddev: 0.0064556743666045885",
            "extra": "mean: 97.63230945454056 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 208.38011575443346,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531974726478913",
            "extra": "mean: 4.7989223750046035 msec\nrounds: 24"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.142076675405278,
            "unit": "iter/sec",
            "range": "stddev: 0.0007647660299713605",
            "extra": "mean: 89.74987599998958 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.250477625394126,
            "unit": "iter/sec",
            "range": "stddev: 0.0003984193153613886",
            "extra": "mean: 18.433017436364644 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6844304558455032,
            "unit": "iter/sec",
            "range": "stddev: 0.049142063750574984",
            "extra": "mean: 1.4610688222000021 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 5.863382696510324,
            "unit": "iter/sec",
            "range": "stddev: 0.0005618725287495661",
            "extra": "mean: 170.55001383333965 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.202224020011826,
            "unit": "iter/sec",
            "range": "stddev: 0.046314632718010965",
            "extra": "mean: 49.49950060000447 msec\nrounds: 25"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 51.90149180728006,
            "unit": "iter/sec",
            "range": "stddev: 0.00118702454538127",
            "extra": "mean: 19.267268919999196 msec\nrounds: 50"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1697910674883443,
            "unit": "iter/sec",
            "range": "stddev: 0.017809251386354624",
            "extra": "mean: 315.4782061999981 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.7540457040844077,
            "unit": "iter/sec",
            "range": "stddev: 0.003328959375237441",
            "extra": "mean: 266.3792822000005 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6842821321983676,
            "unit": "iter/sec",
            "range": "stddev: 0.12313647537908474",
            "extra": "mean: 1.4613855206000153 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.3807099906651086,
            "unit": "iter/sec",
            "range": "stddev: 0.06903989386710291",
            "extra": "mean: 420.04276200001414 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "631cd5b51c857f9347042d924dafe4b9ebc0668e",
          "message": "Feature/decryption optimization",
          "timestamp": "2026-02-28T04:25:43Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/11/commits/631cd5b51c857f9347042d924dafe4b9ebc0668e"
        },
        "date": 1772259379115,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 3.034349360921858,
            "unit": "iter/sec",
            "range": "stddev: 0.10801492609994416",
            "extra": "mean: 329.55994219999525 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.614796703064204,
            "unit": "iter/sec",
            "range": "stddev: 0.009190793113832568",
            "extra": "mean: 216.69426939999425 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6577249326885745,
            "unit": "iter/sec",
            "range": "stddev: 0.1889373031859009",
            "extra": "mean: 1.5203924168000014 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.112453839535745,
            "unit": "iter/sec",
            "range": "stddev: 0.005349552946798363",
            "extra": "mean: 243.16382359999693 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.822043612310118,
            "unit": "iter/sec",
            "range": "stddev: 0.06332213947040707",
            "extra": "mean: 354.3531346000009 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.741902534747965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005838958809458076",
            "extra": "mean: 43.971694913038746 msec\nrounds: 23"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.828239427273987,
            "unit": "iter/sec",
            "range": "stddev: 0.0008043512927244597",
            "extra": "mean: 101.74762299999902 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.393139477336384,
            "unit": "iter/sec",
            "range": "stddev: 0.002161009160210085",
            "extra": "mean: 185.4207561666641 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.69837926551182,
            "unit": "iter/sec",
            "range": "stddev: 0.025226083321982062",
            "extra": "mean: 1.4318867259999934 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 5.154438794235606,
            "unit": "iter/sec",
            "range": "stddev: 0.0011041910087112904",
            "extra": "mean: 194.00754183332936 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.236240748818561,
            "unit": "iter/sec",
            "range": "stddev: 0.0003561488655135924",
            "extra": "mean: 70.24326278571736 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.4229551808824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000495936959054226",
            "extra": "mean: 3.657337399994276 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.44630776588696,
            "unit": "iter/sec",
            "range": "stddev: 0.000615284706771607",
            "extra": "mean: 87.36441658333405 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.04274047635816,
            "unit": "iter/sec",
            "range": "stddev: 0.00019496390886438667",
            "extra": "mean: 17.843524272726345 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7094359191293554,
            "unit": "iter/sec",
            "range": "stddev: 0.015997937040991225",
            "extra": "mean: 1.4095705800000018 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.5200179813530434,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088952590439411",
            "extra": "mean: 153.3738101428485 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 26.815854401559093,
            "unit": "iter/sec",
            "range": "stddev: 0.000983510333888342",
            "extra": "mean: 37.291371925925255 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 47.29648740004408,
            "unit": "iter/sec",
            "range": "stddev: 0.028329050888181675",
            "extra": "mean: 21.143219189657373 msec\nrounds: 58"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1310897072517645,
            "unit": "iter/sec",
            "range": "stddev: 0.012844985695381547",
            "extra": "mean: 319.3776268000079 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.298487767759651,
            "unit": "iter/sec",
            "range": "stddev: 0.004579094290843605",
            "extra": "mean: 232.63995480000972 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6793820495884735,
            "unit": "iter/sec",
            "range": "stddev: 0.042674281284334474",
            "extra": "mean: 1.4719258488000038 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.388849276220475,
            "unit": "iter/sec",
            "range": "stddev: 0.025801387051389426",
            "extra": "mean: 418.6115925999957 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdb408ff459e3a1c685422301a15a412d752902b",
          "message": "Merge pull request #11 from aiyah-meloken/feature/decryption-optimization\n\nFeature/decryption optimization",
          "timestamp": "2026-02-28T14:58:31+08:00",
          "tree_id": "1a09dc3475db30a210380ef8474adec7cb3a06b9",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/fdb408ff459e3a1c685422301a15a412d752902b"
        },
        "date": 1772262165516,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.1850750557352456,
            "unit": "iter/sec",
            "range": "stddev: 0.003574177171756967",
            "extra": "mean: 457.65018339999983 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.005094084657259,
            "unit": "iter/sec",
            "range": "stddev: 0.012119980786283947",
            "extra": "mean: 199.79644400000893 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6885519869566863,
            "unit": "iter/sec",
            "range": "stddev: 0.09175028579372821",
            "extra": "mean: 1.4523231635999991 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.080904006817965,
            "unit": "iter/sec",
            "range": "stddev: 0.003739867994521407",
            "extra": "mean: 245.04374480000024 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7937296403286394,
            "unit": "iter/sec",
            "range": "stddev: 0.039623303367105296",
            "extra": "mean: 357.944442999991 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 22.00835771786165,
            "unit": "iter/sec",
            "range": "stddev: 0.00024362138508523425",
            "extra": "mean: 45.43728399999674 msec\nrounds: 22"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.381983118933274,
            "unit": "iter/sec",
            "range": "stddev: 0.0009397806103927699",
            "extra": "mean: 106.58727342857333 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.114471259588038,
            "unit": "iter/sec",
            "range": "stddev: 0.0005409981086753055",
            "extra": "mean: 163.5464388571474 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6938950171170246,
            "unit": "iter/sec",
            "range": "stddev: 0.04087649724329548",
            "extra": "mean: 1.4411401946000013 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 4.991480395675684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007139132671850335",
            "extra": "mean: 200.3413658333386 msec\nrounds: 6"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.040886046751368,
            "unit": "iter/sec",
            "range": "stddev: 0.0006572482948321592",
            "extra": "mean: 76.68190615384691 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 273.48630288271147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005039264337852294",
            "extra": "mean: 3.6564902500029937 msec\nrounds: 24"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.29571667402709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803558599773642",
            "extra": "mean: 88.52913266666462 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.62917785092591,
            "unit": "iter/sec",
            "range": "stddev: 0.00035472897145763846",
            "extra": "mean: 18.30523612727316 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7091946098219722,
            "unit": "iter/sec",
            "range": "stddev: 0.04190192726358396",
            "extra": "mean: 1.4100501979999933 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 6.3645013803767725,
            "unit": "iter/sec",
            "range": "stddev: 0.00012446187568722185",
            "extra": "mean: 157.12149942856968 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.03572759188233,
            "unit": "iter/sec",
            "range": "stddev: 0.04266644375321851",
            "extra": "mean: 47.53817026922801 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 54.80660046556127,
            "unit": "iter/sec",
            "range": "stddev: 0.00042910140003013725",
            "extra": "mean: 18.245977519229065 msec\nrounds: 52"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.216178092110609,
            "unit": "iter/sec",
            "range": "stddev: 0.013588849646462368",
            "extra": "mean: 310.9280553999895 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.348978501970195,
            "unit": "iter/sec",
            "range": "stddev: 0.005162216620013157",
            "extra": "mean: 229.93905340000538 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6564789509278757,
            "unit": "iter/sec",
            "range": "stddev: 0.06361644208371642",
            "extra": "mean: 1.5232780862000026 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.384496595634875,
            "unit": "iter/sec",
            "range": "stddev: 0.06108519574031597",
            "extra": "mean: 419.3757298000037 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "9bd6f6c08641cab740a8a8b1ce8cd6e542885c4a",
          "message": "feat/opt: chunked decryption",
          "timestamp": "2026-02-28T06:58:35Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/13/commits/9bd6f6c08641cab740a8a8b1ce8cd6e542885c4a"
        },
        "date": 1772267945522,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.3490799710604358,
            "unit": "iter/sec",
            "range": "stddev: 0.034904091906249976",
            "extra": "mean: 425.6985766000014 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.249676034871917,
            "unit": "iter/sec",
            "range": "stddev: 0.00696488417043951",
            "extra": "mean: 235.31205479999358 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6711973793686873,
            "unit": "iter/sec",
            "range": "stddev: 0.27731514010993813",
            "extra": "mean: 1.4898747085999902 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 5.100581570423778,
            "unit": "iter/sec",
            "range": "stddev: 0.006698774611754428",
            "extra": "mean: 196.05607442857067 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.910496537944825,
            "unit": "iter/sec",
            "range": "stddev: 0.0667741981828588",
            "extra": "mean: 343.5839854000051 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 53.35096317588025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956123188198699",
            "extra": "mean: 18.743804056607843 msec\nrounds: 53"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.579662361479008,
            "unit": "iter/sec",
            "range": "stddev: 0.0007878733923462477",
            "extra": "mean: 104.3878126666679 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.467180855025851,
            "unit": "iter/sec",
            "range": "stddev: 0.0004062136348800523",
            "extra": "mean: 182.90962500000774 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7204251823207567,
            "unit": "iter/sec",
            "range": "stddev: 0.03335135638476601",
            "extra": "mean: 1.3880691909999996 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 7.325259069576312,
            "unit": "iter/sec",
            "range": "stddev: 0.001270432304110023",
            "extra": "mean: 136.51394312499576 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 14.1392959749022,
            "unit": "iter/sec",
            "range": "stddev: 0.00043269083290415456",
            "extra": "mean: 70.72487921428612 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 288.1591557466353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005422794460730259",
            "extra": "mean: 3.4703044482794527 msec\nrounds: 29"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.477203180420824,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097000757547477",
            "extra": "mean: 87.12924083333462 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 59.398913121523485,
            "unit": "iter/sec",
            "range": "stddev: 0.0001532334357831756",
            "extra": "mean: 16.83532488135116 msec\nrounds: 59"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7188378583308638,
            "unit": "iter/sec",
            "range": "stddev: 0.05337094610174742",
            "extra": "mean: 1.3911342988000002 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.358408163941938,
            "unit": "iter/sec",
            "range": "stddev: 0.0010969534376235315",
            "extra": "mean: 96.53993009090361 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.775793971306623,
            "unit": "iter/sec",
            "range": "stddev: 0.04000476822847725",
            "extra": "mean: 45.92255057692377 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.87672069408214,
            "unit": "iter/sec",
            "range": "stddev: 0.000796121440801875",
            "extra": "mean: 17.58188566071896 msec\nrounds: 56"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.5044776511193745,
            "unit": "iter/sec",
            "range": "stddev: 0.019784397549877368",
            "extra": "mean: 285.34923019999496 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.945667218596354,
            "unit": "iter/sec",
            "range": "stddev: 0.005672168053944047",
            "extra": "mean: 253.4425597999984 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6937258457329639,
            "unit": "iter/sec",
            "range": "stddev: 0.10760365325962833",
            "extra": "mean: 1.4414916298000093 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.933177299251571,
            "unit": "iter/sec",
            "range": "stddev: 0.031935371077423606",
            "extra": "mean: 340.9272259999966 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "218d1997afab99b66b0b483e7be57213e4d4f073",
          "message": "feat/opt: chunked decryption",
          "timestamp": "2026-02-28T06:58:35Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/13/commits/218d1997afab99b66b0b483e7be57213e4d4f073"
        },
        "date": 1772268625039,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.6450311889856577,
            "unit": "iter/sec",
            "range": "stddev: 0.050841793153580034",
            "extra": "mean: 378.06737560001693 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 5.353956734699317,
            "unit": "iter/sec",
            "range": "stddev: 0.00951520622093151",
            "extra": "mean: 186.7777513999954 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6584508175312934,
            "unit": "iter/sec",
            "range": "stddev: 0.1772129062525064",
            "extra": "mean: 1.5187163161999933 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.897670377046826,
            "unit": "iter/sec",
            "range": "stddev: 0.018160817684117068",
            "extra": "mean: 204.17870600000956 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.9103835342419866,
            "unit": "iter/sec",
            "range": "stddev: 0.07591282091520157",
            "extra": "mean: 343.59732600000825 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 52.62582552779089,
            "unit": "iter/sec",
            "range": "stddev: 0.0005149892282439984",
            "extra": "mean: 19.00207721153781 msec\nrounds: 52"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.04646899729669,
            "unit": "iter/sec",
            "range": "stddev: 0.0004831553972254665",
            "extra": "mean: 110.54036666668783 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.170771596161708,
            "unit": "iter/sec",
            "range": "stddev: 0.000417035697819692",
            "extra": "mean: 193.39473450003197 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7239520845808786,
            "unit": "iter/sec",
            "range": "stddev: 0.03662185500778635",
            "extra": "mean: 1.3813068866000093 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 7.203414654817502,
            "unit": "iter/sec",
            "range": "stddev: 0.0010835396967770557",
            "extra": "mean: 138.82305100001702 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.195697185417707,
            "unit": "iter/sec",
            "range": "stddev: 0.000637278773411941",
            "extra": "mean: 81.9961323076873 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 271.2162853344218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764130406561733",
            "extra": "mean: 3.687094227276785 msec\nrounds: 22"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.475820222057514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002466397535161931",
            "extra": "mean: 87.1397408333318 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.7367916237762,
            "unit": "iter/sec",
            "range": "stddev: 0.00015544158905972556",
            "extra": "mean: 18.26924761818935 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7310586197671324,
            "unit": "iter/sec",
            "range": "stddev: 0.053322929186708244",
            "extra": "mean: 1.3678793642000073 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.510686408842805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007357288109466875",
            "extra": "mean: 95.14126490908191 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.992453460352575,
            "unit": "iter/sec",
            "range": "stddev: 0.03666716453701841",
            "extra": "mean: 43.492531222227626 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 57.87401687529857,
            "unit": "iter/sec",
            "range": "stddev: 0.00014102568959636918",
            "extra": "mean: 17.278911228068115 msec\nrounds: 57"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.6647004461579846,
            "unit": "iter/sec",
            "range": "stddev: 0.012080527134694603",
            "extra": "mean: 272.87359899999046 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.8009368228283704,
            "unit": "iter/sec",
            "range": "stddev: 0.01210755272020594",
            "extra": "mean: 263.0930337999871 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.659403819444214,
            "unit": "iter/sec",
            "range": "stddev: 0.14698641123519565",
            "extra": "mean: 1.51652139480002 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 3.1577029658841247,
            "unit": "iter/sec",
            "range": "stddev: 0.026122288577721788",
            "extra": "mean: 316.68589820005764 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "9f132ec5b229947706525d7d406a6aa5987d0e51",
          "message": "feat/opt: chunked decryption",
          "timestamp": "2026-02-28T06:58:35Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/13/commits/9f132ec5b229947706525d7d406a6aa5987d0e51"
        },
        "date": 1772268994823,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.042812804171382,
            "unit": "iter/sec",
            "range": "stddev: 0.012288754074483314",
            "extra": "mean: 489.5211141999994 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.23771907211869,
            "unit": "iter/sec",
            "range": "stddev: 0.005715501361233972",
            "extra": "mean: 235.97600100000022 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6407960102965912,
            "unit": "iter/sec",
            "range": "stddev: 0.17697031995229962",
            "extra": "mean: 1.5605590296000003 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.74171668056678,
            "unit": "iter/sec",
            "range": "stddev: 0.00574972889912078",
            "extra": "mean: 210.89408485714702 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.5566136244021203,
            "unit": "iter/sec",
            "range": "stddev: 0.1312824483668824",
            "extra": "mean: 391.1424043333322 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 49.35051463550042,
            "unit": "iter/sec",
            "range": "stddev: 0.000689086426457628",
            "extra": "mean: 20.26321320833091 msec\nrounds: 48"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 7.632384235007197,
            "unit": "iter/sec",
            "range": "stddev: 0.002343835482747025",
            "extra": "mean: 131.0206573999949 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.328359224299463,
            "unit": "iter/sec",
            "range": "stddev: 0.0017077835960083321",
            "extra": "mean: 158.01884257142464 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7049260482074527,
            "unit": "iter/sec",
            "range": "stddev: 0.08245251786409383",
            "extra": "mean: 1.4185885208000002 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 7.1734418441438095,
            "unit": "iter/sec",
            "range": "stddev: 0.0022094631597779847",
            "extra": "mean: 139.4030957142799 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 11.22821331874274,
            "unit": "iter/sec",
            "range": "stddev: 0.0017027773151292072",
            "extra": "mean: 89.06136458333454 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 278.2110017672735,
            "unit": "iter/sec",
            "range": "stddev: 0.00005551803921680364",
            "extra": "mean: 3.5943941599998652 msec\nrounds: 25"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.452215476319513,
            "unit": "iter/sec",
            "range": "stddev: 0.0008923958596456967",
            "extra": "mean: 87.31934900000482 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.94016147044155,
            "unit": "iter/sec",
            "range": "stddev: 0.000312498152317987",
            "extra": "mean: 17.56229652631235 msec\nrounds: 57"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7132993296324379,
            "unit": "iter/sec",
            "range": "stddev: 0.0318772824691894",
            "extra": "mean: 1.4019359873999861 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.40134156049536,
            "unit": "iter/sec",
            "range": "stddev: 0.0017657910414519266",
            "extra": "mean: 96.14144427273045 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 21.855626130809696,
            "unit": "iter/sec",
            "range": "stddev: 0.040137298979922416",
            "extra": "mean: 45.75480903703363 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.00514495813005,
            "unit": "iter/sec",
            "range": "stddev: 0.0004527391696286763",
            "extra": "mean: 18.180117528300315 msec\nrounds: 53"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.2421067919307838,
            "unit": "iter/sec",
            "range": "stddev: 0.02062415126967924",
            "extra": "mean: 308.44141299999137 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.105091046724039,
            "unit": "iter/sec",
            "range": "stddev: 0.0026350422652906174",
            "extra": "mean: 243.59995639999852 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6890686079411815,
            "unit": "iter/sec",
            "range": "stddev: 0.09610506104844398",
            "extra": "mean: 1.4512343015999931 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 3.2298611693138715,
            "unit": "iter/sec",
            "range": "stddev: 0.04084256399368603",
            "extra": "mean: 309.61083080002254 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "8bfba7c65987210439627092d9a2ffbbc90bdad5",
          "message": "feat/opt: chunked decryption",
          "timestamp": "2026-02-28T06:58:35Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/13/commits/8bfba7c65987210439627092d9a2ffbbc90bdad5"
        },
        "date": 1772269702656,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.5148309729819736,
            "unit": "iter/sec",
            "range": "stddev: 0.04389929485988762",
            "extra": "mean: 397.6410385999998 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.657962007006698,
            "unit": "iter/sec",
            "range": "stddev: 0.022772400182705984",
            "extra": "mean: 214.6861650000062 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6540728253749206,
            "unit": "iter/sec",
            "range": "stddev: 0.08861827189728357",
            "extra": "mean: 1.5288817410000035 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 4.693803888633486,
            "unit": "iter/sec",
            "range": "stddev: 0.00795182580200393",
            "extra": "mean: 213.04682166666566 msec\nrounds: 6"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7525288134952173,
            "unit": "iter/sec",
            "range": "stddev: 0.08168583633578438",
            "extra": "mean: 363.30228228571366 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 43.44590366179733,
            "unit": "iter/sec",
            "range": "stddev: 0.0018030468711357941",
            "extra": "mean: 23.017129711110506 msec\nrounds: 45"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 5.66959717183263,
            "unit": "iter/sec",
            "range": "stddev: 0.0016395481870582712",
            "extra": "mean: 176.37937399999828 msec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.584869532523568,
            "unit": "iter/sec",
            "range": "stddev: 0.018630796001888057",
            "extra": "mean: 179.05521233333843 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6997808712197965,
            "unit": "iter/sec",
            "range": "stddev: 0.0570121398879663",
            "extra": "mean: 1.4290187702000026 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 6.230656404262807,
            "unit": "iter/sec",
            "range": "stddev: 0.013461412892474375",
            "extra": "mean: 160.49673342857318 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 10.88966084363744,
            "unit": "iter/sec",
            "range": "stddev: 0.0040496763101638845",
            "extra": "mean: 91.83022449999214 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 282.5935779195438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664480656416779",
            "extra": "mean: 3.5386508333346 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.216253696060837,
            "unit": "iter/sec",
            "range": "stddev: 0.0014011383693796286",
            "extra": "mean: 89.15632858333093 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 55.949294761425655,
            "unit": "iter/sec",
            "range": "stddev: 0.00036844980301419894",
            "extra": "mean: 17.87332627272814 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.6940641975179169,
            "unit": "iter/sec",
            "range": "stddev: 0.08573557757805811",
            "extra": "mean: 1.4407889120000106 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.140906660862088,
            "unit": "iter/sec",
            "range": "stddev: 0.0027062200806752365",
            "extra": "mean: 98.61051219999979 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 20.568561037361356,
            "unit": "iter/sec",
            "range": "stddev: 0.049631143883920995",
            "extra": "mean: 48.61788815384653 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 56.64100489298951,
            "unit": "iter/sec",
            "range": "stddev: 0.0011775590753769492",
            "extra": "mean: 17.655054000000106 msec\nrounds: 47"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.1047057011557326,
            "unit": "iter/sec",
            "range": "stddev: 0.024891802773096283",
            "extra": "mean: 322.09172020000096 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.92326181493837,
            "unit": "iter/sec",
            "range": "stddev: 0.010545257844072656",
            "extra": "mean: 254.8899479999932 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6668980650010284,
            "unit": "iter/sec",
            "range": "stddev: 0.12772763320804198",
            "extra": "mean: 1.4994795343999954 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.7636105016286527,
            "unit": "iter/sec",
            "range": "stddev: 0.018628071537565485",
            "extra": "mean: 361.8454913999926 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "committer": {
            "name": "aiyah-meloken",
            "username": "aiyah-meloken"
          },
          "id": "9a0faaaef34f0dbb9ce70bec48ab5f44d4bd8be8",
          "message": "feat/opt: chunked decryption",
          "timestamp": "2026-02-28T06:58:35Z",
          "url": "https://github.com/aiyah-meloken/cryptotensors/pull/13/commits/9a0faaaef34f0dbb9ce70bec48ab5f44d4bd8be8"
        },
        "date": 1772271375722,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.4935219882132085,
            "unit": "iter/sec",
            "range": "stddev: 0.07330282964178507",
            "extra": "mean: 401.0391746000096 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.466144499700613,
            "unit": "iter/sec",
            "range": "stddev: 0.01595177360354062",
            "extra": "mean: 223.90677240000514 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.601980311128208,
            "unit": "iter/sec",
            "range": "stddev: 0.138394072420681",
            "extra": "mean: 1.6611838983999974 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 5.1228593400407405,
            "unit": "iter/sec",
            "range": "stddev: 0.0037799464169646193",
            "extra": "mean: 195.20348571429784 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7647550656540973,
            "unit": "iter/sec",
            "range": "stddev: 0.038987279242435904",
            "extra": "mean: 361.69569320001074 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 51.0415298774951,
            "unit": "iter/sec",
            "range": "stddev: 0.00144564444544465",
            "extra": "mean: 19.59188923999932 msec\nrounds: 50"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.783276154352537,
            "unit": "iter/sec",
            "range": "stddev: 0.0012019387802066084",
            "extra": "mean: 102.21524816664858 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 5.878080038014986,
            "unit": "iter/sec",
            "range": "stddev: 0.00034349903801551016",
            "extra": "mean: 170.12357666665898 msec\nrounds: 6"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6627046789677153,
            "unit": "iter/sec",
            "range": "stddev: 0.1523819438104148",
            "extra": "mean: 1.508967767600018 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 7.36470014544581,
            "unit": "iter/sec",
            "range": "stddev: 0.0012039160517521481",
            "extra": "mean: 135.78285337501228 msec\nrounds: 8"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.747085020222626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009289583326278712",
            "extra": "mean: 72.74269407143053 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 269.1968068379731,
            "unit": "iter/sec",
            "range": "stddev: 0.00003205547965345369",
            "extra": "mean: 3.7147543157965104 msec\nrounds: 19"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.444002761674563,
            "unit": "iter/sec",
            "range": "stddev: 0.000420155713419211",
            "extra": "mean: 87.38201316666523 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 54.633783846421984,
            "unit": "iter/sec",
            "range": "stddev: 0.00012258564422327098",
            "extra": "mean: 18.303692872729535 msec\nrounds: 55"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7298045538726158,
            "unit": "iter/sec",
            "range": "stddev: 0.07522035097195993",
            "extra": "mean: 1.370229871399988 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.558029554099607,
            "unit": "iter/sec",
            "range": "stddev: 0.0014272201409153342",
            "extra": "mean: 94.71464300000062 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 27.56335427792476,
            "unit": "iter/sec",
            "range": "stddev: 0.00039267392382645887",
            "extra": "mean: 36.280054666673536 msec\nrounds: 27"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 46.24927110412077,
            "unit": "iter/sec",
            "range": "stddev: 0.025212600257639366",
            "extra": "mean: 21.62196238182229 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.3997995343563323,
            "unit": "iter/sec",
            "range": "stddev: 0.012683113374409674",
            "extra": "mean: 294.1349893999927 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.603187992898588,
            "unit": "iter/sec",
            "range": "stddev: 0.00265649515585148",
            "extra": "mean: 217.24074740000106 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.698618805136626,
            "unit": "iter/sec",
            "range": "stddev: 0.06951100768002652",
            "extra": "mean: 1.4313957664000099 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 2.866288872098861,
            "unit": "iter/sec",
            "range": "stddev: 0.03897933692830271",
            "extra": "mean: 348.8831881999886 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f92dc64de48531986538005ed5ecdb423b52daaf",
          "message": "Merge pull request #13 from aiyah-meloken/feature/chunked-encryption\n\nfeat/opt: chunked decryption",
          "timestamp": "2026-03-02T10:02:00+08:00",
          "tree_id": "1fd79e9183a61fe5cca0874754ef79a79cf4e30d",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/f92dc64de48531986538005ed5ecdb423b52daaf"
        },
        "date": 1772417165448,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 2.0135106078544527,
            "unit": "iter/sec",
            "range": "stddev: 0.022103466191509193",
            "extra": "mean: 496.64501199999904 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.811145965693404,
            "unit": "iter/sec",
            "range": "stddev: 0.015133612941251378",
            "extra": "mean: 207.85068819999424 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.645403460274495,
            "unit": "iter/sec",
            "range": "stddev: 0.1462934336588351",
            "extra": "mean: 1.5494184050000173 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 5.129982285607047,
            "unit": "iter/sec",
            "range": "stddev: 0.0024607166501053016",
            "extra": "mean: 194.93244699999326 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.7735967470972662,
            "unit": "iter/sec",
            "range": "stddev: 0.061406834953616804",
            "extra": "mean: 360.54267840000875 msec\nrounds: 5"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 50.97342972947893,
            "unit": "iter/sec",
            "range": "stddev: 0.0006515849692213075",
            "extra": "mean: 19.618063867922945 msec\nrounds: 53"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 9.787362365880314,
            "unit": "iter/sec",
            "range": "stddev: 0.0008539638808543555",
            "extra": "mean: 102.17257342857725 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 6.0066998764751895,
            "unit": "iter/sec",
            "range": "stddev: 0.0017517361044698005",
            "extra": "mean: 166.48076657141277 msec\nrounds: 7"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.6814069660016266,
            "unit": "iter/sec",
            "range": "stddev: 0.13230547230147963",
            "extra": "mean: 1.4675517714000192 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 6.789929665970274,
            "unit": "iter/sec",
            "range": "stddev: 0.0017648855630134875",
            "extra": "mean: 147.27693057143046 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 13.933317219849949,
            "unit": "iter/sec",
            "range": "stddev: 0.0022285597333183624",
            "extra": "mean: 71.77041792857202 msec\nrounds: 14"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 257.7067502795595,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322819140959392",
            "extra": "mean: 3.880379535713376 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.541097747130333,
            "unit": "iter/sec",
            "range": "stddev: 0.000699045026170418",
            "extra": "mean: 86.64687033333962 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 52.976070655906994,
            "unit": "iter/sec",
            "range": "stddev: 0.00013018910033390943",
            "extra": "mean: 18.876447188679837 msec\nrounds: 53"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7034414940786825,
            "unit": "iter/sec",
            "range": "stddev: 0.03532805345847595",
            "extra": "mean: 1.4215823325999963 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 10.576846506657764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931850959672489",
            "extra": "mean: 94.54613899998776 msec\nrounds: 11"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 22.541183416171744,
            "unit": "iter/sec",
            "range": "stddev: 0.03767389506495183",
            "extra": "mean: 44.36324311538005 msec\nrounds: 26"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 55.415115819317364,
            "unit": "iter/sec",
            "range": "stddev: 0.00015470503528070145",
            "extra": "mean: 18.045617792454493 msec\nrounds: 53"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.3904461330411055,
            "unit": "iter/sec",
            "range": "stddev: 0.004791421007284872",
            "extra": "mean: 294.9464349999971 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.542616690036845,
            "unit": "iter/sec",
            "range": "stddev: 0.013043374786446665",
            "extra": "mean: 282.27722259999837 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.6620838004609298,
            "unit": "iter/sec",
            "range": "stddev: 0.11027641265817849",
            "extra": "mean: 1.5103828236000028 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 3.0246468161047093,
            "unit": "iter/sec",
            "range": "stddev: 0.017710161721361705",
            "extra": "mean: 330.61711360001027 msec\nrounds: 5"
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
          "id": "7cb86fba07179dcf09993e1879964c3ab00500ff",
          "message": "fix: add GitHub token auth to safetensors release check API calls\n\nUnauthenticated GitHub API requests are rate-limited to 60 req/hr,\ncausing intermittent workflow failures. Use GITHUB_TOKEN for 5000 req/hr.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-03T09:52:03+08:00",
          "tree_id": "6bbbcc51e88498824a0593db38da0438bd87d84c",
          "url": "https://github.com/aiyah-meloken/cryptotensors/commit/7cb86fba07179dcf09993e1879964c3ab00500ff"
        },
        "date": 1775181373081,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.5748722227579517,
            "unit": "iter/sec",
            "range": "stddev: 0.0019641010344054284",
            "extra": "mean: 634.9721492000015 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.482094006207909,
            "unit": "iter/sec",
            "range": "stddev: 0.03282887066196123",
            "extra": "mean: 223.11000140000488 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_save_cpu",
            "value": 0.6873174129693981,
            "unit": "iter/sec",
            "range": "stddev: 0.15739346299520293",
            "extra": "mean: 1.454931856999997 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax_crypto.py::test_flax_crypto_load_cpu",
            "value": 5.014739084708695,
            "unit": "iter/sec",
            "range": "stddev: 0.009210136949295013",
            "extra": "mean: 199.41216942856954 msec\nrounds: 7"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_save",
            "value": 2.817615895322551,
            "unit": "iter/sec",
            "range": "stddev: 0.15118862106201397",
            "extra": "mean: 354.90997962499904 msec\nrounds: 8"
          },
          {
            "name": "benches/test_numpy_crypto.py::test_numpy_crypto_load",
            "value": 54.115861090210466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341442961431061",
            "extra": "mean: 18.478870701752534 msec\nrounds: 57"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_paddle_load",
            "value": 10.537008819968378,
            "unit": "iter/sec",
            "range": "stddev: 0.000857157501319784",
            "extra": "mean: 94.90359333333093 msec\nrounds: 9"
          },
          {
            "name": "benches/test_paddle.py::test_paddle_sf_load",
            "value": 8.488111752272218,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586156841304486",
            "extra": "mean: 117.81183250000282 msec\nrounds: 8"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_save_cpu",
            "value": 0.7527632248029146,
            "unit": "iter/sec",
            "range": "stddev: 0.08110488393034539",
            "extra": "mean: 1.3284389659999873 sec\nrounds: 5"
          },
          {
            "name": "benches/test_paddle_crypto.py::test_paddle_crypto_load_cpu",
            "value": 6.968366667474133,
            "unit": "iter/sec",
            "range": "stddev: 0.0015581020894492427",
            "extra": "mean: 143.50565171428846 msec\nrounds: 7"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 12.6106536109344,
            "unit": "iter/sec",
            "range": "stddev: 0.0017795276320355714",
            "extra": "mean: 79.29803092306997 msec\nrounds: 13"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 287.0523043971915,
            "unit": "iter/sec",
            "range": "stddev: 0.00007792081628956005",
            "extra": "mean: 3.483685672198296 msec\nrounds: 241"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu_small",
            "value": 11.645516475914935,
            "unit": "iter/sec",
            "range": "stddev: 0.00039697444769487035",
            "extra": "mean: 85.8699570833276 msec\nrounds: 12"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu_small",
            "value": 56.0553483783245,
            "unit": "iter/sec",
            "range": "stddev: 0.00011926640147393162",
            "extra": "mean: 17.839510928571453 msec\nrounds: 56"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu",
            "value": 0.7684682145564623,
            "unit": "iter/sec",
            "range": "stddev: 0.09114132503013782",
            "extra": "mean: 1.3012899962000006 sec\nrounds: 5"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu",
            "value": 9.984443647714501,
            "unit": "iter/sec",
            "range": "stddev: 0.001066504235275858",
            "extra": "mean: 100.15580590000184 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_save_cpu_small",
            "value": 28.305871664073095,
            "unit": "iter/sec",
            "range": "stddev: 0.00048304159314659003",
            "extra": "mean: 35.328359142857224 msec\nrounds: 28"
          },
          {
            "name": "benches/test_pt_crypto.py::test_pt_crypto_load_cpu_small",
            "value": 47.14112271320138,
            "unit": "iter/sec",
            "range": "stddev: 0.026484503918538065",
            "extra": "mean: 21.212901654545455 msec\nrounds: 55"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 3.5805006470405285,
            "unit": "iter/sec",
            "range": "stddev: 0.021236139789219437",
            "extra": "mean: 279.2905513999983 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.381933614704737,
            "unit": "iter/sec",
            "range": "stddev: 0.004700364302546642",
            "extra": "mean: 185.80682549999494 msec\nrounds: 6"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_save_cpu",
            "value": 0.7641193852785891,
            "unit": "iter/sec",
            "range": "stddev: 0.3045682753473415",
            "extra": "mean: 1.3086960222000017 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf_crypto.py::test_tf_crypto_load_cpu",
            "value": 3.627960588349647,
            "unit": "iter/sec",
            "range": "stddev: 0.021937696595974825",
            "extra": "mean: 275.6369523999979 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}