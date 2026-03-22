"use strict";
let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js

// GET all likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// POST create a new like
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

// PUT update a like by ID
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

// DELETE a like by ID
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;