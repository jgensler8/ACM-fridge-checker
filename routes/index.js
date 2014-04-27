var express = require('express');
var router = express.Router();

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
   res.json(req.body);
 });


module.exports = router;
