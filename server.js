const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs-extra");
const child_process = require("child_process");
// const sequelize = require("sequelize-cli");
const Sequelize = require('sequelize')

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


let runSequelize = function() {
  child_process.exec(
    "sequelize init",
    {
      cwd: "app/build"
    },
    function(error, stdout, stderr) {
      // var stdout = result.stdout;
      // var stderr = result.stderr;
      console.log("stdout: ", stdout);
      console.log("stderr: ", stderr);
      console.log(error);
    }
  );
};

runSequelize();