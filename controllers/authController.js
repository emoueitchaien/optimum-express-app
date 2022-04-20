import members from "../models/memberModel.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";

const memberController = {
  greetMember: async (req, res) => {
    res.status(200).json({ message: "Hello New Member!" });
  },

  signupMember: async (req, res) => {
    try {
      const { name, email, pass } = req.body;
      if (!name || !email || !pass) {
        res.status(400).json({ error: "Please fill up all input fields" });
        return;
      }
      const savedMember = await members.findOne({ email: email });

      if (savedMember) {
        return res.status(422).json({ error: "User already exists!" });
      }
      const hashedpass = await bcrypt.hash(pass, 15);
      const newMember = new members({
        name,
        email,
        pass: hashedpass,
      });
      const memberAdded = await newMember.save();
      res.json({
        message: "User SignUp Successful!",
        memberAdded: memberAdded,
      });
    } catch (err) {
      res.status(400).json({ "Erroeeer:": err.code });
    }
  },

  loginMember: async (req, res) => {
    //     try {
    //       const userIdRes = await user.findById(req.params.id);
    //       res.status(200).json({ "User with Id": userIdRes });
    //     } catch (err) {
    //       res.status(400).json({ "Error:": err });
    //     }
  },
};
export default memberController;
