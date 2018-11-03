// help video url: https://youtu.be/WxhFq64FQzA


// Run forever 
//1st Way
	
	nohup node server.js

//. Backend code way 02: file name server.js

var express = require('express');
var app = express()

app.get('/', function(req, res){
	res.send('Hello World !\n');
});

var port = 80; // without using the port nodejs. only use IP address.
app.listen(port);
console.log('Listening on port', port);


// Terminal command
sudo node server.js

// Edit server.js file and define port 4000

var port = 4000;
app.listen(port);
console.log('Listening on port', port);

// Terminal command: define port 80 and redirect to the port 4000

sudo iptables -A PREROUTING -t nat -i 
eth0 -p tcp --dport 80 -j REDIRECT --to-port 4000

node server.js

// backend process command
sudo node server.js &

// show background process
ps -ef

// kill the id number
sudo kill -9 27826

// OR Run the server.js of nodejs project . First enter the project root . & Run the command

node server.js &
