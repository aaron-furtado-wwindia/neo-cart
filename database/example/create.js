const create = (database, example) => {
    return database.collection('examples').insertOne({
        example
    });
};

module.exports = create;