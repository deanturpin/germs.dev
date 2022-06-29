---
title: Modern C++
date: 2019-09-15
tags:
- revision
- cpp
---

# Modern C++

## Modules (C++20)
"Modules are orthogonal to namespaces."

## lvalues and rvalues
An lvalue refers to an object that persists beyond a single expression. You can
think of an lvalue as an object that has a name. All variables, including
nonmodifiable (const) variables, are lvalues. An rvalue is a temporary value
that does not persist beyond the expression that uses it.

A function call can be an lvalue if and only if the return value is a reference.

## Boost versus STL
- [Should I become proficient in STL before learning Boost?](https://stackoverflow.com/questions/548751/should-i-become-proficient-with-stl-libraries-before-learning-boost-alternatives)
- [Comparing C++ and Boost](https://insights.dice.com/2013/03/15/comparing-the-c-standard-and-boost-2/)

## Casts
- `static_cast`
- `reinterpret_cast`
- `dynamic_cast`
- `const_cast`

Arrays can be implicitly converted to pointers without casting: there is no
implicit conversion from pointers to arrays. `int*` can be implicity converted
to `int const*`: there is no implicit conversion from int `const*` to `int*`.

You _can_ static cast a derived class pointer to a base class pointer but not the
other way around.

## Rule of three/five
If you declare any of copy, copy assignment or destructor then you should
declare them all. Similarly, for C++11 onwards: rule of 5.

See [wiki/Rule of
three](https://en.wikipedia.org/wiki/Rule_of_three_%28C%2B%2B_programming%29).

- C++: Understand how rule of 5 (rule of 3 in pre-C++11) is the best way to
write exception-safe classes. Understand why it's a good idea even without
exceptions.
- Function local variables are keynote.md accessible in the try handler.

See [rule of
three/five/zero](https://en.cppreference.com/w/cpp/language/rule_of_three).

```cpp
class base_of_five_defaults
{
public:
base_of_five_defaults(const base_of_five_defaults&) = default;
base_of_five_defaults(base_of_five_defaults&&) = default;
base_of_five_defaults& operator=(const base_of_five_defaults&) = default;
base_of_five_defaults& operator=(base_of_five_defaults&&) = default;
virtual ~base_of_five_defaults() = default;
};
```

## The rule of the big four and a half
https://blog.feabhas.com/2015/01/the-rule-of-zero/

- If you have written a (non-default) destructor for a class you should
implement the copy constructor and assignment operator for the class; or mark
them as deleted.
- Similarly, if you have written either a (non-default) copy constructor or
assignment operator for the class you must write a destructor.
- If your class can be moved you must implement both the move constructor and
move assignment operator; or mark them as deleted.

## Classes and structures
The difference between a `class` and a `struct` is only the default accesses
specifier: `public:` for `struct` and `private:` for `class`.

## noexcept
- Make destructors noexcept
- Mark move constructor noexcept

## Linkage
See [post/static](/post/static).

## Godbolt

<div>
<iframe width="800px" height="200px" src="https://godbolt.org/e#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:1,endLineNumber:14,positionColumn:1,positionLineNumber:14,selectionStartColumn:1,selectionStartLineNumber:14,startColumn:1,startLineNumber:14),source:'%23include+%3Calgorithm%3E%0A%23include+%3Ccassert%3E%0A%23include+%3Citerator%3E%0A%23include+%3Cvector%3E%0A%0Aint+main()+%7B%0A%0A++const+std::vector%3Cint%3E+vec%7B1,+2,+3,+4,+5,+6%7D%3B%0A++const+auto+count+%3D+count_if(std::cbegin(vec),+std::cend(vec),%0A++++++++++++++++++++++++++++++%5B%5D(const+auto+%26a)+%7B+return+a+%3C+3%3B+%7D)%3B%0A%0A++assert(count+%3D%3D+2)%3B%0A%7D%0A'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:34.02964959568733,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang_trunk,filters:(b:'1',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'0',intel:'0',libraryCode:'1',trim:'1'),flagsViewOpen:'1',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,libs:!((name:googletest,ver:trunk),(name:rangesv3,ver:trunk)),options:'-std%3Dc%2B%2B2a+-Wall+-Wextra+-Werror+-pedantic',selection:(endColumn:6,endLineNumber:9,positionColumn:5,positionLineNumber:4,selectionStartColumn:6,selectionStartLineNumber:9,startColumn:5,startLineNumber:4),source:1,tree:'1'),l:'5',n:'0',o:'x86-64+clang+(trunk)+(C%2B%2B,+Editor+%231,+Compiler+%231)',t:'0')),k:32.63701707097934,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:output,i:(editorid:1,fontScale:14,fontUsePx:'0',j:1,wrap:'1'),l:'5',n:'0',o:'Output+of+x86-64+clang+(trunk)+(Compiler+%231)',t:'0')),k:33.33333333333333,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"></iframe>
</div>

## References
- https://llvm.org/docs/CodingStandards.html
- https://google.github.io/styleguide/cppguide.html
- http://www.phaedsys.org/principals/programmingresearch/prdata/JSF++_%20Rev_D_JUN07.pdf
- https://api.csswg.org/bikeshed/?force=1&url=https://raw.githubusercontent.com/vector-of-bool/pitchfork/develop/data/spec.bs
- [C++ guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)
- [C++ guidelines support library](https://github.com/microsoft/GSL)
- [Joining lists](http://forums.codeguru.com/showthread.php?335862-appending-std-list-to-the-end-of-another-std-list)
- [Smart pointers](http://www.umich.edu/~eecs381/handouts/C++11_smart_ptrs.pdf)
- [Modification to the definition of plain old data](https://en.wikipedia.org/wiki/C%2B%2B11#Modification_to_the_definition_of_plain_old_data)
- https://github.com/cplusplus/draft
- https://github.com/lewissbaker/cppcoro
- https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md
