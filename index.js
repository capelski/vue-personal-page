var express = require('express');
var router = express.Router();
var { join } = require('path');

router.get('/', function (req, res, next) {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

module.exports = router;
