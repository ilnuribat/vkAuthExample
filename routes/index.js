const express = require('express');
const router = express.Router();
const url = require('url');

const auth = require('./auth');
const getReposts = require('./getReposters');

router.get('/auth', auth);
router.get('/api/getReposts', getReposts);

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