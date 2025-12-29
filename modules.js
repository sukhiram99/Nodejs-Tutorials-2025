const fs = require("fs");
fs.writeFileSync("dummy.txt", "trying with modules");
const os = require("os");
const { log } = require("console");

console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus());
console.log(process.pid);
log("Process ID:", process.pid);
