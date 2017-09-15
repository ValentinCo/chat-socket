const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var socket = require('socket.io');
var server = app.listen(8080);
var io = socket(server);
var ent = require('ent');

app.use(express.static('public'));






//Action sur la connection
io.on('connection', function(socket){
    
    socket.on('chat message', function(msg){
        msg = ent.encode(msg);
        io.emit('chat message',msg);
        // console.log('message: ' + msg);
        
    })
    console.log('User has connected');
    //Action à la deconnection
    socket.on('disconnect', function(){
        console.log('User is disconnected !')
    })
 })

