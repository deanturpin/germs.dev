---
title: Data structures
date: 2019-09-15
tags:
- revision
- data structures
---

# Data structures
## Heaps
In a max heap, for any given node C, if P is a parent node of C, then the key
(the value) of P is greater than or equal to the key of C. In a min heap, the
key of P is less than or equal to the key of C. The node at the "top" of the
heap (with no parents) is called the root node.

Support of random access iterators is required to keep a heap structure
internally at all times. This is done automatically by the container adaptor by
automatically calling the algorithm functions `make_heap`, `push_heap` and
`pop_heap` when needed. The standard container classes `vector`, `deque` and
`list` fulfill these requirements. By default, if no container class is
specified for a particular stack class instantiation, the standard container
`deque` is used.

> A heap is a useful data structure when it is necessary to repeatedly remove
> the object with the highest (or lowest) priority.

> A beap, or bi-parental heap, is a data structure where a node usually has two
> parents

A [B-heap](https://en.wikipedia.org/wiki/B-heap) is a binary heap implemented
to keep subtrees in a single page. This reduces the number of pages accessed by
up to a factor of ten for big heaps when using virtual memory, compared with
the traditional implementation.[1] The traditional mapping of elements to
locations in an array puts almost every level in a different page.

See [Beap (bi-parental heap)](https://en.wikipedia.org/wiki/Beap) and
[Heaps](https://en.wikipedia.org/wiki/Heap_(data_structure))

## Microbenchmarking for cache misses
Making a small part of the system make fewer cache misses means more hot cache
is available for the rest of the system.

## Trees
- Trees are like a linked list but not just a straight line.
- Fundamental rule: there is one path between nodes in a tree.
- A binary tree has at most two child noes: known as the left and right
children

### Binary tree search
- Sorted hierarchy of data
- A root node
- Left most node is the smallest, right most node is the largest
- Adding nodes that already exist: add to the right (larger)

### Terminology
- Root / top / head node
- Leaf / terminals nodes
- Child / parent

### Node traversal
- Pre-order
- In-order - left first, enumerates in sort order
- Post-order

### Implementation
Recursive or stack.

## AVL tree
In an AVL tree, the heights of the two child subtrees of any node differ by at
most one; if at any time they differ by more than one, rebalancing is done to
restore this property. Lookup, insertion, and deletion all take O(log n) time
in both the average and worst cases, where n is the number of nodes in the tree
prior to the operation.

## B-tree (binary tree)
A red–black tree is a kind of self-balancing binary search tree in computer
science. Each node of the binary tree has an extra bit, and that bit is often
interpreted as the color (red or black) of the node. These color bits are used
to ensure the tree remains approximately balanced during insertions and
deletions.

- Balanced: all leaf nodes same time to travel from root
- All nodes have the same capacity M
- Inner and leaf nodes require minimum fill of m >= M/2
- h = (m+1)^h
- Typically a disk optimised data structure

## Tree types
- Geohash
- R-tree - rectangle tree
- M-tree - multidimensional tree

## Bloom filter
A [bloom filter](https://en.wikipedia.org/wiki/Bloom_filter) tests whether an
element is a member of a set.

## References
- [Pluralsight ADS part 1](https://app.pluralsight.com/library/courses/ads-part1/table-of-contents)
- [Pluralsight ADS part 2](https://app.pluralsight.com/library/courses/ads2/table-of-contents)

