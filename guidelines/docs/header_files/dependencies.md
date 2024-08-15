---
sidebar_position: 1
---

# Header File Dependencies

Do not include other headers whenever a forward declaration would suffice.
When including header dependencies, you may introduce cyclic dependencies. Complete type definitions should be
included in the relative `.cpp` file whenever possible.

#### For example, we have the class Foo declared in foo.h, and we need a reference for Foo in class Bar:

```cpp
// In foo.h
class Foo
{
    ...
    public:
    void someMethod();
};
```

#### Wrong way

```cpp
// In bar.h
#include "foo.h" // There is no need to include since we do not use it directly.

class Bar
{
    Foo &foo;
    Bar(Foo &);
};

// In bar.cpp
Bar::Bar(Foo &foo)
{
    foo.someMethod();
};
```

#### Correct way

```cpp
// In bar.h
class Bar
{
    class Foo &foo; // Forward declaration to Foo
    Bar(Foo &);
};

// In bar.cpp
#include "foo.h" // We include Foo here since we will need its full definition.

Bar::Bar(Foo &foo)
{
    foo.someMethod();
};

```
