var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var doorEventSchema = require('../schemas/doorEvent.js').doorEvent;
var mongooseOptions = require('../.mongolab_options.json');

mongoose.connect('mongodb://'+mongooseOptions.username+":"
  +mongooseOptions.userpass+"@ds033607.mongolab.com:33607/doortimes");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET time*/
router.route('/data')
 .get(function( req, res, next){
   doorEventSchema.find(function(err,data){
	if(err) return res.status(200).json({error: true, type: 'DATABASE'});
	else return res.status(200).json( data);
   });
  })
 /* POST new time */
 .post(function( req, res, next){
   console.log(req);
   var newDoorEvent = new doorEventSchema({
     timeOpen: req.body.startTime,
     timeClosed: req.body.endTime
   });
   newDoorEvent.save( function(err){
     if(err) res.status(200).json( {error: true, type: 'DATABASE'});
     else res.status(200).json( {error: false, type: 'SUCCESS'});
   });
 });


module.exports = router;
