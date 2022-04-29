import express from "express";
var router = express.Router();

import projectController from "../controllers/projectController.js";

router.route("/").get(projectController.fetchProjects);

export default router;
