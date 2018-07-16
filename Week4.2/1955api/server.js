const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

require('./server/config/database');
require('./server/config/routes')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
