const Sequelize=require('sequelize');
const sequelize=new Sequelize('empdb','root','AgreeYa@123',{
  host:'localhost',
  port:3306,
  dialect:'mysql',
  define:{
    underscored:true,
    freezeTableName:true,
    timestamps:false
  }
})
var db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.employee=require('../models/employee')(sequelize,Sequelize);
db.salary=require('../models/salary')(sequelize,Sequelize);
db.project=require('../models/project')(sequelize,Sequelize);
db.Project_emp=require('../models/Project_emp')(sequelize,Sequelize);

db.salary.belongsTo(db.employee,{foreignKey:'empid',targetKey:'id',onDelete:'CASCADE'});//1:x
db.employee.hasOne(db.salary,{foreignKey:'empid',targetKey:'id',onDelete:'CASCADE'});//y:1 =>1:1
db.employee.belongsToMany(db.project,{foreignKey:'Empid',through:'Project_emp',onDelete:'CASCADE',onUpdate:'CASCADE'});//1:m
db.project.belongsToMany(db.employee,{freezeTableName:true,foreignKey:'Prjid',targetKey:'name',through:'Project_emp',onDelete:'CASCADE',onUpdate:'CASCADE'});//n:1 =>n:m
//through=join table name, no need to specify foreign key in just above case.
//hasMany and belongsTo is the other possible pairing.
//belongsToMany and hasOne is the corresponding other.
//hasOne and hasOne leads tp cyclic dependency.
//n:m not supported using hasMany
//By default the join table takes a default field 'id'
/*
Determine source and target model. This is just convention: the source is the model on which the method is invoked, so basically 'the one on the left' in the notation. The target is the other model, so 'the one on the right'.
Know where various methods put the foreign key: hasOne and hasMany put fk on target; belongsTo puts fk on source; belongsToMany puts fk on the through model.
Understand that the foreign key (as the name implies) will refer to 'the other model' (so not the one under 2). So for hasOne and hasMany will be a reference to the source model; for belongsTo a reference to the target model; for belongsToMany a reference to the source model (and you can reference the target model with otherKey:).
belongsToMany is a special case since a third model is introduced: the through model (or join table) on which both the foreign keys to the source and the target are stored. This changes 'the perspective' for the foreign key somewhat and therefor you can not compare it fully with belongsTo in respect of foreign key referencing.

belongsTo or hasOne alone imply one-many relationship.
e.g. salary belongs to employee implies one salary field only belongs to a single employee
but doesn't imply that employee has only one salary.
*/
module.exports=db;
