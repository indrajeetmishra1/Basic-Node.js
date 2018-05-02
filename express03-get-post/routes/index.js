var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool huh',condition:true,anyArray:[1,2,3] });
});

router.get('/test/:id',function(req,res,next){

res.render('test',{object:req.params.id});

});

router.post('/test/submit',function(req,res,next){

  var objects=req.body.id;

res.redirect('/test/'+objects);

});

module.exports = router;
