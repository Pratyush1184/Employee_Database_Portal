module.exports = (sequelize, DataTypes) => {
  const Salary = sequelize.define('salary', {
    empid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      //defaultValue: DataTypes.UUIDV4
    },
    CTC: {
      type: DataTypes.INTEGER,
      required: true
    },
    Bonus: {
      type: DataTypes.INTEGER,
      required:true
    },
    Insurance:{
      type: DataTypes.ENUM,
      values:['yes','no'],
      defaultValue:'NO'
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });
  try{
    Salary.sync({force:false});
  }
  catch(e){
    console.log("YO\n",e);
  }
    return Salary;
};
