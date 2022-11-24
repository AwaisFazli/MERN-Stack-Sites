const http = require("http");
const { basename } = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to HomePage");
  } else {
    res.end(`Welcome to ${basename(req.url)}`);
  }
});

server.listen(5000);
