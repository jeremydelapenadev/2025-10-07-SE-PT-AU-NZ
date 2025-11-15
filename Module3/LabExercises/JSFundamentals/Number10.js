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
