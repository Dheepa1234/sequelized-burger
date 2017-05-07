//  Import orm.js
var orm = require('../config/orm');

//Create the code that will call the ORM functions using burger specific input.

// Call the orm to get the data
var burger = {
  table: "burgers",

  selectAll: function(burgerCtrlFn) {
    orm.selectAll(this.table, function(data) { // passing a function that's expecting data
      //console.log(data);
      //return data
      burgerCtrlFn(data);
    });
  },

  insertOne: function(burger, burgerCtrlFn) {
    orm.insertOne(this.table, burger, function(data) {
      burgerCtrlFn(data);
    });
  },

  updateOne: function(values, condition, burgerCtrlFn) {
    orm.updateOne(this.table, {devoured: true}, condition, function(data) {
      burgerCtrlFn(data);
    });
  },

  deleteOne: function(condition, burgerCtrlFn) {
    orm.deleteOne(this.table, condition, function(data) {
      burgerCtrlFn(data);
    });
  }

};

module.exports = burger;