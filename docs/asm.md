---
tags:
  - asm
  - programming-languages
  - compilers
---

# Assembly
See [article](https://queue.acm.org/detail.cfm?id=3372264) by Matt Godbolt.

> strength reduction: taking expensive operations and transforming them to use
> less expensive ones

```bash
g++ main.cxx -O2 -std=c++23 -c -S -o - | c++filt | grep -vE '\s+\.'
```

