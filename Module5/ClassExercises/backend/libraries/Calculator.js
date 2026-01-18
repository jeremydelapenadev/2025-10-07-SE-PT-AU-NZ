class Calculator {
    constructor() {
        this.id = Date.now()
        // use Math.random and Math.floor for Part 2 of Exercise 7
    }

    #log = (value)=> {
        console.log(`[Calculator : ${this.id}]:${value}`);
    };
    
    add(num1,num2){
        const value = num1 + num2
        this.#log(value);
        return value;
    }

    subtract(num1,num2) {
        const value = num1 - num2
        this.#log(value);
        return value;
    }
}

module.exports = Calculator;


// For part 4 of Exercise 7, make a 'log' class and do a constructor (pass two parameters: id, and another parameter)