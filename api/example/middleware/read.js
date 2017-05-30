const validations       = require('./../../../validations/validations');
const validateExampleId   = validations.exampleId;

const databaseMiddleware = require('./../../../database-middleware/database-middleware');
const readExample = databaseMiddleware.readExample;

const read = [
    validateExampleId,
    readExample
];

module.exports = read;