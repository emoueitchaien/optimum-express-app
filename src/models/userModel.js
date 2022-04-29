import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Address: { type: String, required: true },
    Contact: { type: Number, required: true },
    isDelete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

export default user;
