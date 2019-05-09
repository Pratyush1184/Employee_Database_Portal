module.exports=((sequelize,DataTypes)=>{
  const project=sequelize.define('project',{
    project_id:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
      required:false
    },
    domain:{
      type:DataTypes.ENUM,
      values:['AR','IoT','ML','BlockChain','Cloud']
    }
  },{
    underscored: true,
    freezeTableName: true
  });
  try{
    project.sync({force:false});
  }
  catch(e){
    console.log("YEEESSS\n");
  }
  return project;
});
