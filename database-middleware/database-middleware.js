const example = require('./example/example');
const createExample = example.createExample;
const readExample = example.readExample;
const updateExample = example.updateExample;

databaseMiddleware = {
    createExample,
    readExample,
    updateExample
};

module.exports = databaseMiddleware;
