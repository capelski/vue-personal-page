const getExpressApp = require('./get-express-app');

const app = getExpressApp();
app.listen(80, error => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('App 1 running in port 80');
    }
});