// const fs = require('fs');

//destructured them

const {readFileSync, writeFileSync, readFile}  = require('fs');

const first = readFileSync("./content/first.txt", 'utf8')
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second);

// how to write the files;
writeFileSync(
    './content/result-write.txt',
    `Here is the result of : ${first}, ${second}` 
)


