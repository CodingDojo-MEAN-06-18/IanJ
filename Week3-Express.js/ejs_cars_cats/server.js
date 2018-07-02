const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


app.set('views', __dirname + "/views");

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response) {
    response.render('cars');
});

app.get('/cats', function(request, response) {
    response.render('cats');
});

app.get('/form', function(request, response) {
    response.render('form');
});

app.listen(port, () => console.log(`Server listening on port ${ port }}`));