const express = require("express");
const app = require("app"); // imported from the app.js

const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')


const myApprouter = require("./routes/myAppRoutes"); // imported the router
const secondAppRouter = require("./routes/secondAppRoutes")
const userRouter = require("./routes/userRoutes")

const cors = require("cors");


const app2 = express() // create another port server

const port = 3000; // not using any standard ports used by other application; should be unique

const port2 = 3001;

app.use(cors()); // this line will resolve the rose blocking policy; must be enable before any routes

app.use(express.json()); // step 1 in REQUEST BODY (go to userRoutes.js next)

app.use('/', express.static('public'));

app.use('/', myApprouter); // attached router back to web server

app.use('/users', userRouter);

app.use('/', secondAppRouter);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.get("/", (req, res)=> {
    res.send("Welcome to my backend application");
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