// PG database client/connection setup
const { Pool } = require("pg");

const pool = new Pool({
  // user: "highwind",
  // password: "",
  // host: "localhost",
  // port: 5432,
  // database: "perntodo"
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env_DB_PORT,
  database: process.env.DB_NAME
});

module.exports = pool;