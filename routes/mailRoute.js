import express from "express";
import mailHandler from "../middlewares/mailHandler.js";

let router = express.Router();

import mailController from "../controllers/mailController.js";

router.route("/").post(mailHandler, mailController.sendMail);

export default router;
