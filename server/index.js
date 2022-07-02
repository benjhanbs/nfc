const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  console.log('CONNECTED TO DB')
  // client
  //   .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  //   .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get('/now', async (req, res) => {
  try {
   const { rows } = await pgClient.query('SELECT NOW()')
   res.status(200).send(rows[0].now)
  } catch (err) {
   console.log(err)
  }
 })

app.listen(5000, err => {
  console.log("Listening");
});
