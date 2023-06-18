const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// require route
const GenreRoute = require("./routes/genre");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(GenreRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on PORT ${PORT}`);
});
