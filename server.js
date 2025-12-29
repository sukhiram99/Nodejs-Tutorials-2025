const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.end("Hello from Node.js server");
  })
  .listen(4800);
