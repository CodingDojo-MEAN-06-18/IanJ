const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

app
  .use(express.static(require('path').join(__dirname, 'dist/public')))
  .use(bodyparser.urlencoded({ extended: true }))
  .use(bodyparser.json())

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
