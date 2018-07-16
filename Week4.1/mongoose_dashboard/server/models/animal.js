const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/animal');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

const animalSchema = new mongoose.Schema({
    name: { 
    	type: String, 
    	required: [true, 'Enter a name'], 
    },
    age: { 
    	type: Number, 
    	required: [true, 'Enter an age'],
    	min: [1, 'Age cannot be less than 1'],
    },
}); 
	
mongoose.model('Animal', animalSchema);

const Animal = mongoose.model('Animal');

module.exports = mongoose.model("Animal");