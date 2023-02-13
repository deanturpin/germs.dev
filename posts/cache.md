# Caches

Small amounts of unusually fast memory (Data D$, Instruction I$, Translation
Lookaside Buffer TLB), cache misses, speculatively prefetch, does it fit in
cache (small is fast), no time/space tradeoff at hardware level, locality
counts (stay in the cache), predictability helps.

A modern multi-core machine will have a multi-level cache hierarchy, where the
faster and smaller caches belong to individual processors. When one processor
modifies a value in its cache, other processors cannot use the old value
any more. That memory location will be invalidated in all of the caches.
Furthermore, since caches operate on the granularity of cache lines and not
individual bytes, the entire cache line will be invalidated in all caches.

Another definition is: "a multiprocessor is cache consistent if all writes to
the same memory location are performed in some sequential order".


- [TLB](https://en.wikipedia.org/wiki/Translation_lookaside_buffer)
- [Content-addressable
memory](https://en.wikipedia.org/wiki/Content-addressable_memory)
- MSI: modified shared invalid
- Cache interventions
- Exclusive state: issue read, if nobody else has it get write
- Owner state (AMD)
- Atomic transaction bus
- Split transaction bus: everybody observes all the requests at the same time,
responses come back some time later
- Non atomicity > transient states
- Scaling cache coherence > directory based coherence
- Premature optimisation

## Lectures
[What do you mean by "cache friendly"? -- Björn Fahller (code::dive 2019)](https://www.youtube.com/watch?v=Fzbotzi1gYs&feature=youtu.be)

- Assume any pointer indirection is a cache miss
- Smaller working data set is better
- Use as much of a cache entry as you can: don't read a whole cache line to
check one bit
- Doing more work can be faster than doing less
- Sequential memory can be very fast due to prefetching
- Fewer evicted cache lines means more data in hot cache for the rest of the
program
- Mispredicted branches can evict cache entries (see [speculative
execution](https://en.wikipedia.org/wiki/Speculative_execution))

## Tools
- [Valgrind](https://en.wikipedia.org/wiki/Valgrind) is in essence a virtual
machine using just-in-time (JIT) compilation techniques, including dynamic
recompilation. Nothing from the original program ever gets run directly on the
host processor.
- perf
- [Tracy profiler](https://github.com/yibit/tracy)

## Cache coherence
In computer architecture, cache coherence is the uniformity of shared resource
data that ends up stored in multiple local caches. When clients in a system
maintain caches of a common memory resource, problems may arise with incoherent
data, which is particularly the case with CPUs in a multiprocessing system.

### MESI cache coherence protocol
Each cache line has state, tag, data.

- Modified - write back the data before anybody else is allowed to read main memory
- Exclusive - mark if nobody is sharing, can change with impunity
- Shared
- Invalid - unused

## Snooping
https://en.wikipedia.org/wiki/Bus_snooping

- Write-invalidate (common)
- Write-update (causes greater bus activity)

## Directory based coherence
Used for large CPUs.

See [wiki](https://en.wikipedia.org/wiki/Directory-based_cache_coherence).

## Write-back versus write-through
All Intel-compatible CPUs during the last one/two decades used a write-back
strategy for caches (which presumes fetching a cache line first to allow
partial writes). Of course that's the theory, reality is slightly more complex
than that.

## Cache misses
There are three kinds of cache misses:
1. Instruction read miss
1. Data read miss
1. Data write miss

Cache read misses from an instruction cache generally cause the largest delay,
because the processor, or at least the thread of execution, has to wait (stall)
until the instruction is fetched from main memory. Cache read misses from a
data cache usually cause a smaller delay, because instructions not dependent on
the cache read can be issued and continue execution until the data is returned
from main memory, and the dependent instructions can resume execution. Cache
write misses to a data cache generally cause the shortest delay, because the
write can be queued and there are few limitations on the execution of
subsequent instructions: the processor can continue until the queue is full.
There is a more detailed introduction to the types of misses
[here](https://en.wikipedia.org/wiki/CPU_cache#Replacement_policies).

## Data cache
- Straight line code (no branches)
- Linear array traversal

## Instruction cache
- Avoid iteration over heterogeneous sequences with virtual calls (sort first)
- Make "fast paths": branch-free sequences
- Inline cautiously
- Take advantage of PGO and WPO

## Virtual functions
We can use CRTP to avoid the first two.

1. Load vtable pointer: potentially data cache miss
1. Load virtual function pointer: potentially data cache miss
1. Then code of function is called: potential instruction cache miss

## Cache related issues
- Memory banks
- Associativity
- Inclusive versus exclusive content
- Dirty cache not a problem for read-only
- Hyper-threading
- [False cache line sharing](https://en.wikipedia.org/wiki/False_sharing) - cache ping pong

## Cache performance evaluate
- Why it's critical
- Why it's hard
- Tools?

## Cache associativity
- Direct mapped cache
- N-way set associative cache
- Fully associative cache

## Cache oblivious algorithm design
Typically a cache-oblivious algorithm works by a recursive divide and conquer
algorithm, where the problem is divided into smaller and smaller sub-problems.
Eventually, one reaches a sub-problem size that fits into cache, regardless of
the cache size.

- https://en.wikipedia.org/wiki/Cache-oblivious_algorithm
- https://en.wikipedia.org/wiki/Loop_nest_optimization

## Profiling
- PGO: profile guided optimisation
- WPO: whole program optimisation
- OProfile

## Data-oriented design
Design to get the most value out of every single cacheline that is read. Split
apart the functions and data.

## Performance of a program is dependent on
```
time/program = instructions/program _ cycles/instruction _ time/cycle
```

1. Compiler, optimiser
1. Cycles per instruction: pipelining
1. Time per clock cycle

CPI = CPI_ideal + CPI_stall

## CPI_stall contributors
- Data hazards
- Control hazards: branches, exceptions
- Memory latency: cache misses

## References
- https://github.com/rollbear/cache-friendly-samples/blob/master/bheap_aux.cpp
- [Crunching bytes](http://msinilo.pl/blog2/post/p425/)
- [Speculative execution](https://en.wikipedia.org/wiki/Speculative_execution)
- [MIT pipelines](https://www.youtube.com/watch?v=lZ_7FeLgkSE&list=WL&index=140)
- [Pipeline stall](https://en.wikipedia.org/wiki/Pipeline_stall)
- [Predication]( https://en.wikipedia.org/wiki/Predication_(computer\_architecture))
- [Vector processor](https://en.wikipedia.org/wiki/Vector_processor)
- [MIMD](https://en.wikipedia.org/wiki/MIMD)
- [What every programmer should know about memory](https://people.freebsd.org/~lstewart/articles/cpumemory.pdf)
- [Be nice to your cache](http://msinilo.pl/blog2/post/p614/)
- [wiki/CPU\_cache](https://en.wikipedia.org/wiki/CPU_cache)
- [False sharing is not fun -- Herb Setter](https://herbsutter.com/2009/05/15/effective-concurrency-eliminate-false-sharing/)
- [Gallery of processor cache effects -- Igor Ostrovsky](http://igoro.com/archive/gallery-of-processor-cache-effects/)
- Writing faster managed code Jan Gray (section: Of Cache misses, page faults and computer architecture)
- Optimising for instruction caches -- Amir Kleen
- Memory is not free (more on Vista performance) -- Sergey Solynik
