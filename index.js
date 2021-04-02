const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
   res.send('Hello Sonia');
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

module.exports = app;
