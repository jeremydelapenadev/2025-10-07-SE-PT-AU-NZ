// to check if the logger is working

const Calculator = require("../../libraries/Calculator");

const calc = new Calculator();

console.log("Add 2 + 3:", calc.add(2, 3));
console.log("Subtract 5 - 1:", calc.subtract(5, 1));
console.log("Multiply 4 * 3:", calc.multiply(4, 3));
console.log("Divide 10 / 2:", calc.divide(10, 2));
console.log("Divide 10 / 0:", calc.divide(10, 0));

// it's working!