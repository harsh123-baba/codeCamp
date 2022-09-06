const os = require('os');


//info about os user

const user = os.userInfo()
console.log(user);

console.log(`the system uptime ${os.uptime} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentOS);