module.exports=((app,db)=>{
const Op=db.Sequelize.Op;
  app.get('/employees',(req,res)=>{
    db.employee.findAll().then(employees=>{
      res.json(employees);
    })
  });

  app.get('/employee/:id',(req,res)=>{
    db.employee.findAll({
      where:{
        'id':req.params.id
      },
      attributes:['id','name']
    }).then(employees=>{
      res.json(employees);
    })
  });

  app.get('/employeec',(req,res)=>{
      db.employee.findAndCountAll({
        include:[
          {
            model: db.salary,
            where:{
              'CTC':{
                [Op.gte]:[3000]
              }
            }
          },
        ],
        where:{
          'name':{
            [Op.like]:'Pr%'
          }
        },
        offset:0//,
//        limit:2
      }).then(result=>{
        res.json(result.rows);
        console.log(result.count);
        console.log(result.rows);
      })
  });

  app.get('/employeed',(req,res)=>{
    db.employee.findAll({
      where:{
        'id':{
          [Op.gte]:[2]
        }
      },
      include:[
        {
          model:db.project,
          where:{
            'project_id':{
                [Op.gte]:[2]
            }
          }
        }
      ]
    }).then(result=>{
      res.json(result);
    })
  });
  app.post('/employee/enter',(req,res)=>{
      db.employee.create({
        'id':req.body.id,
        'name':req.body.name,
        'role':req.body.role
      }).then(employee=>{
        res.json(employee);
      }).catch(error=>{
        res.json("Please enter valid data");
      })
  })

  app.post('/employee/entermult',(req,res)=>{
    try{
      db.employee.bulkCreate(req.body).then(employees=>{
        res.json(employees);
      }).catch(error=>{
        res.json(error);
      })
    }
    catch(e){
      console.log("Unable to make entries.");
      res.write("Error!!!! Check your console");
    }
  });

  app.delete('/employee/:id',(req,res)=>{
    db.employee.destroy({
      where:{
        'id':req.params.id
      }
    }).then(delemp=>{
      res.json(delemp);
    }).catch(error=>{
      res.json("Please enter a valid employee id.");
    });
  });

  app.put('/employee/:id',(req,res)=>{
    var name=req.body.name;
    var temp;
    if(req.body.name){
      temp=db.employee.update({
        'name':req.body.name
      },
      {
            where:{
              'id':req.params.id
            }
      }).catch(error=>{
        res.json("Please make valid updates.")
      })
    }
    if(req.body.id){
      temp=db.employee.update({
        'id':req.body.id
      },
      {
            where:{
              'id':req.params.id
            }
      }).catch(error=>{
        res.json("Please make valid updates.")
      })
    }
    if(req.body.role){
      temp=db.employee.update({
        'role':req.body.role
      },
      {
            where:{
              'id':req.params.id
            }
      }).catch(error=>{
        res.json("Please make valid updates.")
      })
    }
    if(req.body.project_id){
      temp=db.employee.update({
        'project_id':req.body.project_id
      },
      {
            where:{
              'id':req.params.id
            }
      }).catch(error=>{
        res.json("Please make valid updates.")
      })
    }
    res.json(temp);
  });
});
