const { Pool } = require("pg");

const pool = new Pool({
  user: "highwind",
  password: "",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;