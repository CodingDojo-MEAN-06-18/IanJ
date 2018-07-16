const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i')
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/logreg_db');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

fs.readdirSync(modelsPath).forEach(file => {
	if(reg.test(file)){
		require(path.join(modelsPath, file));
	}
})
