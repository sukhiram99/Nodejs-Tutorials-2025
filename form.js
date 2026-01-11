const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    console.log(req.url);

    if (req.url == "/") {
      res.write(`<form action="/submit" method="post">
    <input type="text" name="username" placeholder="Username" />
    <input type="email" name="email" placeholder="Email" />
    <button type="submit">Submit</button>
    </form>`);
    } else if (req.url == "/submit" && req.method === "POST") {
      res.write("<h1>Form submitted successfully!</h1>");
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     console.log(req.url);

//     if (req.url == "/") {
//       res.write(`<form action="/submit" method="post">
//       <input type="text" name="username" placeholder="Username" />
//       <input type="email" name="email" placeholder="Email" />
//       <button type="submit">Submit</button>
//       </form>`);
//     } else if (req.url == "/submit" && req.method === "POST") {
//       res.write("<h1>Form submitted successfully!</h1>");
//     }
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Server is listening on port 3000");
//   });
