---
tags:
  - cpp
  - programming
  - essentials
  - reference
---




## C++14

## Auto

Type inference is a game changer. Essentially you can simplify complicated (or
unknown) type declarations with `auto`. But it can be a balance of convenience
over readability.

```cpp
int x1 = 5; // Explicit
auto x2 = 5; // What's the underlying type?

std::vector<std::string> moon = {"Don't", "look", "at", "the", "finger"};
auto finger = moon.front();
```

And there are a few perfectly valid gotchas. Let's create a variable and a
reference to it, updating `y2` (below) also updates `y1` as expected.

```cpp
int y1 = 1;
int &y2 = y1;
y2 = 2;
```

But how does `auto` deal with references? Do you get another reference or a
copy? (Hint: auto "decays" to the base type -- no consts, no refs).

```cpp
int y1 = 1;
int &y2 = y1;
auto y3 = y2;
auto &y4 = y2;
```

## Brace initialisers
These take a bit of getting used to but they do give you extra checks. For
example the compiler coughs a "narrowing" warning for the following.

double wide{1.0};
float narrow{wide};

## Initialiser lists
We used to create a vector and then push elements onto it (ignoring the
potential copy overhead of [resizing
vectors](https://deanturpin.gitlab.io/post/vector)). But with initialiser lists
you can populate containers much more concisely.

Initialise a container.

```cpp
std::list v1{1, 2, 3, 4, 5, 6};
```

Initialise a pair. You can also use them instead of `std::make_pair`.

```cpp
std::list v1{1, 2, 3, 4, 5, 6};
std::pair<int, std::string> p1{1, "two"};
```

Initialise more complex types.

```cpp
std::list v1{1, 2, 3, 4, 5, 6};
struct S {
int x;
struct Foo {
int i;
int j;
int a[3];
} b;
};

S s1 = {1, {2, 3, {4, 5, 6}}};
```

## Range-based for loops
Clumsy explicit iterator declarations can be cleaned up with `auto`.

```cpp
for (std::list::iterator i = v2.begin(); i != v2.end(); ++i)
*i += 1;

for (auto i = v2.begin(); i != v2.end(); ++i)
*i += 1;
```

In fact we can drop the iterators altogether and avoid that `*i` dereferencing
idiom.

```cpp
for (auto &i : v4)
i += 1;
```

Note that you don't have access to the current index (until C++20). Which isn't
necessarily a bad thing.

## Lambda expressions
Think function pointers but a much friendlier implementation. Call like a
regular function or pass them as a parameter. You can also define them in-place
so you don't have to go hunting for the implementation like you might if you
passed a function name. Here's another new for-loop variation too. Note the use
of `std::cbegin()` rather than the method.

```cpp
const auto printer = []{ std::cout << "I am a first-class citizenn"; return; };

// Call like a function
printer();

// In-place lambda definition
const std::vector d{0.0, 0.1, 0.2};

std::for_each(std::cbegin(d), std::cend(d),
[](const auto &i) { std::cout << i << "n"; });
```

## Threads
STL threads are much neater than the old POSIX library but futures are really
interesting and let you return the stuff you're interested in much more easily.

Let's define a processor-heavy routine as a lambda. Here the return has been
declared explicitly.

```cpp
const auto complicated = []() -> int { return 1; };
```

And then push our complicated routine into the background and get on with
something else. Note we don't need to define what `f` is thanks to `auto`.
(It's actually a `std::future`.)

```cpp
auto f = std::async(std::launch::async, complicated);
```

When we're ready, we block to get the value. We could change the return type of
`complicated()` and nothing else needs to change.

```cpp
std::cout << f.get() << "n";
```

### Digit separators
If you're defining hardware interfaces then you'll probably have register maps
defined as hexadecimals. Using digit separators can help improve readability in
some cases.

```cpp
int reg1 = 0x5692a5b6;
int reg2 = 0x5692'a5b6;
double reg3 = 1'000.000'001;
```

You can even define things in binary if it's clearer. And also specify the size
of a type explicitly – a 32-bit integer, say – rather than letting the compiler
decide.

```cpp
const uint32_t netmask{0b11111111'11111111'11111111'00000000};
```

## Type aliases
Create type-safe typedefs with _using_. Note the trailing cluster of
angle-brackets are parsed correctly in C++11 (no need to insert spaces).

using container_t = std::vector<std::pair<std::string, std::string>>;
container_t safe;

## Raw strings
Avoid clumsy escape characters with raw strings.

```cpp
const std::string regex{R"(
^                                             # start of string
(                                             # first group start
  (?:
    (?:[^?+*{}()[\]\\|]+                      # literals and ^, $
     | \\.                                    # escaped characters
     | \[ (?: \^?\\. | \^[^\\] | [^\\^] )     # character classes
          (?: [^\]\\]+ | \\. )* \]
     | \( (?:\?[:=!]|\?<[=!]|\?>)? (?1)?? \)  # parenthesis, with recursive content
     | \(\? (?:R|[+-]?\d+) \)                 # recursive matching
     )
    (?: (?:[?+*]|\{\d+(?:,\d*)?\}) [?+]? )?   # quantifiers
  | \|                                        # alternative
  )*                                          # repeat content
)                                             # end first group
$
)"};
```

## Smart pointers
You no longer need to use new and delete explicitly. Smart pointers clean up
after themselves when they go out of scope: Resource Allocation Is
Initialistion (RAII).

## RAII
Used by:

- `std::vector`
- `std::string`
- `std::thread`

The STL also offers wrappers to manager RAII:
> std::unique_ptr and std::shared_ptr to manage dynamically-allocated memory
> or, with a user-provided deleter, any resource represented by a plain
> pointer; std::lock_guard, std::unique_lock, std::shared_lock to manage
> mutexes.

See [CPP Reference](https://en.cppreference.com/w/cpp/language/raii).

## C++17

### Optional types
This overcomes the problem of defining a "not initialised" value (-1) which
will inevitably used to index an array and cause an explosion. Your functions
can now effectively return a "no result". Let's create a container with some
default entries.

```cpp
std::deque<std::optional> options{0, 1, 2, 3, 4};
```

Then make the one at the back undefined.

```cpp
options.back() = {};
```

And count the valid entries with the help of a lambda expression.

```cpp
const auto c = std::count_if(std::cbegin(options), std::cend(options),
[](const auto &o) { return o; });
```

### Structured bindings
You might declare intermediate variables to make the first/second more meaningful below.

```cpp
std::pair<std::string, std::string> chuckle{"to me", "to you"};
std::cout << chuckle.first << ", " << chuckle.second << "n";
```

But you can also do it in one expression with structured bindings.

```cpp
auto [barry, paul] = chuckle;
std::cout << barry << ", " << paul << "n";
```

### const everything
Not a modern feature of course, but: **make everything constant**. You should
be prefixing `const` as a matter of course and then removing it when you have
to: it’s much easier to reason about code when the data are immutable. In an
ideal world everything would be constant -- like
[Haskell](https://en.wikipedia.org/wiki/Haskell_(programming_language) -- but
it’s a balance of reason and getting things done.

### Standard literals

```cpp
using namespace std::complex_literals;
using namespace std::string_literals;
using namespace std::chrono_literals;

// auto deduces complex
auto z = 1i;

// auto deduces string
auto str = "hello world"s;

// auto deduces chrono::seconds
auto dur = 60s;

// Or if you just want them all
using namespace std::literals
```

### Tuples
Like pairs but better. Arbitrary collection of heterogeneous types. You can
retrieve values by index (which looks a bit odd) or even by type!

```cpp
std::tuple<std::string, double, int> h1{"one", 2.0, 3};
std::string << " " << std::get<0> << " " << std::get<1> << "n";
```

### std::byte
When you really want something to be a byte and not something that looks a bit
like a char.

```cpp
std::byte b1{4};
```

## References
- https://hackingcpp.com/cpp/cheat_sheets.html
- https://www.stroustrup.com/bs_faq.html
- https://github.com/isocpp/CppCoreGuidelines
- [Modern C++ features](https://github.com/AnthonyCalandra/modern-cpp-features)
- Guidelines by [Stroustrup and Sutter](https://github.com/isocpp/CppCoreGuidelines)
- [Language feature support by compiler](https://en.cppreference.com/w/cpp/20)
- https://github.com/ericniebler/range-v3
- [Which C++ features are coming](https://hackaday.com/2019/07/30/c20-is-feature-complete-heres-what-changes-are-coming/)
- https://isocpp.org/
- https://herbsutter.com/
- https://channel9.msdn.com/Shows/Going+Deep/Herb-Sutter-C-Questions-and-Answers#time=0h18m20s
- https://leanpub.com/bookstore?search=c%2B%2B&type=all&category=c_and_cpp#BookstoreTop
- https://www.cppstories.com/
- https://devblogs.microsoft.com/oldnewthing/author/oldnewthing

