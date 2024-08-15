---
sidebar_position: 0
---

# #define guard

All header files should have #define guards to prevent multiple inclusion. The format of the
symbol name should be `<FILE>_H_`.

```c++
#ifndef FOO_BAR_H
#define FOO_BAR_H

#endif // FOO_BAR_H
```

The MSVC provides a less verbose way to prevent multiple inclusion using the `#pragma once` macro,
this should not be used since it may not compile in all machines, such as the ones runnig Linux or MacOS.
