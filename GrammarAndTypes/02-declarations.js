/*
What is a variables?

Variable are named containers for sorting data
We can think of these containers as resiurces we can call upon later. Each variable allows is to store date, which could be a value or dunction, thst we will want to refernce back to
*/

let a = 2;

/*

-"Let" is our Keyword
-"a" is our Name of our variable
-"=" is our Assignment operator
-"2" is our variable's value
*/

let b = 1;

console.log(a + b); // What should we get? 3

/* 
Restrictions with variables

- a variable must begin with a letter, underscore, or a dollar sign.
- number may follow above characters, but cannot come first in the name.
- javascript is case sensitive - 'hello' and 'Hello' are different variables
- no spaces are allowed in variables names
- camelcase is best practice.
        ex:
            let myName = "Jorome";
            is easier to read than
            let myname = "Jerome";


*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// Let 5startingWithNumber = 'Break'; // Cannot start a variable name with a number
// let -startingWithDash = "Breaks"; Cannot start wit a -

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign, /*5startingWithNumber*/, /*-startingWithDash*/)

/*
Keywords

var, let, const

var - the old keyword for variable

let - the new way for variable

const - the way to use a variable for only one use. An unchangeable, or constant, variable. The only limit to a const variables is that one they are declared/assigned thier value will never change.           
*/

var varTest = "var variable";
let letVariable = "let variable";
const contVariable = "const variable"

/*
Declarations are the Left Side of the assignments opertor (=) within a variable

- let x

Initializations are the Right Side of the assignment operator (=) and sets the value of the variable
- let x = 10

    10 would be the initialization
*/
const example; // Error

example = "Testing";

console.log(example);
//  Will give a error because to have to assign it at the beginning


