import express from "express";
var router = express.Router();

import projectController from "../controllers/projectController.js";
// import requireLogin from "../middlewares/requireLogin.js";

// router.use(requireLogin);

router.route("/").get(projectController.fetchProjects);

export default router;
