const { Router } = require("express");
const Joi = require("joi");
const db = require("../database");

const router = Router();
router.use((req, res, next) => {
  console.log("Request made to /posts route");
  next();
});

router.get("/", async (req, res) => {
  const posts = await db.promise().query("SELECT * FROM posts LIMIT 1000");
  res.send(posts[0]);
});

module.exports = router;
