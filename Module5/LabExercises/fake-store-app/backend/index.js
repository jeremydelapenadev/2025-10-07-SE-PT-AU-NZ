const express = require("express"); // importing express; can give any name in place of the variable express
// import the app
const app = require("./app");
const port = 3000; // create a port server

// USE / static files middleware
app.use("/", express.static("public")); // will tell the system to fetch pages from the public directory on the root endpoint

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});