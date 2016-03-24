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
var data;
/* GET users listing. */

readJSONFile('./site_data.json', function (err, json) {

    if(err) { throw err; }
    data = json.page;
});


router.get('/:pageid/:subpageid', function(req, res) {
    console.log("Subpage: ", req.params);
    var pageData = {"error": 404};
    if(data[req.params.subpageid]) {
        pageData = data[req.params.subpageid];
    }
    res.send({"page": req.params.subpageid, data: pageData});
});

router.get('/:pageid', function(req, res) {
    console.log("Page: ", req.params);
    var pageData = {"error": 404};
    if(data[req.params.pageid]) {
        pageData = data[req.params.pageid];
    }
    res.send({"page": req.params.pageid, data: pageData});
});
router.get('/', function(req, res) {
    console.log("Error page: ", req.params);
    res.send({"error": "missing page id"});
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