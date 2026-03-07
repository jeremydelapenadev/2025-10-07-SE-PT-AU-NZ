function sayHiDefn () {
    console.log("Hi (function definition)");
} // named function

const sayHiExpn = function () {
    console.log("Hi (function expression)");
} // named variable

console.log(sayHiDefn.name);
console.log(sayHiExpn.name);
const sayHiArrow = () => console.log("Hi (arrow function)"); // named variable
console.log(sayHiArrow.name)

function getStudentDetails () { // used for debugging and understanding another developer's code
    let drivingLicenseInfo = getDrivingLicenseInfoFromNZLD()

    let visaDetails = getVisaLicenseInfoFromImmigration()
}

//

function oneParam(a) {
    console.log("This function has a single parameter: " + a);
}

function twoParam(a, b) {
    console.log(`This function has two parameters: ${a} and ${b}`);
}

function threeParam(a,b,...extras){
    console.log(`This function has three parameters: ${a} and ${b} and ${extras}`);
}

console.log(oneParam.length); // 1
console.log(twoParam.length); // 2
console.log(threeParam.length); // 2, because extras is "the rest" and cannot be counted

//

function sayHi(){
    console.log("Hi");
    sayHi.counter++; // increment the custom counter proprety every time the function is called
}
sayHi.counter = 0 // initialise the counter to 0 before calling it

sayHi(); // Hi - calls the function and increments the counter
sayHi(); // Hi - calls the function and increments the counter again
console.log(`Called ${sayHi.name} ${sayHi.counter} times`); // called sayHi 2 times