const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/UserControllers.js");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
