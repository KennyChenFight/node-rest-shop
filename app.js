require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URL;

// mongoose.connect(dbUrl, {keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true})
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// const connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {
//     console.log('mongodb is connected');
// });

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/postTesting', (req, res, next) => {
    res.json(req.body);
});

app.get('/', function (req, res, next) {
    res.send('Hello World');
});

connectDB();

function connectDB() {
    mongoose.connection
        .on('error', console.error.bind(console, 'connection error:'))
        .on('disconnected', connectDB)
        .once('open', listen);
    return mongoose.connect(dbUrl, {keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true});
}

function listen() {
    app.listen(port, function () {
        console.log('Express app started on ' + port);
    });
}
