/*

Instructions:
[/] copy the Express App template from Exercise4/m5lab4_expressapp from Google Drive into your existing GitHub repo for Module 5
[ ] make your changes to this code to complete the instructions on the slide (these are also in the comments).
      [/] update Express (npm install express@latest --save)
  
    In the `friendRoutes.js`
      [/] TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

      [/] TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

      [/] TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

      [/] TODO - #4: Complete the PUT route which will update data for an existing friend

      [/] TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

[ACHIEVED] Goal: To learn how to handle different types of data available in the request for each route.

Refer to pages 37 to 41 of Module 5 handout.

Submission: Commit your changes to the m5lab4_expressapp folder in your existing GitHub repo for Module 5.

[ ] Extension: Add another route to handle deleting a friend with a given ID. Create a new array of objects similar to friends but for movies,
  and a new set of routes to handle creating. reading, updating and deleting movies from this list.

Resources & Extra Learning:
- https://flaviocopes.com/express-request-parameters/
- https://masteringjs.io/tutorials/express/req
- https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters

*/

const express = require("express"); // import the express package (#1)
const friendRoutes = require('./routes/friendRoutes');

const app = express(); // create a new app (#2)
const port = 3000; // change this to run the app on a different port - usually a 4 digit number (#3)

// new app
const app2 = express();
const port2 = 3100;

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
