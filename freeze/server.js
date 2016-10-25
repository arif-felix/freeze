var express = require('express');
var app = express();


//app.use(express.static(__dirname + '/public'));
//app.use('/static', express.static(__dirname + '/public'));

// app.use(express.static(__dirname+'/views'));
// app.get('/home', function (req, res) {
//   res.sendFile(path.join(__dirname+'/views/home.html'));
// });
// app.get('*', function(req, res) {
// 		res.sendFile(path.join(__dirname+'//app/views/index.html'));
// });

//var connect = require('connect'),
  //  directory = '/views';
app.use(function(req, res, next) {
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
       res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
       next();
   });
  
app.get('/api/user', function(req, res) {
  var user = {
    name : 'Suva',
    age: 25
  };
  res.send(user)
});

app
    .use(express.static(__dirname + '/assets'))    
    .get('*', function(req, res) {
        res.sendfile('./assets/index.html');
    });


app.listen(3000, function () {
  console.log('The app is listening on port 3000!');
});
