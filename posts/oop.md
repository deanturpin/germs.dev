# OOP I did it again 

OOP is a programming paradigm based on the concept of "objects", which may
contain data, in the form of fields often known as attributes; and code in the
form of procedures, often known as methods. We are aiming to group related data
and functions.

- Encapsulation: tie the data and the functions that are acting together in a class.
- Composition
- [Delegation](https://en.wikipedia.org/wiki/Delegation_(computing)) is calling a routine "in another context", for instance calling a base class member
function from an instance of a derived class.
- Open recursion
- Abstraction: providing only essential information to the outside world and hiding their background details, separation of interface and implementation.
- Decoupling: removing dependencies on external computations/data.
- Low coupling, high cohesion

## Polymorphism
Polymorphism means "many forms" and describes the ability of an operation to
change behaviour according to its arguments.

### Ad-hoc polymorphism
Function and operator overloading, could be notionally the same thing but add integers and strings is very different.

```cpp
Writeln(Add(1, 2));
Writeln(Add('Hello, ', 'World!'));

std::cout << 1 << "\n"; // integer and a char*
```

### Parametric polymorphism
Function does the same thing for different types: templates in C++, whether by exlicit template/typename declarations or auto.

### Sub-typing (inheritance)
Class hierarchies, diamond inheritance.

## Static and dynamic polymorphism
Polymorphism can be distinguished by when the implementation is selected:
statically (at compile time) or dynamically (at run time, typically via a
virtual function). This is known respectively as static dispatch and dynamic
dispatch, and the corresponding forms of polymorphism are accordingly called
static polymorphism and dynamic polymorphism.

- [Stack overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow)
- [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
- What's the difference between malloc and new?
- Compare functional and object-oriented programming

## Other considerations
OOP programming in C++ is not particularly elegant in some instances. And can
be very nuanced and easy to introduce subtle bugs. Also, if you inherit from a
class it might not be immediately clear what other stuff you have also
inherited.

## References
- [Composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

