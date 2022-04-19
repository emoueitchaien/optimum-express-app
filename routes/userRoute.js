var express = require("express");
var router = express.Router();

//require controller modules
var userController = require("../controllers/userController");

router.route("/").get(userController.getUsers).post(userController.addUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
