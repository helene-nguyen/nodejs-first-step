// The Node.js file system module allows you to work with the file system on your computer

/* Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files */

//!GET FILE SYSTEM MODULE
const fs = require('fs');

//!GET HTTP MODULE
const http = require('http');

/* fs.copyFileSync("file1.txt", "file2.txt") */
; // copy file

// TODO Here we want to get the index.html file and return the content on my serve
//get the http module x
//create the server x
//add readFile property to read the file
//initiate the file with node

//Be careful about the path to find the file
const server = http.createServer((req, res) => {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
    
});

console.log("The filesystem.js file is running...")
server.listen(8080);

//&create new file
//The fs.appendFile() method appends specified content to a file. If the //!file does not exist, the file will be created

fs.appendFile('mynewfile1.txt', 'Hello content! ', function (err) {
    if (err) throw err;
    console.log('Saved 1!');
});
//~update file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  
  
//&create new, empty file
//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved 2!');
});
  
//&create new file and replace or not content if it exists
//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved 3!');
});
//~update file
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
  
//&delete files
/*
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/

//&rename files
/* 
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
*/