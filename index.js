require("dotenv").config();
const express = require("express");
const app = express();
const formidable = require("express-formidable");
app.use(formidable());
const cors = require("cors");

app.use(cors());

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const searchByCharacterRoutes = require("./routes/searchCharacters");
app.use(searchByCharacterRoutes);

const searchByComicRoutes = require("./routes/searchComics");
app.use(searchByComicRoutes);

/* app.get("/bonjour", (req, res) => {
  res.json({ message: "Bonjour" });
});
 */
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
