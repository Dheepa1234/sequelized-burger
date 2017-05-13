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
      allowNull: false // This DB column may not be equal to null.
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
    {
      // Customer has Burgers - Customer Association
      classMethods: {
        associate: function(models) {
          // A Customer (foreignKey) is required
          Burger.belongsTo(models.Customer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
  },{
    timestamps: true,
    createdAt: DataTypes.DATETIME,
    updatedAt: DataTypes.NOW
  });
  return Burger;

};