var express = require('express');
var app = express();

var things =require('./things.js');
var method= require('./method.js');

// app.get('/hello', function(req, res){
//    res.send(`
//   <h1> Hello world!</h1></br>
//    Indrajeet Mishra
   
//    `);
// }); 


app.use('/things',things);
app.use('/method',method);

/* app.post('/hello', function(req, res){ 
   res.send("You just called the post method at '/hello'!\n");
}); */

app.listen(4000,()=>{console.log('Application is runing on port 4000')});