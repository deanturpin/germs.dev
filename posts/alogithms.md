# Algorithms 
See CppCon 2018: Jonathan Boccara: [105 STL Algorithms in Less Than an Hour](https://www.youtube.com/watch?v=2olsGf6JIkU).

## Secret runes
- stable\_
- is\_
- is\_\*\_until

See [Introsort](https://en.wikipedia.org/wiki/Introsort) and [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm).

## Algorithm patterns
- Brute Force
- Divide and Conquer: [Karatsuba’s Integer Multiplication](https://mathworld.wolfram.com/KaratsubaMultiplication.html) -- it is possible to perform multiplication of large numbers in (many) fewer operations than the usual brute-force technique of "long multiplication." As discovered by Karatsuba (Karatsuba and Ofman 1962).
- Decrease and Conquer
- The Greedy Method
- Dynamic Programming
- Backtracking
- "[Branch and bound](https://en.wikipedia.org/wiki/Branch_and_bound) (BB, B&B, or BnB) is an algorithm design paradigm for discrete and combinatorial optimization problems."
- Hill Climbing
- Particle Swarm Optimisation
- Las Vegas
- Monte Carlo
- Reduction (Transformation)
- Preprocessing
- "[Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) is a first-order iterative optimization algorithm for finding a local minimum of a differentiable function."

See [algorithm patterns](https://cs.lmu.edu/~ray/notes/algpatterns/).

## Big-O notation
Big-O notations is a technique to describe the complexity of an algorithm as the data set becomes larger.

- [Big-O Notation](https://github.com/deanturpin/Big-O-Notation)
- [Sort animations](http://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
- [Sorting animation](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)

Be prepared to write code. Remember your merge sort, quick sort, binary search, etc, and be able to write them cold.

| Complexity | name |
| --------------------- | ------------ |
| O(1) | constant |
| O(log n) | logarithmic |
| O(n) | linear |
| O(n log n)=O(log n!) | linearithmic |
| O(n^2) | quadratic |
| O(n^c) | polynomial |
| O(c^n) | exponential |
| O(n!)  | factorial |

See the [Big-O cheat sheet](http://bigocheatsheet.com/) and [time complexity](https://en.wikipedia.org/wiki/Time_complexity)

## Self-balancing binary search trees
A balanced tree is one of height O(log n), where n is the number of nodes in
the tree.

- [Red Black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [B-Tree](https://en.wikipedia.org/wiki/B-tree)
- [k-d tree](https://en.wikipedia.org/wiki/K-d_tree)

## Memory access
That assumes all memory accesses cost the same, which is not a physically
reasonable assumption as we scale n to infinity, and not, in practice, how real
computers work. This argument extends from the observation that computers are
filled with different types of memory (cache, system memory, virtual memory
etc.) in different and limited quantities. Modern operating systems will
position variables into these different systems automatically making memory
access time differ widely as more and more memory is utilized.

## References
- [Selection and insertion sort are actually the same thing](https://www.youtube.com/watch?v=pcJHkWwjNl4)
- [Analysis of algorithms set 3 asymptotic notations](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/)
- [The Intuitive Guide to Data Structures And Algorithms](https://www.interviewcake.com/data-structures-and-algorithms-guide)
- [Stony Brook Algorithm Repository](http://algorist.com/sections/Numerical_Problems.html)

