const { Pool, Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "bancoProjetoReact",
  password: "1234",
  port: 5432,
});
client.connect();

async function createUser(user) {
  return await client.query(
    "INSERT INTO public.users( username, passowrd ) VALUES ($1, $2)",
    [user.username, user.password]
  );
}

async function login(user) {
  return await client.query(
    "SELECT username FROM public.users WHERE username = $1 AND password = $2;",
    [user.username, user.password]
  );
}

module.exports = { createUser, login };
