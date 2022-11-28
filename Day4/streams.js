const { createReadStream } = require("fs");

const stream = createReadStream("./data/largeData.txt");

stream.on("data", (result) => {
  console.log(result);
});
