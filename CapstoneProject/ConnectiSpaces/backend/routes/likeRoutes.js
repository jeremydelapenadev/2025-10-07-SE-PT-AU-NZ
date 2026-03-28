"use strict";
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

router.delete("/remove", (req, res) => {
  Controllers.likeController.removeLike(req, res);
});

router.get("/user/:userId", (req, res) => {
  Controllers.likeController.getLikesByUser(req, res);
});

module.exports = router;