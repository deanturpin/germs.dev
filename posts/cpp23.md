# C++23 features

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
- `<stack_trace>`
- `std::expected`
- `std::byteswap`

## std::ranges
- `starts_with()`
- `shift_left()`
- `ranges::to`
- `find_if`
- `contains`
- `contains_subrange`
- `fold_left`

## std::views
- `zip`
- `adjacent`
- `pairwise`
- `chunk`
- `slide`
- `chunk_by`
- `join_with`
- `stride` -- take every nth element
- `repeat`
