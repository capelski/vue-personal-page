const express = require('express');
const { join } = require('path');

module.exports = () => {
    const app = express();
    app.use('/', express.static(join(__dirname, 'docs')));
    app.use('*', (req, res, next) => {
        return res.sendFile(join(__dirname, 'docs', 'index.html'));
    });
    return app;
};
