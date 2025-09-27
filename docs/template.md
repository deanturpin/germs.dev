# Template Metaprogramming

- Move computations from run-time to compile-time
- Code generation
- Enable self-adapting code (portability, efficiency)
- Facilitate domain-specific programming
- Express complex software patterns and concepts in a more straightforward way

# Conventions
- Numeric results `::value`
- Type result `::type`

```cpp
template <typename T> struct SizeOfT {
enum { value = sizeof(T) };
};
```

```cpp
template <typename T> struct TPtr {
typedef T* type;
};
```

# Template args can be types or numbers

```cpp
template <size_t N> struct IsEven {
enum { value = (N %2 ) ? 0 : 1 };
};
```

# Metafunctions
- `remove_cv`

# NOT tools of metaprogramming
- No variables
- Which means no for loops: use recursion

# constexpr
- Purely numeric computations almost always quicker with `constexpr`
- `constexpr` also has recursion depth limits but higher than templates and faster: gcc template recusion depth 10000
- Use precomputed static values when it's simpler (pi)

# if then else
- No loops but `std::conditional`

```cpp
template <size_t N> struct IsPower2 {
enum { value = (N & (N - 1)) == 0 };
};

static_assert(IsPower2<N>::value, "N must be 2^n");
```

- `remove_ptr` returns the type if it's not a pointer

```cpp
is_pointer
is_reference
has_member_function
std::integral_constant // wrap constant with its type
```

## std::bool_constant // template alias
true_type and false_type are called nullary metafunctions because they have no params.

```cpp
true_type::value
false_type::value
```

# SFINAE
Substitution failure is not an error: this is where compiler errors go to hide.

## Argument non-evaluation
- Operands of sizeof, decltype, declval, alignof, typeid and noexcept are never evaluated
- Not even at compile time

# constexpr
`constexpr` silently decays to not-compile time unless you use it in a context
that needs to be known at compile time: within square brackets.

# Definition
See [CPP reference](https://en.cppreference.com/w/cpp/language/templates).

A template is a C++ entity that defines one of the following:

- A family of classes (class template), which may be nested classes
- A family of functions (function template), which may be member functions
- An alias to a family of types (alias template) (since C++11)
- A family of variables (variable template) (since C++14)
- A concept (constraints and concepts) (since C++20)

# Metafunctions
- Technically a class with zero+ template params and zero+ return types and
  values
- Convention is that a metafunction should return one thing (like a regular
  function)

# Example traits
## Cpp17UnaryTypeTrait
- Class template
- One template argument (mostly)
- Cpp17DefaultConstructible
- Cpp17CopyConstructible
- Publiclly and unambiguously derived from a specialisation of
  std::integral_constant

## Cpp17UnaryTypeTrait
- As above
- But two arguments

## Cpp17TransformationTrait
- Class template
- one template arg
- Define a publicy accessible nested type name "type"
- No default/copy constructible req
- No inheritance req
- `remove_const`

## Undefined behaviour
- Do not specialise standard type traits
- be careful when using incomplete types

# Type metafunctions
- Workhorse (expectially with advent of constexpr)
- Returns a type
- `std::type_identity` (C++20)
- value metatfunctions use variable templates ending with "\_v"

# Explicit spectialisation

```cpp
template <> // explicit speciailisation
```

# Printing the type

```cpp
std::cout << typeid(Type1).name() << 'n';
```

# Compiler support
Now most compilers implement traits with intrinsics.

# Primary type categories (traits)
All inherit from either `true_type` or `false_type`, and all should yield the
same result in light of cv qualifiers.

For any given type T, exactle one of the primary type categories shall yield
`true_type`.

```cpp
is_void
is_null_pointer
is_integral
is_floating_point
is_array
etc
```

Equals combinatorial explosion!

So...

## Metafunction abstractions
- Treat metafunction programming like regular programming
- `blah_t` is invoking blah

# Function overload resolution
- decltype: compiler, don't call this function but what type would it return?
- declval: gives a reference to something as if you had created one
- tag despatch

# Comparisons with auto in C++20
- `auto` uses the same rules as template type params
- `auto` will never deduce a reference
- constness will be deduced
- decltype(auto) will deduce a reference (should only see in very special cases)
- Generally prefer auto (according to Jason Turner)
- Value types are always copies

These generate the same code:

```cpp
template <typename T>
T func(T t) {
  return t;
}

auto func2(auto t) {
  return t;
}
```

See [Jason Turner](https://www.youtube.com/watch?v=tn69TCMdYbQ).

# Other C++ standards
- International standard on Mathematical Special Functions in C++
- C++ template metaprogramming uses template instatiation to drive compile-time
  evalulation
- Template metapgrammamers exploit this machinary to improve a) source code
  flexibility b) runtime performance
- at compile time can't rely on mutabilty, virtual functions (runtime
  dispatch), other RTTI, no variables etc: not hard but a difference in
mindset... no runtime!
- Call syntax is a "request for the published value"

```cpp
template<int N>
struct abs {
  static_assert (N != INT_MIN); // 2s comp
  static constexpr int value = (N < 0) ? -N : N; // initialise value not assign, takes place of return
};

// call
abs<n>value // instantiation yields a complile-time constant
```

## Compile time recursion: metafunction that calls itself

```cpp
template <unsigned M, unsigned N>
  struct gcd {
  static int const value = gcd<N, M%N>::value; // per Euclid
};
```

Suppply base case with a specialisation

```cpp
template <unsigned M>
struct gcd<M, 0>{
  static_assert (M!=0);
  static int const value = M;
};
```

## What's the relationship between constexpr functions and templates?
- Familiar syntax
- metafunction is a struct -- can make things public with a struct (not a
  constexpr function)
- Structs offer public member function decclarations
- Can write a template that takes a type as an argument: e.g., size of can take
  a type

See also [Walter E. Brown](https://www.youtube.com/watch?v=Am2is2QCvxY).

## Identity metafunction

```cpp
template <class T>
struct type_is {using type = T};
```

- std::conditional -- compile time IF
- one case you can have a type for true or nothing otherwise: enable_if

```cpp
enable_if<false, ...>::type -- always an error? No! Welcome to SFINAE
```

## value
`void` is one of the 15 types that C++ describes.

```cpp
is_void<T>::value // since TR1
bool(is_void<T>{}) // instantiate/cast C++11
is_void<T>{}() // variable templates C++14
is_void_v<T> // value returning metafunctions C++17
```

```cpp
using true_type = bool_constant<true>;
using false_type = bool_constant<false>;
```

# Concepts
- Solid math foundation: solid, well-baked idea
- `integral_constant`: inherit from provides more options
- `bool_constant`

# First parameter packs

```cpp
template <class T, class... P0toN>
struct is_one_of; // declaration not implementation
```

```cpp
// base cases
struct is_one_of<T> : false_type{};
struct is_one_of<T, T, P1toN...> : true_type{};
struct is_one_of<T, P0, P1toN>
: is_one_of<T, P1toN...>{};
```

# Not evaluated
`sizeof`, `typeid`, `decltype` and `noexcept` are never evaluated, not even at compile time.
- No code is generated
- Don't need a definition
- `decltype( foo(declval<T>{}) )`

# Examples
- [class template](https://godbolt.org/z/MzcEe58W3)
- [Value identity](https://godbolt.org/z/fcP9hPzvG)
- [\_t template](https://godbolt.org/z/YbhYqvnY3)
- [is\_void](https://godbolt.org/z/KzhbjMvY7)
- [conditional](https://godbolt.org/z/xzTjG44b6)
- [remove cv](https://godbolt.org/z/zWe88oMYs)

## References
- https://www.youtube.com/watch?v=CZi6QqZSbFg
- https://www.youtube.com/watch?v=tiAVWcjIF6o
- http://vitiy.info/functional-pipeline-in-c11/

