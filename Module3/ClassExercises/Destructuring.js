let students = ["Mirza", "William", "Smith"];

let student1 = students[0];
let student2 = students[1];
let student3 = students[2];

console.log(student1);
console.log(student2);
console.log(student3);

//or shorter way (destructuring):

let [peer1, peer2, peer3] = ["Mirza", "William", "Smith"];

console.log("Peer 1: " + peer1);
console.log("Peer 2: " + peer2);
console.log("Peer 3: " + peer3);

// Another example:

let [first,second,third] = "xyzabc";

console.log(first); // x
console.log(second); // y
console.log(third); // z

let [,,,fourth,fifth,sixth] = "xyzabc";

console.log(fourth); // a
console.log(fifth); // b
console.log(sixth); // c

// array destructuring

const [a, b, c] = "abc" // strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]) // Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4

// Example - Destructuring Objects

let customer = {
    customerName: "William Shakespeare",
    location: "England",
    country: "United Kingdom",
    DOB: "1600-01-01"
}

let {name, place} = customer;
console.log(name) // undefined
console.log(place); // undefined

let {customerName, location} = customer;
console.log(customerName) // William Shakespeare
console.log(location); // England

let {country} = customer;
console.log(country) // United Kingdom

// Another example

/*function processOrder(customer) { // long way
    if (customer.DOB < "1900-01-01") {

    }
    if(customer.location == "United Kingdom")
} */

// Destructuring used to define functions with smart parameters
function processOrder(DOB, location) { // shorter way
    if (DOB < "1900-01-01") {

    }
    if(location == "United Kingdom");
}

processOrder(customer);