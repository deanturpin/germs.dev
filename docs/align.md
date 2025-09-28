---
tags:
  - cpp
  - memory
  - alignment
  - performance
---

# C++ memory alignment

```cpp
#include <fmt/core.h>

int main() {

  struct S {
    uint8_t : 8;
    uint32_t x;
  } __attribute__((packed));

  fmt::print("alignof {} sizeof {}n", alignof(S::x), sizeof(S::x));
  fmt::print("alignof {} sizeof {}n", alignof(S), sizeof(S));
}
```

https://godbolt.org/z/oPK4s15xv

Returns:

```text
alignof 1 sizeof 4
alignof 1 sizeof 5
```

