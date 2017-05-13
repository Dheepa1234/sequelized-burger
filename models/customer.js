//====================================================
// Create a Customer database model
// Build columns `customer_name`
//====================================================

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING
  },
  {
    // The Customer has Burgers
    classMethods: {
      associate: function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Customer.hasMany(models.Post, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Customer;
};