var react = require('react');
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var NOTES_FILE = path.join(__dirname, 'notes.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/notes', function(req, res){
  fs.readFile(NOTES_FILE, function(req, res){
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/notes', function(req, res){
  fs.readFile(NOTES_FILE, function(err, data){
    var notes = JSON.parse(data);
    notes.push(req.body);
    fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 4), function(err){
      res.setHeader('Cache-Control', 'no-cache');
      res.json(notes);
    });
  });
});

app.listen(app.get('port'), function(){
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
