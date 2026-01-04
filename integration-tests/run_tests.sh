#!/bin/bash
# CryptoTensors Integration Tests Runner
#
# This script builds a Docker container and runs end-to-end integration tests.
# Each run creates a fresh container to ensure a clean testing environment.
#
# Usage:
#   ./run_tests.sh                    # Run transformers test (CPU)
#   ./run_tests.sh --build-only       # Only build the Docker image
#   ./run_tests.sh --no-cache         # Build without Docker cache

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
BUILD_ONLY=false
NO_CACHE=""
MODEL="Qwen/Qwen2-0.5B"
USE_CHINA_MIRROR=false

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --build-only)
            BUILD_ONLY=true
            shift
            ;;
        --no-cache)
            NO_CACHE="--no-cache"
            shift
            ;;
        --china-mirror|--cn)
            USE_CHINA_MIRROR=true
            shift
            ;;
        --model)
            MODEL="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: $0 [options]"
            echo ""
            echo "Options:"
            echo "  --build-only    Only build the Docker image, don't run tests"
            echo "  --no-cache      Build Docker image without cache"
            echo "  --china-mirror  Use China mirrors for apt/pip/cargo (or --cn)"
            echo "  --model MODEL   Specify HuggingFace model ID (default: Qwen/Qwen2-0.5B)"
            echo "  -h, --help      Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║       CryptoTensors Integration Test Runner                ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}Model:${NC} $MODEL"
echo -e "${YELLOW}Project root:${NC} $PROJECT_ROOT"
echo -e "${YELLOW}China mirror:${NC} $USE_CHINA_MIRROR"
echo ""

# Docker configuration
DOCKERFILE="Dockerfile.transformers"
IMAGE_NAME="cryptotensors-test-transformers"
CONTAINER_NAME="cryptotensors-test-transformers-$(date +%s)"

# Check if Dockerfile exists
if [[ ! -f "$SCRIPT_DIR/$DOCKERFILE" ]]; then
    echo -e "${RED}Dockerfile not found: $SCRIPT_DIR/$DOCKERFILE${NC}"
    exit 1
fi

# Build Docker image
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Building Docker image: $IMAGE_NAME${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Build arguments
BUILD_ARGS=""
if [[ "$USE_CHINA_MIRROR" == true ]]; then
    BUILD_ARGS="--build-arg USE_CHINA_MIRROR=true"
    BUILD_ARGS="$BUILD_ARGS --build-arg RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup"
    BUILD_ARGS="$BUILD_ARGS --build-arg RUSTUP_UPDATE_ROOT=https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup"
fi

cd "$PROJECT_ROOT"
docker build \
    $NO_CACHE \
    $BUILD_ARGS \
    -f "integration-tests/$DOCKERFILE" \
    -t "$IMAGE_NAME" \
    .

if [[ "$BUILD_ONLY" == true ]]; then
    echo -e "${GREEN}✓ Docker image built successfully: $IMAGE_NAME${NC}"
    exit 0
fi

# Run tests
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Running integration tests in container: $CONTAINER_NAME${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

TEST_CMD="python run_full_test.py --model $MODEL"

# Run container
docker run \
    --rm \
    --name "$CONTAINER_NAME" \
    -e CRYPTOTENSOR_KEY_JKU=file:///app/data/key.jwk \
    -e HF_HOME=/app/hf_cache \
    "$IMAGE_NAME" \
    $TEST_CMD

EXIT_CODE=$?

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
if [[ $EXIT_CODE -eq 0 ]]; then
    echo -e "${GREEN}✓ Integration tests PASSED${NC}"
else
    echo -e "${RED}✗ Integration tests FAILED (exit code: $EXIT_CODE)${NC}"
fi
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

exit $EXIT_CODE
