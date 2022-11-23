const path = require("path");

console.log(path.sep);

const filepath = path.join("/folder", "subfolder", "test.txt");

console.log(filepath);

console.log(path.basename(filepath));

const absolutepath = path.resolve(__dirname, "folder", "subfolder", "test.txt");
const absolutepath2 = path.join(__dirname, "folder", "subfolder", "test.txt");

console.log(absolutepath);
console.log(__dirname);
