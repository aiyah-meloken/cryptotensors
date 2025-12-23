# Compatibility layer: re-export everything from cryptotensors
# This allows existing code using `from safetensors import ...` to work with cryptotensors
from cryptotensors import *

try:
    from cryptotensors import __version__, __all__
except ImportError:
    pass

