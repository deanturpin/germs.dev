# GCC compiler options

```makefile
# Standard
--std=c++2a --all-warnings --extra-warnings

# Things that aren't added by default
-Wshadow -Wfloat-equal -Weffc++ -Wdelete-non-virtual-dtor -Warray-bounds -Wdeprecated-copy
-Wattribute-alias -Wformat-overflow -Wformat-truncation -Wclass-conversion
-Wmissing-attributes -Wstringop-truncation

# Some optimisation but you can still debug it
-Og
```

```
-fwhole-program

    Assume that the current compilation unit represents the whole program being compiled. All public functions and variables with the exception of main and those merged by attribute externally_visible become static functions and in effect are optimized more aggressively by interprocedural optimizers.
```

See [gcc documentation](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html).
