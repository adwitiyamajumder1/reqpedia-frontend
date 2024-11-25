const express = require("express");
const verifyTokenAndRole = require("./middleware/authMiddleware"); // Import middleware

const router = express.Router();

// Admin Dashboard Route
router.get("/dashboard-admin", verifyTokenAndRole, (req, res) => {
  if (req.user.role === "admin") {
    res.status(200).send("Welcome to Admin Dashboard");
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
});

// Recruiter Dashboard Route
router.get("/dashboard", verifyTokenAndRole, (req, res) => {
  if (req.user.role === "recruiter") {
    res.status(200).send("Welcome to Recruiter Dashboard");
  } else {
    res.status(403).json({ message: "Access denied. Recruiters only." });
  }
});

// Shared Dashboard Route
router.get("/dashboard", verifyTokenAndRole, (req, res) => {
  res.status(200).send(`Hello, ${req.user.username}. This is the dashboard.`);
});

// Protected Resource (accessible to all authenticated users)
router.get("/protected", verifyTokenAndRole, (req, res) => {
  res.status(200).send(`Hello, ${req.user.username}. You are authenticated.`);
});

module.exports = router;
