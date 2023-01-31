# Google benchmark

## Install on Ubuntu
```bash
sudo apt install libbenchmark-dev
```

## Compiler/linker options
```bash
-std=c++23 -lbenchmark -lpthread -DNDEBUG
```

## Example
```cpp
#include <benchmark/benchmark.h>

static void BM_StringCreation(benchmark::State& state) {
  for (auto _ : state)
    std::string empty_string;
}
// Register the function as a benchmark
BENCHMARK(BM_StringCreation);

// Define another benchmark
static void BM_StringCopy(benchmark::State& state) {
  std::string x = "hello";
  for (auto _ : state)
    std::string copy(x);
}
BENCHMARK(BM_StringCopy);

BENCHMARK_MAIN();
```

See [Godbolt](https://godbolt.org/z/zrGvE96fq).

## Output
```
ASM generation compiler returned: 0
Execution build compiler returned: 0
Program returned: 0
2023-01-31T13:35:49+00:00
Running ./output.s
Run on (2 X 3399.31 MHz CPU s)
Load Average: 1.27, 0.90, 0.89
***WARNING*** Library was built as DEBUG. Timings may be affected.
------------------------------------------------------------
Benchmark                  Time             CPU   Iterations
------------------------------------------------------------
BM_StringCreation        116 ns         68.6 ns     10365007
BM_StringCopy            293 ns          126 ns      5954968
```

