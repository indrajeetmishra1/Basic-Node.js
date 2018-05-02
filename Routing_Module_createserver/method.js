var express=require('express');
var router=express.Router();


router.get('/add/:number/:number1',(req,res)=>{

console.log('control is here');
var number11=req.params.number;
var number22=req.params.number1;

var finalresult=~~number11+~~number22;

res.send({number1:number11,number2:number22,finalresult:finalresult});


});

module.exports=router;