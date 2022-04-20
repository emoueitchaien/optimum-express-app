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
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
