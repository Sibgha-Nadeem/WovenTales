const express = require("express");
const { signupUser, loginUser, getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/signup", signupUser);
router.post("/login", loginUser);

// Protected route
router.get("/profile", protect, getUserProfile);

module.exports = router;
