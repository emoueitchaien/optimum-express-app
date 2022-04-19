import user from "../models/userModel.js";

const userController = {
  getUsers: async (req, res) => {
    try {
      const userRes = await user.find();
      res.status(200).json({ data: userRes, status: 200 });
    } catch (err) {
      res.status(400).json({ Error: err });
    }
  },

  addUser: async (req, res) => {
    const newUser = new user({
      Name: req.body.Name,
      Email: req.body.Email,
      Address: req.body.Address,
      Contact: Number(req.body.Contact),
    });
    try {
      const userRes = await newUser.save();
      res.status(200).json({ "User Added": userRes });
    } catch (err) {
      res.status(400).json({ Error: err });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userRes = await user.findById(req.params.id);
      res.status(200).json({ "User with Id": userRes });
    } catch (err) {
      res.status(400).json({ Error: err });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userRes = await user.findById(req.params.id);

      userRes.Name = req.body.Name;
      userRes.Email = req.body.Email;
      userRes.Address = req.body.Address;
      userRes.Contact = Number(req.body.Contact);

      const update = await userRes.save();
      res.status(200).json("User Updated");
    } catch (err) {
      res.status(400).json("Error:" + err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userRes = await user.findByIdAndDelete(req.params.id);
      res.json({ "User Deleted": userRes });
    } catch (err) {
      res.status(400).json("Error:" + err);
    }
  },
};

export default userController;
