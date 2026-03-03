const express = require("express");
const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} = require("../controllers/task.controller");

// CREATE
router.post("/", createTask);

// READ ALL
router.get("/", getAllTasks);

// READ ONE
router.get("/:id", getTaskById);

// UPDATE
router.put("/:id", updateTask);

// DELETE
router.delete("/:id", deleteTask);

module.exports = router;