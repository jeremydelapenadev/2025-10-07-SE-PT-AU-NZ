/*
if(x > y) {

} else if (x == Y) {

} else {}
    */

// can also be written as...

let x = 10;
let y = 30;
let arr1 = ['Jeremy', 'Smith', 'Satish']
let arr2 = ['Menson', 'Lavinia', 'Pia']

x > y // conditional statements
    ? console.log("x is greater than y") // if
    : console.log("x is not greater than y") // else

// or

let result = x > y ? 50 : 100;

console.log(result);

let result = x > y ? (x == y ? (x == arr1 ? arr1: arr2) : arr2) : arr2; // making it complex

console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

if ("Apple" > "Avocado") {
    console.log("Apple is greater than avocado.");
} else { console.log("Avocado is greater than apple.")}

console.log('apple' < 'banana'); // true - because a is less than b (rule 2)
console.log('eat' < 'eaten'); // true - because all characters are the same but eaten is longer (rule 5)

