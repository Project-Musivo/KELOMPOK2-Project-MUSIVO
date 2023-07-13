const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const FileUpload = require('express-fileupload');
// require route
const GenreRoute = require("./routes/genre.js");
const UserRoute = require("./routes/UserRoute.js");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(GenreRoute);
app.use(UserRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on PORT ${PORT}`);
});
