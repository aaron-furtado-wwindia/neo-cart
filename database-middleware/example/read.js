const database = require("../../database/database.js");

const readExample = (request, response, next) => {
    let dbInstance;
    const _id = request.params._id;

    database.connect()
        .then(databaseInstance => {
            dbInstance = databaseInstance;
            return database.readExample(databaseInstance, _id);
        })
        .then(cursor => {
            return cursor.toArray();
        })
        .then(examples => {
            if (examples.length === 1) {
                response.example = examples[0];
                next()
            } else if (examples.length === 0) {
                const error = new Error(`No example was found at the '${_id}'`);
                error.status = 404;
                next(error);
            } else {
                const error = new Error(`Unknown error occurred at '${_id}'`);
                error.status = 500;
                next(error);
            }
            dbInstance.close();
        })
        .catch(reason => {
            dbInstance.close();
            next(reason)
        })
};

module.exports = readExample;