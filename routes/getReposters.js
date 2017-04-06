const vkapi = require('../vkapi');
const url = require('url');

module.exports = (req, res, next) => {
    var params = url.parse(req.url, true).query;
    const wallId = params['wallId'];
    const postId = params['postId'];
    getReposts(wallId, postId, 0, res);
}

function getReposts(wallId, postId, res) {
    vkapi('wall.getReposts', {
        'owner_id': wallId,
        'post_id': postId,
        'count': 1000
    })
    .then(body => {
        res.json({reposts, groups, profiles});
        return vkapi('users.get', )
    })
    .catch(error => {
        res.json(error);
    });
}