const express = require("express");
const router = express.Router();
const authController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post('/change-password', authController.changePassword);

// Protected route (example)
router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted" });
});

module.exports = router;
