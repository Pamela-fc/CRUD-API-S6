import mysql from 'mysql'

export const db = mysql.createConnection({
   host: "localhost",
   user: "root", 
   password: "squad6",
   database: "crud"
});

