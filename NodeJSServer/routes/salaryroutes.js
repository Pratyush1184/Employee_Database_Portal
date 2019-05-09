module.exports=((app,db)=>{
  const Op=db.Sequelize.Op;
  app.get('/salaries',(req,res)=>{
    db.salary.findAll().then(salaries=>{
      res.json(salaries);
    })
  });

  app.get('/salary/:id',(req,res)=>{
    db.salary.findAll({
      where:{
        'empid':req.params.id
      }
    }).then(salaries=>{
      res.json(salaries);
    })
  });

  app.get('/salaried',(req,res)=>{
    db.salary.findAll({
      where:{
        'CTC':{
          [Op.gte]:6000
        }
      },
      include:[
        {
          model:db.employee,
          required:true
        }
      ]
    }).then(result=>{
      res.json(result);
      console.log(result);
    })
  });
  app.post('/salary/enter',(req,res)=>{
    try{
      db.salary.create({
        'empid':req.body.empid,
        'CTC':req.body.CTC,
        'Bonus':req.body.Bonus,
        'Insurance':req.body.Insurance
      }).then(salary=>{
        res.json(salary);
      })
    }
    catch(e){
      console.log("Unable to make an entry");
      res.write("Error!!!! Check your console");
    }
  })

  app.post('/salary/entermult',(req,res)=>{
    try{
      db.salary.bulkCreate(req.body).then(salaries=>{
        res.json(salaries);
      })
    }
    catch(e){
      console.log("Unable to make entries.");
      res.write("Error!!!! Check your console");
    }
  });

  app.delete('/salary/:id',(req,res)=>{
    db.salary.destroy({
      where:{
        'empid':req.params.empid
      }
    }).then(delsal=>{
      res.json(delsal);
    })
  });

  app.delete('/salaries/:id',(req,res)=>{
    db.salary.destroy({
      where:{
        'empid':req.params.id
      }
    }).then(salaries=>{
        res.json(salaries);
    })
  });

  app.put('/salary/:id',(req,res)=>{
    var temp;
    if(req.body.empid){
      temp=db.salary.update({
        'empid':req.body.empid
      },
      {
            where:{
              'empid':req.params.empid
            }
      })
    }

    if(req.body.CTC){
      temp=db.salary.update({
        'CTC':req.body.CTC
      },
      {
            where:{
              'empid':req.params.empid
            }
      })
    }
    if(req.body.Bonus){
      temp=db.salary.update({
        'Bonus':req.body.Bonus
      },
      {
            where:{
              'empid':req.params.empid
            }
      })
    }
    if(req.body.Insurance){
      temp=db.salary.update({
        'Insurance':req.body.Insurance
      },
      {
            where:{
              'empid':req.params.empid
            }
      })
    }
    res.json(temp);
  });
});
