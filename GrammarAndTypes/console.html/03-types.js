/*

Data and Structure Types

- Primitive Data Types:
-boolean 
-undefined
-string
-number
-bigInt*
symbol*
-null
-object
-function
*/

//Boolean
//(Has only two possible values: true and false)
let on = true;
let off = false;

console.log(on);
console.log(off);

//Null
// A null value is an empty value. Think of it as an empty container that has space to fill. Note: null and undefined are 2 different things
// It can be use as a Data Reset

let empty = null;
console.log(empty);

//Undefined
// No value has been assigned to a container and doesn't even act as an empty container

let unknown;
letundef = undefined;

/*
What's the difference between null and undefined?

- null is like a container with nothing in it 
- Undefined is a variable that has never been setInterval, or it hasn't been created yet
*/

/*
Numbers

Literally just numbers
*/

let degrees = 82;
console.log(degrees);

let precise = 999999999999999; // 15 9's becomes 1 with 16 0's
console.log(precise);

let rounded = 9999999999999999; // 16 9's becomes 1 with 16 0's
console.log(rounded);

// Strings
// Strings represent text and are wrapped in either single or double quotes

let doubleQuote = "Double Quote";
let singleQuote = "Single Quote";
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that"';
let bothQuotesAlt = "I then said, 'It is pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

//Number and Strings
let addThese = 1050 + 100;
console.log(1050 + 100);

let addTheseAlso = "1050" + "100";
console.log(addTheseAlso);

//We can use an operation called "typeof" to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// let addTest = "1050" + 100;
// console.log(addTest);

//Objects
// Obejects are used to store many values instead of just one.
// Consider them as a collection of different variables in one container
// Denoted by curly brackets: {}
