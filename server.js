// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var HTTP_PORT = process.env.PORT || 5000;
const {Lobby} = require('./server/lobby');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', HTTP_PORT);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
})

// Starts the server
server.listen(HTTP_PORT, function() {
    console.log('Starting server on port ' + HTTP_PORT);
});

// Initiate the Lobby
const lobby = new Lobby(io);
