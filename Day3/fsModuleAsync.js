const { readFile, writeFile } = require("fs");

const writer = (data) => {
  writeFile(
    "./folder/result.txt",
    `\n ${data}`,
    { flag: "a" },
    (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    }
  );
};

readFile("./folder/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  }
  //   result = "\n" + result;
  writer(result);
});

readFile("./folder/second.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  }
  // result = '\n' + result;
  writer(result);
});
