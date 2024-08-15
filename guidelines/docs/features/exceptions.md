---
sidebar_position: 1
---

# Exceptions

Exceptions are not allowed.

While it might seem to be a easy and comprehensive way of error signaling, exceptions may lead to unhandled errors and a massive increase of stack usage.

The availability of exceptions may encourage developers to throw them when they are not appropriate or recover from them when it's not safe to do so. For example, invalid user input should not cause exceptions to be thrown.
