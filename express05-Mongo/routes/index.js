var express = require('express');
var router = express.Router();

var mongodb=require('mongodb').MongoClient;
var objectId=require('mongodb').ObjectID;
var assert=require('assert');
var url='mongodb://127.0.0.1:27017/test';
var check=false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
 });

router.get('/get-data', function(req, res, next) {

  var resultArray=[];
 
  mongodb.connect(url,function(err,database){

    if(err){console.log('Connection is failed');}
    else{
 
     var myawsomedb=database.db('test');

      var cursor=myawsomedb.collection('user-data').find();

      cursor.forEach(function(doc,err){

        if(err){
          console.log('document is not found')
        }
        else{

          resultArray.push(doc);

        }

      },function(){

        database.close();
        res.render('itemview',{items:resultArray});

      });
      


    }

  });
 
});

router.post('/submit',function(req,res,next){

var mongoclient=mongodb.MongoClient;
var item ={title:req.body.Title,content:req.body.Content,author:req.body.Author};
mongodb.connect(url,function(err,database){
  if(err)
  {
     console.log('connection is failed');
  }
  else{
    const mydatabase=database.db('test');
     mydatabase.collection('user-data').insertOne(item,function(err,result){
       if(err){
         console.log('connection is successfull but data not inserted');
       }
       else{
         check=true;
         console.log('data inserted successsfully');
         console.log(result);
         res.render('index',{status:check});
         
       }
     });
     
  }
  

});

});
  

router.post('/update',function(req,res,next){
  var mongoclient=mongodb.MongoClient;
var item ={title:req.body.Title,content:req.body.Content,author:req.body.Author};
var id=req.body.id;
mongodb.connect(url,function(err,database){
  if(err)
  {
     console.log('connection is failed');
  }
  else{
    const mydatabase=database.db('test');
     mydatabase.collection('user-data').updateOne({"_id":objectId(id)},{$set:item},function(err,result){
       if(err){
         console.log('connection is successfull but data not updated');
       }
       else{
         check=true;
         console.log('data updated successsfully');
         console.log(result);
         res.render('index',{status:check});
         
       }
     });
     
  }
  

});

});


router.post('/delete',function(req,res,next){
  var mongoclient=mongodb.MongoClient;
  var id=req.body.id;
mongodb.connect(url,function(err,database){
  if(err)
  {
     console.log('connection is failed');
  }
  else{
    const mydatabase=database.db('test');
     mydatabase.collection('user-data').deleteOne({"_id":objectId(id)},function(err,result){
       if(err){
         console.log('connection is successfull but data not Deleted');
       }
       else{
         check=true;
         console.log('data deleted successsfully');
         console.log(result);
         res.render('index',{status:check});
         
       }
     });
     
  }
  

});

});

router.get('/success',function(req,res){

  res.render('success');
});


module.exports = router;
