const express = require('express');
const path = require('path');
const app = express();

/* parse port number */
let args = process.argv.slice(2);
let port;

if(args.length < 1) {
  	console.log('must supply a port number.');
	return;
} else {
	port = parseInt(args[0]);
	if(port === NaN) {
		console.log('invalid port specified: ' + args[0]);
		return;
	}
}

/* setup server */ 
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/audio/*', function(req, res) {
	let audiopath = path.join(__dirname + '/' + req.originalUrl);
	console.log('request for audio at: ' + audiopath);	
	res.sendFile(audiopath);
});

app.listen(port, 'localhost', function () {
	console.log('listening on: localhost:' + port);
});
