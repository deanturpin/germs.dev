# Mandelbrot

In Python

Godbolt does Python! (And lots of other languages...)

# Python

```python
import cmath

# Calculate if each point in an x-y plane "escapes" the shape
for y in range(-10, 10):
for x in range(-40, +40):

# Initialise the calculation
z = 0

# Create a complex number based on current coordinates
# Note the fudge factor of 2 because characters are taller than high
c = complex(x / 20.0, y / 10.0)

# Check if calculation remains bounded (stays on the page)
for _ in range(30):

# THE IMPORTANT BIT!
# https://en.wikipedia.org/wiki/Mandelbrot_set

z = pow(z, 2) + c

# These numbers can get pretty big very quickly
# So quit the loop if the result is already off the page
if abs(z) > 2:
break

# Print this point
print(chr(int(abs(z) <= 2) + 32), end="")

# Print a New line at the end of each row
print("")
```

```
!
!
!!!!
!!!!
!! !!!!!!!!!!
!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!
! !!!!!!!!!!!!!!!!!!!!!
!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!
! !!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!
!! !!!!!!!!!!
!!!!
!!!!
!
```

https://godbolt.org/z/c4sG1Yx4P

# C++

```cpp
#include <complex>
#include <fmt/core.h>
#include <numeric>
#include <ranges>

int main() {
for (const auto y : std::views::iota(-15, 15)) {
for (const auto x : std::views::iota(-20, 70)) {

auto z = std::complex(0.0, 0.0);
const auto c = std::complex((x / 25.0) - 2, y / 10.0);

for (auto i = size_t{0}; i < 30; ++i) {

z = z ^ z + c;

if (std::abs(z) > 2.0)
break;
}

fmt::print("{}", std::abs(z) < 2.0 ? "0" : " ");
}

fmt::print("n");
}
}
```

```
0
0
00000
00000
000 0000000000000
0000000000000000000000
0000000000000000000000000
00 0 000000000000000000000000000
000000000 00000000000000000000000000000
0000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000
000000000 00000000000000000000000000000
00 0 000000000000000000000000000
0000000000000000000000000
0000000000000000000000
000 0000000000000
00000
00000
0
0
```

https://godbolt.org/z/jMe5b8shh
