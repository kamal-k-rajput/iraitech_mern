const express = require("express");
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");
const app = express();

app.use(express.json());

app.get("/profile", userController);
app.post("/register", register);
app.post("/login", login);

app.get("/", (req, res) => {
  try {
    console.log(req.url);
    return res
      .status(200)
      .send(
        "<h1>Hello welcome to the server. Create your account to get the more from us.</h1>"
      );
  } catch (err) {
    return res.status(404).send({ status: "failed", err });
  }
});
module.exports = app;
