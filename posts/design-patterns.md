# Design patterns

## Categories
- Structural
- Behavioural
- Creational

## Factory
The system configuration is stored in an external text file and the system is
constructed at runtime.

## Flyweight / singleton / memento
Hardware interface classes will typically be a `const` register map which is a
flyweight pattern. This is also an example of a singleton pattern as it's only
initialised once regardless of how many instances are created. Additionally if
registers are actually wired to discrete lines they might be read-only so the
memento pattern is used to store the internal state.

## Reflection
"In computer science, reflection is the ability of a process to examine,
introspect, and modify its own structure and behavior."

See https://en.wikipedia.org/wiki/Reflection_(computer_programming)

## References
- [Extended examples](https://github.com/deanturpin/revision_design_patterns/)
- https://refactoring.guru/design-patterns/cpp

