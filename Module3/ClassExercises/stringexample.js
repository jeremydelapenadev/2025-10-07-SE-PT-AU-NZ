let string1 = "String that can include 'single quotes'" // cannot be double quotes within double quotes
let string2 = 'String that can include "double quotes"'
let string3 = `String that can include variables`

let numberofStudents = 6;

console.log(string1);
console.log(string2);
console.log(string3);

console.log("The number of students in this cohort is " + numberofStudents);
console.log(`The number of students in this cohort is ${numberofStudents}`)

let isChecked = true;
let isToggledOn = false;
console.log(isChecked);
console.log(isToggledOn);

isChecked = !isChecked;
console.log(isChecked);

if(isChecked) {
    console.log("Is checked true");
} else {
    console.log("Is checked false");
}

let x = 10; // true
if (x) {
    console.log("x is true");
} else {
    console.log("x is false");
}

let y = -10; // true
if (y) {
    console.log("y is true");
} else {
    console.log("y is false");
}

let z = 0; // 0 is always false
if (z) {
    console.log("z is true");
} else {
    console.log("z is false");
}

let q = "Jeremy"; // true
if (q) {
    console.log("q is true");
} else {
    console.log("q is false");
}

let a = NaN; // false
if (a) {
    console.log("a is true");
} else {
    console.log("a is false");
}

let age = null;

if(age) {
    //write logic to proceed further
} else {
    console.log("Please enter the age.");
}

let nameOfPerson; // undefined

console.log(nameOfPerson);

let location;
console.log(location);

if (age == location) {
    console.log("age and location are same values")
}

if (age === location) {
    console.log("age and location are of same types");
} else console.log("age and location are not of same type");