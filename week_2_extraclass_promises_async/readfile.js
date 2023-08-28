const fs = require("fs") 

function readFileCallback(filename, callback){
    fs.readFile(filename, "utf-8",callback)
}

function callbackFunc(err, data){
 console.log(data)
}

readFileCallback("sample.txt",callbackFunc)