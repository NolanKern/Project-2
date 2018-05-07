function mkdir_json(arr){
    fs.mkdir(arr[0]+arr[2], function(err){
        if(err) throw err;
        console.log("made directory");
    });
}   

function writeFile_json(){
    fs.writeFile(arr[0]+arr[2]+arr[1], arr[3], function(err){
        if (err) throw err;
        console.log("wrote file");
    });
}


var fs = require('fs')

var confpkgs = [
    {
    'key': 'js',
    'data': [1, 2, 3],
    'funckey': pkgjs
    },
    {
        'key': 'json',
        'data': [1, 2, 3],
        'funckey': pkgjson
    }
];

function confPkgProcess (confpkg, cb) {
  processedPackage = cb(confpkg.data)
  console.log(processedPackage)
}

// handling js packages
function nondir (arr) {

    fs.writeFile(arr[0]+arr[2]+arr[1], arr[3], function(err){
        if (err) throw err;
    });

  return 'success'
}

// handling json packages
function dir (arr) {

    fs.mkdir(arr[0]+arr[2], function(err){
        if(err) throw err;
        console.log("made directory");
    });

  return 'success'
}

confPkgProcess(confpkgs[0], confpkgs[0].funckey);
confPkgProcess(confpkgs[1], confpkgs[1].funckey);