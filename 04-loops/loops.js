// Loops
/*
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring a endpoint.

Loops help is repeat a process without writing alot of code.
*/

/*
Structure

We have to setup our loops in a way that we can
1. See where we are in a loop,
2. Consider what sort of condition we want to run it against, and
3. Note when we are done with that condition and move on to the next iteration

We need to:
    1. Create an Index
    2. Run a Condition
    3. Change to the indexing variable (execution of condition)
*/

// Let's count to 10:

for( let i = 0; i <= 10; i++){
    console.log(i)
}

/*
We state our loop with a "for". Within this function, we are injecting some parameter that JS will run against. index; condition, change index -> result.

Within the parameters, we are stating our index declaration to 0. This is our baseline.We move on to asking if that variable is less than or equal to the number 10, take that set number and add 1 to it. Once that is proccessed, return that value (in this case "console.log" of that number). Once our condition is met, we return a False which ends our loop.

This is important to not:
for (<create and index variable>; <run condition>; <change index>) {
    <return result>
    <cont. until the condition is met>
}

*/

// If don't indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.

// Infinite Loop! (Warning)

/* 

for ( let i = 0; i++) {
    console.log(i);
}
*/
// No condition mean that JS doesn't know when to stop and will never assime that information.



//  For In Loops

// With For Loops, we are seeking and index value and running it against a condition. For In Loops do not require an index number.

let city = {
    name: "Indianapolis",
    pop: 877000,
    speedway: true
}

for(info in city){
    console.log(info)
}

for(info in city){
    console.log(info);
    console.log(city[info]);
  }

  let list = ["milk", "Eggs", "Lunch Meat", "Bread", "Bananas"];

  /* 
  Let list = {
      0: "Milk"
      1: "Eggs"
      2: "Lunch Meat"
      3: "Bread"
      4: "Bananas"
  }

  */

  for (item in list){
      console.log(item);
      console.log(list[item]);                                                                                                              
  }
