import express from "express";
import mail from "../middlewares/mailHandler.js";

let router = express.Router();

import mailController from "../controllers/mailController.js";

router.route("/").post(mail, mailController.sendMail);

export default router;
