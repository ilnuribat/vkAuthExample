'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
let request = require('request');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 4);

const client_secret = "YOUR_CLIENT_SECRET";
const client_id = "YOUR_CLIENT_ID";//or application id
app.use('/', express.static('public'));
app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.get('/auth', (req, res) => {
    const code = url.parse(req.url, true).query.code;
    request.get(`https://oauth.vk.com/access_token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://localhost:8080/auth&code=${code}`, 
        (err, response, body) => {
            res.end(body);
        });
});
app.listen(8080, () => {
    console.log('listening 8080 port');
})
