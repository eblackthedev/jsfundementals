/* 
    Arrow Functions

    arrow functions are expressional function that can be simplified into one of two form: Concise body and Block body. The main goal is to generate shorter syntax for writing a function.

*/

// Regular Function
function regFunc() {
    console.log("just a regular function")
}

regFunc();

//       (1)   (2) (3)     (4)        
let arrowFunc = () => console.log("function in one line");
arrowFunc();

/*
    1. A variable created to hold the value of our anonymous arrow function
        -arrow function are always anonymous
    2. Parameters are still capable of being added
        - Parameters go in the () as they would a normal function, But if we only have 1, no more or less, parameter, we do not need (). If we have no parameters we are still required to put ().
    3.  "How we see an arrow". This is JS syntax that says we are about to process a function
    4.  The code the arrow fuction will run, or execute. i.e "Do This"
*/

let arrow = (x) => console.log(x);
arrow(10);

// CONCISE vs BLOCK BODY

// CONCISE BODY
// When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way. When we use a concise body arrow function, the "return" statement is implied (meaning we do not have to write it)

                    // return x + y
                    // implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2); // return sets conciseBody(1,2) = 3
console.log( result );

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`)

slightlyComplexConcise(3,1);
slightlyComplexConcise(2,1);

// BLOCK BODY
// the "return" keyword IS required. We will include curly braces.
// Sometimes it will make sense to use block body if we need to do mutliple line of code

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`
}

blockArrow(1,2)
console.log(blockArrow(1,2));