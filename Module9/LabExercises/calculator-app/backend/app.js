// API Test

/* Before we can add tests to our calculator API routes, we need to make some changes to index.js, to support our Express app
being used in both test and development modes. First create a new file at the top level called app.js, which will
handle creating and setting up the Express app with all routes.

index.js will then only need to import this app and start it on the right port, as all other setup is already handled in app.js.

*/

// To satisfy Exercise 6, create automated unit tests for all routes in the calculator app

// IMPORTANT: `npm install supertest`
// import supertest and the express app

const express = require("express");
const app = express(); // create an app using the express package
const port = 3000; // create a port server
const cors = require("cors"); // transferred from index.js to avoid CORS errors

const calculatorRouter = require("./routes/CalculatorRoutes"); // import all calculator routes (up the top)
app.use(cors()); // to avoid CORS errors
app.use('/calculator', calculatorRouter); // map the calculator routes to our app via /calculator endpoint

// export the app
module.exports = app;
