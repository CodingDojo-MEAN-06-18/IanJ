const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const session = require('express-session');
const flash = require('express-flash');

app.set('views', path.join(__dirname, './views'));

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


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));