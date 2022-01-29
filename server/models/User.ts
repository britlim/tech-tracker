const { Pool } = require("pg");

const PG_URI =
  "";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: function (queryString: string, params: any, callback: any) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};