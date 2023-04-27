const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '20001019',
  port: '3306',
  database: 'Harry'
});

connection.connect((err)=>{
  if(err){
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('connected to database');
});
const sqlQuery = "SELECT * FROM students where id = 2";

connection.query(sqlQuery, (err, results, fields) => {
  if (err) {
    console.error('Error querying database: ', err);
    return;
  }
  console.log('Query results: ', results);
});




connection.end();
