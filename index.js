var express = require('express');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

var WebSocket = require('ws');
const socketServer = new WebSocket.Server({ port: 3050 });

socketServer.on('connection', ws => {
    ws.on('message', message => {
        socketServer.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
    ws.send('Welcome to Dmi3z websocket');
});

var app = express();
// var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------- API -------

app.get('/', (req, res) => {
    res.send('Welcome to AngryChat api');
});

// ----------------------

const port = process.env.PORT || 3000;

app.listen(port, () => {
    // mongoClient.connect((err, client) => {
 
    //     if(err){
    //         return console.log(err);
    //     }
        
    //     db = client.db('chat-database');
    //     db.collection('users').insertOne({name: 'test'}, (err, res) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(res);
    //         }
    //     });
    //     client.close();
    // });
    console.log('Connected success!');
});
