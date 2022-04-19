import user from "../models/userModel.js";

const userController = {
  getUsers: (req, res) => {
    user
      .find()
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  addUser: (req, res) => {
    const newUser = new user({
      Name: req.body.Name,
      Email: req.body.Email,
      Address: req.body.Address,
      Contact: Number(req.body.Contact),
    });
    newUser
      .save()
      .then(() => res.json("User Added"))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  getUserById: (req, res) => {
    user
      .findById(req.params.id)
      .then((User) => res.json(User))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  deleteUser: (req, res) => {
    user
      .findByIdAndDelete(req.params.id)
      .then((user) => res.json(`${user} deleted`))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  updateUser: (req, res) => {
    user
      .findById(req.params.id)
      .then((user) => {
        user.Name = req.body.Name;
        user.Email = req.body.Email;
        user.Address = req.body.Address;
        user.Contact = Number(req.body.Contact);

        user
          .save()
          .then(() => res.json("User Updated"))
          .catch((err) => res.status(400).json("Error:" + err));
      })
      .catch((err) => res.status(400).json("Error:" + err));
  },

  deleteUser: (req, res) => {
    user
      .findByIdAndDelete(req.params.id)
      .then((user) => res.json(`${user} deleted`))
      .catch((err) => res.status(400).json("Error:" + err));
  },
};

export default userController;
