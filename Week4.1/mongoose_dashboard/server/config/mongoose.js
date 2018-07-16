const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.Promise = global.Promise;

module.exports = mongoose;