const express = require("express");

// import the CalculatorController
const calculatorController = require("../controllers/CalculatorController");

// create a router
const calculatorRouter = express.Router();

// as per Exercise 5, calculator logic has been moved to CalculatorController.js

calculatorRouter.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

calculatorRouter.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

calculatorRouter.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

calculatorRouter.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = calculatorRouter;
