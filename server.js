const http = require("http");

http
  .createServer((req, res) => {
    res.write(
      "<html><title>Code Step By Step</title><body><h1>Welcome to the Node.js Server</h1></body></html>"
    );
    res.end("Hello from Node.js server");
  })
  .listen(4800);
