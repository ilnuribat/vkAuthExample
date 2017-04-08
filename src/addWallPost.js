const sql = require('./../sql');
//adding wall post to database

const sqlQuery = `INSERT INTO wallposts(wallId, postId, repostsCount, status)
                            VALUES($1::int, $2::int, $3::int, $4);`

module.exports = (wallId, postId, repostCount) =>
    sql(sqlQuery, [wallId, postId, repostCount, 'created'])
    .then(res => ({wallId, postId, repostCount}));