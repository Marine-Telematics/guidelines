#ifndef TYPES_H
#define TYPES_H

#include <esp_types.h>
#include <freertos/FreeRTOS.h>

typedef uint8_t u8;
typedef int8_t  i8;

typedef uint16_t u16;
typedef int16_t  i16;

typedef unsigned int u32;
typedef int          i32;

typedef uint64_t u64;
typedef int64_t  i64;

typedef float  f32;
typedef double f64;

typedef unsigned char byte;

namespace CPU
{
    enum Core : BaseType_t
    {
        LowPriority  = 0,
        HighPriority = 1,
    };

    enum ThreadPriority
    {
        High   = 10,
        Medium = 8,
        Low    = 5,
        Idle   = tskIDLE_PRIORITY,
    };

}; // namespace CPU

#endif
