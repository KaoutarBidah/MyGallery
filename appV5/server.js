var http = require("http");
var url = require("url");
function start(route, handle) {
function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
var content = route(handle, pathname);
response.writeHead(200, {"Content-Type": "text/plain"});
response.write(content);
response.end();
}
http.createServer(onRequest).listen(8000);
console.log("Server has started.");
}
exports.start = start;