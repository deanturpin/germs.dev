---
title: Multi-threading
date: 2019-09-15
tags:
- revision
- multi-threading
- parallelism
- performance
---

# Multi-threading

Multi-threaded concepts are important: e.g., atomics, locks, issues with
different designs, how to make things thread safe. Cache locality is another
huge thing these days. Asynchronous architectures and callbacks are what you
will be dealing with every day.

- What is cache locality?
- How do multicore systems ensure their caches are in sync?
- How do you get around this problem?
- Why are signals slow and why is context switching bad?
- What exactly happens during a context switch?

"A computer program or subroutine is called
[reentrant](https://en.wikipedia.org/wiki/Reentrancy_(computing)) if multiple
invocations can safely run concurrently on a single processor system."

"Race condition: an unfortunate order of execution causes undesirable
behaviour."

Starting in C++11, scoped static initialization is now thread-safe, but it
comes with a cost: Reentrancy now invokes undefined behavior.

# Issues
- Ensure critical sections are as small as possible
- Only a problem for multiple writers -- multiple readers OK
- Too few threads: algorithm is sub-optimal
- Too many threads: overhead of creating/managing and partitioning the data is
greater than processing advantage; software threads outnumber the available
hardware threads and the OS must intervene
- Data races, deadlocks and livelocks -- unsynchonised access to shared memory
can introduce race conditions and undefined behaviour (program results depend
non-deterministically on the relative timings of two or more threads)
- Threads versus processes

## DCLP
- Singleton isn’t thread safe

## Deadlocks
- Deadlocks
- Livelocks

### Detection
- https://en.wikipedia.org/wiki/Edge_chasing
- https://en.wikipedia.org/wiki/Wait-for_graph
- https://en.wikipedia.org/wiki/Banker%27s_algorithm

### Prevention
- Try to avoid calling out to external code while holding a lock.
- Try to avoid holding locks for longer than you need to.
- If you ever need to acquire two locks at once, document the ordering
thoroughly and make sure you always use the same order.
- Immutability is great for multi-threading: immutable means thread safety.
Functional programming works well concurrently partly due to the emphasis on
immutability.

# Mutex
See `std::mutex` or `std::atomic` in C++.

# Threads versus processes
A thread is a branch of execution. A process can consist of multiple threads.

# Threads
- Don't try to go lock-free unless you really have to. Locks are expensive, but
rarely the bottleneck.
- Document the thread-safety of your types. Most types don't need to be
thread-safe, they just need to not be thread hostile: i.e., "You can use them
from multiple threads, but it's your responsible for taking out locks if you
want to share them.
- Don't access the UI (except in documented thread-safe ways) from a non-UI
thread. In Windows Forms, use Control.Invoke/BeginInvoke
- Use locks when you access mutable shared data, both for reads and writes.

## References
- https://en.wikipedia.org/wiki/Thread_safety
- https://en.wikipedia.org/wiki/Memory_barrier
- https://stackoverflow.com/questions/26013650/threadsafe-lazy-initialization-static-vs-stdcall-once-vs-double-checked-locki/
- https://devblogs.microsoft.com/oldnewthing/20040308-00/?p=40363#:~:text=Starting%20in%20C%2B%2B11,time%20execution%20reaches%20their%20declaration
- [The Amazing Performance of C++17 Parallel Algorithms, is it Possible?](https://www.bfilipek.com/2018/11/parallel-alg-perf.html)

