const express = require("express");
const {
  createGenre,
  getGenre,
  getGenreById,
  deleteGenre,
  updateGenre,
} = require("../controllers/genre");

const route = express.Router();

route.post("/genre", createGenre);
route.get("/genre", getGenre);
route.get("/genre/:id", getGenreById);
route.post("/genre/:id", updateGenre);
route.delete("/genre/:id", deleteGenre);

module.exports = route;
