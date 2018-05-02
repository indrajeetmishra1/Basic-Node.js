var express=require('express');
var app=express();
//const cors = require('cors');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
// app.use(cors(corsOptions));

app.get('/',(req,res)=>{

    res.send('hello world');

});

app.get('/api/cats',(req,res)=>{
    
    res.send({cats:[{name:'Indrajeet'},{name:'Susmita'}]})
});

app.route('/api/cats/:name').get((req,res)=>{

    const requestedcatname=req.params['name'];

res.send({name:'requestedcatname'});

});

app.route('/api/cats').post((req,res)=>{

    res.send('201',req.body)
});
app.route('/api/cats/:name').post((req,res)=>{

    res.send('201',req.body)
})

app.route('api/cats/:name').delete((req,res)=>{

    res.sendStatus(204);
});



// var corsOptions = {
//   origin: 'http://localhost:3200/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// }


app.listen(3000,()=>{console.log('App listning on port 3000')});