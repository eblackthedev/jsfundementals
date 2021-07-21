//Conditionals

// Falsy Values
/* A falsy value is a value that is considered false when encountered in a boolean context. There are 6 falsy values in JS:

Example of Falsy

- False
- 0
- "", '', ``
- null
- undefined
- NaN (not a number)

What does this mean? Whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false

side note: there are also Truthy values in JS, which tend to be much less limited. 
Examples include: 

- true, 
- {}, 
- [], 
- 42 (any number), 
- "false" (any non-empty string)
*/

/*
    If Statements

    When we use comparison operators, we typically are asking if we can move on to the next section of code. "If" something is true, do "this thing"

*/


//(keyword is the if)   (expression is the true)
if (true) {
  // code to run if the expression evaluates to true
  console.log("Trusty Test");
}
// condiditon
if (false) {
  console.log("Falsy Test");
}

let light = "on";
// Needs == to compare single = does not compare
if (light == "on") {
  console.log("The light is on");
}

let light = "on";

if (light == "off") {
  console.log("The light is on");
}

let weather = 65;

if (weather < 70){
console.log("Maybe Bring a jacket")
}

let weather = 65;
let rain = true;

if (weather < 70 && rain == true){
console.log("Maybe Bring a jacket")
}

// Challenge

let batman = "is the night"
let bruce = true


if (bruce == true && batman == "is the night"){
  // (bruce && batman == "is the night") another way to wirte it

  console.log("Batman")
} 

// If Else

// we can think of this as not only providing an answer if our condition evaluates to be true, but also one if ends up being false

let today = 75;
 
if (today < 70){
  console.log(`It's ${today}, wear a jacket`)
 }
 else{
   console.log(`It's ${today}. No jacket needed!`)
 }

//  Else If

// this is a condition that will be checked if the above condition was not met
// else if always comes before and else statement
// to run
// ${} is always in () with `` around it as a string. exp (`Stringtext ${} Stringtext.`)

let cooktime = 60

if(cooktime === 45) {
  console.log("Let use feast");
}
else if(cooktime > 45)
  console.log(`It has been ${cooktime} minutes??? Might need a glass of water with this one!`)
else if (cooktime >= 30){
  console.log(`It has only been ${cooktime} minutes. Wait another 5 - 15 minutes`)
}
else if(cooktime >= 20){
  console.log(`It has only been ${cooktime} minutes. Wait another 10 - 25 minutes`)
}

else {
  console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`)
}

// Ternaries

// They are if/else statement but they look weird! (The shorthand way)

let myName = 'Evan'

if(myName === "Evan"){
  console.log(`Hi, ${myName}!`);
}
else {
  console.log(`Not sure I know ${myName}`)
}

// condition ? if true : else result
// condition if true run this

myName === "Evan" ? console.log(`Hi, ${myName}!`) : console.log
(`Not sure I know ${myName}`)

// Challege

// Switches Statements

// The switch statement executes a block of code depending on different cases

let instructor = "Jerome"

switch(instructor){
  // if instructor === "Jerome"
  case "Jerome":
    console.log(`${instructor} is a part of the Web Devlopment Team`);
    break;
  case "Summer":
    console.log(`${instructor} is a part of the Web Devlopment Team`);
    break;
  case "Josh":
    console.log(`${instructor} is a part of the Software Devlopment Team`);
    break;
    // Default is the Else
 default:
console.log(`Sorry I can't find what ${instructor} teaches at this time`);
}

let staff = "Jerome"

switch(staff) {
  case "Jerome":
  case "Summer":
  case "Levi":
  case "Adam":
  case "Hustin":
    console.log(`${staff} is a part of the Web Development Team`)
    break;
    case "Josh":
    case "Amanda":
    case "Casey":
    case "Junior":
      console.log(`${staff} is a part of the Software Development Team`);
      break
    default:
      console.log(`Sorry, I can't find what ${staff} teaches`);
}