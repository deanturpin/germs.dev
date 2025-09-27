---
tags:
  - algorithms
  - sorting
  - cpp
  - computer-science
---

# Sorting
- [Sorting Algorithms: Speed Is Found In The Minds of People - Andrei Alexandrescu - CppCon 2019](https://www.youtube.com/watch?v=FJJTYQYB1JQ).
- [Comparison-based Lower Bounds for Sorting](https://www.cs.cmu.edu/~avrim/451f11/lectures/lect0913.pdf)
- [Sorting Algorithms on Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [Sorting animation](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)

```cpp
#include <iostream>
#include <ranges>
#include <vector>
#include <list>
#include <algorithm>
#include <random>
#include <iterator>

int main() {

	const auto printy = [](const auto& v) {
		std::cout << "n";
		std::ranges::copy(v, std::ostream_iterator<int>(std::cout, ",n"));
	};

	// Make container of random values
	std::vector<int> v(4);
	std::ranges::for_each(v, [](auto &x){ x = std::rand(); });
	printy(v);

	// Sort it
	std::ranges::sort(v);
	printy(v);

	// Sort it the other way
	std::ranges::sort(v, std::greater<int>());
	printy(v);

	// List has its own sort
	std::list<int> l{std::cbegin(v), std::cend(v)};
	l.sort();
	printy(l);
}
```

https://godbolt.org/z/srjrvoxT6

> Quicksort usually has a running time of nlogn, but is there an algorithm that
> can sort even faster? In general, this is not possible. Most sorting algorithms
> are comparison sorts, i.e. they sort a list just by comparing the elements to
> one another. A comparison sort algorithm cannot beat (worst-case) nlogn running
> time, since nlogn represents the minimum number of comparisons needed to know
> where to place each element.
http://www.cs.cmu.edu/~avrim/451f11/lectures/lect0913.pdf

`std::sort` uses Introsort:
> Introsort or introspective sort is a hybrid sorting algorithm that provides
> both fast average performance and (asymptotically) optimal worst-case
> performance. It begins with quicksort, it switches to heapsort when the
> recursion depth exceeds a level based on (the logarithm of) the number of
> elements being sorted and it switches to insertion sort when the number of
> elements is below some threshold. This combines the good parts of the three
> algorithms, with practical performance comparable to quicksort on typical
> data sets and worst-case O(n log n) runtime due to the heap sort. Since the
> three algorithms it uses are comparison sorts, it is also a comparison sort.

> Introsort is in place and not stable.
https://en.wikipedia.org/wiki/Introsort

> If additional memory is available, stable_sort remains O(n ∗ logn). However, if
it fails to allocate, it will degrade to an O(n ∗ logn ∗ logn) algorithm.
https://leanpub.com/cpp-algorithms-guide

## `std::list`
`std::sort` requires random access to the elements, so `std::list` has its own
sort method, but it still (approximately) conforms to O(n log n). It can be
implemented with merge sort as moving elements is cheap with a linked list.

## Other sorting algorithms
All of these are Θ(n log n) in all cases apart from Timsort has a Ω(n) and
Quicksort has a terrible O(n^2) (if we happen to always pick the worst pivot).
Quicksort is a good all rounder with O(n log n) average case. But it does have
a O(n^2) worst case. It is said that this can be avoided by picking the pivot
carefully but an example could be constructed where the chosen pivot is always
the worst case.

- Mergesort breaks the problem into smallest units then combine adjacent.
- Timsort finds runs of already sorted elements and then use mergesort. O(n) if already sorted.
- Heapsort can be thought of as an improved selection sort.
- Radix sort is a completely different solution to the problem.
- A sorted array is already a heap.

## Considerations
- Size of input
- Type of input (partially sorted, random)

## Quicksort small array threshold
- VS 32
- GNU 16
- clang is 30 for trivially constructible objects, otherwise 6
- Integrate conditionals to avoid branches: `+ (vec.size() & 1)`

