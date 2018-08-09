const express = require('express');
const path = require('path');
const app = express();
const session = require("express-session")
const bodyparser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js');

app.listen(port, () => console.log(`Hello Express server be on port ${port}`));
