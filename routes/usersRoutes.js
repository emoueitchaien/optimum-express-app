const express = require("express");
router = express.Router();

//Importing Schema
const user = require("../models/usersModel");

router.route("/").get((req, res) => {
  user
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Address = req.body.Address;
  const Contact = Number(req.body.Contact);

  const newUser = new user({
    Name,
    Address,
    Contact,
  });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  user
    .findById(req.params.id)
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").put((req, res) => {
  user
    .findById(req.params.id)
    .then((user) => {
      user.Name = req.body.Name;
      user.Address = req.body.Address;
      user.Contact = Number(req.body.Contact);

      user
        .save()
        .then(() => res.json("User Updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/delete/:id").delete((req, res) => {
  user
    .findByIdAndDelete(req.params.id)
    .then((user) => res.json(`${user} deleted`))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
