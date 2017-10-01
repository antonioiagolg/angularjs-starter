var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./public'));

// Habilita o modo Html5
//
app.all("/*", function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;