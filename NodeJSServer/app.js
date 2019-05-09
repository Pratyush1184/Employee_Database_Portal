var express=require('express');
var app=express();
var db=require('./config/db')
var bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
var routes=[
  require('./routes/employeeroutes'),
  require('./routes/salaryroutes'),
  require('./routes/projectroutes')
]
db.sequelize.sync().then(() => {
  app.listen('8080',()=>{
    console.log("App running on port 8080");
    routes.forEach(route=>{
      route(app,db);
    })
  })
});
