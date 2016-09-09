var exec = require('child_process').exec;
var cmd = './bin/hubot --adapter slack';
var http = require('http');


exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello I'm B*B\n");
});

server.listen(8081);
