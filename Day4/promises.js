const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./data/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./data/first.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
