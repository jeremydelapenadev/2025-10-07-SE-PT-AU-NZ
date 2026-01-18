// NOTE: Please refer to ./public/js for Exercise instructions and completed tasks.

// importing information
const express = require("express");
// as per Exercise6, moved to app.js --> const app = express();  // create an app using the express package

// import the app
const app = require("./app");
const port = 3000; // create a port server
// as per Exercise6, moved to app.js --> const calculatorRouter = require("./routes/CalculatorRoutes"); // import all calculator routes (up the top)

// for Exercise8 Part 1: setting up Swagger UI
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// USE / static files middleware
app.use("/", express.static("public")); // will tell the system to fetch pages from the public directory on the root endpoint
// as per Exercise6, moved to app.js --> app.use('/calculator', calculatorRouter); // map the calculator routes to our app via /calculator endpoint

//getting the root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

// listening on the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
