const express = require('express');
const router = express.Router();
const request = require('request');

module.exports = (req, res, next) => {
    console.log("GET /wallposts");
    res.send("hello! this is wall posts");
}