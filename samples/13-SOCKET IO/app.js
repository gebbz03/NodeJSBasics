const express = require('express');
const app = express();
const port = 8080;
const http = require('http').Server(app);
const socket = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));  //Homepage or root
app.get('/', function (req, res) {
    res.sendfile('index.html');
});


socket.on('connection', function (s) {
    console.log('Ready to use socket');
    s.on('player',function(id){
        console.log(id);
    });
});

const server = http.listen(port, function () {
    console.log('Ready ' + port);
});

