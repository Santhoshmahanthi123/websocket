var app = require('express')();
var http = require('http').Server(app);
var ejs = require('ejs');
var io = require('socket.io')(http);
io.on('connection', function(socket){
   //Whenever someone connects this gets executed
    console.log('A user connected');
  
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
      console.log('A user disconnected');
    });
  
  });
  
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.render('index');
});

http.listen(3000, function(){
  console.log('listening on :3000');
});