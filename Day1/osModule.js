// OS Module
// It gives bunch of different properties & methods to interact with Operating Systen as well as Server

const os = require("os");

// info about current user
const user = os.userInfo();

// system uptime in seconds
const screentme = os.uptime();

// Creating an Object of Current OS info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
