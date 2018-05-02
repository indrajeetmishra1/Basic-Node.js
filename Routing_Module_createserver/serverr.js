var http=require('http');
 var app=require('./app');
// var module2=require('./module2');
// var fs=require('fs');

// function OnRequest(request,response){

   // response.writeHead(200,{'Content-Type':'text/plain'});
//     fs.readFile('./index.html',null,(err,data)=>{
//     if(err){
//         response.writeHead(400);
//         response.write('File not found');
//             }
//     else{
//         response.writeHead(200,{'Content-Type':'text/html'});
//             response.write(data);
//     }
//    response.end();
//     });
    // response.write(module2.title);
    // module1.Test();
    // module2.modulefn();
   


//}



http.createServer(app.createServer1).listen(3000,()=>{console.log('Server is runing on port number 3000')});