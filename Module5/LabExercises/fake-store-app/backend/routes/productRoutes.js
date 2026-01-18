const express = require("express");

const productsRouter = express.Router();

const { getProducts } = require("../controllers/productsController");

productsRouter.get("/", getProducts);

module.exports = productsRouter;