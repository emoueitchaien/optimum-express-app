require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello, Optimum Futurists!!!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
