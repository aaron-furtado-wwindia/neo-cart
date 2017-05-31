const example = require('./example/example');
const createExample = example.createExample;
const readExample = example.readExample;
const updateExample = example.updateExample;
const deleteExample = example.deleteExample;

databaseMiddleware = {
    createExample,
    readExample,
    updateExample,
    deleteExample
};

module.exports = databaseMiddleware;
