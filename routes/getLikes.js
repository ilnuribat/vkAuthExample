const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('./../config');

const URL = `https://api.vk.com/method/likes.getList?access_token=${config.access_token}`

module.exports = (req, res, next) => {
    request.get(URL + `&type=post&owner_id=${268041560}&item_id=${553}`, (error, response, body) => {
        if (error)
            res.json(error)
        else 
            res.json(body);
    })
}