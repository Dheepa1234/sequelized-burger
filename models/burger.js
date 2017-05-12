//====================================================
// Create a Burger database model
// Build columns `burger_name`, `devoured`, and `date`
//====================================================

// Sequelize (capital) references the standard library.
var Sequelize = require("sequelize");
// sequelize (lowercase) references the connection to the DB.
var sequelize = require("../config/connection");

module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false/*, // This DB column may not be equal to null.
      validate: {
        len: [1], // The string must have a length value of 1 or more.
        is: {
          args: /^[a-z]+$/i, // letters only
          msg: 'Please enter letters only.' // Error message to the user.
        }
      }*/
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;

};