# std::format

```cpp
#include <numeric>
#include <vector>
#include <fmt/core.h>
#include <fmt/ranges.h>

void align() {

struct S {
uint8_t : 8;
uint32_t x;
} __attribute__((packed));

fmt::print("alignof {} sizeof {}n", alignof(S::x), sizeof(S::x));
fmt::print("alignof {} sizeof {}n", alignof(S), sizeof(S));
}

void print_container() {

std::vector<uint32_t> v(10);
std::iota(begin(v), end(v), 3);

fmt::print("{}n", v);
}

int main() {
align();
print_container();
}
```

Output:

```
alignof 1 sizeof 4
alignof 1 sizeof 5
[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
