const fs = require('fs');
const csv2json = require('csv2json');
const filePath = "/Users/admin/Documents/header.csv";

csv2json().fromFile(filePath).then(source => {
    console.log(source);
});