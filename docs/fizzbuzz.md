---
title: FizzBuzz
draft: true
---

# FizzBuzz

https://godbolt.org/z/bbnEMWYKT


```cpp
#include <string>
#include <cassert>
#include <iostream>

const std::string fizzbuzz_3_5 =
R"(1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
)"
;


std::string fizzbuzz1(const size_t f, const size_t b, const size_t n){

std::string result;

for (size_t i = 1; i <= n; ++i){

if (i % f == 0 && i % b == 0)
result += "FizzBuzzn";
else if (i % f == 0)
result += "Fizzn";
else if (i % b == 0)
result += "Buzzn";
else
result += std::to_string(i) + "n";

}

return result;
}

int main(){

assert(fizzbuzz1(3, 5, 15) == fizzbuzz_3_5);

}
```

