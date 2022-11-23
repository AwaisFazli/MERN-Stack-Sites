const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;

  readFile("./folder/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
    }
    const second = result;

    writeFile(
      "./folder/resultAsync.txt",
      `Heres The Result:,${first} ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log(result);
      }
    );
  });
});

// readFile("./folder/second.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   }
//   second = result;
// });

// console.log(first);
