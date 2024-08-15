---
sidebar_position: 3
---

# Preprocessor usage

Usage of preprocessor macros should be avoided, the preprocessor is a inheritance from C, where it is the only "good" way for generic functions.
In C++ we have templates which are way more comprehensive, use them if you need a generic function.

The use of macros for constants must be avoided, constants must be defined as a `constexpr`, enumerations must be an `enum`.

#### Example:

##### Incorrect way

```cpp
#define PIN_ON_OFF 1
#define PIN_BACKLIGHT 5

#define STATE_IDLE 1
#define STATE_WORKING 2
#define STATE_FINISHING 3


void Foo::someMethod(int state)
{
    if(state == STATE_IDLE)
    {
        this->switchPin(PIN_ON_OFF);
    }
}
```

##### Correct way

```cpp
enum Pin
{
    OnOff = 1,
    BackLight = 5,
};

enum State
{
    Idle = 1,
    Working = 2,
    Finishing = 3,
};

void Foo::someMethod(State state)
{
    if(state == State::Idle)
    {
        this->switchPin(Pin::OnOff);
    }
}

```
