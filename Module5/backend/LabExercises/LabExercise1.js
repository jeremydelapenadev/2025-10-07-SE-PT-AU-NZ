const express = require("express"); // importing express; can give any name in place of the variable express
const app = express(); // web server

const app2 = express() // create another port server

const port = 2800; // not using any standard ports used by other application; should be unique

const port2 = 3030;

app.get("/", (req, res)=> {
    res.send("Welcome to my backend application");
});

app.get("/test", (req, res)=>{
    res.send("This page is developed by Jeremy as part of sample demonstration of backend web services.");
});

app2.get("/", (req, res)=> {
    res.send("Welcome to my second web server.");
});

app2.get("/contact", (req, res)=> {
    res.send("Please contact 1111-111-111");
});

app2.get("/location", (req, res)=> {
    res.send("You can find me in Sydney, Australia.");
});

app.listen(port, () => {
  console.log("Web server started...");
});

app2.listen(port2, () => {
    console.log("Second web server has started...")
})

// testing
// 1.) Go to the browser
// 2.) http://127.0.0.1:3000/