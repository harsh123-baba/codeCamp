const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=>{
    console.log("Hii")
})

customEmitter.emit('response')

