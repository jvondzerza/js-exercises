# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?
* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?
* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?

it was replaced with a forEach() method which calls a function once for each element in an array, in order.
The parseTitle function changes each string element in the array to lower case and appends them as a list item.
The wrapWithTag function automatically sets a tag to specified content, and the parameters are placed between brackets because they are the functions arguments.

For example, document.write(wrapWithTag("hello", 'h3')); is a function to create <h3>hello</h3>