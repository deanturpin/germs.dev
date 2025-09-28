---
tags:
  - geography
  - flags
  - countries
  - reference
---




# Compiler Flags Reference

> tl;dr
> Latest version here: https://flags.germs.dev/

## Standard g++

```bash
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
