const sql = require('./../sql');
const vkapi = require('./../vkapi');

module.exports = (wallId, postId) =>
    new Promise((resolve, reject) => {
        vkapi('wall.getById', {
            'posts': `${wallId}_${postId}`
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
    });