const validations       = require('./../../../validations/validations');
const validateExampleId   = validations.exampleId;
const validateExample   = validations.example;

const databaseMiddleware = require('./../../../database-middleware/database-middleware');
const updateExample = databaseMiddleware.updateExample;

const update = [
    validateExampleId,
    validateExample,
    updateExample
];

module.exports = update;