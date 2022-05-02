import cors from "cors";
import express from "express";

const dotenv = require("dotenv");
dotenv.config();

const app = express();
import mongoose from "mongoose";
const PORT = process.env.PORT || 5001;

import user from "./src/routes/userRoute.js";
import members from "./src/routes/authRoute.js";
import contact from "./src/routes/mailRoute.js";
import project from "./src/routes/projectRoute.js";

app.use(express.json());

const corsOptions = {
  origin: process.env.corsOrigin,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

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
app.use("/projects", project);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
