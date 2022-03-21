//!GET THE HTTP MODULE
const http = require('http');

//The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! This my server !');
  }).listen(8080);