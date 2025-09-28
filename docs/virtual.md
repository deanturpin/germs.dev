---
tags:
  - cpp
  - virtual-functions
  - oop
  - programming
---




# Virtual Functions in C++

> Virtual functions are used to achieve runtime polymorphism
https://www.educba.com/virtual-keyword-in-c-plus-plus/

## Uses of the virtual keyword
See https://en.cppreference.com/w/cpp/keyword/virtual

Related keywords: `override`, `final`

## virtual function specifier
> The virtual specifier specifies that a non-static member function is virtual
> and supports dynamic dispatch. It may only appear in the decl-specifier-seq
> of the initial declaration of a non-static member function (i.e., when it is
> declared in the class definition).

> Virtual functions are member functions whose behavior can be overridden in
> derived classes. As opposed to non-virtual functions, the overriding behavior
> is preserved even if there is no compile-time information about the actual
> type of the class. That is to say, if a derived class is handled using
> pointer or reference to the base class, a call to an overridden virtual
> function would invoke the behavior defined in the derived class. Such a
> function call is known as virtual function call or virtual call. Virtual
> function call is suppressed if the function is selected using qualified name
> lookup

## Virtual base class specifier
- when to declare a virtual destructor
- virtual function dispatch
- Virtual base class

## Cannot be declared virtual
> Non-member functions and static member functions cannot be virtual. Function
> templates cannot be declared virtual. This applies only to functions that are
> themselves templates - a regular member function of a class template can be
> declared virtual.

## Virtual tables
A non-virtual class has a size of 1 because in C++ classes can’t have zero
size.

A virtual class has a size of 8 on a 64-bit machine because there’s a hidden
pointer inside it pointing to a vtable. vtables are static translation tables,
created for each virtual-class.

```cpp
#include <iostream>

int main() {

struct A {
} a;

struct B {
virtual void func(){;}
} b;


std::cout << (sizeof a) << "n";
std::cout << (sizeof b) << "n";
}
```

```text
Program returned: 0
1
8
```

https://godbolt.org/z/Wen6EP9Wx

## Virtual base classes
The accepted wisdom is that the base class destructor must be declared virtual if
deleting a derived class via a base class pointer is not to leak. In a hierachy
of classes you can get away with only declaring virtual in the class instance
that you call delete on. However, getting it slightly wrong can cause a crash
so just put it in the base class.

```cpp
#include <iostream>
#include <memory>

struct A {
~A(){ std::cout << "~An"; }
int i;
int j;
};

struct B : A {
~B(){ std::cout << "~Bn"; }
};

struct C : B {
virtual ~C(){ std::cout << "~Cn"; }
};

struct D : C {
~D(){ std::cout << "~Dn"; }
};

int main() {
std::unique_ptr<C> a = std::make_unique<D>();
}
```

https://godbolt.org/z/Gnee41v4M

## vtables

```cpp
int main() {
struct A {
virtual void blah(){;}
} a;
}
```

https://godbolt.org/z/5G9zcd3KP

### Assembly
Note the vtable section. Adding the virtual keyword generates a lot more code.

```asm
main: # @main
push rbp
mov rbp, rsp
sub rsp, 16
lea rdi, [rbp - 8]
call main::A::A() [base object constructor]
xor eax, eax
add rsp, 16
pop rbp
ret
main::A::A() [base object constructor]: # @main::A::A() [base object constructor]
push rbp
mov rbp, rsp
mov qword ptr [rbp - 8], rdi
mov rax, qword ptr [rbp - 8]
movabs rcx, offset vtable for main::A
add rcx, 16
mov qword ptr [rax], rcx
pop rbp
ret
main::A::blah(): # @main::A::blah()
push rbp
mov rbp, rsp
mov qword ptr [rbp - 8], rdi
pop rbp
ret
vtable for main::A:
.quad 0
.quad typeinfo for main::A
.quad main::A::blah()

typeinfo name for main::A:
.asciz "Z4mainE1A"

typeinfo for main::A:
.quad vtable for __cxxabiv1::__class_type_info+16
.quad typeinfo name for main::A
```
