const express = require("express");
const router = express.Router();

const userController = require("./../controllers/users");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/isLoggedIn", userController.isUser);
router.get("/user", userController.getUser);

module.exports = router;
