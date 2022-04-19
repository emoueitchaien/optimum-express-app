const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Address: { type: String, required: true },
    Contact: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
