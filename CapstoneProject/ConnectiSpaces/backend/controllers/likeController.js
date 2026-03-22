"use strict";
let Models = require("../models");

// Get all likes
const getLikes = (res) => {
  Models.Like.find({})
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new like
const createLike = (data, res) => {
  console.log(data);
  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update a like by ID
const updateLike = (req, res) => {
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a like by ID
const deleteLike = (req, res) => {
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
};