const express = require("express");
const router = express.Router();
const axios = require("axios");
const formidable = require("express-formidable");
router.use(formidable());
const md5 = require("md5");
const uid2 = require("uid2");

router.get("/", async (req, res) => {
  const ts = uid2(8);
  const hash = md5(
    ts + process.env.MARVEL_PRIVATE_API_KEY + process.env.MARVEL_PUBLIC_API_KEY
  );
  const offset = req.headers.offset;

  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hash}&limit=100&offset=${offset}`
  );
  res.json(response.data.data);
});

router.get("/id", async (req, res) => {
  const ts = uid2(8);
  const hash = md5(
    ts + process.env.MARVEL_PRIVATE_API_KEY + process.env.MARVEL_PUBLIC_API_KEY
  );
  const id = req.headers.id;
  const id_test = 1011334;
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hash}&limit=100`
  );
  res.json(response.data.data);
});

module.exports = router;
