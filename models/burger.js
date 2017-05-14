//====================================================
// Create a Burger database model
// Build columns `burger_name`, `devoured`, and `date`
//====================================================

// Sequelize (capital) references the standard library.
var Sequelize = require("sequelize");
// sequelize (lowercase) references the connection to the DB.
var sequelize = require("../config/connection");

module.exports = function(sequelize) {

  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false // This DB column may not be equal to null.
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;

};