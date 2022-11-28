const { basename } = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HomePage");
  } else {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i, j);
      }
    }
    res.end(basename(req.url));
  }
});

server.listen(5000, () => {
  console.log("Server is Listening");
});
