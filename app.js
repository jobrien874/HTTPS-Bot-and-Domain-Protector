/* const dotenv = require('dotenv');
const result = dotenv.config() */
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 5000
var check = require('./check');

// Scrounger Bot V1.0 Init
/* if (result.error) {
  throw result.error
} */

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server Running');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(check.SecurityChecker())
});