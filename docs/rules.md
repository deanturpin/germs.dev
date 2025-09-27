---
title: The Rules of Code
subtitle: What lies beneath
date: 2021-04-28
tags:
- rules
- coding
- good practice
---

# The Rules of Code

<!--
1. A single file should contain only one class. If this breaks the previous
rule then your class is probably too large: refactor.
-->

1. A single file should contain fewer than 20000 lines of code.
1. Make your comments invisible by prefixing "todo". They will never be seen again.
1. It would be nice if a single routine could fit into 1000 lines of code.
1. Use consistent formatting. Even better: don't bother and let clang-format do it.
1. Unit testing is awesome and will almost certainly catch on, see [a set of unit testing rules](https://www.artima.com/weblogs/viewpost.jsp?thread=126923)
1. Make everything constant: you should be declaring things as constant as a
matter of course and then relaxing it as necessary. It’s *much* easier to reason
about code when the data are immutable.

```cpp
int main() {
	const struct mostly_immutable {
		int one = 1;
		int two = 2;
		int thr = 3;
		mutable int i_can_change = 4;
	} a;

	a.i_can_change = 5;
}
```

https://godbolt.org/z/4rWqxb4oq

## Unit testing
A test is not a unit test if:
- It talks to the database
- It communicates across the network
- It touches the file system
- It can't run at the same time as any of your other unit tests
- You have to do special things to your environment (such as editing config
files) to run it.

See the [complete article](https://www.artima.com/weblogs/viewpost.jsp?thread=126923).
