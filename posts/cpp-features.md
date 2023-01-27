# C++ features

## C++23
See the [presentation](https://www.youtube.com/watch?v=b0NkuoUkv0M) by Marc Gregoire (CppCon 2022).

- Multidimensional array operator: `data[x, y, z]` and `std::mdspan`
- Deducing this (wtf)
- `constevel` -- immediate functions: only execute at compile time
- `uz` literals
- Unicode assigned name
- `std::print`
- `import std;` -- modules
- New container adapters: `std::flat_map` `std::flat_set`
- A standard coroutine generator defined in `<generator>`
- `basic_string::contains()`
- `.contains` for strings and containers | 23 |
- `<stack_trace>`
- `std::expected`
- `std::byteswap`

### std::ranges
- `starts_with()`
- `shift_left()`
- `ranges::to`
- `find_if`
- `contains`
- `contains_subrange`
- `fold_left`

### std::views
- `zip`
- `adjacent`
- `pairwise`
- `chunk`
- `slide`
- `chunk_by`
- `join_with`
- `stride` -- take every nth element
- `repeat`

## C++20
- ranges and views (part one)
- `.contains` for maps
- `.starts_with` for strings

## C++17
- Structured bindings
- Execution policy (although slow to be supported)
- `std::filesystem`
- `std::string_view`

## C++11
- Range-based for loops
- Brace initialisers
- `constexpr` (catching UB)

