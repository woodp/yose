var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end("{ \"alive\" : true }");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);
