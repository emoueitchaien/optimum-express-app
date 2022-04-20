import express from "express";
var router = express.Router();

import authController from "../controllers/authController.js";

router.route("/").get(authController.getMember);

router.route("/signup").post(authController.signupMember);

router.route("/login").post(authController.loginMember);

export default router;
