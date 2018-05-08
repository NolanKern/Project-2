const exec = require("child_process").exec;
const fs = require("fs");
const EasyZip = require("easy-zip").EasyZip;
const rimraf = require("rimraf");

module.exports = function(app) {
  app.post("/seqinit", function(req, res) {
    var plug = [];

    req.body.initz.forEach(function(elem) {
      console.log(elem);
      var pie = elem.search("-");
      var string = elem.slice(0, pie);
      plug.push(string);
    });

    var sequel = "sequelize ";

    plug.forEach(function(elem) {
      var build = "init:";
      var both = build.concat(elem + " ");
      console.log(both);
      sequel += both;
    });

    console.log(sequel);

    var run = runCommand(sequel);
    console.log("new skelet generated");
    res.send(run);
    res.download("../public/assets/deliverable/folderall.zip", "folderall.zip");
  });
};

let zipUp = function(dir, cb) {
  let zip = new EasyZip();

  zip.zipFolder(dir, function() {
    zip.writeToFile("../public/assets/deliverable/folderall.zip", function() {
      console.log("ZIPPED!");
      cb(dir);
    });
  });
};

let runCommand = function(command) {
  if (!fs.existsSync("app/build/")) {
    fs.mkdirSync("app/build/");
  }
  exec(
    command,
    {
      cwd: "app/build"
    },
    function(error, stdout, stderr) {
      // var stdout = result.stdout;
      // var stderr = result.stderr;
      console.log("stdout: ", stdout);
      console.log("stderr: ", stderr);
      console.log(error);
      zipUp("app/build/", function(dir) {
        rimraf(dir, function() {
          console.log("done");
        });
      });
    }
  );
};

// let runSequelize = function() {
//   child_process.exec(
//     "sequelize init",
//     {
//       cwd: "app/build"
//     },
//     function(error, stdout, stderr) {
//       // var stdout = result.stdout;
//       // var stderr = result.stderr;
//       console.log("stdout: ", stdout);
//       console.log("stderr: ", stderr);
//       console.log(error);
//       return "success";

//     }
//   );
// };
