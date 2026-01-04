// Load the filesystem module
const fs = require("fs");

// Read file asynchronously
fs.readFile("dummy.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: " + err);
    return;
  }
  console.log("File content: " + data);
});

console.log("Reading file... (this runs first!)");
