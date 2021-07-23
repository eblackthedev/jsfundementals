// Functions

/*

Functions are processes the we call upon to run an action. They can do the following:
    - Take in an input to process, modify, or respond to (not required)
    - Rurn a value (not required)
    - Can be invoked (or caled) as often as needed
*/
// (1)    (2)
function hi(){
// (3)
console.log("hi!")

// 1: function keyword - we use this to define a function
// 2: name of the function, followed by parenthesis - this is how we will call function
// 3: code goes here - this will be the "brains" of the function
}

// Calling the function
// in order to invoke (call) a fuction, we will simply write it's name and put parenthesis after it

/*
    Function Declaration

a chunk of code that performs a set chunk of code when it is invoked (or called)
*/

function funcOne(){
    console.log("this is the code that we run in funtion one")
}

funcOne() // we invoke (or call) a function by writting it's declared name follwed by parenthesis

/* 
    Function Experssions

    assigning a function to a variable is what we call an expression
*/

let first = function funcOne(){
    console.log("Code being run in the function expression")
}

first();

let example = function() {
    console.log("what is my name?")
}

example();    

/*
    Anonymous Functions

    anonymous functions are stored in memory but the runtime does not automatically create a reference to it.

    the main use would be to pass these functions through another functions. Maybe have a ternary where is something is true we run one function, else we run a different function

*/

let anon = function(){
    console.log("Anonymous Function")
}

anon();

/*
  PARAMETERS
  we will be using functions to pass in information and return a result
  parameters will allow our functions to take in ourside information
*/
function parameterFunc(num) {
    console.log(num + 1);
  }
  parameterFunc(7);
  parameterFunc('bruce');
  parameterFunc('another test');
  parameterFunc([1,2,3,4,5]);

  let firstName = "Jane"
  let lastNmae = "Doe"

  function greeting(first, last){
      console.log(`Hi, ${first}! Welcome back!`)
      console.log(`This is the first parameter: ${first}`)
      console.log(`This is the last parameter: ${last}`)
  }

  greeting(firstName);
  greeting(lastNmae);
  greeting();
  greeting(firstName, lastNmae);
  greeting(firstName, null);
  greeting("", lastNmae)