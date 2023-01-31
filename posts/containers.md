# STL containers
> Containers replicate structures very commonly used in programming: dynamic
> arrays (`vector`), queues (`queue`), stacks (`stack`), heaps
> (`priority_queue`, `make_heap`), linked lists (`list`), trees (`set`),
> associative arrays (`map`)...

http://www.cplusplus.com/reference/stl/

## Sequence containers
### `vector` `list` `deque` `array` `forward_list`

Modifying a `vector` potentially invalidates all existing iterators. And
inserting an element can cause the whole container to be reallocated -- here be
dragons! It is, of course, doing a new on the heap under-the-hood, but this is
all nicely hidden via RAII. See [A Presentation of the STL Vector
Container](https://www.codeproject.com/Articles/5378/A Presentation of the STL
Vector Container).

`deque` is not guaranteed to store all its elements in contiguous storage
locations but has efficient insertion and deletion of elements at the beginning
and end of a sequence. Adding to a deque doesn't invalidate existing iterators.
See [An In Depth Study of the STL Deque
Container](https://www.codeproject.com/Articles/5425/An In Depth Study of the
STL Deque Container). A `deque` is a `vector` list of fixed-size `vector` chunks.

Unlike the other standard containers, `array` has a fixed size, and also
doesn't have `resize`/`reserve`/`capacity`/`shrink_to_fit` methods.

`forward_list` is a sequence container that allows constant time insert and
erase operations anywhere within the sequence. It has been designed with
efficiency in mind. By design, it is as efficient as a simple handwritten
C-style singly-linked list, and in fact is the only standard container to
deliberately lack a size member.

## Associative containers
### `set` `map` `multiset` `multimap`

`multiset`, `set` and `map` are typically implemented as binary search trees.

`map` is generally slower than `unordered_map` containers to access individual
elements by their key, but it allows the direct iteration on subsets based on
their order.

```cpp
// map implementation
td::_Rb_tree<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, std::pair<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const, int>, std::_Select1st<std::pair<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const, int> >, std::less<std::__cxx11::basic_string<char, std::char_traits<ch
ar>, std::allocator<char> > >, std::allocator<std::pair<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const, int> > >::_M_erase(std::_Rb_tree_node<std::pair<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const, int> >*):
```

```cpp
// set implementation
std::_Rb_tree<int, int, std::_Identity<int>, std::less<int>, std::allocator<int> >::_M_erase(std::_Rb_tree_node<int>*):
```

See [red-black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree).

## Unordered associative containers
### `unordered_multiset` `unordered_map` `unordered_multimap` `unordered_set`

`unordered_set` is faster than `set` to access individual elements
by their keys.

```cpp
// unordered map/set implementation
std::_Hashtable<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >,
```

## Container adapters
### `stack` `queue` `priority_queue` `flat_map` `flat_set`

By default, if no container class is specified for a particular
`priority_queue` class instantiation, the standard container `vector` is used.
`priority_queue` is a heap: Priority Queue is the implementation of Max Heap by default.

## Complexities
- https://alyssaq.github.io/stl-complexities/
- https://www.geeksforgeeks.org/analysis-of-time-and-space-complexity-of-stl-containers/
- [Red-black tree performance](https://www.youtube.com/watch?v=va7GJWpmcwY)

> The map <int, int> M is the implementation of self-balancing Red-Black Trees.
> The unordered_map<int, int> M is the implementation of Hash Table which makes
 the complexity of operations like insert, delete and search to Theta(1).

> Set (set<int> s) is the implementation of Binary Search Trees.
> Unordered set (unordered_set<int> S) is the implementation of Hash Table.
> Multiset (multiset<int> S) is implementation of Red-Black trees.
> It is implemented using the linked list implementation of a stack.
> Queue in STL is implemented using a linked list.
> Vector is the implementation of dynamic arrays and uses new for memory allocation in heap.

