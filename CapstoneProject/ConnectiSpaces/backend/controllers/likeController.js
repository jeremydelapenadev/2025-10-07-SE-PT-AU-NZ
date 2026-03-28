"use strict";
let Models = require("../models");

const createLike = (data, res) => {
  Models.Like.findOne({
    user_id: data.user_id,
    post_id: data.post_id,
  })
    .then((existingLike) => {
      if (existingLike) {
        return res.send({
          result: 200,
          message: "Post already liked",
          data: existingLike,
        });
      }

      return new Models.Like({
        user_id: data.user_id,
        post_id: data.post_id,
      })
        .save()
        .then((savedLike) => {
          res.send({ result: 200, data: savedLike });
        });
    })
    .catch((err) => {
      console.log("Create like error:", err);
      res.send({ result: 500, error: err.message });
    });
};

const removeLike = (req, res) => {
  const { user_id, post_id } = req.body;

  Models.Like.findOneAndDelete({ user_id, post_id })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Remove like error:", err);
      res.send({ result: 500, error: err.message });
    });
};

const getLikesByUser = (req, res) => {
  Models.Like.find({ user_id: req.params.userId })
    .populate("post_id")
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Get likes by user error:", err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createLike,
  removeLike,
  getLikesByUser,
};