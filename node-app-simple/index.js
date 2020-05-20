const http = require("http");

// commands
// START --init -p 3000:3000 END

// process.on('SIGTERM') etc to handle exsting server on cmd c
// also fix intellisense
// for now can run with --init which uses tini module which acts as proxy and kill node process for you
// to share the network (remember the env is namespaced) you can expose the port with --publish or -p 3000:3000

http
  .createServer(function(request, response) {
    console.log("request received");
    response.end("omg hi", "utf-8");
  })
  .listen(3000);
console.log("server started");
