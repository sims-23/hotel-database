var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var mysql = require('mysql');

// to make the database file run:
var db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  res.send('Hello, world!');
})

app.post('/update', function (req, res) {
  var roomType = req.body.roomType;
  var newRate = req.body.newRate;
  var q = `UPDATE OvernightRoom
    SET price_per_night=${newRate}
    WHERE type='${roomType}'`;
  db.dbConnection.query(q, function (err, result) {
    if (err) throw err;
    db.dbConnection.query('SELECT * FROM OvernightRoom', function (err, result) {
      if (err) throw err;
      res.send(result);
    })
  })
})

app.post('/cancelres', function (req, res) {
  var rid = req.body.rid;
  db.dbConnection.query(`DELETE FROM Reservation WHERE rid=${rid}`, function (err, result) {
    if (err) throw err;
    db.dbConnection.query('SELECT * FROM Reservation', function (err, result) {
      if (err) throw err;
      res.send(result);
    })
  })
})

app.get('/staff', function (req, res) {
  var price = req.body.price;
  var q = `SELECT name
            FROM Staff S
            WHERE NOT EXISTS (SELECT R.room_num
            					FROM OvernightRoom R
                          WHERE NOT EXISTS (SELECT O.user_id
      										FROM Oversee O
                            WHERE O.user_id=S.user_id AND O.room_num=R.room_num))`;
  db.dbConnection.query(q, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/averagepricebytype', function (req, res) {
  var minMax = req.body.minMax;
  var q = `SELECT ${minMax}(Temp.average)
          FROM(SELECT R.type, AVG(R.price_per_night) as average
                FROM OvernightRoom R
                GROUP BY R.type) AS Temp`
  db.dbConnection.query(q, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/averagepricebyoccupancy', function (req, res) {
  var minMax = req.body.minMax;
  var q = `SELECT ${minMax}(Temp.average)
          FROM(SELECT R.occupancy, AVG(R.price_per_hour) as average
              FROM Facility1 R
              GROUP BY R.occupancy) AS Temp`;
  db.dbConnection.query(q, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.get('/minprice', function (req, res) {
  db.dbConnection.query('SELECT min(price_per_hour), type FROM Facility1 GROUP BY type', function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.get('/unavalcount', function (req, res) {
  db.dbConnection.query('SELECT count(*), type FROM OvernightRoom WHERE rid IS NOT NULL GROUP BY type', function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/staffreport', function (req, res) {
  var from = req.body.fromDate;
  var to = req.body.toDate;
  var q = `SELECT DISTINCT C.name, C.num, C.company, U.username, RM.room_num, R.rid
  FROM User U, Reservation R, CreditCardInfo C, Facility1 RM
  WHERE U.user_id=R.user_id AND C.num=R.card_num AND C.company = R.company
  AND RM.rid = R.rid AND (R.from_date >= '${from}'
  AND R.to_date <= '${to}')
  UNION
  SELECT DISTINCT C.name, C.num, C.company, U.username, RM2.room_num, R.rid
  FROM User U, Reservation R, CreditCardInfo C, OvernightRoom RM2
  WHERE U.user_id=R.user_id AND C.num=R.card_num AND C.company = R.company
  AND ( RM2.rid = R.rid) AND (R.from_date >= '${from}'
  AND R.to_date <= '${to}');`;
  db.dbConnection.query(q, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/rooms', function (req, res) {
  var roomType = req.body.roomType;
  db.dbConnection.query(`SELECT room_num, price_per_night, type FROM OvernightRoom WHERE type='${roomType}' AND rid IS NULL`, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/roomsminprice', function (req, res) {
  var price = req.body.price;
  db.dbConnection.query(`SELECT room_num, price_per_night, type FROM OvernightRoom WHERE price_per_night<${price} AND rid IS NULL`, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})


var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
