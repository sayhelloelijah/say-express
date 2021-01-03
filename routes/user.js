const { Router } = require("express");
const Joi = require("joi");
const db = require("../database");

const router = Router();
router.use((req, res, next) => {
  console.log("Request made to /posts route");
  next();
});

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().min(8).required(),
  });
  return schema.validate(user);
};

router.get("/", async (req, res) => {
  const results = await db.promise().query("SELECT * FROM users LIMIT 1000");
  res.send(results[0]);
});

router.get("/:id", async (req, res) => {
  const user = await db
    .promise()
    .query(`SELECT * FROM users WHERE id=${req.params.id}`);
  if (user[0].length === 0) {
    return res.status(404).send("User was not found");
  }
  res.send(user[0]);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, password, email } = req.body;
  if ((name && password, email)) {
    try {
      await db
        .promise()
        .query(
          `INSERT INTO users (name, email, password) VALUES('${name}','${email}', '${password}')`
        );
      res.status(201).send({ msg: "Created User" });
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;