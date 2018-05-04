var fsArray = [];

// Switch Statement logic for each element of the user entered data
function pushArray(val){
    switch(val){
        case "HTML":
            fsArray.push("HTML");
        break;

        case "css":
            fsArray.push("css");
        break;

        case "javascript":
            fsArray.push("javascript");
        break;

        case "node":
            fsArray.push("node");
        break;

        case "JS-Constructor":
            fsArray.push("js-constructor");
        break;

        case "MySQL":
            fsArray.push("mysql");
        break;

        case "Express":
            fsArray.push("express");
        break;

        case "Handlebars":
            fsArray.push("handlebars");
        break;

        case "Sequelize":
            fsArray.push("sequelize");
        break;

        // case "HTML":
        // fsArray.push("HTML");
        // break;

        // case "HTML":
        // fsArray.push("HTML");
        // break;

        // case "HTML":
        // fsArray.push("HTML");
        // break;

        // case "HTML":
        // fsArray.push("HTML");
        // break;

        // case "HTML":
        // fsArray.push("HTML");
        // break;
        default:
            return;
        break;
    } 
}

const asyncForEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const start = async () => {
  await asyncForEach(userAnswers, async (num) => {
  });
  await asynchCreateDocs(fsArray);
}


const asynchCreateDocs = async() => {
    if(fsArray.indexOf("sequelize")>-1){

    }
    else if(fsArray.indexOf("handlebars")>-1){

    }
    else if(fsArray.indexOf("express")>-1){

    }
    else if(fsArray.indexOf("mysql")>-1){

    }
    else if(fsArray.indexOf("js-constructor")>-1){

    }
    else if(fsArray.indexOf("node")>-1){

    }
    else if(fsArray.indexOf("javascript")>-1){

    }
    else if(fsArray.indexOf("html")>-1){

    }
    else{
        console.log("A problem has occured!!!!!!!!");
        console.log("I am here at line 110");
    }
}

async function buildDir(){
    try {
        // Do not start the rest of the skeleton creation until main directory is created
        await fs.mkdir('skeleton',(err)=>{
            if(err) throw err;
        });
        
        // in main create main server file
        fs.writeFile("/skeleton/server.js", (err)=>{
            if(err) throw err;
            console.log("seq() Line 118 worked");
        })
        .then(()=>{
            // appendFile here
        })


        // fs.appendFile("server.js", '\r\n var express = require("express");'
        // +'var bodyParser = require("body-parser");'+'var path = require("path");'+
        // 'var app = express();'+ 'app.use(express.static("public"));')
        
        // config dir holds files: connection.js and orm.js
        fs.mkdir('/skeleton/config', (err) =>{
            if(err) throw err;
        }).then(()=>{
            // connection.js
            fs.writeFile('/skeleton/config/connection.js', (err) => {
                if(err) throw err;
            })
            .then(()=>{
                // appendFile here
            })

            // orm.js
            fs.writeFile('/skeleton/config/orm.js', (err) => {
                if(err) throw err;
            })
            .then(()=>{
                // appendFile here
            })
        })

        // Controllers dir contains: userProjectName_controller.js
        fs.mkdir('/skeleton/controllers', (err) =>{
            if(err) throw err;
        })
        .then(()=>{
            // create file for controlling the flow of the table
            fs.writeFile('/skeleton/controllers/'+userProjectName+'_controller.js',(err)=>{
                if(err) throw err;
            })
            .then(()=>{
                // appendFile here
            })
        })

        // db dir contains sql files: schema.sql and seeds.sql
        fs.mkdir('/skeleton/db', (err) =>{
            if(err) throw err;
        }).then(()=>{
            // create and edit schema skeleton
            fs.writeFile('/skeleton/db/schema.sql', (err)=>{
                if(err) throw err;
            }).then(()=>{
                // appendFile Here
            })

            // create seeds.sql
            fs.writeFile('/skeleton/db/seeds.sql', (err)=>{
                if(err) throw err;
            }).then(()=>{
                // appendFile here
            })
        })

        // models dir contains model for project i.e userProjectName.js
        fs.mkdir('/skeleton/models', (err) =>{
            if(err) throw err;
        }).then(()=>{
            // creates model script
            fs.writeFile('/skeleton/models/'+userProjectName+'.js', (err)=>{
                if(err) throw err;
            }).then(()=>{
                // appendFile here
            })
        })

        // Public dir contains assets/css && assets/img && assets/js && test.html file
        fs.mkdir('/skeleton/public', (err) =>{
            if(err) throw err;
            // create file for test page
            fs.writeFile('/skeleton/public/test.html', (err)=>{
                if(err) throw err;
            });
            fs.mkdir('/skeleton/public/assets', (err)=>{
                if(err) throw err;
            }); 
        }).then(()=>{
                fs.mkdir('/skeleton/public/assets/css', (err)=>{
                    if(err) throw err;
                    })
                    // create style.css page
                    .then(()=>{
                    fs.writeFile('/skeleton/public/assets/css/style.css', (err)=>{
                        if(err) throw err;
                    })
                })

                // create folder for popul
                fs.mkdir('/skeleton/public/assets/img', (err)=>{
                    if(err) throw err;  
                });

                fs.mkdir('/skeleton/public/assets/js', (err)=>{
                    if(err) throw err;
                    
                })
                .then(()=>{
                    fs.writeFile('/skeleton/public/assets/js/app.js', (err)=>{
                        if(err) throw err;
                })
                .then(()=>{
                    // appendFile here
                })
            })
        });

        fs.mkdir('/skeleton/views', (err) =>{
            if(err) throw err;
        }).then(()=>{
            fs.writeFile('/skeleton/views/index.handlebars', (err)=>{
                if(err) throw err;
            }).then(()=>{
                // appendFile here
            })

            fs.mkdir('/skeleton/views/layouts', (err)=>{
            if(err) throw err;
            }).then(()=>{
                fs.writeFile('/skeleton/views/layouts/main.handlebars', (err)=>{
                    if(err) throw err;
                }).then(()=>{
                    // appendFile here
                })
            })
        })
    } catch{
        if (err) throw err;
    }
}

































start();