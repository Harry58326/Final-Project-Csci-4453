const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '20001019',
  database: 'Harry'
});

connection.connect((err)=>{
  if(err){
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('connected to database');
});

// Enable CORS
app.use(cors());

app.get('/data', (req, res) => {
  const sqlQuery = "SELECT * FROM students where";

  connection.query(sqlQuery, (err, results, fields) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
