---
sidebar_position: 4
---

# Comments

The C++ offers 2 types of comments:

- double slash(//) The standard C++ way for comments.
- slash-asterisk(/\*\*/) Inherited from C.

The slash-asterisk(/\*\*/\) type of comments are not advised since those cannot be nested in C++.
Let`s say for example, you have a function that has a comment with /\*\*/ inside. If you comment the entire function, the compiler will throw an error because /\*\*/ cant be inside another /\*\*/ block.

##### The standard way to comment in our projects is:

- double slash(//) For comments in general, explanations, TODOS and etc.
- triple slash(///) For function documentation.
- triple slash(///) For doxygen headers.

#### Example containing all the comments:

```cpp
///-----------------------------------------------------------------------------
/// PROJECT_NAME : MODULE_NAME - (c) YEAR Marine Telematics
///-----------------------------------------------------------------------------
///
/// @file filename.ext
/// @author Author Name (author@email.com)
/// @date yyyy-mm-dd
///
/// Short description about the module.
///
///-----------------------------------------------------------------------------

#include "core/foo.h"

// Loop frequency in Hertz
constexpr f32 FREQUENCY = 50; // [Hz]

/// @brief This is a doxygen description, must be short but comprehensive.
///
/// @param mutable_var Reference to something, its use must be described here.
///
/// @retuns Description of its return value.
i32 Foo::doSomething(MutableType &mutable_var) const
{
    // Period of a pure function is 1 over its frequency. ie.: P = 1/f
    constexpr f32 PERIOD_MS = (1 / FREQUENCY) * 1000;
    constexpr i32 DELAY_TIME = (i32)PERIOD_MS;


    // TODO: Find a way to store `mutable_var` so we dont need to pass it here.
    this->someOtherStuff(mutable_var);

    const i32 now = functionThatKnowsTheTime();
    const i32 delay_until = now + DELAY_TIME;

    delayUntil(delay_until);
}

```
