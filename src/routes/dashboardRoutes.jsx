// src/routes/dashboardRoutes.js
const express = require("express");
const verifyTokenAndRole = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/dashboard", verifyTokenAndRole, (req, res) => {
  res.send("This is the dashboard.");
});

router.get("/dashboard-admin", (req, res) => {
  res.send("Welcome to the Admin Dashboard");
});

router.get("/dashboard-recruiter", (req, res) => {
    res.send("Welcome to the Recruiter Dashboard");
  });


module.exports = router;
