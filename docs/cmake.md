# CMake

## Key commands

```bash
# Point CMake at the source and build dirs
cmake -S src -B bin

# Build
cmake --build bin --parallel $(nproc)

# Clean
cmake --target clean bin
```

## Visual Studio Code integration

- Command-o: open a project folder
- Command-p: open a file with a project
- Command-P: is your friend to search and launch things

### Useful command

- CMake: select a kit, configure, build

### Example

- clone this repo: https://gitlab.com/deanturpin/wispa
- Launch Visual Studio Code and open folder with Command-o

It will choose a kit, but it's useful to see what you have available:

```text
Command-P... CMake: Scan for kits
```

```text
[kit] Found Kit (trusted): GCC 14.1.0 aarch64-apple-darwin23
[kit] Found Kit (trusted): GCC 14.1.0 aarch64-apple-darwin23
[kit] Found Kit (trusted): Clang 19.0.0git arm64-apple-darwin23.5.0
[kit] Found Kit (trusted): Clang 19.0.0git arm64-apple-darwin23.5.0
[kit] Found Kit (trusted): Clang-cl 19.0.0git arm64-pc-windows-msvc
[kit] Found Kit (trusted): Clang 15.0.0 arm64-apple-darwin23.5.0
```

And build it.

```text
Command-P... CMake: build
```

```text
[main] Building folder: wispa 
[build] Starting build
[proc] Executing command: /opt/homebrew/bin/cmake --build /Users/deanturpin/wispa/build --config Debug --target all --
[build] [3/4  25% :: 1.037] Building CXX object CMakeFiles/wispa.dir/src/oui.cxx.o
[build] [3/4  50% :: 1.555] Building CXX object CMakeFiles/wispa.dir/src/packet.cxx.o
[build] [3/4  75% :: 2.179] Building CXX object CMakeFiles/wispa.dir/src/main.cxx.o
[build] [4/4 100% :: 2.220] Linking CXX executable wispa
[driver] Build completed: 00:00:02.244
[build] Build finished with exit code 0
```

## References

- https://cliutils.gitlab.io/modern-cmake/chapters/features/cpp11.html
- https://gist.github.com/mbinna/c61dbb39bca0e4fb7d1f73b0d66a4fd1
- https://llvm.org/docs/CMakePrimer.html
