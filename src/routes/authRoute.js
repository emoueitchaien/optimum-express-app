import express from "express";
import requireLogin from "../middlewares/requireLogin.js";

let router = express.Router();

import authController from "../controllers/authController.js";

router.route("/").get(authController.getMember);

router.route("/protected").get(requireLogin, authController.accessProtected);

router.route("/signup").post(authController.signupMember);

router.route("/login").post(authController.loginMember);

export default router;
