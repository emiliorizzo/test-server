var express = require('express');
var router = express.Router();
var dateTime = require('node-datetime');
var hit = 0;
var img;
var fruit;

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.get('Authorization'));

  var dt = dateTime.create();
  var df = dt.format('Y-m-d H:M:S');
  hit++;
  fruit = (hit % 2 == 0) ? 'apple' : 'pear';
  res.render('index', { title: df, hit: hit, fruit: fruit });
});

module.exports = router;
