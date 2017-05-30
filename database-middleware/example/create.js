const database = require("../../database/database.js");

const createExample = (request, response, next) => {
    let dbInstance;
    const example = request.body.example;

    database.connect()
        .then(databaseInstance => {
            dbInstance = databaseInstance;
            return database.createExample(databaseInstance, example);
        })
        .then(result => {
            const insertedId = result.insertedId.toString();
            dbInstance.close();
            response.insertedId = insertedId;

            next()
        })
        .catch(reason => {
            next(reason)
        })
};

module.exports = createExample;