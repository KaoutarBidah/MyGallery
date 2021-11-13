var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/find"] = requestHandlers.find;
handle["/show"] = requestHandlers.show;
handle["/login"] = requestHandlers.login;
handle["/logout"] = requestHandlers.logout;
server.start(router.route, handle);