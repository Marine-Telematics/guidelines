---
sidebar_position: 1
---

# Constructors

#### Initialization constructors:

In general, class initialization should be in its constructor. All the members should be initialized to a default value in the constructor.

#### Deafult constructors:

You must define a default constructor if your class defines member variables and has no other
constructors.

#### Explicit constructors:

Usually, when a constructor takes a single argument, it can be used for conversion. For instance, if you
define `Foo::Foo(int var)` and then pass a `integer` to a function that expects a `Foo`, the
constructor will be called to convert the `integer` into a `Foo` and will pass the `Foo` to your function for
you.
While this might be convinient, it might not as explicit for someone whos new into the code. For those situations, all constructors that receive an argument must be marked with the `explicit` keywork.
