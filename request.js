const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.headers);
    res.write("<h1>Welcome to indore</h1>");
    res.end();
  })
  .listen(3000);
