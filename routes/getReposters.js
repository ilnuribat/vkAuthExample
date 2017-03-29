const vkapi = require('../vkapi');
const url = require('url');

module.exports = (req, res, next) => {
    var params = url.parse(req.url, true).query;
    const wallId = params['wallId'];
    const postId = params['postId'];
    getReposts(wallId, postId, 0, [], [], [], res);
}

function getReposts(wallId, postId, offset, reposts, groups, profiles, res) {
    vkapi('wall.getReposts', {
        'owner_id': wallId,
        'post_id': postId,
        'count': 1000,
        'offset': offset
    })
    .then(body => {
        if (body.response.items.length > 0)
            getReposts(wallId, postId, offset + 1000, 
                body.response.items.concat(reposts), 
                body.response.groups.concat(groups),
                body.response.profiles.concat(profiles), res);
        else 
            res.json({reposts, groups, profiles});
    })
    .catch(error => {
        res.json(error);
    });
}