const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const dotenv = require('dotenv');
const result = dotenv.config()
var check = require('./check');

// Scrounger Bot V1.0 Init
if (result.error) {
  throw result.error
}

check.SecurityChecker()