var path = require('path');
var express = require('express');
var app = express();

app.get('/assets/*', function (req, res) {
  console.log(req.url);
	res.sendFile(path.join(__dirname, req.url));
});

app.get('/html/*', function (req, res) {
  console.log(req.url);
	res.sendFile(path.join(__dirname, req.url));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
