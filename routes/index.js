const express = require('express');
const router = express.Router();
const url = require('url');

let auth = require('./auth');
let getLikes = require('./getLikes.js');
let getWallPosts = require('./getWallposts');
let viewsCounter = require('./viewsCounter');

router.get('/auth', auth);
router.get('/api/likes', getLikes);
router.get('/api/wallposts', getWallPosts);
router.get('/api/viewsCounter', viewsCounter);
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/home', (req, res) => {
    res.render('home');
});
router.get('/repost', (req, res) => {
    res.render('repost');
});


module.exports = router;