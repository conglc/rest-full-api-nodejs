const express = require("express");
const router = express.Router();

const authorize = require('../middleware/auth');
const userController = require('../controllers/user.controller');

router.get("/", authorize, userController.users_get_all);

router.post("/signup", userController.users_signup);

router.post("/login", userController.users_login);

router.delete("/:userId", authorize, userController.users_delete);

module.exports = router;
