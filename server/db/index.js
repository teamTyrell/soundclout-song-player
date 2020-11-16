const mysql = require('mysql');
const database = 'soundclout';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: `${database}`
});

var server = {
  port: 3000
}

connection.connect();

module.exports = connection;