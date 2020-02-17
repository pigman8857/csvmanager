const parse = require('csv-parse');
const fs = require('fs');
const filePath = "/Users/admin/Documents/ohsva.csv";

const output = [];
const option = {
    delimiter:"\t",
    trim: true,
    skip_empty_lines: true
};

console.log();
console.log('Start app....');
console.log();
console.log();
fs.readFile(filePath,function(err,data){
    console.log('File content :');
    console.log(data.toString());
    const parser = parse(data,option);
    parser.on("readable",function(){
        let record
        while (record = parser.read()) {
            console.log('record:');
            console.log(record);
            output.push(record)
        }
    })
    .on('error', function(err){
        console.error(err.message)
    })
    .on('end', function(){
        console.log();
        console.log();
        console.log('output:');
        console.log(output);
    });
});
