---
title: cmake
subtitle: crib sheet
date: 2021-03-29
tags:
- build
- cmake
---

# CMake

```bash
# Point CMake at the source and build dirs
cmake -S src -B bin

# Build
cmake --build bin --parallel $(nproc)

# Clean
cmake --target clean bin
```

## References
- https://cliutils.gitlab.io/modern-cmake/chapters/features/cpp11.html
- https://gist.github.com/mbinna/c61dbb39bca0e4fb7d1f73b0d66a4fd1
- https://llvm.org/docs/CMakePrimer.html
