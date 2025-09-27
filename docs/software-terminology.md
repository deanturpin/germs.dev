---
tags:
  - programming
  - terminology
  - reference
  - glossary
---

# Software terminology

## Acronyms
- RAII: Resource Acquisition Is Initialisation -- `std::unique_ptr`, `std::vector`
- RDID: Resource Destruction is Deletion
- RTTI: Run Time Type Inspection, e.g., `dynamic_cast<>`
- RVO: return value optimisation
- [SFINAE](https://en.wikibooks.org/wiki/More_C%2B%2B_Idioms/SFINAE): substitution failure is not an error -- "Prune functions that do not yield valid template instantiations from a set of overloaded functions."
- SDLC: software design lifecycle
- ODR: one definition rule
- CRTP: [Curiously Recurring Template Pattern](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern)
- ADL: Argument-dependent lookup, ([Koenig lookup](http://en.cppreference.com/w/cpp/language/adl)) `cout(std::endl)`
- IIFE: immediately invoked function expression (lambda)
- RPC: remote procedure call
- SOA: [Service Oriented Architectur](https://en.wikipedia.org/wiki/Service-oriented_architecture)
- [CQS](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation):
  Command–query separation (CQS) is a principle of imperative computer
programming. It was devised by Bertrand Meyer as part of his pioneering work on
the Eiffel programming language. It states that every method should either be a
command that performs an action, or a query that returns data to the caller,
but not both. In other words, Asking a question should not change the answer.
- [CQRS](https://martinfowler.com/bliki/CQRS.html): Command Query
  Responsibility Segregation. It's a pattern that I first heard described by
Greg Young. At its heart is the notion that you can use a different model to
update information than the model you use to read information. For some
situations, this separation can be valuable, but be aware that for most systems
CQRS adds risky complexity.

## Testing
- Black box testing: examines the functionality of an application without
  peering into its internal structures or workings.
- White box testing: tests internal structures or workings of an application
- Unit, integration and system level testing

## Functional languages
If you can detect a function has been run then it's not pure.

## Memoization
See [wiki/Memoization](https://en.wikipedia.org/wiki/Memoization).

- Caching the results of expensive functions
- On first call of function store the results, if the function is called again
  with the same input then just return the cache
