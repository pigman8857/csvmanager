const fs = require('fs');
const filePath = "/Users/admin/Documents/header.csv";

fs.readFile(filePath,function(err,data){
    const content = data.toString();
    console.log(content);
});