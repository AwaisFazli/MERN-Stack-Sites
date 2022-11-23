const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./folder/first.txt", "utf-8"); //utf-8 is used for encoding
const second = readFileSync("./folder/second.txt");

console.log(first);
console.log(second);

writeFileSync("./folder/third.txt", `Results are ${first}`);
const third = readFileSync("./folder/third.txt", "utf-8");
console.log(third);
