const { writeFileSync, writeFile } = require('fs');

for(let i = 0; i<10000; i++){
    writeFileSync('./contents/big.txt', `Hello World of Node ${i} \n`, {flag:'a'});
}