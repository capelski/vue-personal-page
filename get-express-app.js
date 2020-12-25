const express = require('express');
const { join } = require('path');

module.exports = () => {
    const app = express();
    app.use('/vue-personal-page', express.static(join(__dirname, 'docs')));
    return app;
};
