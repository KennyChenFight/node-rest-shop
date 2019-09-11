require('dotenv').config();
const bodyParser = require('body-parser');

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

app.listen(port, function () {
    console.log('Express app started on ' + port);
});
