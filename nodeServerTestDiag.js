'use strict';
//file:///home/akaarna/react-tutorial/build/index.html

/*
Dirs:
images
pages
scripts
styles
*/

//let methodType = 'get'; // 'post' or 'get' for secure server.
//let formNameIni = 'submitFormAK-Ini';
//let formName = 'submitFormAK';
//let dirName = 'build'; // React build dir.
let dirName = 'arch';
let formNameIni = 'index.html';
//let formName = 'submitFormAK';

//const http = require('http');
const https = require('https');
const urlLegacy = require('url'); // Legacy url module.
//const { URL } = require('url'); // ES6 url module
const fs = require('fs');
//const qs = require('querystring');
//const formidable = require('formidable');
//const {userInfo} = require('./appWeb.js');

let dtVar = new Date();
console.log('Server starts ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
/*
//var envObj = process.env;
for (let prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

// https://localhost:8081
//const hostname = 'localhost';
// https://unl.test:8081
const hostname = 'unl.test';
//const port = process.env.PORT; //  Windows - default port is 1337 for WebApp and 1542 for ConsoleApp;
const port = 8081; // for Linux must be set manually;

dtVar = new Date();
console.log('before https.createServer() ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

///*
const options = {
  pfx: fs.readFileSync('./unl.test.pfx'), // '../../unl_works.pfx'
  passphrase: 'unl'
};
//*/

//const server = http.createServer((req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse> ...}
const server = https.createServer(options);
//const server = http.createServer();

server.on('error', (err) => {
  var dtVar = new Date();
  //throw err;
  console.log(`httpsServer 'error' event - error code: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(err.code);
  console.log('httpsServer error stack:');
  console.log(err.stack);
});

/*
server.on('connection', (socket) => {
  var dtVar = new Date();
  console.log(`httpsServer 'connection' event - client connected at + ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
});
*/

server.on('request', (req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse>
  req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.log(`httpsServer request 'error' event - error stack: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.error(err.stack);
  });
  res.on('error', (err) => {
    console.log(`httpsServer response 'error' event - error code: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.error(err);
  });
  // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
  // or properties from objects, into distinct variables.
  //const { method, url, headers } = req;
  //let aaa = new Object();
  // req.url if GET "/" for very initial and for next "/submitFormAK?fname=Alex&sname=Raven"
  // if POST "/submitformAK"
  let objUrl = urlLegacy.parse(req.url, true, true); // non standard object.
  // Verify that it is very first page request or rendering page after GET or POST form submit processed.
  // After POST form submit will be processed rendering page will be as GET.
  if ((req.method === "GET")) {
    // for req.method === "GET" objUrl.search is ? + query e.g. "?fname=Alex&sname=Raven" or Null
    // req.url = "/" or "/submitFormAK?fname=Alex&sname=Raven"
    // if req.method === "POST" then ObjUrl.search will be "" always.
    /*
    req.url = "/" or "/submitformAK?fname=al&sname=kaa"
    ObjUrl {
      href: = path: "/ or "/submitformAK?fname=al&sname=kaa"
      pathname: "/" or "/submitformAK"
      search: null or  "?fname=al&sname=kaa"
      query: Object {} or {fname: "al", sname: "kaa"}
    }
    */
    if (req.url === "/") { // very initial request https://unl.test:8081/
      let contType = '';
      if (objUrl.pathname.endsWith('.css')) {
        contType = 'text/css';
      }
      else if (objUrl.pathname.endsWith('.js')) {
        contType = 'application/javascript';
      }
      else if (objUrl.pathname.endsWith('.png')) {
        contType = 'image/png';
      }
      else if (objUrl.pathname.endsWith('.jpg') || objUrl.pathname.endsWith('.jpeg')) {
        contType = 'image/jpeg';
      }
      else if (objUrl.pathname.endsWith('.htm') || objUrl.pathname.endsWith('.html')) {
        contType = 'text/html';
      }
      if (contType === '') {  // default formNameIni = index.html.
        contType = 'text/html';
        fs.readFile('./' + dirName + '/' + formNameIni, (err, data) => {
          if (err) {
            res.writeHead(200, { 'Content-Type': `${contType}` });
            res.write(`${dirName}/${formNameIni} not found!`);
            return res.end();
              } // throw err;
          else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
          }
        });
      }
      else {
        fs.readFile('./' + dirName + objUrl.pathname, (err, data) => { // './' + dirName  + "/path/name.type"
        if (err) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write(`${dirName + objUrl.pathname} not found!`);
          return res.end();
            } // throw err;
        else {
            res.writeHead(200, { 'Content-Type': `${contType}` });
            res.write(data);
            return res.end();
          }
        });
      }
    } // end of objUrl.search === null - no ? in GET request
    // for req.method === "GET" objUrl.search is ? + query e.g. "?fname=Alex&sname=Raven" or Null
    // req.url = "/submitFormAK?fname=Alex&sname=Raven"
    else {
      /*
      req.url = /submitformAK?fname=al&sname=kaa"
      ObjUrl {
      href: = path: /submitformAK?fname=al&sname=kaa"
      pathname: /submitformAK"
      search: "?fname=al&sname=kaa"
      query: {fname: "al", sname: "kaa"}
      }
      */
      // HACKER ATTACK OR FAULTY CLIENT.
      //req.connection.destroy();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(`Form asked by GET: ${req.url}`);
      return res.end();
    }
  } // <==================== end of GET method ================================================>
  else { // <==================== POST method form submit case start ============================================>
    // POST method, if req.method === "POST" then ObjUrl.search will be Null always.
    //let objUrl = urlLegacy.parse(req.url, true, true); // non standard object is got earlier befor GET or POST analyze.
    /*
    req.url = "/submitformAK"
    ObjUrl {
      href: = path: = pathname:  "/submitformAK"
      search: null
      query: Object {}
    }
    later body will be
    body: "fname=al\r\nsname=kaa\r\n"
    */
    let body = '';
    req.on('data', function (data) {
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
      if (body.length > 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST.
        req.connection.destroy();
      }
    });
    req.on('end', function () {
      // e.g. body = 'fname=Alex\r\nsname=Raven\r\n' for /submitFormAK
      /*
      console.log(body);
      let strVar = '';
      for (let i = 0; i < body.length; i++) {
        strVar = strVar + body.charCodeAt(i) + ",";
      }
      console.log(strVar);
      */
      //console.log(objBody);
      //let objBody = qs.parse(body, "\r\n", "="); // using const qs = require('querystring') module.
      /*
        req.url = "/submitformAK"
        ObjUrl {
          href: = path: = pathname:  "/submitformAK"
          search: null
          query: Object {}
        }
        body: "fname=al\r\nsname=kaa\r\n"
        objBody: Object {fname: "al", sname: "kaa"}    }
      */
      // HACKER ATTACK OR FAULTY CLIENT.
      //req.connection.destroy();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(`Form asked by PUT: ${req.url} body ${body}`);
      return res.end();
    }); // end req.on('end', function ()...
  } // <==================================== End of POST mtthod form submit case.  =====================================>
}) // end of server.on('request'...)

dtVar = new Date();
console.log('after https.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`Server running and listening at https://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End Serer main PROGAM path after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
