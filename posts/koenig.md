---
title: ADL
subtitle: Argument dependent lookup
date: 2019-09-17
tags:
- cpp
- revision
- exercise
- graduate
---

# Argument dependent lookup

## Why does this compile?
A one-liner to print a vector to stdout. But why does this compile without the namespace std::?

```cpp
#include <iostream>
#include <vector>
#include <iterator>

int main() {

const std::vector<int> v{1, 2, 3, 4, 5};
copy(cbegin(v), cend(v), std::ostream_iterator<int>(std::cout, "n"));
}
```

Run the code on [Compiler Explorer](https://godbolt.org/z/CiWd6v), Jason Turner on [YouTube](https://www.youtube.com/watch?v=agS-h_eaLj8&edufilter=NULL) and [ADL on Wikipedia](https://en.wikipedia.org/wiki/Argument-dependent_name_lookup). Note: C++14 is the default for the latest GCC (9.2).

## Exercise
Propose some other examples of ADL.
