// writeFileSync(filepath,DataTransfer,optional)
// readFileSync(filepath,optional)
// appendFileSync(filepath,DataTransfer,optional)
// unlikeFileSync(filepath,optional)
const fs = require("fs");
const path = require("path");
const fileName = "crud.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

const updateFile=fs.unlinkSync(filePath,"/ndiana","utf-8");
console.log(updateFile);

// fs.writeFile(filePath,Data,callback)

