const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
// const sequelize = require("sequelize-cli");
const Sequelize = require("sequelize");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./app/models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// static directory
app.use(express.static("app/public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./app/controllers/userauth_controller.js");

// Set up Passport
<<<<<<< HEAD
const passport = require('passport');
const expressSession = require('express-session');
app.use(expressSession({secret: 'thisisasupersecretkey'}));
=======
const passport        = require('passport');
const expressSession  = require('express-session');

let myKey = process.env.sessionKey || 'thisisasupersecretkey';
app.use(expressSession({secret: myKey}));
>>>>>>> 4e132b28aee2483f3a03c8a2f0a70a54439ec96a
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
