---
title: static
date: 2020-12-07
tags:
- cpp
- revision
---

# static

> Dependencies on static variables in different translation units are, in
> general, a code smell and should be a reason for refactoring.
http://www.modernescpp.com/index.php/c-20-static-initialization-order-fiasco

- `const` and `static` variables don't have external linkage; non-const global
variables have external linkage by default; const global variables have
internal linkage by default
- Variables with static storage duration are zero initialised. According to
the standard: "All objects which do not have dynamic storage duration, do not
have thread storage duration, and are not local have static storage duration".
- Functions have external linkage by default
- Only `static_cast` (or C-style casts) can be used to cast an `int` to an
`enum`. Only `reinterpret_cast` (or C-style casts) can be used to cast an
`int` to a pointer or a pointer to an `int`.

> If an object or function inside such a translation unit has internal linkage,
> then that specific symbol is only visible to the linker within that
> translation unit. If an object or function has external linkage, the linker
> can also see it when processing other translation units. The static keyword,
> when used in the global namespace, forces a symbol to have internal linkage.
> The extern keyword results in a symbol having external linkage.

- [Always use auto](https://herbsutter.com/2013/08/12/gotw-94-solution-aaa-style-almost-always-auto/)
- Dynamic Storage Duration
- Automatic Storage Duration

- [What’s the “static initialization order ‘fiasco’
(problem)”?](https://isocpp.org/wiki/faq/ctors#static-init-order)
- [C++ scoped static initialization is not thread-safe, on purpose!
(pre-C++11)](https://devblogs.microsoft.com/oldnewthing/20040308-00/?p=40363#:~:text=Starting%20in%20C%2B%2B11,time%20execution%20reaches%20their%20declaration.)
- [constinit](https://www.youtube.com/watch?v=o0z3KT4gW7k)
- [static vs std::call_once vs double checked
locking](https://stackoverflow.com/questions/26013650/threadsafe-lazy-initialization-static-vs-stdcall-once-vs-double-checked-locki/27206650#:~:text=The%20tradeoff%20is%20that%20statics,call_once%20on%20these%20higher%20platforms)
- [DCLP](https://preshing.com/20130930/double-checked-locking-is-fixed-in-cpp11/): Double-Checked Locking Pattern

## Anonymous namepsaces
Use to declare many things with internal linkage.

```cpp
namespace {
int a = 0;
int b = 0;
int c = 0;
}
```

See [linkage](http://www.goldsborough.me/c/c++/linker/2016/03/30/19-34-25-internal_and_external_linkage_in_c++/).
