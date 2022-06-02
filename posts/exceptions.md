---
title: Exceptions in destructors
date: 2019-09-26
tags:
- cpp
- exceptions
- graduate
---

# Exceptions in destructors
In C++11 destructors [default to
`noexcept`](https://bitbucket.org/codeimproved/qslog/issues/14/in-c-11-destructors-default-to-noexcept)
so you have to go out of your way to make them throw. See [throwing exceptions
in a destructor](https://www.kolpackov.net/projects/c++/eh/dtor-1.xhtml).

> You can throw an exception in a destructor, but that exception must not leave
> the destructor; if a destructor exits by emitting an exception, all kinds of
> bad things are likely to happen because the basic rules of the standard
> library and the language itself will be violated. Don’t do it.
https://isocpp.org/wiki/faq/exceptions#ctor-exceptions

```cpp
#include <exception>
#include <iostream>
#include <vector>

// Note the braces
void exception1() try { throw 1; } catch (int e) {
std::cout << "Caught " << e << std::endl;
} catch (const std::out_of_range &oor) {
std::cout << "Caught OORn" << oor.what() << std::endl;
} catch (const std::exception &e) {
std::cout << "Caught " << e.what() << std::endl;
} catch (...) {
std::cout << "Caught ellipsis" << std::endl;
}

void exception2() {

using namespace std;

// Simple
try {
throw 2;
} catch (int e) {
cout << "Caught exception " << e << endl;
}

try {
vector<int> vec(5);
vec.at(6);
} catch (exception &e) {
cout << "Caught exception " << e.what() << endl;
}
}

int main() {

exception1();
exception2();
}
```
