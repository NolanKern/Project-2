const child_process = require("child_process");

module.exports = function(app) {
  app.post("/seqinit", function(req, res) {
    var build = runSequelize();
    console.log("new skelet generated");
    res.send(build);
  });
};


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
      return "success";
      
    }
  );
};

