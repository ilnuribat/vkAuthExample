'use strict'

const express = require('express');
const app = express();
const middleware = require('./middleware');
const routes = require('./routes');

middleware(app, express);
app.use(routes);


app.listen(process.env.VK_APP_PORT || 8080, () => {
    console.log('listening 8080 port');
});
