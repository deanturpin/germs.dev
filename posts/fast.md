---
title: -Ogofaster
subtitle: Notes from Andrei at code::dive 2015
date: 2021-09-10
tags:
- performance
- optimisation
- cpp
---

# -Ogofaster
Watch [the whole lecture (recommended)](https://www.youtube.com/watch?v=vrfYLlR8X8k).

## Integrals
### Prefer 32-bit ints to other sizes
- 32-bits is the sweet spot as 64-bit ALU can handle two calculations
- 8, 16-bit computations convert to 32-bits so don't use smaller
- Use small ints in arrays

### Prefer unsigned to signed
- Unsigned is faster
- Except when converting to floating point

## Most numbers are small
- If you find optimisations that work with small numbers, use them

## Floating point
- Double and single precision equivalent speed
- 80-bit extended only slightly slower
- But don't mix them (because conversions)
- Ints to float point cheap
- Floating point to any integral is expensive

## Strength reduction
Use minimum strength operations when optimising as the stronger ones are more costly.

## Speed hierarchy
| operation | cycles |
|---|---|
| Comparisons | less than 1 |
| (u)int add, subtract, bitops, shift (2 x 32-bits) | 1 |
| Floating point add, subtract | TBC |
| (u)int32 multiply, floating point multiply | TBC |
| Floating point division, remainder | TBC |
| (u)int division, remainder | TBC |

### Why is it cheaper to do floating point division than integer?
Format of floating point: mantissa and exponent, already friendly to division.

Division in integers is unnatural. Division is a search!

## Minimise indirect writes
- Writes through a pointer: indirection
- Hard to speculate, hard to enregister (put in a register)
- Whenever you write it's really a read and a write
- Because you transfer a 64-byte cache line: CPU has to read the cache line, update the word and write it back; if you can keep all values for a calculation in one CL all the better (even inject fake writes!)
- The more dirty cache you have, the more writes you need to do

## Improvements
- Fewer indirect writes
- Regular access patterns

## Checkpoint
- You can't improve what you can't measure (you can't measure what you don't measure :))
- Always choose good baselines
- Optimise code judiciously for today's dynamics

## The forgotten parallelism
- Reservation station
- Instruction-level parallelism on a single core

## How do us ALUs? -- ILP
- Pipelining
- Superscaler execution
- Out-of-order execution
- Register renaming
- Speculative execution
- ... and many more

> better instruction level parallelism = fewer data dependencies

## Part 2
https://www.youtube.com/watch?v=9tvbz8CSI8M

- Measure
- Use good baselines
- Reduce strength
- Reduce dependencies
- Knowing math is knowing optimisation

Unsigned integer overflow has well-defined behaviour; signed integer overflow is undefined.

## Part 3
https://www.youtube.com/watch?v=FJJTYQYB1JQ

- Incorporate conditionals into expressions rather than using ifs: `+ (size & 1)`
- Always use infinite loops (except most times)

### 1st order conclusions
- Code that wants to be fast is left-leaning (goes to the left of the page: no
ifs, decision points etc)
- Don't mix hot and cold code, break ASAP
- "Can't write heavily nested code in 80 characters"

### 2nd order conclusions
- Tension with generic programming: "generic programming is why we can't have nice things"

## Timeline
- 1990: OOP
- 2000: GP (generic programming)
- 2020: Design by introspection (inspect and customise everything, everywhere)

You can't achieve the best sort with generic programming.
