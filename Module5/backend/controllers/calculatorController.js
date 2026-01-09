const calcLibrary = require("../libraries/Calculator");

// create an object of the class
let myCalc = new calcLibrary(); // Instance of the Calculator class

const addNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  console.log(num1);
  console.log(num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(500).json({ error: "numbers should be integers" });
  } else {
    let result = myCalc.add(parseInt(num1), parseInt(num2)); // get the calculation done from the library
    //let result = parseInt(num1) + parseInt(num2);

    res.status(200);
    res.json({
      res: result,
    });
  }
};

const subtractNumbers = (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  let result = myCalc.subtract(num1,num2);
 
  // let result = num1 - num2;
  // //parseInt not required for subtraction

  res.status(200);
  res.json({
    res: result,
  });
};

module.exports = { addNumbers, subtractNumbers };
