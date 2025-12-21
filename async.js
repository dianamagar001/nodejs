const fs = require("fs");
const path = require("path");
const fileName = "crud.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);
fs.unlink(filePath,
(err)=>{
    if (err) console.error(err);
    else console.log("file is updated");

});


