var http = require('http');
console.log('restarting server');
//Allow Cross Domain Requests
//create a server object:
const server = http
	.createServer(function (req, res) {
		res.write('Hello World!'); //write a response to the client
		res.end(); //end the response
	})
	.listen(3000); //the server object listens on port 8080

var io = require('socket.io').listen(server);
// io.set('transports', ['websocket']);
io.on('connect', (socket) => {
	console.log('connection made');
	socket.emit('hello', 'can you really hear me?', 1, 2, 'abc');
	socket.on('goodbye', (data) => {
		console.log('Goodbye mess', data);
	});
});
/*
const server = require('http').createServer();

const io = require('socket.io')(server, {
    origins:["127.0.0.1:8000"],
    path: '/',
    serveClient: false,
    // below are engine.IO options
    pingInterval: 20000,
    pingTimeout: 5000,
    cookie: false
});

io.on('connection', function(socket){
    console.log("here new user welcom")
});


server.listen(3000,function(){
    console.log('listening on *:3000')});
*/
