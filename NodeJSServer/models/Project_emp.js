module.exports=(sequelize,DataTypes)=>{
  const Projemp=sequelize.define('Project_emp',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      start:1
    },
    Prjid:{
      type:DataTypes.INTEGER,
      required:true
    },
    Empid:{
      type:DataTypes.INTEGER,
      required:true
    }
  });
  try{
    Projemp.sync({force:false});
  }
  catch(e){
    console.log("NNOOOOOO");
  }
  return Projemp
}
