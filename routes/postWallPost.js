const getWallById = require('./../src/getWallById');
const addWallPost = require('./../src/addWallPost');
const createRepostsList = require('./../src/tasks/createRepostsList');
const assert = require('chai').assert;

//body: {wallId: 1234, postId: 1234}
module.exports = (req, res) => {
    //getting wallpost`s reposts count
    //add to database
    //return answer to browser
    //no checks for wallid and postid
    try {
        assert.isNumber(+req.body.wallId, 'wallId must be number');
        assert.isNumber(+req.body.postId, 'postId must be number');
    }
    catch (validateError) {
        res.json(validateError);
        return;
    }
    getWallById(req.body.wallId, req.body.postId)
        .then(result => {
            let wallInfo = result.response[0];
            return addWallPost(req.body.wallId, req.body.postId, wallInfo.reposts.count);
        })
        .then(result => createRepostsList(result))
        .then(result => {
            res.json({'message': 'wallpost added to database'});
        })
        .catch(err => {
            if (err.routine === "_bt_check_unique") {
                res.json({'message': 'This post is already added'});
                return;
            }
            res.json(err);
        })
}