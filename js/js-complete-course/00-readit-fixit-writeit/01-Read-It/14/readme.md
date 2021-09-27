# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly.
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.
* What are we doing with the object that's passed to 'calculateAvailable'?

When the ', 0' is omitted in the reduce function, the number property is no longer called as part of the 'total' argument in the function.

We are creating a 4th key-value property for each object passed to 'calculateAvailable' by  subtracting the value of the 'occupied property' from the value of the 'capacity property'.
