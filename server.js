var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	mime = require('mime'),

	base = path.join(process.cwd(), 'build'),
	port = process.env.PORT || 3000;

function handleError(target, request, status) {
	target.writeHead(status, { 'Content-Type': 'text/html' });
	target.end('<h1>An error occured</h1>' + '<h2>' + 'status: ' + status + ' ' + http.STATUS_CODES[status] + '</h2>' + '<h2>' + 'url: ' + request.url + '</h2>');
};
// The simplest server
http.createServer(function(request, response) {
    var pathname = path.join(base, decodeURIComponent((request.url+'').replace(/\+/g, '%20')));
	fs.stat(pathname, function(err, stat) {
        if (err === null) {
			if ('/' === request.url) {
				fs.createReadStream(path.join(base, 'about.html')).pipe(response);
			} 
			else {
				response.writeHead(200, {'Content-Type': mime.lookup(pathname)});
				fs.createReadStream(pathname).pipe(response);
			} 
		}
		else {
			handleError(response, request, 404);
		}
	});
}).listen(port);