//====================================================
// Sequelize (capital) references the standard library.
//====================================================
var Sequelize = require("sequelize");


//====================================================
// sequelize (lowercase) references the mySQL connection to the DB.
//====================================================
var sequelize = new Sequelize('burgersDB', 'root', 'code1310', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


module.exports = sequelize;
