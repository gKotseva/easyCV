const { executeQuery } = require("./db");

exports.checkEmail = (email) => {
  const query = `SELECT * FROM users WHERE email = ?`;

  return executeQuery(query, [email]);
};

exports.register = (data) => {
  const query = `INSERT INTO users (email, password_hash) values(?, ?);`;
  return executeQuery(query, [data.email, data.password]);
};
