from typing import Dict, Any


class FrameworkAdapter:
    def name(self):
        raise NotImplementedError

    def generate_data(self) -> Dict[str, Any]:
        """Generate a dict of tensors typical for this framework."""
        raise NotImplementedError

    def save_file(self, data, filename, config=None):
        raise NotImplementedError

    def load_file(self, filename, config=None):
        raise NotImplementedError

    def save(self, data, config=None) -> bytes:
        raise NotImplementedError

    def load(self, data_bytes, config=None):
        raise NotImplementedError

    def assert_close(self, val1, val2):
        raise NotImplementedError

    def to_numpy(self, val):
        raise NotImplementedError


class TorchAdapter(FrameworkAdapter):
    def __init__(self):
        import torch

        self.torch = torch
        from cryptotensors import torch as ctorch

        self.ctorch = ctorch

    def name(self):
        return "torch"

    def generate_data(self):
        return {"test": self.torch.randn(10, 10), "test2": self.torch.zeros(5, 5)}

    def save_file(self, data, filename, config=None):
        self.ctorch.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.ctorch.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.ctorch.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.ctorch.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        assert self.torch.allclose(val1, val2)

    def to_numpy(self, val):
        return val.numpy()


class NumpyAdapter(FrameworkAdapter):
    def __init__(self):
        import numpy

        self.numpy = numpy
        from cryptotensors import numpy as cnumpy

        self.cnumpy = cnumpy

    def name(self):
        return "numpy"

    def generate_data(self):
        return {
            "test": self.numpy.random.rand(10, 10).astype(self.numpy.float32),
            "test2": self.numpy.zeros((5, 5), dtype=self.numpy.float32),
        }

    def save_file(self, data, filename, config=None):
        self.cnumpy.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.cnumpy.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.cnumpy.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.cnumpy.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        self.numpy.testing.assert_allclose(val1, val2)

    def to_numpy(self, val):
        return val


class TensorflowAdapter(FrameworkAdapter):
    def __init__(self):
        import tensorflow
        from cryptotensors import tensorflow as ctf

        self.tf = tensorflow
        self.ctf = ctf

    def name(self):
        return "tensorflow"

    def generate_data(self):
        return {"test": self.tf.random.normal((10, 10)), "test2": self.tf.zeros((5, 5))}

    def save_file(self, data, filename, config=None):
        self.ctf.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.ctf.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.ctf.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.ctf.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        # TF has no simple allclose, verify via numpy
        import numpy as np

        if hasattr(val1, "numpy"):
            np1 = val1.numpy()
        else:
            np1 = val1

        if hasattr(val2, "numpy"):
            np2 = val2.numpy()
        else:
            np2 = val2
        np.testing.assert_allclose(np1, np2)

    def to_numpy(self, val):
        return val.numpy()


class FlaxAdapter(FrameworkAdapter):
    def __init__(self):
        import jax.numpy as jnp
        import numpy as np

        self.jnp = jnp
        self.np = np
        from cryptotensors import flax as cflax

        self.cflax = cflax

    def name(self):
        return "flax"

    def generate_data(self):
        return {"test": self.jnp.ones((10, 10)), "test2": self.jnp.zeros((5, 5))}

    def save_file(self, data, filename, config=None):
        self.cflax.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.cflax.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.cflax.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.cflax.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        assert self.jnp.allclose(val1, val2)

    def to_numpy(self, val):
        return self.np.array(val)


class MlxAdapter(FrameworkAdapter):
    def __init__(self):
        import mlx.core as mx
        import numpy as np

        self.mx = mx
        self.np = np
        from cryptotensors import mlx as cmlx

        self.cmlx = cmlx

    def name(self):
        return "mlx"

    def generate_data(self):
        return {"test": self.mx.random.normal((10, 10)), "test2": self.mx.zeros((5, 5))}

    def save_file(self, data, filename, config=None):
        self.cmlx.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.cmlx.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.cmlx.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.cmlx.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        assert self.mx.allclose(val1, val2)

    def to_numpy(self, val):
        return self.np.array(val)


class PaddleAdapter(FrameworkAdapter):
    def __init__(self):
        import paddle

        self.paddle = paddle
        from cryptotensors import paddle as cpaddle

        self.cpaddle = cpaddle

    def name(self):
        return "paddle"

    def generate_data(self):
        return {"test": self.paddle.randn((10, 10)), "test2": self.paddle.zeros((5, 5))}

    def save_file(self, data, filename, config=None):
        self.cpaddle.save_file(data, filename, config=config)

    def load_file(self, filename, config=None):
        return self.cpaddle.load_file(filename, config=config)

    def save(self, data, config=None):
        return self.cpaddle.save(data, config=config)

    def load(self, data_bytes, config=None):
        return self.cpaddle.load(data_bytes, config=config)

    def assert_close(self, val1, val2):
        assert self.paddle.allclose(val1, val2)

    def to_numpy(self, val):
        return val.numpy()


# Test helpers
def run_save_load_file_test(adapter, enc_config, tmp_path):
    data = adapter.generate_data()
    filename = tmp_path / f"test_{adapter.name()}.safetensors"

    adapter.save_file(data, filename, config=enc_config)
    loaded = adapter.load_file(filename, config=enc_config)

    for k, v in data.items():
        assert k in loaded
        adapter.assert_close(v, loaded[k])


def run_save_load_bytes_test(adapter, enc_config):
    data = adapter.generate_data()
    serialized_bytes = adapter.save(data, config=enc_config)
    assert len(serialized_bytes) > 0

    loaded = adapter.load(serialized_bytes, config=enc_config)

    for k, v in data.items():
        assert k in loaded
        adapter.assert_close(v, loaded[k])
