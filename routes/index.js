let express = require('express');
let router = express.Router();

let getLikes = require('./getLikes.js');
let getWallPosts = require('./getWallposts');

router.get('/likes', getLikes);
router.get('/wallposts', getWallPosts);

module.exports = router;