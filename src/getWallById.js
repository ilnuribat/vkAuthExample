const sql = require('./../sql');
const vkapi = require('./../vkapi');

module.exports = (wallId, postId) =>
    vkapi('wall.getById', {
        'posts': `${wallId}_${postId}`
    });