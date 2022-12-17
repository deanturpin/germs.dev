---
title: Modern C++
date: 2019-09-15
tags:
- revision
- cpp
---

# Modern C++

## Modules (C++20)
"Modules are orthogonal to namespaces."

## lvalues and rvalues
An lvalue refers to an object that persists beyond a single expression. You can
think of an lvalue as an object that has a name. All variables, including
nonmodifiable (const) variables, are lvalues. An rvalue is a temporary value
that does not persist beyond the expression that uses it.

A function call can be an lvalue if and only if the return value is a reference.

## Boost versus STL
- [Should I become proficient in STL before learning Boost?](https://stackoverflow.com/questions/548751/should-i-become-proficient-with-stl-libraries-before-learning-boost-alternatives)
- [Comparing C++ and Boost](https://insights.dice.com/2013/03/15/comparing-the-c-standard-and-boost-2/)

## Casts
- `static_cast`
- `reinterpret_cast`
- `dynamic_cast`
- `const_cast`

Arrays can be implicitly converted to pointers without casting: there is no
implicit conversion from pointers to arrays. `int*` can be implicity converted
to `int const*`: there is no implicit conversion from int `const*` to `int*`.

You _can_ static cast a derived class pointer to a base class pointer but not the
other way around.

## Rule of three/five
If you declare any of copy, copy assignment or destructor then you should
declare them all. Similarly, for C++11 onwards: rule of 5.

See [wiki/Rule of
three](https://en.wikipedia.org/wiki/Rule_of_three_%28C%2B%2B_programming%29).

- C++: Understand how rule of 5 (rule of 3 in pre-C++11) is the best way to
write exception-safe classes. Understand why it's a good idea even without
exceptions.
- Function local variables are keynote.md accessible in the try handler.

See [rule of
three/five/zero](https://en.cppreference.com/w/cpp/language/rule_of_three).

```cpp
class base_of_five_defaults
{
public:
base_of_five_defaults(const base_of_five_defaults&) = default;
base_of_five_defaults(base_of_five_defaults&&) = default;
base_of_five_defaults& operator=(const base_of_five_defaults&) = default;
base_of_five_defaults& operator=(base_of_five_defaults&&) = default;
virtual ~base_of_five_defaults() = default;
};
```

## The rule of the big four and a half
https://blog.feabhas.com/2015/01/the-rule-of-zero/

- If you have written a (non-default) destructor for a class you should
implement the copy constructor and assignment operator for the class; or mark
them as deleted.
- Similarly, if you have written either a (non-default) copy constructor or
assignment operator for the class you must write a destructor.
- If your class can be moved you must implement both the move constructor and
move assignment operator; or mark them as deleted.

## Classes and structures
The difference between a `class` and a `struct` is only the default accesses
specifier: `public:` for `struct` and `private:` for `class`.

## noexcept
- Make destructors noexcept
- Mark move constructor noexcept

## Linkage
See [post/static](/post/static).

## References
- https://llvm.org/docs/CodingStandards.html
- https://google.github.io/styleguide/cppguide.html
- http://www.phaedsys.org/principals/programmingresearch/prdata/JSF++_%20Rev_D_JUN07.pdf
- https://api.csswg.org/bikeshed/?force=1&url=https://raw.githubusercontent.com/vector-of-bool/pitchfork/develop/data/spec.bs
- [C++ guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)
- [C++ guidelines support library](https://github.com/microsoft/GSL)
- [Joining lists](http://forums.codeguru.com/showthread.php?335862-appending-std-list-to-the-end-of-another-std-list)
- [Smart pointers](http://www.umich.edu/~eecs381/handouts/C++11_smart_ptrs.pdf)
- [Modification to the definition of plain old data](https://en.wikipedia.org/wiki/C%2B%2B11#Modification_to_the_definition_of_plain_old_data)
- https://github.com/cplusplus/draft
- https://github.com/lewissbaker/cppcoro
- https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md
