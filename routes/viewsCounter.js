const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('./../config');

const URL = `https://api.vk.com/method/stats.getPostReach?access_token=${config.access_token}`
//-28627911_277333
module.exports = (req, res, next) => {
    request.get(URL + `&owner_id=${-28627911}&post_id=${277333}`, (error, response, body) => {
        if (error)
            res.json(error)
        else 
            res.json(body);
    })
}