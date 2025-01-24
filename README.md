# Stack Overflow Error in JavaScript Recursive Function

This repository demonstrates a common error in JavaScript: a stack overflow error caused by an improperly designed recursive function.

The `bug.js` file contains the faulty code. The function `foo` recursively calls itself, but the base case (`a === 0`) is insufficient to stop recursion for large input values of `a`. This leads to a stack overflow error when the recursion depth exceeds the call stack limit.

The `bugSolution.js` file provides a corrected version of the function.  The solution addresses the infinite recursion by adding a more robust base case or changing the recursive logic to an iterative approach which prevents stack overflow.