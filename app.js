var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

process.env.PORT = 3000;
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/api/login', function(req, res){
    //console.log(req.body);
    if(req.body.username !== "test" || req.body.password !== "1234"){
        res.status(403);
        res.send({ message: 'Invalid Username or password!!!'});
        return;
    }
    
    res.status(200);
    res.send({ message: 'Success!!!' });
});

app.listen(port);
