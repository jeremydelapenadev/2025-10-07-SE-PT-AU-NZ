const express = require("express");
const app = express();

require("dotenv").config(); // input for dotenv file, which contains the DB_URI and PORT variables

require("./dbConnect"); // MUST come before routes

// Now that we have our routes ready, we also need to add them to
// our server.js file so the application knows that such routes exist
let userRoutes = require("./routes/UserRoutes"); // matches UserRoutes.js

// parse requests of content-type - application/json

app.use(express.json()); // send data in json format

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});


app.use('/api/users', userRoutes); // will attach the userRoutes to the /api/users path, so all routes in userRoutes will be prefixed with /api/users

// set port, listen for requests

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});