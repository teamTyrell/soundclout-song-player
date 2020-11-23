const mysql = require('mysql');
const database = 'soundcloutsongplayer';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hrr49-user',
  password: 'hrr49',
  database: `${database}`
});

var server = {
  port: 3001
}

connection.connect();

module.exports = connection;