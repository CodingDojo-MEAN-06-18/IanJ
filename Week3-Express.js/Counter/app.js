var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');


var session = require('express-session');

app.use(session({
  secret: 'secretpassword',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
	if (req.session.visits) {
		req.session.visits++;
	} else {
		req.session.visits = 1;
	}
	res.render("index", {visits: req.session.visits});
});


app.get('/clear', function(req,res) {
	req.session.visits = -1;
	res.redirect('/')
})




app.listen(8000, function() {
 console.log("listening on port 8000");
});