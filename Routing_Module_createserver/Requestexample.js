var request=require('request');
var express=require('express');
var app=express();



app.get('/',(req,res)=>{

    request('https://www.google.co.in',(error,response,body)=>{

res.send(body);
});

}).listen(3000,()=>{console.log('App is runing on localhost 3000');});