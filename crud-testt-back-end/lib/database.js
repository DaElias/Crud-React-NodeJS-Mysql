const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "user",
  port: "3306",
  database: "mydb",
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
});

const poolPromise = pool.promise();

module.exports = poolPromise;
