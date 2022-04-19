import dotenv from "dotenv";
import express from "express";
const app = express();
const PORT = process.env.PORT || 5001;
import user from "./routes/userRoute.js";
import mongoose from "mongoose";

dotenv.config();

//Body Parser
app.use(express.json());

//MangoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established sucessfully");
});

app.get("/", (req, res) => {
  res.send("Hello, Optimum Futurists!!!");
});

app.use("/user", user);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
