---
title: Hashing
date: 2020-12-13
tags:
- data structures
- revision
---

# Hashing
## Hash tables
A hash table (hash map) is a data structure that implements an associative
array abstract data type, a structure that can map keys to values. A hash table
uses a hash function to compute an index into an array of buckets or slots,
from which the desired value can be found.

Hashing derives a fixed size result from an input. See [Hash table](https://en.wikipedia.org/wiki/Hash_table).

## Properties of a hashing algorithm
- Stable: the same input generates the same output every time
- Uniform: the hash values should be uniformly distributed through the
available space
- Efficient: the cost of generating a hash must be balanced with application
need
- Secure: the cost of finding data that produces a given hash is prohibitive

## String hashing
- Sum ASCII values -- not uniform, not secure
- Fold bytes of every four characters into an integer -- not secure
- CRC32 -- not secure
- MD5 -- not efficient, not secure
- SHA2 -- stable, uniform, not efficient, secure

## Handling collisions
- Chaining
- Open addressing
- Load/fill factor -- the ratio of filled hash table array slots
- DFS/BFS -- depth-first search versus breadth-first
- Brute force
- Greedy algo -- stall at local maxima
- Dynamic programming
- Longest common subsequence
- [Simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing)
- Random solutions
- Polynomial
- PTAS -- approximation scheme
- [More Hash Function Tests](http://aras-p.info/blog/2016/08/09/More-Hash-Function-Tests/)
- [Linear probing](https://tinyurl.com/5independent)
- Robinhood hashing
- Cuckoo hashing
- Preimage (attack)
- URL shortener
