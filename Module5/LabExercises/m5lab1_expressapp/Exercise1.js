/*

Instructions:
[/] follow the instructions on slides 11-17 to create a basic Express app
[/] extend it to create multiple web servers (at least 2) running on different ports.

[ACHIEVED] Goal: To learn the basics of creating and starting a backend application using Express.

Submission: Create your Express app in a folder for Exercise 1 and submit it into your GitHub lab
exercises repository once changes are complete.

[ ] Extension: Read through the links below to understand more about creating back-ends with Express.

Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

*/

const express = require("express"); // importing express; can give any name in place of the variable express
const app = express(); // web server
const port = 2800; // not using any standard ports used by other application; should be unique

const app2 = express() // create another port server
const port2 = 3030;

const app3 = express() // third port
const port3 = 3050;

// GET

//app
app.get("/", (req, res)=> {
    res.send("Welcome to my backend application");
});

app.get("/test", (req, res)=>{
    res.send("This page is developed by Jeremy as part of sample demonstration of backend web services.");
});

//app2
app2.get("/", (req, res)=> {
    res.send("Welcome to my second web server.");
});

app2.get("/contact", (req, res)=> {
    res.send("Please contact 1111-111-111");
});

app2.get("/location", (req, res)=> {
    res.send("You can find me in Sydney, Australia.");
});

// app3
app3.get("/", (req,res)=>{
    res.send("Welcome to the third port / web server.");
})
app3.get("/leisures", (req, res)=> {
    res.send("In here, you may find an extensive list of leisure activities.")
})

// LISTEN
app.listen(port, () => {
  console.log(`Web server started... Go to http://127.0.0.1:${port}`);
});

app2.listen(port2, () => { //port2 since it's a different port '3030'
    console.log(`Second web server started... Go to http://127.0.0.1:${port2}`)
})

app3.listen(port3, () => {
    console.log(`Third web server started... Go to http://127.0.0.1:${port3}`);
})

// TESTING
// 1.) Go to the browser
// 2.) http://127.0.0.1:3000/