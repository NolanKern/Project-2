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