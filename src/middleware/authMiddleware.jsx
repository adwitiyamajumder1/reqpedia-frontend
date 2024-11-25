// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const verifyTokenAndRole = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (req.user.role === "admin") {
      return res.redirect("/dashboard-admin");
    } else if (req.user.role === "recruiter") {
      return res.redirect("/dashboard");
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyTokenAndRole;
