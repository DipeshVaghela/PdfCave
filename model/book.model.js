const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Required",
  },

  subject: {
    type: String,
    required: "Required",
  },

  sem: {
    type: Number,
    required: "Required",
  },

  branch: {
    type: String,
    required: "Required",
  },

  downloads: {
    type: Number,
    required: "Required",
    default: 0,
  },

  coverpage_url: {
    type: String,
    required: "Required",
  },

  download_link: {
    type: String,
    required: "Required",
  },

  inserted_by: {
    type: Date,
    required: "Required",
    default: Date.now,
  },
});

module.exports = mongoose.model("book", bookSchema);
