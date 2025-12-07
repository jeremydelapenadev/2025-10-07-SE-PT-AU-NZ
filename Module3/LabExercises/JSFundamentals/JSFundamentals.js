// 1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0 // 1
console.log("" + 1 + 0) // 10 INCORRECT

"" - 1 + 0 // 0
console.log("" - 1 + 0) // -1 INCORRECT

true + false // false
console.log(true + false) //1 INCORRECT

!true // false
console.log(!true) //false CORRECT

6 / "3" // undefined
console.log(6 / "3") //2 INCORRECT

"2" * "3" // undefined
console.log("2" * "3") //6 INCORRECT

4 + 5 + "px" // 9px
console.log(4 + 5 + "px") //9px CORRECT

"$" + 4 + 5 // $45
console.log("$" + 4 + 5) //$45 CORRECT

"4" - 2 //2
console.log("4" - 2) //2 CORRECT

"4px" - 2 // undefined
console.log("4px" - 2) //NaN INCORRECT

" -9 " + 5 // -95
console.log(" -9 " + 5) //-9 5 CORRECT

" -9 " - 5 // undefined
console.log(" -9 " - 5) //-14 INCORRECT

null + 1 // null
console.log(null + 1) //1 INCORRECT

undefined + 1 // 1
console.log(undefined + 1) //NaN INCORRECT

undefined == null // true
console.log(undefined == null) //true CORRECT

undefined === null // true
console.log(undefined === null) //false INCORRECT

" \t \n" - 2
/*
    - 2 */
console.log(" \t \n" - 2) //-2 CORRECT

// Total Score: 7/17

// retest
console.log("-----Re-Test-----")

"" + 1 + 0 // 10
console.log("" + 1 + 0) //10 CORRECT

"" - 1 + 0 // -1
console.log("" - 1 + 0) // -1 CORRECT

true + false // 1
console.log(true + false) // 1 CORRECT

!true // false
console.log(!true) // false CORRECT

6 / "3" // 2
console.log(6 / "3") // 2 CORRECT

"2" * "3" // NaN
console.log("2" * "3") // 6 INCORRECT

4 + 5 + "px" // 9px
console.log(4 + 5 + "px") // 9px CORRECT

"$" + 4 + 5 // $45
console.log("$" + 4 + 5) // $45 CORRECT

"4" - 2 //2
console.log("4" - 2) // 2 CORRECT

"4px" - 2 // NaN
console.log("4px" - 2) // NaN CORRECT

" -9 " + 5 // -95
console.log(" -9 " + 5) // -9 5 CORRECT

" -9 " - 5 // NaN
console.log(" -9 " - 5) // -14 INCORRECT

null + 1 // null
console.log(null + 1) // 1 INCORRECT

undefined + 1 // NaN
console.log(undefined + 1) // NaN CORRECT

undefined == null // true
console.log(undefined == null) // true CORRECT

undefined === null // false
console.log(undefined === null) // false CORRECT

" \t \n" - 2
/*
    - 2 */
console.log(" \t \n" - 2) // -2 CORRECT

// Total Score: 14/17

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // 7
console.log(addition) // 34 INCORRECT

let multiplication = three * four // 12
console.log(multiplication) // 12 CORRECT PRINTING

let division = three / four // 0.75
console.log(division) //0.75 CORRECT PRINTING

let subtraction = three - four // -1
console.log(subtraction) //-1 CORRECT PRINTING

let lessThan1 = three < four // true
console.log(lessThan1) // true CORRECT PRINTING

let lessThan2 = thirty < four // false
console.log(lessThan2) // true INCORRECT

// they are relying on the strings, rather than the number values. If we remove the "" on the numbers 3, 4, 30, it'll be correct.

let three2 = 3
let four2 = 4
let thirty2 = 30

//what is the value of the following expressions?
let addition1 = three2 + four2 // 7
console.log(addition1) // 7 CORRECT PRINTING

let multiplication1 = three2 * four2 // 12
console.log(multiplication1) // 12 CORRECT PRINTING

let division1 = three2 / four2 // 0.75
console.log(division1) //0.75 CORRECT PRINTING

let subtraction1 = three2 - four2 // -1
console.log(subtraction1) //-1 CORRECT PRINTING

let lessThan11 = three2 < four2 // true
console.log(lessThan11) // true CORRECT PRINTING

let lessThan21 = thirty2 < four2 // false
console.log(lessThan21) // false CORRECT PRINTING

// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // this one did not print because the 0 value is interpreted as false.
if ("0") console.log('#2 zero is true') // PRINTED -- non-empty strings are interpreted as true.
if (null) console.log('null is true') // this one did not print because the null value is empty and also null is interpreted by JavaScript as false.
if (-1) console.log('negative is true') // PRINTED -- non-zero number (negative) is interpreted as true.
if (1) console.log('positive is true') // PRINTED -- non-zero number (positive) is interpreted as true.

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 8,
  b = 9;
let result = `${a} + ${b} is `;

/*if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
} 

console.log(result); */

(a + b < 10) ? console.log(result += "less than 10") : console.log(result += "greater than 10");

// += is an addition assignment
// for example, x += y is equivalent to x = x + y, except that the expression x is only evaluated once.
// in the example above, x = result, while y = "less than 10"
// it will get the data from the result (`${a} + ${b} is`) then add it to the string "less than 10"

console.log("-----Additional Info for Future Reference-----")

// difference between using + and =+
// += modifies the variable
// + does not modify the variable

// Reset
result = `${a} + ${b} is `;

// Version 1: Using +=
console.log(result += "greater than 10");  // modifies result
console.log(result);               // prints the modified value

// Reset
result = `${a} + ${b} is `;

// Version 2: Using +
console.log(result + "greater than 10");   // does NOT modify result
console.log(result);               // prints the original value

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting);

// function expression syntax

const getGreetingFE = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingFE("Jeremy"));

// arrow function syntax

const getGreetingArrow = (name) => "Hello " + name + "!";

console.log(getGreetingArrow("Jeremy"));

// OR

const getGreetingArrow2 = (name) => console.log("Hello " + name + "!");

getGreetingArrow2("Jeremy2");

// Note: You cannot place a console.log on the body of the arrow function syntax AND AT THE SAME TIME when printing it afterwards, like this:

const getGreetingArrow3 = (name) => console.log("Hello " + name + "!");

console.log(getGreetingArrow3("Jeremy3"));

// This would result to "undefined", as a function that doesn’t return anything always returns undefined in JavaScript.

/* 7. The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
d) Test your object by chaining all the method calls together in different combinations. */

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  initialfouls() {
    this.fouls++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score + ".");
    console.log("Halftime foul count is " + this.fouls + ".");
    return this;
  },
  halfTimefouls() {
    this.fouls+= 2;
    return this;
  },
  finalScore() {
    console.log("The full time final score is " + this.score + ".");
    console.log("The full time foul count is " + this.fouls + ".");
  }
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .initialfouls()
  .basket()
  .threePointer()
  .halfTime()
  .halfTimefouls()
  .finalScore();


/* 8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
b) Create a new object for a different city with different properties and call your function again with the new object. */

// Reference: JavaScript Fundamentals - page 43

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let category in sydney) { // iterates over each property in the phone object, stores in ‘category’ variable
console.log('Object Property: ' + category); // prints each object property name (category) in turn
console.log('Value / Info: ' + sydney[category]); // prints each object value in turn
}

const adelaide = {
  name: "Adelaide",
  population: 1_470_000,
  state: "SA",
  founded: "28 December 1836",
  timezone: "Australian Central Daylight Time (GMT+10:30)",
};

for (let category in adelaide) {
    console.log('Object Property:' + category),
    console.log('Value / Info:' + adelaide[category])
};

// Reference: JavaScript Fundamentals - page 44
// note1: Objects are stored and copied by reference.
// note2: Primitive values: strings, numbers, booleans, etc., are always copied as a whole value.

// =====================================================================================================================

// 9. Use the following variables to understand how JavaScript stores objects by reference.

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
console.log(teamSports);
// let moreSports = teamSports

// b) Create a new dog2 variable equal to dog1 and give it a new value

let dog1 = 'Bingo';
let dog2 = dog1
console.log("dog1: " + dog1);
console.log("dog2: " + dog2);

dog2 = "Bluey";
console.log("dog1 after adding Bluey: " + dog1);
console.log("dog2 after adding Bluey: " + dog2);

// c) Create a new cat2 variable equal to cat1 and change its name property

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1;

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
console.log(teamSports); // has changed. added the Rugby and Soccer from moreSports
console.log(dog1); // still the same
console.log(cat1); // has changed, particularly the name property from Fluffy to Whiskers

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent 

let moreSports = [...teamSports]
moreSports.push ("Rugby"); // added at the end of the array
moreSports.unshift ("Soccer"); // added at the start of the array

console.log("teamSports: ", teamSports);
console.log ("moreSports: ", moreSports);

let cat2 = {...cat1};
cat2.name = "Whiskers"

console.log("cat1 after changing name property: ", cat1);
console.log("cat2 after changing name property: ", cat2);

// Reference: JavaScript Fundamentals - page 51

/* 10. The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate variable
c) Print out the properties of each person object to the console */

function Person(name, age) {
  // constructor function would serve as like a template
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 18;
  };
}

let person1 = new Person("Jeremy", 32);
let person2 = new Person("Michael", 43);

console.log(person1);
console.log(person2);

/* d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive. */
// Reference - JavaScript Fundamentals - page 53

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 18;
  }
}

let person3 = new PersonClass("John", 16);

console.log(person3);

console.log(person1.canDrive()); // true -- old enough to drive (32 years old)
console.log(person2.canDrive()); // true -- old enough to drive (43 years old)
console.log(person3.canDrive()); // false -- not old enough to drive (16 years old)