import express from "express";

let router = express.Router();

import mailController from "../controllers/mailController.js";

router.route("/").post(mailController.sendMail);

export default router;
