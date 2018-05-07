const express       = require('express');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs');
const fs            = require('fs');
const exec          = require('child_process').exec;
const EasyZip       = require('easy-zip').EasyZip;
const path          = require('path');
const rimraf        = require('rimraf');

const router        = express.Router();

const db            = require("../models");
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;


//===============ROUTES=================
//displays our homepage
router.get('/', function(req, res){
    // console.log(req.user);
    res.render('home', {user: req.user});
});

//displays our signup page
router.get('/signin', function(req, res){
    res.render('signin');
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {
    res.redirect('/');
});

router.post('/api/runCmd', function(req, res){
    let cmdStr = req.body.cmdStr;
    
    runCommand(cmdStr);

});
 
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.user.findById(id).then(function(result){
        cb(null, result);
    });
});

passport.use('local', new LocalStrategy({
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, username, password, done) {

    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.user.findOne({where: {username: username}}).then(function(results) {
            // console.log(results);
            let user = JSON.parse(JSON.stringify(results));
            // console.log(user);
            if (!user) {
                return done(null, false);
            }
            
            if (user.password != password) {
                return done(null, false);
            }

            console.log("SUCCESS");
            // console.log(user);
            return done(null, user);
        });    

    });

}));


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
      zip.writeToFile('app/public/assets/deliverables/folderall.zip', function(){
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
module.exports      = router;