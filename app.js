/* const dotenv = require('dotenv');
const result = dotenv.config() */
const http = require('http');
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
var check = require('./check');

// Scrounger Bot V1.0 Init
/* if (result.error) {
  throw result.error
} */

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ScroungerBot Running...');
});

server.listen(server_port, server_host, () => {
  console.log(`Server running at http://${server_host}:${server_port}/`);
  console.log(check.SecurityChecker())
});