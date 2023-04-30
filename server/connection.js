const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1', //localhost is not working here so I use 127.0.0.1 to replace localhost
  user: 'Harry',
  password: '20001019',
  database: 'Final_Project'
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
  const sqlQuery = "SELECT * FROM NBA_Players WHERE status = 'Active'";

  connection.query(sqlQuery, (err, results, fields) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});

app.post('/post',(req, res)=>{
  const data = req.body;
  const sqlQuery = "INSERT INTO NBA_Players(name, age) VALUES ('Harry', '22')"
  const values = [data.name, data.age];
  connection.query(sqlQuery, values, (err, results, fields) => {
    if (err) {
      console.error('Error inserting data into database: ', err);
      res.sendStatus(500);
      return;
    }
    res.json({"success": true});
  });
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
