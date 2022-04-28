// PG database client/connection setup
const Pool = require("pg").Pool;
require("dotenv").config(); // Load .env data into process.env
// console.log(process.env); // confirm .env vars


// Method 1
const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env_PG_PORT,
};
console.log('test');
const proConfig = {
  connectionString: process.env.DATABASE_URL // heroku addons
};
console.log(devConfig);
console.log(proConfig);
console.log('!!!', process.env);
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
postgres://uscznyxqdyicsu:74284ba4abf28e5287f14e33e9fd53408908a73a674c9e64661d1451ac2890b9@ec2-54-80-123-146.compute-1.amazonaws.com:5432/d8sk02d97j4ifs
// Method 2
// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const proConfig = process.env.DATABASE_URL; // heroku addons
// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig,
// });

module.exports = pool;
