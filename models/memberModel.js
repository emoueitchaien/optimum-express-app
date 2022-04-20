import mongoose from "mongoose";
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
        "Invalid Email Format",
      ],
    },
    pass: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const members = mongoose.model("members", memberSchema);

export default members;
