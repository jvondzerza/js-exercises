# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. Explain how it's applied here.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

The forEach method has been replaced by for...in, with which all enumerable properties of an object that are keyed by strings are iterated.

The sort() function is being used here in tandem with a compareFunction (orderByYear) to print out the movies in ascending order of their date property values.

There is a difference in the order of the objects in the array, with the latter having the objects indexed according to their date. The difference is as a result of the sort function.

The console.table() method displays tabular data as a table