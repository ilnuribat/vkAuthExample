const vkapi = require('../vkapi');

module.exports = (req, res, next) => {
    vkapi('likes.getList', {
        'owner_id': 268041560,
        'item_id': 553,
        'type': 'post'
    })
    .then((body) => {
        res.json(body);
    })
    .catch((error) => {
        console.log(error);
        res.json(error);
    });

}