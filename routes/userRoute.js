import express from "express";
var router = express.Router();

import userController from "../controllers/userController.js";

router.route("/").get(userController.getUsers).post(userController.addUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
