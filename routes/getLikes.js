const express = require('express');
const router = express.Router();
const request = require('request');

module.exports = (req, res, next) => {
    console.log("GET /likes");
    res.send("hello!" + global.access_token);
}