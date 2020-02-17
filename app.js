const parse = require('csv-parse');
const fs = require('fs');
const filePath = "/Users/admin/Documents/ohsva.csv";

const output = [];
const option = {
    quote : '',
    delimiter:'\t',
    trim: true,
    rtrim : true,
    columns:true
};

console.log();
console.log('Start app....');
console.log();
console.log();
fs.readFile(filePath,function(err,data){
    console.log('File content :'); 
    let input = data.toString('ucs2');
    console.log(input);
    console.log();
    console.log();
    /*
    let arr = [];
    let q = [];
    for (let i = 0; i < input.length; i++) {
        const e = input[i];
        console.log(e);
        arr.push(e);
        if(e === '\u0000'){
            q.push(e);    
        }
    }
    console.log(arr);
    console.log(q);
    */
    /*
    input = input.replace(/\u0000/g,'').replace('��','').replace(/\t/g,',');;
    console.log()
    console.log('after clean up');
    console.log(input);
    */
    /*
    let input2 = `"User Id","MID","Display Name","Profile Picture","Crm Id","First Name","Last Name","Thai Citizen Id","Gender","Date Of Birth","Phone Number","Email","Address","Street","Sub District","District","City","Zipcode","Groups","Categories","Beacons","Text Message - ohsva (exact)"
    "5360540","U2d5f47348dce2859a4de746e5b80eaed","Oh SVA","https://profile.line-scdn.net/0hk9OWPt4sNBZyLh-bC71LQU5rOnsFADJeCkB8I14paXVYGXRETkl4JQApOXRbHSdGGkF9dQcoaiYN","-","-","-","-","-","-","-","-","-","-","-","-","-","-","PLSO EMIT LINE Group, test, MCX","-","-","Message #1: ohsva"`;
    */
    
    
    const parser = parse(input,option);

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
