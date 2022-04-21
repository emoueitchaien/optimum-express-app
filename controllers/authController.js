import members from "../models/memberModel.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtSecretKey = process.env.jwtSecretKey;

const memberController = {
  getMember: async (req, res) => {
    try {
      const allMembers = await members.find();
      res.status(200).json({ "All Members": allMembers });
    } catch (err) {
      res.status(400).json({ "Erroeeer:": err.code });
    }
  },

  signupMember: async (req, res) => {
    try {
      const { name, email, pass, isAdmin } = req.body;
      if (!name || !email || !pass) {
        res.status(400).json({ error: "Please fill up all input fields" });
        return;
      }
      const savedMember = await members.findOne({ email: email });

      if (savedMember) {
        return res.status(422).json({ error: "User already exists!" });
      }

      const salt = 15;
      const hashedpass = await bcrypt.hash(pass, salt);
      const newMember = new members({
        name,
        email,
        pass: hashedpass,
        isAdmin,
      });
      const memberAdded = await newMember.save();
      res.json({
        message: "User SignUp Successful!",
        memberAdded: memberAdded,
      });
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  },

  loginMember: async (req, res) => {
    try {
      const { email, pass } = req.body;
      if (!email || !pass) {
        return res.status(422).json({ error: "Please fill up all details!" });
      }
      const savedMember = await members.findOne({ email: email });
      if (!savedMember) {
        return res.status(422).json({ error: "Incorrect Details!" });
      }
      const match = await bcrypt.compare(pass, savedMember.pass);

      if (match) {
        const token = jsonwebtoken.sign(
          { _id: savedMember._id, isAdmin: savedMember.isAdmin },
          jwtSecretKey
        );
        res.status(200).json({ message: "Login Successful!!", token });
      } else {
        res.status(422).json({ error: "Incorrect Details!" });
      }
    } catch (err) {
      res.status(400).json({ Error: err });
    }
  },

  accessProtected: async (req, res) => {
    res.send("You are allowed to access this resource!");
  },
};

export default memberController;
