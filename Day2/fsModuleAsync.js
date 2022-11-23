const { readFile, writeFile } = require("fs");

const first = readFile("./folder/first.txt");
const second = readFile("./folder/second.txt", "utf8");

console.log(first, second);
