var app = require('express')();
var http = require('http').Server(app);
app.set('view engine', 'html');
app.get('/', function(req, res){
  res.sendfile('index');
});

http.listen(3000, function(){
  console.log('listening on :3000');
});