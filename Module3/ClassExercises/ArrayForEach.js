// forLoop method (as discussed by Mirza)

let myGoal = 10;

for (let k = 0; k < myGoal; k++) {
    console.log(` iteration of ${k} of ${myGoal} `);
}

const phone = {
model: 'iPhone 11',
colour: 'black',
storage: 64
}

for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + phone[key]); // prints each object value in turn
}

// forEach method

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

console.log(hobbits.indexOf("Samwise"));

for (let k = 0; k < hobbits.length; k++) {
    console.log(hobbits[k]);
}

hobbits.forEach(function(hobbit, index) { 
    console.log("hobbit = " + hobbit + " index = " + index);
})

// can be simplified by using the below:

hobbits.forEach((hobbit, index)=>{ // usually we use an arrow function here
    console.log(`hobbit ${hobbit} and index ${index}`); // runs once for every item in array
})

// if only one line of arrow function, no need for curly brackets "{ }"
hobbits.forEach((hobbit, index)=> console.log(`hobbit ${hobbit} and index ${index}`));

// Another example
const students = [
    {firstName: "Mirza", location: "Auckland"},
    {firstName: "Billy", location: "Sydney"}
];

//students.indexOf(); --> not applicable

let StudentFound = students.find((student, index)=> {
    if(student.firstName == "Billy") return student;
}) 

console.log(StudentFound);

// or to simplify

let StudentFound2 = students.find((student, index)=> student.firstName == "Billy");

console.log(StudentFound2);

// Another example

const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
{ id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' },
{ id: 2, title: "Kid's Hoodie", price: 54.95, category: 'Winter' },
]

let winterProduct = products.find((product) => product.category == "Winter");
console.log(winterProduct);

let winterProducts = products.filter((product) => product.category == "Winter"); //useful
console.log(winterProducts);

let shirtsProducts = products.filter((product) => product.category == "Shirts");
console.log (shirtsProducts);

let under50s = products.filter ((product) => product.price < 50);
console.log (under50s);