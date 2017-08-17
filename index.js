const express = require('express');
const trolls = require('./data/trolls.json');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.send(pug.renderFile('index.pug', trolls));
});

app.listen(port, function() {
  console.log('Local server running on localhost:' + port);
});
