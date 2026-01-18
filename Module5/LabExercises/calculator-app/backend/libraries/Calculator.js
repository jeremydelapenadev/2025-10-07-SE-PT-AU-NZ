// Exercise7

/* Information about Libraries:

A library is a collection of pre-written code that can be used to perform common tasks.
Libraries are designed to be reusable and can be imported into different projects to save time and effort.

A class is a blueprint. It is a template for creating objects. A class defines the properties and methods that an object will have.
The most fundamental elements of a class are its name, methods, and properties.

An object is an instance of a class. It is a specific implementation of the blueprint defined by the class. An object has its own unique properties and methods.

Tip: Everything in JavaScript is an object. Even functions and arrays are objects. So methods and properties are all parts of the object and seen in the same way.

Another feature: Class Visibility -- private method (#) and public method (no #).
Private method is called by using a constructor function to create an object.
Example: 
    constructor() {
    }

    #log = () => { // private method
        console.log('test')
    }

Private method can be called using 'this' keyword within the class of a public method.
Example:
    add(num1, num2) {
        this.#log(); // public method calling private method
        const value = num1 + num2
        return value;
    }
}

*/

// to satisfy Exercise7 Part 3
const Logger = require("./Logger");

class Calculator {
  constructor() {
    this.id = Math.random().toString(36).slice(2, 10); // satisfying Exercise7 Part 2
    this.logger = new Logger(this.id); // to satisfy Exercise7 Part 3
  }
  /* removing this to avoid redundancy with Logger class
  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  }; */

  // satisfying Exercise7 Part 1
  add(num1, num2) {
    const value = num1 + num2;

    // this.#log(value); --> replace with Logger class method below
    this.logger.info(`Adding ${num1} + ${num2} = ${value}`);
    
    return value;
  }
  subtract(num1, num2) {
    const value = num1 - num2;
    
    // this.#log(value); --> replace with Logger class method below
    this.logger.info(`Subtracting ${num1} - ${num2} = ${value}`);
    return value;
  }
  multiply(num1, num2) {
    const value = num1 * num2;
    
    // this.#log(value); --> replace with Logger class method below
    this.logger.info(`Multiplying ${num1} * ${num2} = ${value}`);
    return value;
  }
  divide(num1, num2) {
    const value = num1 / num2;
    
    // this.#log(value); --> replace with Logger class method below
    this.logger.info(`Dividing ${num1} / ${num2} = ${value}`);
    return value;
  }
}

module.exports = Calculator;
