const quotes = require('../controllers/quotes.js')

module.exports = function (app){
	
	
	app.get('/', function(req, res) { 
	   quotes.index(req,res);
	});

	app.get('/quotes', function(req,res){
		quotes.get_quotes(req,res);
	});

	app.post('/quotes', function(req, res) {
		console.log("POST DATA", req.body);
	 	quotes.post_quote(req,res);
	});

};