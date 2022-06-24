var mysql = require('mysql');

// Create a database connection and export it from this file.
var dbConnection = mysql.createConnection({
  host: '35.224.25.86',
  user: '304-user',
  database: 'UBChotel'
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to hosted DB!");
});

module.exports.dbConnection = dbConnection;
