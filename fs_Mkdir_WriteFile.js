var dir_constructor  = require("dir_constructor.json");
var fs = require("fs");
// require post request array here



for(i=0;i<arr.length;i++){
    switch(arr[i]){
        // 
        case seq_constructor:
            confPkgProcess(dir_constructor[0],cb);
            console.log("seq_constructor done")
        break;
        // 
        case html_constructor:
            confPkgProcess(dir_constructor[1],cb);
            console.log("html_constructor done");
        break;
        // 
        case bootstrap3:




            // need help finding location file where this belongs
            code_insert("location", dir_constructor[2]);
        break;
        // 
        case bootstrap4:
            code_insert("location", dir_constructor[3]);
        break
        // 
        case bulma:
            code_insert("location", dir_constructor[4]);
        break;
        // 
        case materialize:
            code_insert("location", dir_constructor[5]);
        break;
        // 
        case html_start:
            // needs help finding correct location
            non2NotDir(dir_constructor[6],index.html,"location");
        break;
        // 
        case reset:
            non2NotDir(dir_constructor[7],index.html,"location");   
        break;
        // 
        case ajax:
            code_insert("location", dir_constructor[8]);
        break;
        // 
        case nodejs:
            confPkgProcess(dir_constructor[1],cb);
        break;
        // 
        case js_constructor:

        break;
        // 
        case mysql:

        break;
        // 
        case express:

        break;
    }
}


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
  
function non2dir(arr, name, location){
    fs.mkdir(location+name, function(err){
        if(err) throw err;
    });
}
function non2NotDir (arr, name, location){
    fs.writeFile(location + name, arr, function(err){
        if (err) throw err;
    });
}

function code_insert(location,arr){
    fs.appendFile(location, arr, function(err){
        if (err) throw err;
    })
}

function multiLineBuilder(location, arr, itterations, name){
    switch(name){
        case js_constructor:
            for(let i=0;i<itterations;i++){
                for(let j=0;j<arr.length-1;j++){
                    fs.appendFile(location,arr[j], function (err){
                        if (err) throw err;
                    });
                }
            }
            fs.appendFile(location,arr[arr.length-1], function (err){
                if (err) throw err;
            });
        break;

        case mysql:
            fs.writeFile(arr[0]+arr[2]+arr[1], "", function (err){
                if (err) throw err;
            })
            for(let i=3;i<arr.length;i++){
                fs.appendFile(arr[0]+arr[2]+arr[1], arr[i], function (err){
                    if (err) throw err;
                })
            }
        break;

        case express:
        fs.writeFile(arr[0]+arr[2]+arr[1], arr[3]+arr[4]+arr[5], function (err){
            if (err) throw err;
        })
        for(let i=0;i<itterations;i++){
            for(let j=6;j<arr.length-1;j++){
                fs.appendFile(arr[0]+arr[2]+arr[1],arr[j], function(err){
                    if (err) throw err;
                })
            }
        }
        break;
    }
    
}