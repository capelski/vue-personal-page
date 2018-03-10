var express = require('express');
var router = express.Router();
var { join } = require('path');

const configureRouter = (middleware) => {
	router.get('/*', function (req, res, next) {
	  res.sendFile(join(__dirname, 'dist', 'index.html'));
	});
	return router;
}

module.exports = { configureRouter };
