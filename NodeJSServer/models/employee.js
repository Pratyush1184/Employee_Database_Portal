module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    role: {
      type: DataTypes.ENUM,
      values: ['developer', 'tester']
    },
  }, {
    //paranoid: true,
    underscored: true,
    freezeTableName: true
  });
  try{
    Employee.sync({force:false});
  }
  catch(e){
    console.log("YO\n",e);
  }
    return Employee;
};
