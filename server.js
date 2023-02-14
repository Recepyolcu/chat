const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(443);

app.use(express.static('https://recepyolcu.github.io/chat/public'));

const io = socket(server);

io.on('connection', (socket) => {
    
    socket.on('chat', (data) => {
        const address = socket.handshake.address; 
        
        console.log(address);
        
        // if (user == '::1') {
        //     const bubble = '<div class="chat-bubble"><p>' + data.message + '</p><div>';
        //     const div = '<div class="user-box">' + bubble + '<div>';
        //     data = div;
        //     io.sockets.emit('divCreated', data);
        // }
        // else {
        //     const bubble = '<div class="chat-bubble"><p>' + data.message + '</p><div>';
        //     const div = '<div class="client-box">' + bubble + '<div>';
        //     data = div;
        //     io.sockets.emit('divCreated', data);
        // }
        
       
    });

    socket.on('typing', () => {
        socket.broadcast.emit('typing');
    });
});