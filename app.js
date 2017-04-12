'use strict'

const express = require('express');
const app = express();
const middleware = require('./middleware');
const routes = require('./routes');

app.use(routes);
middleware(app, express);
