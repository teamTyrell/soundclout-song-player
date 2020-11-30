const mysql = require('mysql');
const database = 'soundcloutsongplayer';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: `${database}`
});

var server = {
  port: 3001
}

connection.connect();

module.exports = connection;