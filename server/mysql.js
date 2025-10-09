const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "easycv",
});

function executeQuery(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        console.error("Error executing query: " + error.message);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  executeQuery,
};
