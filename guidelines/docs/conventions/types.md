---
sidebar_position: 3
---

# Constants and Variable Types

We adopted a rule to always use explicit variable size. So the usage of `int`, `unsigned int`, `long` and `short` is not advised.
The reason for this is that, a `int` for example, is not always guranteed to be 32 bits. In a microcontroller like some versions of PIC is 16 bits.

We opted to use a convention for integer types similar to the ones in the rust programming language, where a type begin with `i` for integer and `u` for unsigned.
Even tho theres already a C standard header file for this, the standard way is quite verbose.

#### Example for the esp32 system:

```cpp
typedef unsigned char u8; // 8 bits, unsigned
typedef signed char  i8; // 8 bits, signed

typedef uint16_t u16; // 16 bits, unsigned
typedef int16_t  i16; // 16 bits, signed

typedef unsigned int u32; // 32 bits, unsigned
typedef int          i32; // 32 bits, signed

typedef uint64_t u64; // 64 bits, unsigned
typedef int64_t  i64; // 64 bits, signed

typedef float  f32; // 32 bits floating point
typedef double f64; // 64 bits floating point

typedef unsigned char byte; // 8bit sized type
```

There is a header file containing the `integer` type nomeclatures in the root of this repo, one should use this file and change the `typedefs` so that the sizes always mathch.
