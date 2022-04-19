var express = require("express");
var router = express.Router();

//require controller modules
var userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/add", userController.addUser);
router.get("/:id", userController.getUserById);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
