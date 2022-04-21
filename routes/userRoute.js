import express from "express";
var router = express.Router();

import userController from "../controllers/userController.js";
import requireLogin from "../middlewares/requireLogin.js";

router.route("/").get(userController.getUsers).post(userController.addUser);

router.use(requireLogin);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
