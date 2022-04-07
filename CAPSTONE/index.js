const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();

 const path = require('path');
 //const Project=require('./schema.js');
 const Users = require('./models/users.js');
 app.use(express.static(path.join(__dirname, 'public')));
  
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));



 const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://Mani:Mani@cluster0.gdugc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,

 }).then(console.log('mongoose connected'));
 const connection=mongoose.connection;
 
 

 /* Get sample page */
//  app.get("/",function(req, res){
//    res.sendFile(__dirname + "/pages/sample.html");
//  });

app.get("/login",function(req, res){
  res.sendFile(__dirname + "/views/login.html");
});
/* Get home page */
app.get("/",function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

/* Get payonile page */
app.get("/payonline",function(req, res){
  res.sendFile(__dirname + "/views/cardonline/index.html");
});
/Get Pay CashonDelivery/
app.get("/cashondelivery",function(req, res){
  res.sendFile(__dirname + "/views/cashpayment/index.html");
});


/Get Pay CashonDelivery/
app.post("/deliverydata",function(req, res){
  //res.sendFile(__dirname + "/views/cashpayment/index.html");
  console.log(req.body);
  
});



/* Get Restaurent page */
app.get("/restaurents",function(req, res){
  res.sendFile(__dirname + "/views/restaurent/index.html");
});


/* Get order page */
app.get("/orders",function(req, res){
  res.sendFile(__dirname + "/views/cardonline/order.html");
});

app.get("/contacts",function(req, res){
  res.sendFile(__dirname + "/views/contacts.html");
});

app.get("/faq",function(req, res){
  res.sendFile(__dirname + "/views/faq.html");
});

app.post("/sendData",function(req, res){
  //console.log(req.body);
  //res.send(req.body);
  var check_data = new Users({
    userid:req.body.user_id,
    email:req.body.email,
    pwd:req.body.pwd,
  })
  check_data.save(function( err, results) {
    if(results){
      
      console.log(results);
      res.send(results);
    }else{
      res.send(err);
    }
  });
  app.get('/getUsers',(req,res)=>{
    Users.find(function(err,result){
      if(err || result==null)
      {
        console.log(err)
      }
      else if(result!=undefined)
      {
        console.log(result)
        res.send(result);
      }
    })
  });

})
app.post('/login',(req,res)=>{
  var a=req.body.uname;
  var b=req.body.pswd;
  Users.findOne({email:a,pwd:b},(err,result)=>{
    if(err)
    {
      console.log(err)
    }
    else
    {
      if(result==null)
      {
        res.redirect('/login')
      }
      else
      {
        res.redirect('/')
      }
    }
  })
})
 app.listen(8000, () => console.log("Successfully server started."));