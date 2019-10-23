var express = require('express');
// var bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;

const port = process.env.PORT || 3000;

var server = express()
    .listen(port, () => { console.log('App listen on port: ', port) });


const wss = new SocketServer({ server });
    
wss.on('connection', ws => {
    ws.on('message', message => {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
    ws.send('Welcome to Dmi3z websocket');
});

// ---------- API -------

// app.get('/', (req, res) => {
//     res.send('Welcome to AngryChat api');
// });

// ----------------------




