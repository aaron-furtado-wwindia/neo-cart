const connect = require('./connect');

const createExample = require('./example/create');
const readExample = require('./example/read');
const updateExample = require('./example/update');
const deleteExample = require('./example/delete');

const database = {
    connect,
    createExample,
    readExample,
    updateExample,
    deleteExample
};

module.exports = database;