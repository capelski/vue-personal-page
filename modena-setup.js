const { configureEndpoints } = require('modena');
const { join } = require('path');

module.exports = configureEndpoints(router => {
	router.get(['/', '/home', '/projects', '/places'], (req, res, next) =>
        res.sendFile(join(__dirname, 'dist', 'index.html')));
});
