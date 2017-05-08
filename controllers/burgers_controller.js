// Create the router for the app, and export the router at the end of your file
var db = require('../models');

module.exports = function(app) {

  // API route to display all burgers.
  app.get('/', function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // API route to insert a new burger
  app.post('/', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // API route to update a burger devoured state as true.
  app.put('/:id', function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      values: req.body.devoured
      },
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBurger) {
        res.json(dbBurger);
      });
    });

  // API route to delete a burger.
  app.delete('/:id', function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};