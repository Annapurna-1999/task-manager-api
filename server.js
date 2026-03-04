const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Task Manager API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});