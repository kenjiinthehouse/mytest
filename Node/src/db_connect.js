require("dotenv").config();

//連線模組
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  //最基本以上四個
  waitForConnections: true,
  connectionLimit: 10, //最大連線數
  queueLimit: 0,
});
// doc -> https://www.npmjs.com/package/mysql2
// 測試是否成功引入
// console.log(process.env.DB_USER);
module.exports = pool.promise();
//匯出promise pool
