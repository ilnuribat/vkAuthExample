const vkapi = require('../vkapi');

module.exports = (req, res, next) => {
    vkapi('wall.get', {
        'owner_id': 268041560
    })
    .then(body => {
        res.json(body);
    })
    .catch(error => {
        res.json(error);
    });
}