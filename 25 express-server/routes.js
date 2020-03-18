const express = require("express");

const tareas = require("./entity/task/controller.js")

const router = express.Router();

router.get("/tareas", tareas.index);

router.get("/tareas/:id", tareas.show);

module.exports = router;