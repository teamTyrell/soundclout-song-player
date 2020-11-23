const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./index.js');

// get all song data in database
router.get('/library/:id', function(req, res) {
  console.log(req.params.id);
  let queryStr = `SELECT * FROM library WHERE id = ${req.params.id}`;
  db.query(queryStr, function(err, data) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "All songs received"
    })
  })
});

module.exports = router;