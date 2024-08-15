---
sidebar_position: 4
---

# Function/Method Annotations

Functions and class methos should be annotated whenever needed.

Some of those annotations include:

- [[noreturn]] Whenever the method is intended to enter a infinite loop.
- [[nodiscard]] Whenever the return value is intended to be checked.
- const Whenever the function does not change the object`s state.

#### Example for a class `Foo`:

```cpp

[[noreturn]] void Foo::infiniteLoop()
{
    for(;;)
    {
        // Do something.
    }
}

[[nodiscard]] Error Foo::mightError()
{
    ...

    if(did_fatal_error)
    {
        return Error::Fatal;
    }

    ...
}

State Foo::getState() const // Does not change the Foo state.
{
    return this->state;
}

```
