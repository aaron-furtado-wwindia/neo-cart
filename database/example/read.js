const ObjectId = require('mongodb').ObjectId;

const read = (database, _id) => {
    _id = ObjectId(_id);
    return database.collection('examples').find({
        _id
    });
};

module.exports = read;