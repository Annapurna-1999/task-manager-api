const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} = require("../controllers/task.controller");

// CREATE
router.post("/", authMiddleware, createTask);

// READ ALL
router.get("/", authMiddleware, getAllTasks);

// READ ONE
router.get("/:id", authMiddleware, getTaskById);

// UPDATE
router.put("/:id", authMiddleware, updateTask);

// DELETE
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;