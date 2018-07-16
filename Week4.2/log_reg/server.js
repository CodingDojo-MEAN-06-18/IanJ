const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validate = require('mongoose-validator');
const port = process.env.PORT || 8000;

app.set('views', path.resolve('views'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));



app.use(flash());

app.use(session({
    secret: 'secretpassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

require('./server/models/user.js');

require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));