//===============================================
// Create a Burger database model
// Build columns `burger_name`, `devoured`, and `date`
//===============================================
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    timestamps: true, // Add timestamp updatedAt and createdAt attributes.
    underscored: true, // Use underscore style for automatically added attributes.
    burger_name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false, // This DB column may not be equal to null.
      validate: {
        len: [1], // The string must have a length value of 1 or more.
        is: {
          args: /^[a-z]+$/i, // letters only
          msg: 'Please enter letters only.' // Error message to the user.
        }
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      description: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;
};