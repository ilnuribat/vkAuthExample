const vkapi = require('../vkapi');

module.exports = (req, res, next) => {
    vkapi('stats.getPostReach', {
        'owner_id': -28627911,
        'post_id': 277333
    })
    .then(body => {
        res.json(body);
    })
    .catch(error => {
        res.json(error);
    });
}