var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var doorEvent = require('../schemas/doorEvent');
var mongooseOptions = require('../.mongolab_options.json');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.route('/data')
 .get(function( req, res, next){
   res.json({data: "something"});
  })
 .post(function( req, res, next){
   console.log(req.body);
   res.status(200).json( {chase: "is cool"});
 });


module.exports = router;
