const express   = require("express");
const fs        = require('fs');
const exec      = require('child_process').exec;
var EasyZip     = require('easy-zip').EasyZip;
const path      = require('path');
const rimraf    = require('rimraf');

const router    = express.Router();

const db        = require("../models");
var Sequelize   = require('sequelize');

const Op        = Sequelize.Op;

// Load Main Page
router.get("/", function(req, res) {
  res.render("index");

  // createHtml();
  // runCommand();
});

// Process Post from form
router.post("/api/user", function(req, res) {
  let data = {fb_uid: req.body.fb_uid};

  db.user.findOrCreate({
      where: {fb_uid: req.body.fb_uid},
    }).then(function(results){
      console.log(results);
      let uid = results[0].dataValues.fb_uid;

      console.log(userInfo);

      res.render("userpage");
  });
});


let createHtml = function(obj){

  db.htmlSnip.findAll({}).then(function(results){
    let allSnips = results.map(e => e.get({plain: true}));
    
    let newHtmlFile = "";

    newHtmlFile += search("snip_name", "openHtml", allSnips);

    newHtmlFile += search("snip_name", "openBody", allSnips);

    newHtmlFile += search("snip_name", "closeBody", allSnips);

    newHtmlFile += search("snip_name", "closeHtml", allSnips);

    let filepath = "app/build/mynewfile.html";

    fs.writeFile(filepath, newHtmlFile, (err) => {
        if (err) throw err;
  
        console.log("The file was succesfully saved!");
    }); 
  });

}

let search = function(nameKey, nameValue, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i][nameKey] === nameValue) {
          return myArray[i].snip_content;
      }
  }
}

let zipUp = function(dir, cb){
  let zip = new EasyZip();

  zip.zipFolder(dir,function(){
    zip.writeToFile('app/public/assets/deliverable/folderall.zip', function(){
      console.log("ZIPPED!");
      cb(dir);
    });
  });
}

let runCommand = function(command){
  if (!fs.existsSync('app/build/')){
    fs.mkdirSync('app/build/');
  }
  exec(command, {
    cwd: '\app/build'
  },function(error, stdout, stderr) {
    // var stdout = result.stdout;
    // var stderr = result.stderr;
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    console.log(error);
    zipUp('app/build/', function(dir){
      rimraf(dir, function (){
        console.log('done');
      });
    });
  });
}

// Export routes for server.js to use.
module.exports = router;