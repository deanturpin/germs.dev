---
title: STL containers
date: 2019-09-25
tags:
- cpp
- revision
- data structures
- graduate
---

# STL containers

> Containers replicate structures very commonly used in programming: dynamic
> arrays (vector), queues (queue), stacks (stack), heaps (priority_queue),
> linked lists (list), trees (set), associative arrays (map)...

http://www.cplusplus.com/reference/stl/

## Sequence containers
### `vector` `list` `deque` `array` `forward_list`

Modifying a `vector` potentially invalidates all existing iterators. And
inserting an element can cause the whole container to be reallocated (here be
[dragons](/post/vector)!)

`deque` is not guaranteed to store all its elements in contiguous storage
locations but has efficient insertion and deletion of elements at the beginning
and end of a sequence. Adding to a deque doesn't invalidate existing iterators.

Unlike the other standard containers, `array` has a fixed size, and also
doesn't have resize/reserve/capacity/shrink_to_fit methods.

`forward_list` is a sequence container that allows constant time insert and
erase operations anywhere within the sequence. It has been designed with
efficiency in mind. By design, it is as efficient as a simple handwritten
C-style singly-linked list, and in fact is the only standard container to
deliberately lack a size member.

## Container adapters
### `stack` `queue` `priority_queue`

By default, if no container class is specified for a particular
`priority_queue` class instantiation, the standard container `vector` is used.
`priority_queue` is a heap

## Associative containers
### `set` `map` `multiset` `multimap`

`multiset`, `set` and `map` are typically implemented as binary search trees.

`map` is generally slower than `unordered_map` containers to access individual
elements by their key, but it allows the direct iteration on subsets based on
their order.

## Unordered associative containers
### `unordered_multiset` `unordered_map` `unordered_multimap` `unordered_set`

`unordered_set` is faster than `set` to access individual elements
by their keys.
