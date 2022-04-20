import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtSecretKey = process.env.jwtSecretKey;
import members from "../models/memberModel.js";

const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Please login first" });
  }
  const token = authorization.replace("Bearer ", "");
  jsonwebtoken.verify(token, jwtSecretKey, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Please login first" });
    }

    const { _id } = payload;
    members.findById(_id).then((memberData) => {
      req.member = memberData;
      next();
    });
  });
};

export default requireLogin;
