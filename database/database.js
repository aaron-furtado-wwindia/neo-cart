const connect = require('./connect');

const createExample = require('./example/create');
const readExample = require('./example/read');
const updateExample = require('./example/update');

const database = {
    connect,
    createExample,
    readExample,
    updateExample
};

module.exports = database;