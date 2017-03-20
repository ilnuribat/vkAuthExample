const express = require('express');
const router = express.Router();
const url = require('url');
const fs = require('fs');
const request = require('request');

let getLikes = require('./getLikes.js');
let getWallPosts = require('./getWallposts');

const config = JSON.parse(fs.readFileSync('config.json'));
const client_secret = config.client_secret;
const client_id = config.client_id;


router.get('/likes', getLikes);
router.get('/wallposts', getWallPosts);

router.get('/authurl', (req, res) => {
    if (config.access_token.length) {
        res.json({
            "value": "access token is ready, no need in new one",
            "url": null
        });
        return;
    }
    const URL = "https://oauth.vk.com/authorize?" + 
                    "redirect_uri=http://localhost:8080/authurl" + 
                    "&response_type=token" +
                    "&scope=offline" + 
                    "&v=5.62" + 
                    "&display=page" +
                    "&client_id=" + config.client_id;
    res.json({
        "value": "Auth via VK.com",
        url: URL
    });
});

module.exports = router;