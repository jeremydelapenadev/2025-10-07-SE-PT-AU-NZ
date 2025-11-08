let student = {
    name: "Bruce",
    location: "Sydney",
};

let person = {}; //empty object

person.name = "William";
person.age = 40;
person.location = "Melbourne";

console.log(student);
console.log(person);

const product = new Object(); // object created using constructor

const user = { // user object contained within curly braces
name: 'joe', // string property with key 'name' and value 'joe'
age: 20, // numeric property with key 'age' and value 20
'has a dog': true // multi-word property key 'has a dog' with boolean value true
};

user.location = "NSW";
console.log(user);
console.log(user["has a dog"]);

delete user["has a dog"];

console.log(user);

// property name limitation

const object = { 
    2: "Number 2", // will be disregarded / converted to string instead
    "2": "value 2",
}

console.log(object);

for (let info in user) { // 'let' also can be dropped and the code will still work.
    console.log(`Key ${info} of object value is ${user[j]}`);
}