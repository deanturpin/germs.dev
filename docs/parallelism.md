# Parallelism

## Kinds of parallelism
- bit level
- instruction level (ILP)
- data (DLP/SIMD)
- task parallelism (TLP/MIMD)

See [YouTube/MIT - parallel processing](https://www.youtube.com/watch?v=aZqPLM0wrlY).

## Examples
- Distributed processing over networks
- Multiple CPUs
- Multiple cores
- Pipelines (deeper and wider pipeline = more control hazards)
- ILP - instruction level parallelism (at best x2 speed up)
- MLP - Memory-level parallelism is a term in computer architecture referring to the ability to have pending multiple memory operations, in particular cache misses or translation lookaside buffer (TLB) misses, at the same time
- Loop unrolling
- [Out-of-order execution - OoO](https://en.wikipedia.org/wiki/Out-of-order_execution) of multiple instructions simultaneously
- Single Operation-Multiple-Data (SIMD) operations in vector registers
- Multiple CPU cores on the same chip
- Speculative execution
- Branch prediction versus branch target prediction
- [SSE and AVX](https://www.codingame.com/playgrounds/283/sse-avx-vectorization/what-is-sse-and-avx)
- [Moore's law hits the roof](https://www.agner.org/optimize/blog/read.php?i=417)
- OpenMP
- C++ AMP - [Accelerated Massive Parallelism](https://en.wikipedia.org/wiki/C%2B%2B_AMP)
- [Pluralsight - High-performance Computing in C++](https://app.pluralsight.com/library/courses/cpp-high-performance-computing/table-of-contents)
- SMOP - small matter of programming: multiple cores are the way we're heading, working out how to use them is the difficult part
- Vector processing - think about it like explicitly managing giant cache lines
- GPGPU
- Advance Vector Extensions AVX - xmm ymm zmm

## Amdahl's law
Amdahl's law shows the maximum speed up that can be achieved by parallelising a pipeline is related to the proportion that can be done in parallel. If you can only do 10% in parallel, the best that can be achieved if that now takes zero time is 90% for the overall process.

Extra cores are great but making use of them is difficult.

See [wiki/Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law).
