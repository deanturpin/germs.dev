---
title: Duff's device
subtitle: Manual loop unrolling
date: 2019-10-03
tags:
- revision
- cpp
draft: true
---

# Duff's device

I wouldn't recommend doing this under normal circumstances as you should expect
the compiler to do it but it still makes for ~~alarming~~ interesting reading.

```cpp
#include <cassert>
#include <numeric>
#include <vector>
#include <cstddef>

int main() {

  // Create a container of data to copy
  std::vector<int> to(1000);
  std::iota(std::rbegin(to), std::rend(to), 0);

  // Initialise a container to copy into
  std::vector<int> from(to.size());

  // Create pointers to the beginning of the contiguous data (because vector)
  auto t = to.data(), f = from.data();

  // Calculate number of unrolled loops
  size_t n = (from.size() + 7) / 8;

  // Unroll that loop
  switch (from.size() % 8) {
  case 0:
    do {
      *t++ = *f++;
    case 7:
      *t++ = *f++;
    case 6:
      *t++ = *f++;
    case 5:
      *t++ = *f++;
    case 4:
      *t++ = *f++;
    case 3:
      *t++ = *f++;
    case 2:
      *t++ = *f++;
    case 1:
      *t++ = *f++;
    } while (--n > 0);
  }

  // Check they're identical
  assert(to == from && "Containers not identical");
}
```

https://godbolt.org/z/6Gs1Kefcd

![Yellow octopus stress toy product image](https://images.kogan.com/image/fetch/s--A-M8_3XE--/b_white,c_pad,f_auto,h_502,q_auto:good,w_753/https://assets.kogan.com/images/yellow-octopus/YLO-9339111010099/1-5ff197f6ff-fczvcgbv_2000x2000_99e66aec-7912-4b64-9ac7-e2cac28331fa.jpg)

## References
- [Duff's Device](https://en.wikipedia.org/wiki/Duff%27s_device)
- [Loop unrolling](https://en.wikipedia.org/wiki/Loop_unrolling)

