const { Pool } = require("pg");

// This is the connection string to the PostgreSQL database
const PG_URI =
  "postgres://vbbdyyvm:qsg-DgCfFxO0K_d-J6PB6jNw4V-5W3YL@bubble.db.elephantsql.com/vbbdyyvm";

// Create a new pool of connections to the database
const pool = new Pool({ connectionString: PG_URI });

// Export an object with a 'query' method
// This method is a wrapper around the 'pool.query' method from the 'pg' library
// It takes three parameters:
// 'text' - the SQL query string
// 'params' - an array of values to be inserted into the SQL query string
// 'callback' - a function to be executed once the query is complete
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

// Test the connection
pool
  .query('SELECT NOW()')
  .then((res) => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });