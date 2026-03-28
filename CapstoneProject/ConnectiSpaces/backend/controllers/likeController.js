"use strict";
let Models = require("../models");

const createLike = (data, res) => {
  const query = { user_id: data.user_id };
  if (data.post_id) query.post_id = data.post_id;
  if (data.comment_id) query.comment_id = data.comment_id;

  Models.Like.findOne(query)
    .then((existingLike) => {
      if (existingLike) {
        return res.send({
          result: 200,
          message: "Already liked",
          data: existingLike,
        });
      }

      return new Models.Like({
        user_id: data.user_id,
        post_id: data.post_id || null,
        comment_id: data.comment_id || null,
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
  const { user_id, post_id, comment_id } = req.body;

  const query = { user_id };
  if (post_id) query.post_id = post_id;
  if (comment_id) query.comment_id = comment_id;

  Models.Like.findOneAndDelete(query)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Remove like error:", err);
      res.send({ result: 500, error: err.message });
    });
};

const getLikesByUser = (req, res) => {
  Models.Like.find({ user_id: req.params.userId })
    .populate("post_id")
    .populate("comment_id")
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Get likes by user error:", err);
      res.send({ result: 500, error: err.message });
    });
};

const getLikesByPost = (req, res) => {
  console.log("getLikesByPost req.params =", req.params);
  console.log("Models.Like =", Models.Like);

  Models.Like.find({ post_id: req.params.postId })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Get likes by post error:", err);
      res.send({ result: 500, error: err.message });
    });
};

const getLikesByComment = (req, res) => {
  Models.Like.find({ comment_id: req.params.commentId })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log("Get likes by comment error:", err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createLike,
  removeLike,
  getLikesByUser,
  getLikesByPost,
  getLikesByComment,
};