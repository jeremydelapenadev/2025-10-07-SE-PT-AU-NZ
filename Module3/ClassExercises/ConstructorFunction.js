let person = {
    firstName: "Jeremy"
}

let person3 = {...person, firstName: "Billy"}

console.log(person)
console.log(person3)

// OR

function Person(firstName) { // has become obsolete
    this.firstName = firstName
}

let person2 = new Person("Mirza")

let person4 = new Person("Johnny")

console.log(person2)

// OR -- classes

class Person{ // most efficient one
    constructor(firstName){
        this.firstName = firstName;
    }
}

let person5 = new Person ("Sam")