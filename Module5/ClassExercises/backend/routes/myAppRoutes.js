const express = require("express")
// no need to create a web server app, as it's already created.
const myApprouter = express.Router()

myApprouter.get("/about", (req, res)=>{
    res.send("This is working.");
});

myApprouter.get("/test", (req, res)=>{
    res.send("This is working.");
});

myApprouter.get("/contact", (req, res)=> {
    res.send("Please contact 1111-111-111");
});

module.exports = myApprouter;