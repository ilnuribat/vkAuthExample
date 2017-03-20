const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('./../config');

const URL = `https://api.vk.com/method/wall.get?access_token=${config.access_token}`

module.exports = (req, res, next) => {
    request.get(URL + `&owner_id=268041560`, (error, response, body) => {
        if (error) {
            res.json(error);
            return;
        }
        res.json(body);
    });
}