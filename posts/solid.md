---
title: SOLID
date: 2019-09-25
tags:
- oop
- revision
---

# SOLID

## Single responsibility principle
> A class should have only a single responsibility (i.e. changes to only one
> part of the software's specification should be able to affect the
> specification of the class).

A class should have only *one reason to change*. Separate GUI and the business
logic. Low coupling, high cohesion.

## Open/closed principle
> Software entities should be open for extension, but closed for modification.

However, realistically you don't know which bits _need_ to be extensible.

## Liskov substitution principle
> Objects in a program should be replaceable with instances of their subtypes
> without altering the correctness of that program. See also design by contract.

Bird class with fly method. Duck is a bird, seagull is a bird, ostrich isn't a
bird because it doesn't implement fly.

## Interface segregation principle
> Many client-specific interfaces are better than one general-purpose interface.

Use small interfaces not fat ones.

## Dependency inversion principle
One should "depend upon abstractions, not concretions."

## References
- [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
- [GRASP: General Responsibility Assignment Software Principles](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design))
