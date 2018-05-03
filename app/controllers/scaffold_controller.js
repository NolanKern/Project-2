const express   = require("express");
const fs        = require('fs-extra');
const exec      = require('child-process-promise').exec;

const router    = express.Router();

const db        = require("../models");
var Sequelize   = require('sequelize');

const Op        = Sequelize.Op;

// Load Main Page
router.get("/", function(req, res) {
  res.render("index");

//   let htmlContent = "<!DOCTYPE html>\n"+
// "<html lang='en'>\n"+
// "<head>\n"+
// "   <meta charset='UTF-8'>\n"+
// "   <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n"+
// "   <meta http-equiv='X-UA-Compatible' content='ie=edge'>\n"+
// "   <title>Document</title>\n";

// db.htmlSnip.create({
//   snip_name: "openHtml",
//   snip_type: "html",
//   snip_loc: "header",
//   snip_content: htmlContent
// }).then(function(results) {
//   // res.end();
//   let htmlContent = "</head>\n"+
// "   <body>\n\n";

// db.htmlSnip.create({
//   snip_name: "openBody",
//   snip_type: "html",
//   snip_loc: "body",
//   snip_content: htmlContent
// }).then(function(results) {
//   // res.end();
//   let htmlContent = "   </body>\n";

// db.htmlSnip.create({
//   snip_name: "closeBody",
//   snip_type: "html",
//   snip_loc: "end",
//   snip_content: htmlContent
// }).then(function(results) {
//   let htmlContent = "</html>";
  
//   db.htmlSnip.create({
//     snip_name: "closeHtml",
//     snip_type: "html",
//     snip_loc: "end",
//     snip_content: htmlContent
//   }).then(function(results) {
//     res.end();
//   });
// });
// });
// });


  // createHtml();
  // runCommand();
});

// Process Post from form
router.post("/api/scaffold", function(req, res) {

});


let createHtml = function(obj){
  // openLinks: openLinks,
  // bodyIns: bodyIns,
  // closingLinks: closingLinks

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

let runCommand = function(){
  exec('')
    .then(function (result) {
        var stdout = result.stdout;
        var stderr = result.stderr;
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
    })
    .catch(function (err) {
        console.error('ERROR: ', err);
    });

}

function search(nameKey, nameValue, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i][nameKey] === nameValue) {
          return myArray[i].snip_content;
      }
  }
}

// Export routes for server.js to use.
module.exports = router;