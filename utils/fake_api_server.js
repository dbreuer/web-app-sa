//fake_api_server.js
/**
 * Created by David Breuer on 17/02/2016.
 *
 * @file fake_api_server.js
 * @description
 *
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var users = require('./fake_api_user');
var menu = require('./fake_api_menu');
var page = require('./fake_api_page');

var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9099;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/users', users);
app.use('/api/menu', menu);
app.use('/api/page', page);

app.use('/', express.static(__dirname + '/app'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);