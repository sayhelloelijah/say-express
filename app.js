const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
