//fake_api_user.js
/**
 * Created by David Breuer on 17/02/2016.
 *
 * @file fake_api_user.js
 * @description
 *
 */
var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
var data = {};

readJSONFile('./site_data.json', function (err, json) {

    if(err) { throw err; }
    data = json.menu;
});

router.get('/:menuid', function(req, res) {
    res.send(data[req.params.menuid]);
});

router.get('/', function(req, res) {
    res.send(data);
});


module.exports = router;

function readJSONFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch(exception) {
            callback(exception);
        }
    });
}