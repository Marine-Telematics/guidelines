---
sidebar_position: 0
---

# References and Pointers

We tend not to use pointers, instead, the recomendation is to use C++ references.
Pointers are a inheritance from C, the fact that C style pointer can be null and non constant is one of the major source
of bugs in virtually any C and C++ project.
If the code allows, prefer to use references(&) instead of the C pointer(\*).

If a reference its not possible to use a reference, a pointer is allowed but you need to manually check against null on its usage.

#### Example for a method receiving a pointer and a reference.

```cpp
struct Data
{
    uint32_t some_number;
};

void argumentByReference(const Data &data) // Prefered since its easy and safe to pass by reference.
{
    printf("data.some_number: %d\n", data.some_number);
}

void argumentByPointer(const Data *data) // Discouraged.
{
    if(data == nullptr)
    {
        // Should somehow signal the callee or panic.
        return;
    }

    printf("data.some_number: %d\n", data->some_number);
}
```
