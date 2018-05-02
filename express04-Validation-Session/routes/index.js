var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Form Validator',success:false,errors:req.session.errors});
 req.session.errors=null;
});

router.get('/success', function(req, res, next) {
  res.render('success', {title:'Form Validator'});
  console.log("hello i am  in success block");
 
});

router.post('/submit',function(req,res,next){

  req.check('Mail','Invalid email address').isEmail();
  req.check('Paasword','Paasword is invalid').isLength({min:4}).equals(req.body.ConfirmPaasword);
//res.redirect('/test/'+objects);
var errors=req.validationErrors();
if(errors)
{
  console.log("hello i am inside if block");
  req.session.errors=errors;
  res.redirect('/');
}

else{
console.log("hello i am outside if block");
res.redirect('/success');
}

});

module.exports = router;
