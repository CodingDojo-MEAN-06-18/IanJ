const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', function(request,response) {
    response.sendFile(__dirname + "/static/index.html");
})

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response) {
    response.sendFile(__dirname + '/static/cars.html');
})

app.get('/cats', function(request, response) {
    response.sendFile(__dirname + '/static/cats.html');
})

app.get('/form', function(request, response) {
    response.sendFile(__dirname + '/static/form.html');
})

app.listen(port, () => console.log(`Server listening on port ${ port }}`));