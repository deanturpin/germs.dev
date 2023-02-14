# C++ profiling

## Profilers
- gprof, `gprof2dot --wrap`
- [valgrind](https://www.youtube.com/watch?v=3l0BQs2ThTo) - build with `-g`, run `valgrind -s a.out` (expect 100 times slow down)
- perf
- `/usr/bin/time --verbose`
- Tracy
- htop
- Google Benchmark
- hotspot
- [Optick](https://www.youtube.com/watch?v=p57TV5342fo&list=WL&index=22) -- lightweight profiling for games

### gprof
Use `-p` for `prof` and `-pg` for `gprof`. But it will take longer to run.

## Helpers
- https://github.com/jrfonseca/gprof2dot

## Graph tools
- [GNU Octave](https://octave.org/doc/v4.0.0/Two_002dDimensional-Plots.html)

## Compiler options
- https://docs.microsoft.com/en-us/visualstudio/profiling/beginners-guide-to-performance-profiling?view=vs-2019
- https://docs.microsoft.com/en-us/cpp/build/reference/o-options-optimize-code?view=msvc-160
- https://docs.microsoft.com/en-us/visualstudio/debugger/how-to-debug-optimized-code?view=vs-2019
- https://www.youtube.com/watch?v=yRKRqzekLU4
- https://www.youtube.com/watch?v=THE14sSDT6A&feature=youtu.be
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html

## Reading list
- https://lwn.net/Articles/250967/
- https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-concurrency

