//!GET THE HTTP MODULE
const http = require('http');

//^Get my file by require it
const dt = require('./myfirstmodule');

//The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.
http.createServer(function (req, res) {
    //res.writeHead() method is the status code
    //200 means that all is OK
    //the second argument is an object containing the response headers.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date is currently : " + dt.myDateTime());
    res.write(req.url); //!
    res.end();
}).listen(8080);

//! req is the request from the client, as an object(http.IncomingMessage object)
//This object has a property called "url" which holds the part of the url that comes AFTER the domain name
//Try on localhost:8080/summer/winter => it write on window /summer and /winter
