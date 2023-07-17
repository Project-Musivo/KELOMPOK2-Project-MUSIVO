const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/UserControllers.js");

const userMIddleware = require("../middleware/userMiddleware.js");

const router = express.Router();

router.post("/users", createUser); // register || createUser
router.get("/users", userMIddleware, getUsers);
router.get("/users/:id",  userMIddleware, getUserById);
router.patch("/users/:id", userMIddleware, editUser);
router.delete("/users/:id",  userMIddleware, deleteUser);

module.exports = router;
