---
title: C++ flags
date: 2020-05-17
tags:
- c++
- compiler
- gcc
- c++20
draft: true
---

# C++ compiler flags
## Standard g++
```
--std=c++2b --all-warnings --extra-warnings --pedantic-errors -Werror
```

## Extra flags that aren't enabled by default
- -Wshadow
- -Wfloat-equal 
- -Weffc++ 
- -Wdelete-non-virtual-dtor 
- -Warray-bounds 
- -Wattribute-alias 
- -Wformat-overflow 
- -Wformat-truncation 
- -Wmissing-attributes 
- -Wstringop-truncation 
- -Wdeprecated-copy 
- -Wclass-conversion 

## References
- [gcc flags](https://gcc.gnu.org/onlinedocs/gcc-4.5.2/gcc/Optimize-Options.html)
