# C++ features
- https://devdocs.io/cpp/23
- https://en.wikipedia.org/wiki/C%2B%2B23
- https://en.wikipedia.org/wiki/C%2B%2B20
- https://en.wikipedia.org/wiki/C%2B%2B17
- https://turpin.one/posts/fav.html
- https://turpin.one/posts/cpp-features.html

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
- extended `constexpr` for optional and variant

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
- `iota` -- infinite views may be more performant as no boundary check

### What's missing?
In the standard but not supported yet.

- `ranges::to`
- `<print>`

## C++20
- ranges and views (part one)
- `.contains` for maps
- `.starts_with` for strings

### Big news but haven't tried them
- coroutines
- modules
- concepts

## C++17
- Structured bindings
- Execution policy (although slow to be supported)
- `std::filesystem`
- `std::string_view`
- `std::clamp`

## C++11
- Range-based for loops
- Brace initialisers
- `constexpr` (catching UB)

