const animals = require('../controllers/animal.js')

module.exports = function (app){
		
	app.get('/', function(req, res) { 
		animals.index(req,res);
	});

	app.get('/new', function(req,res) {
	    animals.get_animals(req,res);
	})

	app.post('/', function(req,res) {
	    animals.post_animal(req,res);
	});


	app.get('/:id', function(req,res) {
	   animals.show_animal(req,res);
	});

	app.get('/animals/edit/:id/', function(req, res){
	    animals.edit_animal(req,res);
	});

	app.post('/animals/:id', function(req,res){
	    animals.update_animal(req,res);
	});

	app.post('/animals/destroy/:id', function(req, res) {
	   animals.destroy_animal(req,res);
	});
};