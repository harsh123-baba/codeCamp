// this is the thing where the fuck happens 
// go to headers of website and see the size of file that is loaded 
//much big file
// so why wont we "chunked" it
 

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res){
//     const text = fs.readFileSync('./contents/big.txt');
//     // res.send(text);
//     res.end(text);
// }).listen(3000)


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./contents/big.txt','utf8');
    // res.send(text);
    fileStream.on('open', ()=>{
fileStream.pipe(res);
    }) 
    fileStream.on('error', (err)=>{
        res.end(err);
    })
    
}).listen(3000)
