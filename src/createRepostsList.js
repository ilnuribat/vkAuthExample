var sql = require('./../sql');
const method = 'wall.getReposts';

module.exports = ({wallId, postId, repostCount}) => {
  console.log(wallId, postId, repostCount);
  let sqlQuery = `INSERT INTO tasks(method, params, offset_, status) VALUES`;
  for (let offset = 0; offset < repostCount; offset += 1000) {
    if (offset !== 0)
      sqlQuery += ', ';//between VALUES()
    sqlQuery += `('${method}','owner_id=${wallId}&post_id=${postId}&count=1000&offset=${offset}', ${offset}, 0)`;
  }
  sqlQuery += ';';
  return sql(sqlQuery, [])
    .then(result => {
      return repostCount;
    });
};