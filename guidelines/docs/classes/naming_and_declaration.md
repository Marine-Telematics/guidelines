---
sidebar_position: 0
---

# Naming and declaration.

All classes and structures must be declared in a `.h` file and defined in a relative `.cpp` file, in the same directory and with the same name.

- File names should be written in `snake_case`.
- Type names should be written in `CamelCase`.
- File names should be the same name as the class/structure name.

##### The file naming patter should follow:

- `class_name.h` With the class declaration.
- `class_name.cpp` With the class definition.

#### For example, declaring a class `FooBar`, module of `core`:

```cpp
// In core/foo_bar.h

class FooBar
{
  ...
  FooBar();
};

// In core/foo_bar.cpp

#include "core/foo_bar.h"

FooBar::FooBar()
{
    ...
}

```
