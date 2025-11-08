let student = {
    firstName: "William",
    location: "New Zealand",
    sing: function() { // property of an object whose value is a function = METHOD
        console.log("I sing.");
    },
    sing2() {
        console.log("Sing 2 method");
    },
    printStudentDetails() {
        console.log(`Hello, my name is ${this.firstName} and I live in ${this.location}.`);
    }
}

console.log(student);
student.sing();
student.sing2();
student.printStudentDetails();

//

const user = {
name: 'Bilbo Baggins',
printThis() {
console.log(this); // 'this' is the current object
return this; // if we return it, we can 'chain' object methods together
},
printGreeting() {
console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
}
}
user.printThis().printGreeting(); // "method chaining" - methods chained together, works because printThis returns this