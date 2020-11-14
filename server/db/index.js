const mysql = require('mysql');
const database = 'soundclout';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: `${database}`
});

connection.connect();

module.exports = connection;