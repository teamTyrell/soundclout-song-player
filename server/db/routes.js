const express = require('express');
const router = express.Router();
const db = require('./index.js');

// get all song data in database
router.get('/songs', function(req, res) {
  let queryStr = `SELECT * FROM songs`;
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