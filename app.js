require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', function (req, res, next) {
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Express app started on ' + port);
});
