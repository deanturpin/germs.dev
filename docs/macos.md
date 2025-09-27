---
tags:
  - macos
  - operating-systems
  - apple
  - migration
---




After over a decade on Linux (and a bit of Windows).

## Homebrew

Firstly... there's no default package manager like apt! But there is Homebrew, which is kind of a drop-in replacement for `apt`. Well, it behaves similarly.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
```

### Apps to install

- [Homebrew](https://brew.sh/)
- [Docker Engine](https://docs.docker.com/engine/install/)
- [Tidal](https://offer.tidal.com/download?lang=en)
- [VS Code](https://code.visualstudio.com/docs/?dv=darwinarm64)

### Command line installs

Via `brew`.

```bash
brew install duf tmux vim neofetch google-benchmark stats entr watch ag fzf libpcap nmap threads google-benchmark jq
```

## RAM usage

Based on a proportion of 16GB RAM.

| Application | Typical RAM usage (%) |
|-|-|
| Baseline (nothing running) | 30 |
| Tidal | 5 |
| Chrome (20 tabs) | 12 |

## Benchmarks

- Compare my [work laptop CPU](https://www.cpubenchmark.net/compare/5749vs3814/Apple-M3-8-Core-vs-Intel-i7-1165G7)
- Compile [clang](https://gitlab.com/deanturpin/clang/-/blob/main/Dockerfile) from scratch in 22 minutes.
- Compile [gcc in a Docker image](https://gitlab.com/deanturpin/gcc) in 544.4s by setting Docker settings to 15B RAM

## Contact

Took me a while to find a contact number but [here it is!](https://support.apple.com/en-gb/106932)
