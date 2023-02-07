const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSetup = require('./docs/swagger');


const app = express();


app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://myapp-cesar.web.app');

    res.setHeader('ngrok-skip-browser-warning', '12345');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const {indexRoutes} = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

indexRoutes(app);

module.exports = app;