window.BENCHMARK_DATA = {
  "lastUpdate": 1767703154295,
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
      }
    ]
  }
}