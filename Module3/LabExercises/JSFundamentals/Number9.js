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
