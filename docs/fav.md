---
title: Favourite C++ features
subtitle: And wish list
date: 2020-12-02
tags:
- c++
- cpp
- revision
- stl
---

# Favourite C++ features
## C++17
- Boost filesystem
- execution policy: parallel algorithm support for range-based for loops -
potential for easily parallelsing existing code
- structured bindings
- clamp
- std::optional
- `[[maybe_unused]]`

## C++20
### Concepts
- Concepts are a revolutionary approach for writing templates! They allow you
to put constraints on template parameters that improve the readability of
code, speed up compilation time, and give better error messages.

C++20 gives us language support (new keywords - requires, concept) and a set of predefined concepts from the Standard Library.

In other words, you can restrict template parameters with a “natural” and easy
syntax. Before C++20, there were various ways to add such constraints. See my
other post Simplify Code with if constexpr and Concepts in C++17/C++20 - C++
Stories.

https://www.cppstories.com/2021/concepts-intro/

```cpp
template <typename T>
void print(const std::vector<T>& vec) {
for (size_t i = 0; auto& elem : vec)
std::cout << elem << (++i == vec.size() ? "n" : ", ");
}
```

```cpp
void print2(const std::vector<auto>& vec) {
for (size_t i = 0; auto& elem : vec)
std::cout << elem << (++i == vec.size() ? "n" : ", ");
}
```

### Ranges and views
The ranges library provides components for dealing with ranges of elements,
including a variety of view adapters: immutable views of things; a nod to
strongly typed, const languages like Haskell, composing syntax.

### Coroutines
A new stackless threading model that also allows lazy evaluation of infinite
sequences.

### Misc
- `contains()` to check if a key is present in an associate container, rather
than `count()` or `find()` which always search the whole container
- spaceship operator
- range based for loops with initialiser
- bit header
- https://en.cppreference.com/w/cpp/utility/source_location
- https://en.cppreference.com/w/cpp/numeric/constants

## Wish list
See the [compiler support matrix](https://en.cppreference.com/w/cpp/20).

- `std::format`
- modules - wait for clang12, gcc11

### Modules
Look interesting but not available until clang-12.

- https://www.bfilipek.com/2018/11/parallel-alg-perf.html
- https://gcc.gnu.org/wiki/cxx-modules
- https://clang.llvm.org/docs/Modules.html
- https://vector-of-bool.github.io/2019/03/10/modules-1.html
- https://en.cppreference.com/w/cpp/language/modules
