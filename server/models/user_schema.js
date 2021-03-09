const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  created: { type: Date, default: Date.now },
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("users", schema);
