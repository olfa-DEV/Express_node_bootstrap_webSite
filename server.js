console.log('Hello world!')

var express = require('express')
var app = express()
var http = require('http');

 
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/'+'home.html')
})

app.get('/:page', function (req, res) //:page pour passer une variable
{
  var par = req.params.page;
  console.log(req.params);
  res.sendFile(__dirname+'/public/'+par+'.html')
})


//  app.get('/quotes', function (req, res) {
//    res.sendFile(__dirname+'/public/'+'quotes.html')
//  })

// app.get('/aboutus', function (req, res) {
//   res.sendFile(__dirname+'/public/'+'aboutus.html')
// })

// app.get('/contact', function (req, res) {
//   res.sendFile(__dirname+'/public/'+'contact.html')
// })
 
app.listen(3000)