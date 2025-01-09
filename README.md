# TypeScript Type Assertion Bug

This example demonstrates a subtle issue with TypeScript's type assertions.  While type assertions are useful for telling the compiler about the type of a variable, they do not provide runtime safety.  If an assertion is incorrect, runtime errors can still occur.

## Steps to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and Node.js.
3. Observe the error when the type assertion fails at runtime.

## Solution

The provided `bugSolution.ts` illustrates the problem by using a runtime type check before the function that is dependent on the type.  This provides runtime safety in addition to the compile time safety. 