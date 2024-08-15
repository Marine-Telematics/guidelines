---
sidebar_position: 2
---

# Braces(backets) scoping

Braces must always be placed in a new line. Braces on the same line as definitions are not the C++ standard.

#### exemple:

```cpp
struct Bar
{
};

class Foo
{
};

[[noreturn]] void someFunction(uint32_t idx)
{
    if(idx > 50)
    {
        idx = 10;
    }

    do
    {
        --idx;
    } while(idx > 0);

    for(;;)
    {
        // do something.
    }

}

```
