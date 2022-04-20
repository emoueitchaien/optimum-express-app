import express from "express";
var router = express.Router();

import authController from "../controllers/authController.js";

router.route("/signup").post(authController.signupMember);

router.route("/login").post(userController.loginMember);

export default router;
