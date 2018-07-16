const Animal = require("../models/animal.js");
const mongoose = require('mongoose');
module.exports = {
    
    index: function(req, res) {
       	Animal.find({}, function(err,animals){
        if(err){
        	console.log("no animal")
        	res.redirect('/')
        } else {
        res.render("index", {animals: animals});
    	}
	    });
    },

    get_animals: function(req,res){
         res.render('new');
    },

    post_animal: function(req, res) {
       	console.log("POST DATA", req.body);
	    let animal = new Animal(req.body);
	    animal.save()
	        .then(animal => {
	            //success
	            console.log(animal);
	            req.flash('success', 'Added to the database');
	            res.redirect('/');
	        })
	        .catch(error => {
	            //handle error  
	           const errors = Object.keys(error.errors).map(key => {
	                return error.errors[key].message; 
	                res.redirect('/');
	            }); 
	        }); 
	},

	show_animal: function(req,res) {
		 Animal.findById(req.params.id, function(err,animal){
	        res.render('show', {animal: animal });
	    });
	},

	edit_animal: function(req,res) {
		 Animal.findById(req.params.id, function(err, animal) {
	        res.render('edit', { animal: animal });
	  	});
	},

	update_animal: function(req,res) {
		Animal.edit({ _id: req.params.id}, req.body, function(err,result) {
	        if(err) {
	            console.log(err);
	        }
	        res.redirect('/');
	    });
	},
	
	destroy_animal: function(req,res) {
		 Animal.remove({ _id: req.params.id}, function(err,result) {
	        console.log("deleted animal")
	        if(err){
	            console.log(err);
	        }
	        res.redirect('/');
	    });
	}


}