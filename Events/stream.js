const { createReadStream } = require('fs');

// for basic 64 KB distribution ( By default)
// const stream = createReadStream('./contents/big.txt');


// for var size buffer and to get answer Hello world 100000 times
// const stream = createReadStream('./contents/big.txt', {highWaterMark:9000, encoding:'utf8'});

// for var size buffer 
const stream = createReadStream('./contents/big.txt', { highWaterMark: 90000});




stream.on('data', (result)=>{
    console.log(result) 
})

stream.on('error', (err)=>{
    console.log(err);
})

// stream();
