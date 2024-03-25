# Moving back to macOS

After over a decade on Linux (and a bit of Windows).

## Homebrew

Firstly... there's no default package manager like apt! But there is Homebrew, which is kind of a drop-in replacement for `apt`. Well, it behaves similarly.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
```

### Apps to install

- [Homebrew](https://brew.sh/)
- https://www.warp.dev/
- [Docker Engine](https://docs.docker.com/engine/install/)
- [Tidal](https://offer.tidal.com/download?lang=en)

### Command line installs

Via `brew`.

```bash
brew install duf tmux vim neofetch google-benchmark stats entr watch
```

## GUI applications

- [VS Code](https://code.visualstudio.com/docs/?dv=darwinarm64)

## Monitoring

- Hot application for task bar temperature monitoring

## Benchmarks

- Compare my [work laptop CPU](https://www.cpubenchmark.net/compare/5749vs3814/Apple-M3-8-Core-vs-Intel-i7-1165G7)
- Compile [clang](https://gitlab.com/deanturpin/clang/-/blob/main/Dockerfile) from scratch in 22 minutes.
- Compile [gcc in a Docker image](https://gitlab.com/deanturpin/gcc) in 544.4s by setting Docker settings to 15B RAM

