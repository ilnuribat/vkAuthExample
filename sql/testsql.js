var sql = require('./sql');

sql('select $1;', [123])
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
});