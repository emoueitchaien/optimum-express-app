import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import mongoose from "mongoose";
const PORT = process.env.PORT || 5001;
import user from "./src/routes/userRoute.js";

import members from "./src/routes/authRoute.js";
import contact from "./src/routes/mailRoute.js";

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
app.use("/members", members);
app.use("/contact", contact);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
