const express = require("express")

// create a router
const calculatorRouter = express.Router();

const calculatorController = require("../controllers/calculatorController")

calculatorRouter.get("/add", (req, res)=>{ // req contains info from the paramaters, along with the request
   calculatorController.addNumbers (req, res);
});

calculatorRouter.get("/subtract", (req, res)=>{ // req contains info from the paramaters, along with the request
    calculatorController.subtractNumbers (req, res);
});

module.exports = calculatorRouter;