//Comparison Operators

//Equal
"3" == 3;
console.log("3" == 3);

/*
Javascript is helpful and does something known as coercion when comparing values
-coercion is the process of converting a value from one type to another
-in the above example, javascript assumed that we were trying to check if "3" is equal to 3, even thogh one of our values is a string and one is an integer */

//Strict Equal - This overrides coercion
console.log(3 === 3); //True
console.log("3" === 3); //False

// Not Equal
console.log("3" != 3); //False

//Strict Not Equal
"3" !== 4;
console.log("3" !== 4); //True

//Greater Than
3 > 2;

//Less Than
2 < 3;

//Greater Than or Equal To
3 >= 2; // Not to be confused with =>

//Less than or Equal to
2 <= 3;

// And
2 && 3;

// Or
2 || 3;
