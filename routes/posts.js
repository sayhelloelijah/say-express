const { Router } = require("express");
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

router.get("/:id", async (req, res) => {
    const post = await db
        .promise()
        .query(`SELECT * FROM posts WHERE id="${req.params.id}"`);
    res.send(post[0]);
});

module.exports = router;
