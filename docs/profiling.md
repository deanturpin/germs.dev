---
tags:
  - cpp
  - profiling
  - performance
  - debugging
---

# C++ profiling

- gprof, `gprof2dot --wrap`
- [valgrind](https://www.youtube.com/watch?v=3l0BQs2ThTo) - build with `-g`, run `valgrind -s a.out` (expect 100 times slow down)
- perf
- `/usr/bin/time --verbose`
- Tracy
- htop
- Google Benchmark
- hotspot
- [Optick](https://www.youtube.com/watch?v=p57TV5342fo&list=WL&index=22) -- lightweight profiling for games
- [Hotspot](https://github.com/KDAB/hotspot)
- [VTune](https://t.me/c/1542836414/3156)
- [Magic Trace](https://github.com/janestreet/magic-trace)
- [vtune-profiler cookbook](https://www.intel.com/content/www/us/en/docs/vtune-profiler/cookbook/2023-2/top-down-microarchitecture-analysis-method.html)

## Google Test

OK, not stricly a profiler but you do get a duration for each unit test; and it's good practice be testing as you go.

## gprof

Use `-p` for `prof` and `-pg` for `gprof`. But it will take longer to run.

## perf

```bash
echo -1 | sudo tee /proc/sys/kernel/perf_event_paranoid
perf stat app.o
```

## valgrind

Slows down the application by up to 20 times.

```bash
# Memory leaks
valgrind app.o
valgrind --leak-check=full app.o

# Cache issues
valgrind --tool=cachegrind app.o

# Thread issues
valgrind --tool=helgrind app.o
```

## Helpers

- <https://github.com/jrfonseca/gprof2dot>

## Graph tools

- [GNU Octave](https://octave.org/doc/v4.0.0/Two_002dDimensional-Plots.html)

## Compiler options

- <https://docs.microsoft.com/en-us/visualstudio/profiling/beginners-guide-to-performance-profiling?view=vs-2019>
- <https://docs.microsoft.com/en-us/cpp/build/reference/o-options-optimize-code?view=msvc-160>
- <https://docs.microsoft.com/en-us/visualstudio/debugger/how-to-debug-optimized-code?view=vs-2019>
- <https://www.youtube.com/watch?v=yRKRqzekLU4>
- <https://www.youtube.com/watch?v=THE14sSDT6A&feature=youtu.be>
- <https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html>

## Reading list

- <https://lwn.net/Articles/250967/>
- <https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-concurrency>
