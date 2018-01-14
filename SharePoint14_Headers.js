var http = require('http');

// Microsoft Server 2008 R2
// SharePoint 14.0.0.713
http.createServer(function (req, res) {
  res.setHeader("MicrosoftSharePointTeamServices", "14.0.0.713");
  res.setHeader("Server", "Microsoft-IIS/7.5");
  res.write('SharePoint Headers'); 
  res.end();
}).listen(8080);

