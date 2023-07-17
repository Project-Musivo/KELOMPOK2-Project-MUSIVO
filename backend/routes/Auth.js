const express = require("express");
const router = express.Router();
const userMIddleware = require("../middleware/userMiddleware.js");
const { login, test, userMe, logout } = require("../controllers/Auth.js");

router.get("/test", userMIddleware, test);
router.post("/login", login);
router.delete("/logout", userMIddleware, logout);
router.get("/user/me", userMIddleware, userMe);

module.exports = router;
