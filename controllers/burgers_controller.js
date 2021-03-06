// Create the router for the app, and export the router at the end of your file
var db = require('../models');

module.exports = function(app) {

  // API route to display all burgers.
  app.get('/', function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.render('index', {burgers: dbBurger}); // pass object to handlebars
    });
  });

  // API route to insert a new burger
  app.post('/', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger
    }).then(function() {
      res.redirect('/');
    });
  });

  // API route to update a burger devoured state as true.
  app.put('/:id', function(req, res) {
    db.Burger.update({
      devoured: 1
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.redirect('/');
      });
    });

  // API route to delete a burger.
  app.delete('/:id', function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect('/');
    });
  });
};