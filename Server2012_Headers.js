var http = require('http');

// Microsoft Server 2012
http.createServer(function (req, res) {
  res.setHeader("Server", "IIS/8");
  res.setHeader("Vary", "Accept-Encoding")
  res.write('Server 2012 Headers'); 
  res.end();
}).listen(8080);

