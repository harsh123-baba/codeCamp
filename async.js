// const { readFile, writeFile} = require('fs');

// var first;
// var second;

// readFile('./content/first.txt', 'utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
    
//     first = result;
// })

// readFile('./content/second.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err);
//     }
//     second = result;
// })

// writeFile(
//     './content/async-write.txt', 
//     `Here is the result of : ${first}, ${second}`,
//     (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File created sucessfully")
//         }
//     }
// )

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')


