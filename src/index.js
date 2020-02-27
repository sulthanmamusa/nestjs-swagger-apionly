var http = require('http');

var proxy = require('http-proxy');

proxyServer = proxy.createProxyServer({target:'http://192.168.0.219'});

proxyServer.on('proxyReq', function(proxyReq, req, res, options) {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	// proxyReq.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  });

proxyServer.listen(8000);

// server = http.createServer(function (req, res) {

//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   res.write('Proxy Request was Successful!' + '\n' + JSON.stringify(req.headers, true, 2));

//   res.end();

// });

// server.listen(9000);