const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("web.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080);
console.log("Server is running on http://localhost:8080");
