const mongoose = require('mongoose');
const path = require('path');
const reg = new RegExp('\\.js$', 'i');
const fs = require("fs");
const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:8000/1955api');

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
});