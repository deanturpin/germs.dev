```cpp
struct bird {
  ~bird() { std::puts("in a bird"); }
};

bird in = bird(bird(bird(bird(bird()))));
```

https://coliru.stacked-crooked.com/a/5c0ff3f3d2d99bea

The destructor is called _once!_

Thanks to C++'s return value optimisation. You can disable this behaviour by
passing `-fno-elide-constructors` to the compiler. However, if you're using a
standard later than C++14 then it happens regardless. So does this mean we
can't let copy constructors cause side-effects, lest the compiler doesn't
bother calling them?

See [copy elision](https://en.cppreference.com/w/cpp/language/copy_elision).
