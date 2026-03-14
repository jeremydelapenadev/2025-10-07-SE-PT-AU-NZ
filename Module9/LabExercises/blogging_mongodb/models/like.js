const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  post_id: {
    type: Schema.Types.ObjectId,
    ref: "post"
  },

  comment_id: {
    type: Schema.Types.ObjectId,
    ref: "comment"
  }
});

module.exports = mongoose.model("like", likeSchema);