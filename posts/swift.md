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
