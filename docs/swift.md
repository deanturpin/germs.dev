---
tags:
  - swift
  - programming-languages
  - mobile-development
---

# Swift
See [the Swift docs](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html).

## Initial observations
- Assertions are quite nice
- Specifying the param for function seems quite odd compared to positional calls
- Easy to declare immutable things
- Equivalent of structured bindings is good

```swift
// Declare constant
let n = 2
let 🐶 = "woof" // wtf

// Declare variables
var m = 3, o = 3
m = 4

// Type annotations
var welcomeMessage: String
// welcomeMessage = 0 // error
welcomeMessage = "hi"

print(welcomeMessage)

var red, green, blue: Double
red = 1 // initialised here with an integer

print("red is \(red)")

// booleans
let thisisafact = true
if (thisisafact) {
    print("fact is \(thisisafact)")
}

// tuples
let codes = (404, "not found")
print(codes)

// partial assign with underscore
let (_, str) = codes
print(str)

let http200Status = (statusCode: 200, description: "OK")
print(http200Status)


// assertions
let x = 4
assert(x > 0, "greater than zero")
precondition(x > 0, "greater than zero")

// Declare function
func square(n: Int) -> Int {
    return n * n
}

let result = square(n: 2)
print("result of square is \(result)")

func factorial(n : Int) -> Int {
    if (n == 1) {
        return 1
    }
    else {
        return n * factorial(n: n - 1)
    }
}

assert(factorial(n: 1) == 1)
assert(factorial(n: 2) == 2)
assert(factorial(n: 3) == 6)
assert(factorial(n: 4) == 24)

// String concatenation
func repeater(c : String, n : UInt) -> String {
    if (n == 0) {
        return String("")
    }

    if (n == 1) {
        return c
    }

    return c + repeater(c : c, n : n - 1)
}

assert(repeater(c : "x", n : 0) == "")
assert(repeater(c : "x", n : 1) == "x")
assert(repeater(c : "x", n : 4) == "xxxx")
assert(repeater(c : "ab", n : 4) == "abababab")
print(repeater(c : "ab", n : 4))
```

# ChatGPT says

This document focuses on the *practical, day-to-day differences* you’ll feel when moving to Swift from a long C++ background. It’s less about syntax and more about how your **mental model of program structure, ownership, and flow** will change.

---

## 1. Memory Management: You Stop Owning Lifetimes Directly

**C++ mindset:**

* RAII
* Deterministic destruction
* Stack vs heap matters everywhere
* Move/copy semantics are explicit design tools

**Swift reality:**

* Most reference types use **ARC (Automatic Reference Counting)**
* You still care about lifetimes, but failure modes shift

Key differences:

* You think in terms of **reference cycles** (`strong` / `weak` / `unowned`) instead of deletes
* Deinitialization is *not* tied to lexical scope the way C++ destructors are
* Tight timing assumptions around destruction are discouraged

**Important shift:** Swift encourages modeling data as **value types** (`struct`, `enum`) to avoid ARC entirely where possible.

---

## 2. Value Semantics Are the Default (and Very Powerful)

Swift aggressively prefers **value types**:

* `struct` and `enum` are idiomatic
* `class` is used only when identity or shared mutable state matters

Notable examples:

* `Array`, `Dictionary`, and `String` are **value types**
* They use **copy-on-write**, so copying is usually cheap

**How this feels coming from C++:**

* You pass values freely
* You mutate less shared state
* Many designs that would require shared pointers in C++ become simple value transformations

---

## 3. Optionals Replace Nulls and Sentinels (and the Compiler Enforces It)

Swift’s `Optional` is not a convention—it’s a **core language feature**.

* `T` and `T?` are distinct types
* You must explicitly unwrap

Common patterns:

* `if let`
* `guard let`
* `??` (nil-coalescing)
* `switch` over optionals

**Resulting code shape:**

* Early exits (`guard`) replace deeply nested conditionals
* Error and absence handling becomes explicit and visible

---

## 4. Error Handling Is a First-Class Language Feature

Swift uses `throw / try / catch`, and throwing is part of a function’s type.

You’ll commonly see:

* Throwing functions for exceptional failure
* `Result<T, Error>` for explicit outcome modeling
* Optionals where absence is expected and non-exceptional

**C++ comparison:**
Think of Swift as embracing *both* exceptions and `expected`-style APIs—clearly and idiomatically.

---

## 5. Protocols + Extensions = Interfaces, Mixins, and Retroactive Modeling

Swift’s **protocols** go far beyond pure virtual interfaces:

* Default implementations via protocol extensions
* Retroactive conformance (add protocol conformance to existing types)
* Extensions let you add behavior without subclassing

**Mental shift:**
You’ll often reach for:

* `protocol + extension`

Where in C++ you might have used:

* Templates
* Traits
* Base classes

---

## 6. Generics Exist — But Aren’t a Meta-Programming Playground

Swift generics are expressive, but intentionally constrained:

* No SFINAE-style wizardry
* Constraints are explicit (`where T: Protocol`)
* Emphasis is on clarity over cleverness

The culture favors:

* Readable constraints
* Protocol-oriented abstraction
* Letting the compiler specialize where appropriate

---

## 7. Enums Are Real Sum Types (Algebraic Data Types)

Swift enums can carry data per case:

```swift
enum Token {
    case number(Double)
    case ident(String)
    case eof
}
```

Features:

* Exhaustive `switch`
* Pattern matching is central and expressive
* Compiler-enforced completeness

This replaces large amounts of:

* Tagged unions
* `std::variant` boilerplate
* Class hierarchies used only for state

---

## 8. Mutability Is Explicit and Enforced

Swift makes mutation obvious:

* `let` = immutable
* `var` = mutable
* Methods mutating value types must be marked `mutating`

**Effect:**

* Fewer hidden side effects
* Easier reasoning about data flow
* Naturally more functional-style code, without forcing purity

---

## 9. Concurrency: Structured Async by Default

Modern Swift emphasizes:

* `async / await`
* **Structured concurrency** (task trees)
* **Actors** for isolating mutable state

Compared to:

* `std::thread`
* Thread pools
* Futures/promises
* Callback-based designs

Swift strongly nudges you toward *correct-by-construction* concurrency patterns.

---

## 10. Ecosystem and Build Model Differences

### Apple platforms

* Heavy use of reference types
* ARC everywhere
* Event-loop-driven APIs
* Obj-C legacy influences (dynamic dispatch, bridging)

### Server-side Swift

* Improving but younger ecosystem
* Different expectations around package management and distribution

---

## 11. Performance Thinking Still Matters — Just Differently

You can write extremely fast Swift, but you optimize different things:

* Prefer value types to reduce ARC traffic
* Avoid unnecessary reference sharing
* Understand copy-on-write triggers
* Be aware of protocol existential costs

**Good news:** The compiler often makes clean code fast.

**Bad news:** When it doesn’t, you need to know where the sharp edges are.

---

## 12. Common Friction Points for C++ Veterans

You may initially find yourself thinking:

* “Why do I have to unwrap *everything*?”
* “Why can’t I just do pointer arithmetic?”
* “Where are my deterministic destructors?”

These frustrations usually fade as Swift’s safety guarantees start paying off.

---

## 13. Rough Mental Mapping

| C++ Concept              | Swift Equivalent                                    |
| ------------------------ | --------------------------------------------------- |
| Shared-ownership class   | `class` (watch cycles)                              |
| POD / simple struct      | `struct`                                            |
| `std::variant`           | `enum` with associated values                       |
| Interfaces / concepts    | `protocol` (+ extensions)                           |
| `unique_ptr`             | Value ownership or convention-based class ownership |
| `shared_ptr` graphs      | Reference graphs + `weak` edges                     |
| Error codes / `expected` | `throws`, `Result`                                  |

---

## Final Thought

Swift is not “C++ with training wheels.” It’s a language that aggressively encodes **correctness, clarity, and intent** into the type system.

Once you stop fighting that—and let value semantics, protocols, and explicit handling lead—you’ll likely find yourself writing *less code*, with *fewer bugs*, and a very different sense of confidence about what your program is doing.


