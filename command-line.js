const args = process.argv;

const port = args[2] || 8080;

console.log(`Server will start on port: ${port}`);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hello from Node.js server</h1>");
    res.end();
  })
  .listen(port);
