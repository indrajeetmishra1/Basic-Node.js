
var fs=require('fs');
var url=require('url');

function renderTheFile(path,res){
    console.log(path);

    fs.readFile(path,null,(err,data)=>{
if(err){

    res.writeHead(404);
    res.write('Error in Html File');
}
else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
}
res.end();

    })

}

module.exports={

createServer1:function(req,res){

    var path=url.parse(req.url).pathname;
    //console.log(path);

    switch(path)
    {
        case '/':renderTheFile('./index.html',res);
        break;
        case '/login':renderTheFile('./login.html',res);
        break;
        default:  res.writeHead(400);
        res.write('Route is not found');
        res.end();
        break;
    }




}



}