var express =require ('express');

var router=express.Router();
var app=express();

router.use(function(req,res,next){

console.log("The new request recived at" + Date.now());

next();


});

router.get('/Hello',function(req,res){

    res.send(`
    
    <h1> This is The Hello Route</h1></br>
        
    `)
    
    });



router.get('/:id',function(req,res){

res.send(`

<h1> Hello world!</h1></br>
   Indrajeet Mishra

`+req.params.id)

});
router.get('*',function(req,res){

    res.send(`
    
    <h1> This is an Invalid URL</h1></br>
        
    `)
    
    });

    

module.exports=router;