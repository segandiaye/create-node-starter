'use strict';

const app = `'use strict';

const express = require('express');
const request_logger = require('morgan');

const app = module.exports = express();

// Logging HTTP requests
app.use(request_logger('dev'));

// Registering the routes handled by this app. Those routes have the most precedence
require('./routes');`;

module.exports = app;
