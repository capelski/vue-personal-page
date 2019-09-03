const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.use('/', (req, res, next) => {
		if (req.headers.host &&
			req.headers.host === 'me.carlescapellas.xyz' &&
			(
				req.url === '' ||
				req.url === '/' ||
				req.url === '/vue-personal-page'
			)
		) {
			res.sendFile(join(__dirname, 'dist', 'me.html'));
		}
		else {
			next();
		}
	});
	app.use('/', express.static(join(__dirname, 'dist')));
	return app;
};
