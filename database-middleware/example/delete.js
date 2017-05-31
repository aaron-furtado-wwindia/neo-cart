const database = require("../../database/database.js");

const deleteExample = (request, response, next) => {
    let dbInstance;
    const _id = request.body._id;

    database.connect()
        .then(databaseInstance => {
            dbInstance = databaseInstance;
            return database.deleteExample(databaseInstance, _id);
        })
        .then(result => {
            if (result.deletedCount === 1) {
                next();
            } else {
                const error = new Error(`Unable to delete '${_id}'`);
                error.status = 404;
                next(error);
            }
            dbInstance.close();
        })
        .catch(reason => {
            next(reason);
            dbInstance.close();
        })
};

module.exports = deleteExample;