---
sidebar_position: 0
---

# Variable and constants naming

- Variables, either being data members or not, must be in `snake_case`.
- Constants, if calculated using variable data should be `snake_case`.
- Constants, if they do not use any variable data, it should be a `constexpr`.
- Constant Expressions, must be in `UPPER_CASE`.

#### Example of usage:

```cpp
class Foo
{
    constexpr size_t DATA_SIZE = 5;
    constexpr std::array<DataType, DATA_SIZE> IMMUTABLE_ARRAY{};

    std::array<DataType, DATA_SIZE> variable_array{};

    uint32_t variable_data_member{0};

    uint32_t doSomething(uint16_t var) const;
};

uint32_t Foo::doSomething(const uint16_t var) const
{
    const uint32_t const_from_mutable =
        this->variable_data_member + var;

    return const_from_mutable;
}

```
