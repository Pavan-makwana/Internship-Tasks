import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456789",   
  database: "clinic_db"
});

export default db;
