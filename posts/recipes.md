---
title: C++ recipes
date: 2020-11-04
tags:
- cpp
- revision
- tricks
---

# C++ recipes

# Operating over a whole container using ranges (C++20)
```cpp
#include <vector>
#include <algorithm>
#include <random>
#include <iostream>

int main() {

const auto printy = [](const auto &vec){
for (size_t i = 0; const auto&v : vec)
std::cout << v << (++i == vec.size() ? "n" : " ");
};

std::vector<int> v(4);
printy(v);

std::ranges::fill(v, -1);
printy(v);

std::ranges::generate(v, std::rand);
printy(v);
}
```

Generates:
```
0 0 0 0
-1 -1 -1 -1
1804289383 846930886 1681692777 1714636915
```
https://godbolt.org/z/31196Kz5z

# Zip two containers
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <ranges>

int main() {
const std::vector<int> a{1, 2, 3};
const std::vector<int> b{4, 5, 6};

std::vector<std::pair<int, int>> zipped;
zipped.reserve(a.size());

const auto zipper = [](const auto& a, const auto& b){ return std::make_pair(a, b); };

std::transform(cbegin(a), cend(a), cbegin(b), back_inserter(zipped), zipper);

std::ranges::for_each(zipped, [](const auto& p)
{ std::cout << p.first << ", " << p.second << "n"; });
}
```
https://godbolt.org/z/7rE9qnjar

# Get the file name out of a path
Concise code to extract everything after the slash (if there is one) without
checking `std::string::npos`. The +1 rounds a "not found" value up to zero if
there's no slash and then `substr` returns the original string.

```cpp
#include <iostream>

int main() {

const std::string full_path = "one/two.jpg";
const std::string just_the_file_name = full_path.substr(full_path.find_last_of('/') + 1);

std::cout << """ << just_the_file_name << ""n";
}
```

# There can only be one -- call a routine only once
Using
[IIFE](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression).
See also
[`std::call_once`](https://en.cppreference.com/w/cpp/thread/call_once).

```cpp
#include <iostream>

void say_hi(){
static const bool said_hi = [](){ std::cout << "hi!n"; return true; }();
}

int main() {

say_hi();
say_hi();
say_hi();
}
```

# Easy timestamp string
```cpp
const auto now = std::chrono::system_clock::to_time_t(std::chrono::system_clock::now());
std::string time = ctime(&now);

// Remove the inexplicable newline
if (!time.empty())
time.pop_back();
```

# A mostly immutable class without declaring everything const
```cpp
int main() {
const struct mostly_immutable {
int one = 1;
int two = 2;
int thr = 3;
mutable int i_can_change = 4;
} a;

a.i_can_change = 5;
}
```

# Using the return value of a std::for_each
```cpp
#include <vector>
#include <string>
#include <iostream>
#include <initializer_list>
#include <iomanip>
#include <algorithm>

auto plus_minus_zero(const std::initializer_list<int> &list) {

struct func {
void operator()(const int i){
if (i > 0)
++results_.positives_;
else if (i < 0)
++results_.negatives_;
else
++results_.zeroes_;
}

struct {
size_t positives_{};
size_t negatives_{};
size_t zeroes_{};
double size_ = sizeof list;
} results_;
};

const auto results = std::for_each(std::cbegin(list), std::cend(list),
func{}).results_;

std::cout << std::fixed << std::setprecision(6)
<< results.positives_ / results.size_ << "n"
<< results.negatives_ / results.size_ << "n"
<< results.zeroes_ / results.size_ << "n";
}

int main() {
plus_minus_zero({1, 2, -1, 5, 0, 0});
}
```
https://godbolt.org/z/3r79z733P

# Parallel std::accumulate
```cpp
#include <vector>
#include <numeric>
#include <execution>

int main() {

const std::vector<int> vec{1, 23, 4, 5, 6, 7, 8};
return std::reduce(std::execution::par_unseq,
vec.cbegin(), vec.cend(), int{});
}
```
https://godbolt.org/z/dEv4TTb6e

# Print a space between elements and a new line at the end
```cpp
#include <vector>
#include <iostream>

int main() {

const std::vector<int> vec{1, 23, 4, 5, 6, 7, 8};

for (size_t i = 0; const auto v : vec)
std::cout << v << (++i == vec.size() ? "n" : " ");
}
```
https://godbolt.org/z/qEnGocPGW

# Removing container elements in C++20
```cpp
#include <vector>
#include <iostream>

int main() {

const auto printy = [](const auto& vec) {
for (size_t i{}; const auto v : vec)
std::cout << v << (++i == vec.size() ? "n" : " ");
};

std::vector<size_t> vec{1, 2, 3, 4, 5, 6, 6, 7};
printy(vec);

std::erase(vec, 1);
printy(vec);

vec.erase(vec.begin() + 2, vec.end());
printy(vec);

// also erase_if

return vec.size();
};
```
https://godbolt.org/z/7xs6johW8

# Check an associative container has an element in C++20
```cpp
#include <map>

int main() {

std::map<int, int> m{
{1, 2},
{2, 2},
{3, 2},
};

return m.contains(4) ? 1 : 0;
}
```
https://godbolt.org/z/defjerKhd

# Get permutations of a container
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
std::vector<int> vec{1, 2, 3};

const auto printy = [](const auto &vec){
for (size_t i = 0; const auto& v : vec)
std::cout << v << (++i == vec.size() ? "n" : " ");
};

for (size_t i{}; i < (vec.size() - 2) + 1; ++i) {
printy(vec);
std::ranges::next_permutation(vec);
}
}
```
https://godbolt.org/z/sc8GY6dT8

