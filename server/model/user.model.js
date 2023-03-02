const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: "" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
