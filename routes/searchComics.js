const express = require("express");
const router = express.Router();
const axios = require("axios");
const formidable = require("express-formidable");
router.use(formidable());
const md5 = require("md5");
const uid2 = require("uid2");

router.get("/searchByComic", async (req, res) => {
  const ts = uid2(8);
  const hash = md5(
    ts + process.env.MARVEL_PRIVATE_API_KEY + process.env.MARVEL_PUBLIC_API_KEY
  );
  const search = req.headers.search;

  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${search}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hash}&limit=100&`
  );
  res.json(response.data.data);
});

module.exports = router;
