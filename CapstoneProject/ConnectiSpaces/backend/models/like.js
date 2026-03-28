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

// Prevent duplicate likes for the same user + same post
likeSchema.index({ user_id: 1, post_id: 1 }, { unique: true, sparse: true });

// Prevent duplicate likes for the same user + same comment
likeSchema.index({ user_id: 1, comment_id: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model("like", likeSchema);