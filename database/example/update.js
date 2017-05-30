const ObjectId = require('mongodb').ObjectId;

const update = (database, _id, example) => {
    _id = ObjectId(_id);
    return database.collection('examples').updateOne({
        _id
    }, {
        example
    });
};

module.exports = update;