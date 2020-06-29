const porta = 3003;

const cors = require("cors");
const express = require("express");
const app = express();
const index = require("./index");

app.use(cors());
app.use(express.json());

app.post("/api/users/login", async (req, res, next) => {
  const user = await index.login({
    username: req.body.email,
    password: req.body.password,
  });
  if (user) {
    res.json({ user });
  } else {
    res.json(null);
  }
});

app.post("/api/users", (req, res, next) => {
  const user = index.insertUser({
    username: req.body.username,
    password: req.body.password,
  });

  res.send(user);
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
