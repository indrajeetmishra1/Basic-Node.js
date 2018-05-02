var express = require('express');
var router = express.Router();
var db=require('monk')('mongodb://127.0.0.1:27017/test');
var myawsomedb=db.db('test');
var userdata=myawsomedb.get('user-data');

var url='mongodb://127.0.0.1:27017/test';
var check=false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
 });

router.get('/get-data', function(req, res, next) {

  var result=myawsomedb.find({});
  result.on('success',function(docs){

    res.render('index',{items:docs});

  });
 
 });

router.post('/submit',function(req,res,next){

var item ={title:req.body.Title,content:req.body.Content,author:req.body.Author};

});
  

router.post('/update',function(req,res,next){
var item ={title:req.body.Title,content:req.body.Content,author:req.body.Author};
var id=req.body.id;


});


router.post('/delete',function(req,res,next){

  var id=req.body.id;


});

router.get('/success',function(req,res){

  res.render('success');
});


module.exports = router;
