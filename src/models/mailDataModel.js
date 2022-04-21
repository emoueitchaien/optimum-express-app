import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mailSchema = new Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const mailData = mongoose.model("mailData", mailSchema);

export default mailData;
