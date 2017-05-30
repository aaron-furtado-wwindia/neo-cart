const database = require("../../database/database.js");

const updateExample = (request, response, next) => {
    let dbInstance;
    const _id = request.body._id;
    const example = request.body.example;

    database.connect()
        .then(databaseInstance => {
            dbInstance = databaseInstance;
            return database.updateExample(databaseInstance, _id, example);
        })
        .then(result => {
            if (result.modifiedCount === result.modifiedCount) {
                next()
            } else {
                const error = new Error(`Unable to modify ${_id}`);
                error.status = 500;
                next(error)
            }
            dbInstance.close();
        })
        .catch(reason => {
            next(reason)
            dbInstance.close();
        })
};

module.exports = updateExample;