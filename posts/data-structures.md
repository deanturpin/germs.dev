# Data structures
The conventional wisdom for when to use a linked list over contiguous storage
hasn't applied for years: you have to test. If everything is in a cache, a
vector might outperform a linked list for insertion.

```
time/program = instructions/program * clockCycles/instruction * time/clockCycles
```

Also see [Iron Law of processor performance](https://en.wikipedia.org/wiki/Iron_law_of_processor_performance).

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
- A binary tree has at most two child noes: known as the left and right children
- [Trie](https://en.wikipedia.org/wiki/Trie)

### Self-balancing binary search trees
A balanced tree is one of height O(log n), where n is the number of nodes in
the tree.

- [Red Black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [B-Tree](https://en.wikipedia.org/wiki/B-tree)
- [k-d tree](https://en.wikipedia.org/wiki/K-d_tree)

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

## Complexities for command data structures
See [time complexities for different data structures](https://www.geeksforgeeks.org/time-complexities-of-different-data-structures/).

See [choosing the right container](https://medium.com/@rodrigues.b.nelson/choosing-wisely-c-containers-and-big-oh-complexity-64f9bd1e7e4c).

Where does O(nlogn) comes from? [Stirling's approximation](https://en.wikipedia.org/wiki/Stirling%27s_approximation) is where.

### Hash tables -- access/search, insert/edit, delete
Hash tables have an amortized complexity of O(1) unless there are collisions. Worst case, if everything is in the same bin, then it is O(n).

Unordered maps and set are implemented using hash tables.

### Singly linked lists
Adding/removing at the beginning is O(1), but adding at the end means search the whole list, therefore O(n). Searching is also O(n).

### Doubly Linked Lists
Store a pointer to the beginning and end. Therefore operations on the end are also O(1).

### Maps and set
[Maps and sets](https://stackoverflow.com/questions/222658/multiset-map-and-hash-map-complexity) are implemented using a red-black tree, a type of balanced binary search tree.

