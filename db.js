// PG database client/connection setup
const Pool = require("pg").Pool;
require("dotenv").config(); // Load .env data into process.env
// console.log(process.env); // confirm .env vars

// Method 1
// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env_PG_PORT,
// };
// const proConfig = {
//   connectionString: process.env.DATABASE_URL // heroku addons
// };
// const pool = new Pool(
//   process.env.NODE_ENV === "production" ? proConfig : devConfig
// );

// Method 2
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; // heroku addons

const pool = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return new Pool({
      connectionString: devConfig,
      ssl: false
    });
  } else {
    return new Pool({
      connectionString: proConfig,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
})();

console.log('!!!!');
console.log('devConfig', devConfig);
console.log('proConfig', proConfig);
console.log('!!-!!', process.env);


module.exports = pool;
