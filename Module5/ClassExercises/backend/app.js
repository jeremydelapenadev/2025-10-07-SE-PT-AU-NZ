const express = require("express"); // importing express; can give any name in place of the variable express

const calculatorRouter = require("./routes/calculatorRoutes");

const app = express(); // web server

app.use('/calculate', calculatorRouter);

module.exports = app;