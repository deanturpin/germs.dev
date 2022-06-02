---
title: Using type traits to check all the esoteric OOP rules
date: 2021-09-13
tags:
- cpp
- tmp
---

# Using type traits to check all the esoteric OOP rules

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <type_traits>

struct A {
virtual ~A(){ std::cout << "~An"; }
int i;
int j;
};

struct B : A {
~B(){ std::cout << "~Bn"; }
};

static_assert(std::has_virtual_destructor<A>::value);
static_assert(std::has_virtual_destructor<B>::value);

int main() {
std::vector<std::unique_ptr<struct A>> vec;

vec.emplace_back(std::make_unique<A>());
vec.emplace_back(std::make_unique<B>());
}
```
https://godbolt.org/z/KbGG1v63M

