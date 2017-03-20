const express = require('express');
const router = express.Router();
const url = require('url');

let getLikes = require('./getLikes.js');
let getWallPosts = require('./getWallposts');
let auth = require('./auth');

router.get('/likes', getLikes);
router.get('/wallposts', getWallPosts);
router.get('/auth', auth);

module.exports = router;