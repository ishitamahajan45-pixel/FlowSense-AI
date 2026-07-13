const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/userController");

const {
  validateRegister,
  validateLogin,
} = require("../validation/userValidation");
// Register User
router.post("/register", validateRegister, registerUser);

// Login User
router.post("/login", validateLogin, loginUser);

module.exports = router;