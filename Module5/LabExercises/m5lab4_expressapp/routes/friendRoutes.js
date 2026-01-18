const express = require("express");
const router = express.Router();
// const friends = require("../models/friends"); --> transfer to friendController.js
const friendController = require("../controllers/friendController");

// Routes using controller functions - Exercise 4 To-do #5
router.get('/', friendController.getAllFriends);
router.get('/filter', friendController.filterFriends);
router.get('/info', friendController.getInfo);
router.get('/:id', friendController.getFriendById);
router.post('/', friendController.addFriend);
router.put('/:id', friendController.updateFriend);

module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R

/* router.get("/filter", (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;

  // added code for 'letter' query parameter
  let filterLetter = req.query.letter;

  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender,
    );
  }

  // filtering by starting letter -- adding the toLowerCase() method to make it case insensitive
  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toLowerCase().startsWith(filterLetter.toLowerCase()),
    );
  }

  // tried with the /friends/filter?letter=r and it worked

  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res
      .status(404)
      .json({ error: "No friends matching gender " + filterGender });
  }
}); */

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Get information about this request from the headers

/* LEARNER NOTE:
When a client (like a browser, Postman, or another service) makes a request to your server, it sends headers along with it. These headers contain important information about the request, such as:

- User-Agent: Information about the client making the request (e.g., browser type and version).
- Content-Type: The format of the data being sent in the request body (e.g., application/json).
- Accept: The types of responses the client can handle (e.g., application/json, text/html).

So essentially, it’s about examining the request itself, not just the data sent in the URL or body.
This is very useful for APIs that need to behave differently depending on the client, the content type, or other metadata.

*/

/*
router.get("/info", (req, res) => {
  console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  const info = {
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  };

  res.json(info);
});

*/

// checked --> went to /friends/info in browser and only user-agent and accept were shown (content-type was empty since no body was sent in GET request)

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3

/*
router.get("/:id", (req, res) => {
  console.log(req.params);
  // let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path
  let friendId = parseInt(req.params.id); // convert to integer for comparison

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  let friend = friends.find((f) => f.id === friendId);

  // Modify this response with the matched friend, or a 404 if not found
  //res.json({result: 'Finding friend with ID ' + friendId})

  if (friend) {
    res.status(200).json(friend); // return the friend if found
  } else {
    res.status(404).json({ error: `Friend with ID ${friendId} not found` }); // send error message if not found
  }
}); // tested and working

////////////////////////////////////////////////////////////////////////////////////////////

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
}); // tested via Thunder Client and working

*/

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Complete this new route for a PUT request which will update data for an existing friend

/*
router.put("/:id", (req, res) => {
  let friendId = parseInt(req.params.id); // Step 1: convert string to a number
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  let index = friends.findIndex((f) => f.id === friendId); // Step 2: find the index of the friend from the array to update

  if (index !== -1) {
    // update only the name and gender (optional: leave id unchanged)
    friends[index] = {
      id: friends[index].id, // keep the original id
      name: updatedFriend.name || friends[index].name,
      gender: updatedFriend.gender || friends[index].gender,
    };

    // Modify this response with the updated friend, or a 404 if not found

    res.status(200).json({
      result: "Updated friend with ID " + friendId,
      data: friends[index], // actual updated friend object
    });
  } else {
    // friend not found
    res.status(404).json({
      error: `Friend with ID ${friendId} not found`,
    });
  }
}); // tested via Thunder Client and working

*/