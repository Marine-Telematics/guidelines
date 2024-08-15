---
sidebar_position: 2
---

# Names and Order of Includes

All of a project's header files should be listed as descendants of the project's source directory
without use of UNIX directory shortcuts .(the current directory) or ..(the parent directory).

#### For example, including `core/bar.h` from `base/foo.cpp`:

#### wrong way

```cpp
#include "../core/bar.h"
```

#### Correct way

```cpp
#include "core/bar.h"
```
