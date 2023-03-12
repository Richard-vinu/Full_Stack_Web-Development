JavaScript Beginning to Mastery Syllabus :>

Course Link <br>
https://youtu.be/chx9Rs41W6g <br>

https://www.scaler.com/topics/course/javascript-beginners



This is link for the mastery in javascript =>
https://www.youtube.com/watch?v=g7T23Xzys-A&ab_channel=JavaScriptMastery


```Javascript Object methods every developer should know```

Shallow copy — Object.assign()<br>
Deep copy — JSON.parse() & JSON.stringify()<br>
Object.create()<br>
Object.entries()<br>
Object.keys()<br>
Object.values()<br>
Object.freeze()<br>

JavaScript vs EcmaScript 


Declare variable using var <br>
More about variable<br>
Let<br>
Const<br>
String Indexing<br>
Useful string methods<br>
Template Strings<br>
Null, undefined, BigInt, typeof<br>
Booleans and Comparison Operator<br>
Truthy and Falsy Values<br>
If else statement<br>
Ternary Operator<br>
&& || operator<br>
Nested if else<br>
If elseif else<br>
Switch statement<br>
While loop <br>
While loop examples<br>
For loop<br>
For loop examples<br>
Break and continue keyword<br>
Do while loop<br>

Arrays in JavaScript<br>
Intro to arrays<br>
Push pop shift unshift<br>
Primitive vs reference data types<br>
Clone array & spread operator<br>
For loop<br>
use const for creating arrays<br>
While loop in array<br>
For of loop<br>
For in loop<br>
Array destructuring<br>


Objects in JavaScript<br>
Intro to objects<br>
Dot vs Bracket Notation<br>
Iterate objects<br>
Computed properties<br>
Spread operator in objects<br>
Object Destructuring<br>
Objects inside Array<br>
Nested Destructuring<br>

Functions in JavaScript<br>
Function declaration<br>
Function Expression<br>
Arrow Functions<br>
Function declarations are hoisted  (covered in great detail , later in this course)<br>
Function inside function<br>
Lexical Scope<br>
Block Scope Vs Function Scope<br>
Default Parameters<br>
Rest Parameters<br>
Parameter Destructuring<br>
Very brief intro to callback functions(covered in great detail , later in the course)<br>
Functions returning Functions <br>

Rest operator (...)

The rest operator is used in function parameter definitions to allow a function to accept an indefinite number of arguments as an array. Here's an example:

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
In the example above, the sum function accepts an indefinite number of arguments using the rest operator ...numbers. The rest operator collects all the arguments passed into the function into an array called numbers. The reduce method is then used to sum up all the numbers in the array.





Spread operator (...)

The spread operator allows you to spread the elements of an iterable (such as an array) into a new array or function call. Here's an example of using the spread operator to concatenate two arrays:

javascript
Copy code
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = [...array1, ...array2];

console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]









ES6 Rest Parameter
Rest operator (...)

The rest operator is used in function parameter definitions to allow a function to accept an indefinite number of arguments as an array. Here's an example:

```
function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```
In the example above, the sum function accepts an indefinite number of arguments using the rest operator ...numbers. The rest operator collects all the arguments passed into the function into an array called numbers. The reduce method is then used to sum up all the numbers in the array.

Here's the code example converted to markdown:

The rest operator (...) is used in function parameter definitions to allow a function to accept an indefinite number of arguments as an array. Here's an example:

function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
In the example above, we define a function called sum that accepts an indefinite number of arguments using the rest operator ...numbers. The rest operator collects all the arguments passed into the function into an array called numbers. The reduce method is then used to sum up all the numbers in the array. We call the sum function twice with different numbers of arguments and log the results to the console. The first call to sum with 1, 2, 3 returns 6, and the second call to sum with 1, 2, 3, 4, 5 returns 15.





SPLICE() :
Array’s splice() method is used to remove few elements, replace or add new elements in the array. It will mutate original array. This method accepts 3 arguments :
const arr = ["apple","basket","cat","dog","elephant"]
let newArr=arr.slice(0,3)
console.log(newArr);

Slice();
Copies elements from an array
Returns them as a new array
Doesn’t change the original array
Starts slicing from … until given index: array.slice (from, until)
Slice doesn’t include “until” index parameter
Can be used both for arrays and strings

SLICE() :
Array’s slice() is used to extract a shallow copy of the elements from array into a new array. It will not mutate the array instead it will return a new array. This method accepts 2 arguments :
Used for adding/removing elements from array
Returns an array of removed elements
Changes the array
For adding elements: array.splice (index, number of elements, element)
For removing elements: array.splice (index, number of elements)
Can only be used for arrays
startIndex: Zero based index from which to start Extraction
endIndex: Zero based index before which the extraction should end


ChekoutThis=>  https://medium.com/@bhavesh.kankaria/array-splice-vs-slice-ac0307773912  <br>

Spread and Rest Operator in JavaScript?

Both spread and rest operators were introduced to JavaScript with ES 6, and both the operators are represented with triple dots (...).
The spread operator spreads the values in an array or a string across one or more arguments.
Rest operator allows us to pass an indefinite number of arguments to function by accumulating these several values into an array.
Both spread and rest operators have the same syntax in JavaScript but they perform different functionalities.
The spread operator in JavaScript expands values in arrays and strings into individual elements whereas, the rest operator puts the values of user-specified data into a JavaScript array.
