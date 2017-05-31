const ObjectId = require('mongodb').ObjectId;

const _delete = (database, _id) => {
    _id = ObjectId(_id);
    return database.collection('examples').deleteOne({
        _id
    });
};

module.exports = _delete;