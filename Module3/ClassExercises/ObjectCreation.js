//object literal
let student = {
    firstName: "Mirza",
    location: "Auckland"
    printFirstName() {
        console.log(this.firstName);
    }
}

// function constructor

function Student(firstName, location) {
    this.firstName = firstName;
    this.location = location;
}

let student1 = new Student("Bill", "Sydney");
let student2 = new Student("Willy", "Wellington");

// classes (with constructor function and also other methods)

class StudentClass {
    constructor(firstName, location) {
        this.firstName = firstName;
        this.location = location;
        this.region = "Oceania"
    } // encapsulation
    hasShortName() {
        return this.firstName.length <= 3 ? true : false;
    }
    printFirstName() {
        console.log(this.firstName);
    }
}

let student3 = new StudentClass("John", "Hamilton")
let student4 = new StudentClass("Steve", "Tasman");