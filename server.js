//==========================================================
// Server Dependencies
//==========================================================

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//==========================================================
// Initialize Express
//==========================================================
var app = express();

//==========================================================
// Set PORT variable using environment port or localhost.
//==========================================================
var PORT = process.env.PORT || 3000;

// ========================================================
// Require the models for syncing
// ========================================================
var db = require('./models');

//==========================================================
// Serve static files
//==========================================================
app.use(express.static(process.cwd() + '/public'));

//==========================================================
// Configure body-parser middleware.
//==========================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//==========================================================
// Configure method-override middleware.
//==========================================================
app.use(methodOverride('_method'));

//==========================================================
// Configure express-handlebars.
//==========================================================

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//==========================================================
// Require route controllers
//==========================================================
require('./controllers/burgers_controller')(app);


//==========================================================
// Sync sequelize models
// Start Express server
//==========================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});