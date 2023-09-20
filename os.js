const os  = require('os')

const user = os.userInfo()

/// the system uptime in seconds

console.log( os.uptime())
 
const currentOs={
    name:os.type(),
    release:os.release(),
    totralMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)