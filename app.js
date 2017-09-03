const express = require('express')
const app = express()

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
	res.send('Goodbye World!');
})

app.listen(port, 'localhost', function () {
	console.log('listening on: localhost:' + port);
})
