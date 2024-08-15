---
sidebar_position: 2
---

# Dynamic memory allocation and heap usage

Dynamic memory allocation, either by the C style `malloc`, or with the C++ `new` operator is discouraged.

Dynamic memory allocation is hard for static code analyzers to catch bugs and results in a less predictable heap usage.
Whenever possible, try to allocate memory statically.

#### Example, initializing classes for a project.

```cpp

#include "core/controller.h"
#include "core/foo.h"
#include "base/bar.h"

[[noreturn]] void staticAllocation() // prefered.
{
    // While using static varables like this, we can easily predic the amount of
    // heap usage during compile time.

    static Foo foo{};
    static Bar bar{};

    static Controller controller{foo, bar};

    for(;;)
    {
        controller.doSomething();
    }
}


[[noreturn]] void dynamicAllocation() // discouraged
{
    // Those are some methods to dynamically allocate memory in modern C++.
    // Those methods results in a unpredictable heap usage since it will be
    // only initialized during run time.

    Foo *foo = new Foo();
    Bar *bar = static_cast<Bar*>(malloc(sizeof(Bar)));

    // Some of those methods also results in a harder to read syntax.
    std::unique_ptr<Controller> controller =
        std::make_unique(new Controller(foo, bar));

    for(;;)
    {
        controller->doSomething();
    }
}

```
