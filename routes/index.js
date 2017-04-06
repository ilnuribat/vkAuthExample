const express = require('express');
const router = express.Router();
const url = require('url');

const auth = require('./auth');
const addWallPost = require('./../src/addWallPost');

router.get('/auth', auth);
router.post('/api/wallpost', );

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