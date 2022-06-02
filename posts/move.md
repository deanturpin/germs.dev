---
title: Get a std::move on
subtitle: Move semantics in C++
date: 2021-09-16
tags:
- cpp
- optimisations
---

# Get a std::move on

- You cannot move from a const thing: not allowed to mutate
- Auto-generated constructors do not have strong exception guarantees
- Adding a custom empty destructor prevents the move constructors being generated automatically
- Fundamental types are copied when moved as they don't handle resources
- Move is used when returning from a function or we make a variable an rvalue with `std::move`
- `&&` modifier indicates parameter is an object that we intend to move from instead of copying

