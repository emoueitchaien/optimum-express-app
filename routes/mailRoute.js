import express from "express";
// import requireLogin from "../middlewares/requireLogin.js";

let router = express.Router();

import mailController from "../controllers/mailController.js";

router.route("/").post(mailController.sendMail);

export default router;
