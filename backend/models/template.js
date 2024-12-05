const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  name: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  type: { type: String, default: "user-created" },
});

module.exports = mongoose.model("Template", templateSchema);
