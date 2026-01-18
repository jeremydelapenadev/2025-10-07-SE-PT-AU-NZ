const express = require("express"); // importing express; can give any name in place of the variable express

const cors = require("cors");

const productsRouter = require("./routes/productRoutes"); // import all fake store routes

const app = express(); // web server

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use(cors()); // to avoid CORS errors -- placed at the top before any routes

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json()); // to parse JSON bodies

app.use("/api/products", productsRouter); // use the product routes for /api/products endpoint

module.exports = app;