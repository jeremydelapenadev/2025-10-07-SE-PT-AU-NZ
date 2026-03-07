// To satisfy Exercise 5, moved all logic from the routes file into this controller file

// removed this --> calculatorRouter.get("/add", --> and replaced with the addNumbers variable from the controller
// removed this --> calculatorRouter.get("/subtract", --> and replaced with the subtractNumbers variable from the controller
// removed this --> calculatorRouter.get("/multiply", --> and replaced with the multiplyNumbers variable from the controller
// removed this --> calculatorRouter.get("/divide", --> and replaced with the divideNumbers variable from the controller

// To satisfy Exercise 7, the new controller will now have no knowledge on how to run the operation, instead, it will make use of a library.
// 1. Imported the Calculator library
// 2. Created an instance of the Calculator class
// 3. Replaced the logic in each function to use the Calculator library methods

const Calculator = require("../libraries/Calculator");
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  // req contains info from the paramaters, along with the request
  // use ParseInt to convert string to integers (by default, GET arguments are strings)
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  // let sum = number1 + number2 --> replaced with the line below to use the Calculator library
  let sum = myCalc.add(number1, number2);

  console.log(sum);
  res.status(200); // we set the value of the response to 200 (OK)
  res.json({ result: sum }); // we then send data in JSON format instead of strings
};

const subtractNumbers = (req, res) => {
  // req contains info from the paramaters, along with the request
  let number1 = parseFloat(req.query.num1);
  let number2 = parseFloat(req.query.num2);
  
  // let difference = number1 - number2; --> replaced with the line below to use the Calculator library
  let difference = myCalc.subtract(number1, number2);
  console.log(difference);
  res.status(200); // we set the value of the response to 200 (OK)
  res.json({ result: difference }); // we then send data in JSON format instead of strings
};

const multiplyNumbers = (req, res) => {
  // req contains info from the paramaters, along with the request
  let number1 = parseFloat(req.query.num1);
  let number2 = parseFloat(req.query.num2);
  
  // let product = number1 * number2; --> replaced with the line below to use the Calculator library
  let product = myCalc.multiply(number1, number2);
  console.log(product);
  res.status(200); // we set the value of the response to 200 (OK)
  res.json({ result: product }); // we then send data in JSON format instead of strings
};

const divideNumbers = (req, res) => {
  // req contains info from the paramaters, along with the request
  let number1 = parseFloat(req.query.num1);
  let number2 = parseFloat(req.query.num2);

  // let quotient = number1 / number2; --> replaced with the line below to use the Calculator library
  let quotient = myCalc.divide(number1, number2);
  console.log(quotient);
  res.status(200); // we set the value of the response to 200 (OK)
  res.json({ result: quotient }); // we then send data in JSON format instead of strings
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};

/*

Extra information ( for understanding purposes only ):

ParseInt vs ParseFloat
- parseInt() function parses a string and returns an integer.
When to use it:
    - You only want whole numbers
    - You want to discard decimals
    - Things like counters, IDs, ages

- parseFloat() function parses a string and returns a floating point number.
When to use it:
    - You want decimal precision
    - Calculations like division, averages, prices, measurements

*/