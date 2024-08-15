---
sidebar_position: 5
---

# Usage of the LLVM Tools

The LLVM has a set of tools that can help the developer staying in the provided standards.

We use `clang-format` to format the code using the set of rules discribed before.
We use `clang-tidy` as a linter to analize the code.

All the rules decribed before are written in two configuration files, provided at the root of this repository. The developer must copy both those files and place it in the root of their project.
It should work automatically if the IDE or text editor already have a built in linter, if not, the developer must setup their editor so that it uses the clang linter.
