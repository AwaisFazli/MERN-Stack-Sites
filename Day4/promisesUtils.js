const { readFile, writeFile } = require("fs");
const utils = require("util");

const readFilePromise = utils.promisify(readFile);

const start = async () => {
  try {
    const first = await readFilePromise("./data/first.txt", "utf8");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();
