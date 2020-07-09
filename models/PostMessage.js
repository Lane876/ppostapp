const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = PostMessage = mongoose.model("PostMessage", PostSchema);
