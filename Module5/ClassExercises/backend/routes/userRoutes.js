const express = require("express");
const userRouter = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// Step 2 in REQUEST BODY
userRouter.post("/", (req, res)=>{
    console.log(req.body); // for debugging
    let newUser = req.body;

    if(!newUser.name || !newUser.country) {
        res.status(500).json({error: "User must have either name or country to add."});
        return;
    }
else if(!newUser.id) {
    newUser.id = users.length + 1;
}
    users.push(newUser);

    res.status(200).json(newUser);
})

userRouter.get("/headers", (req, res)=>{
    res.json(req.headers);
})

// make sure it's the last root added, as everything below this will be considered a dynamic path
userRouter.get("/:id", (req, res) => {
  let userid = req.params.id; //dynamic request parameter fetched

  let userFound = users.find((user) => user.id == userid);

  if (userFound) {
    res.status(200);
    res.json({ result: userFound });
  } else {
    res.status(404);
    res.json({ result: "user not found" });
  }
});

module.exports = userRouter;