var http = require('http');

// Apache and Varnish 1.1
http.createServer(function (req, res) {
  res.setHeader("Server", "Apache");
  res.setHeader("via", "1.1 varnish")
  res.write('Apache and Varnish'); 
  res.end();
}).listen(8080);

