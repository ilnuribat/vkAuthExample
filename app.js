'use strict'

const express = require('express');
const app = express();
const middleware = require('./middleware');

middleware(app, express);


app.listen(8080, () => {
    console.log('listening 8080 port');
});
