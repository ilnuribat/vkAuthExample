'use strict'
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
let request = require('request');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 4);

const config = JSON.parse(fs.readFileSync('config.json'));

const client_secret = config.client_secret;
const client_id = config.client_id;
app.use('/', express.static('public'));
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.get('/auth', (req, res) => {
    const code = url.parse(req.url, true).query.code;
    const URL = "https://oauth.vk.com/access_token" +
                    `?client_id=${client_id}` +
                    `&client_secret=${client_secret}` +
                    `&redirect_uri=http://localhost:8080/auth` +
                    `&scope=offline` +
                    `&code=${code}`;
    console.log(URL);
    request.get(URL, 
        (err, response, body) => {
            if (err)
                res.send(err);
            else
                res.end(body);
        });
});
app.get('/clientid', (req, res) => {
    res.send("" + config.client_id);
})
app.listen(8080, () => {
    console.log('listening 8080 port');
})
