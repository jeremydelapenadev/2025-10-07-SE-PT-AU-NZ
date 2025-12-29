const express = require("express")
const secondAppRouter = express.Router()

secondAppRouter.get("/", (req, res)=> {
    res.send("Welcome to my second web server.");
});

module.exports = secondAppRouter;