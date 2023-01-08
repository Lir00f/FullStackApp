import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'fullstack',
  user: 'root',
  password: 'wtpfhm123',
  database: 'pos_db'
});
 
export default db;