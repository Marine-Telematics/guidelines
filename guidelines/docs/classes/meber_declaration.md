---
sidebar_position: 2
---

# Member declaration

Members should be declared in the order as follows:

- constants.
- typedefs, types and enums.
- data member variables.
- class methods.
- static methods.

* The access order should be `private`, `protected` and then `public`.
* The constructors should be placed at the bottom of the class declaration.

For example, declaring a class `Foo`:

```cpp
class Foo
{
    // This section is private.
    static constexpr size_t SOME_ARRAY_LENGHT = 5;

    enum State
    {
        Idle,
        Busy,
    };

    struct SomeData
    {
    };

    State state{State::Idle};

    std::array<SomeData, SOME_ARRAY_LENGHT> some_array{};

    protected:
    // This section is protected.
    void doSomething();

    static void doSomethingStatic(); // static members at the bottom.

    public:
    // This section is public.

    Foo() = default; // constructor always at the bottom.
};
```
