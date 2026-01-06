const http = require("http");
const { json } = require("stream/consumers");

const userData = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Mike Johnson",
    age: 35,
    city: "Chicago",
  },
  {
    name: "Emily Davis",
    age: 28,
    city: "Houston",
  },
];

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
  })
  .listen(3000);
