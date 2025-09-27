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

#include <list>
#include <vector>
#include <set> // RB tree
#include <unordered_set> // Hashmap

static void BM_Vectorpush(benchmark::State& state) {
    std::vector<int> x;
    for (auto _ : state)
        x.insert(x.begin(), 1);
}
BENCHMARK(BM_Vectorpush);

static void BM_Listpush(benchmark::State& state) {
    std::list<int> x;
    for (auto _ : state)
        x.insert(x.begin(), 1);
}
BENCHMARK(BM_Listpush);

static void BM_Setappend(benchmark::State& state) {
    std::set<int> x;
    for (auto _ : state)
        x.insert(1);
}
BENCHMARK(BM_Setappend);

static void BM_UnorderedSetappend(benchmark::State& state) {
    std::unordered_set<int> x;
    for (auto _ : state)
        x.insert(1);
}
BENCHMARK(BM_UnorderedSetappend);

BENCHMARK_MAIN();
```

See [Godbolt](https://godbolt.org/z/ro4qr5Wza).

## Output

```bash
ASM generation compiler returned: 0
Execution build compiler returned: 0
Program returned: 0
2023-01-31T20:47:46+00:00
Running ./output.s
Run on (2 X 3599.57 MHz CPU s)
Load Average: 1.59, 1.48, 1.27
***WARNING*** Library was built as DEBUG. Timings may be affected.
----------------------------------------------------------------
Benchmark                      Time             CPU   Iterations
----------------------------------------------------------------
BM_Vectorpush              17889 ns         8551 ns       212611
BM_Listpush                  292 ns          119 ns      5662554
BM_Setappend                 186 ns         86.7 ns     10055609
BM_UnorderedSetappend        163 ns         97.4 ns      8139637
```

