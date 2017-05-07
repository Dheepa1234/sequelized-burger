// Import (require) connection.js
// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var connection = require('./connection');

var ORM = {
  // Select all rows from the table.
  selectAll: function(tableName, burgerCtrlFn) {
    var queryString = "SELECT * FROM " + tableName;
      connection.query(queryString, function(err, data) {
        if(err) throw err;
        burgerCtrlFn(data);
    });
  },

  // Insert a new row into the table.
  insertOne: function(tableName, burger, burgerCtrlFn) {
    var queryString = "INSERT INTO " + tableName + " SET ?";
    connection.query(queryString, burger, function(err, data) {
      if(err) throw err;
      burgerCtrlFn(data);
    });
  },

  // If devoured button is clicked, update the devoured boolean state and move the item on screen to the right.
  updateOne: function(tableName, values, condition, burgerCtrlFn) {
    var queryString = "UPDATE " + tableName + " SET `devoured`=1 WHERE ?";
    connection.query(queryString, [condition], function(err, data) {
      if(err) throw err;
      burgerCtrlFn(data);
    });
  },

  // If the delete button is clicked, the item where id=? is deleted from the database.
  deleteOne: function(tableName, condition, burgerCtrlFn) {
    var queryString = "DELETE FROM " + tableName + " WHERE ?";
    connection.query(queryString, [condition], function(err, data) {
      if(err) throw err;
      burgerCtrlFn(data);
    });
  }

};

module.exports = ORM;



