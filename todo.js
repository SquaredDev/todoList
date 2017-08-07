const express = require('Express');
const app = express()
const mustache = require('mustache-express');
const path = require('path');
const shortid = require('shortid');
// const list = require('/list');

app.engine('mustache', mustache());
app.set('views', './port');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'js')));

app.get('/', function (req, res, next) {
  res.render ('index', {})
});

app.listen(3000, function () {
  console.log('Listening on 3000');
});
