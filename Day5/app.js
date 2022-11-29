const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./homePage.html"); //This Command runs right away when server starts not when user makes a request
// thats why we can keep it as Synchronus

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404: Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
