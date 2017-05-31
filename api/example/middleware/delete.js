const validations       = require('./../../../validations/validations');
const validateExampleId   = validations.exampleId;

const databaseMiddleware = require('./../../../database-middleware/database-middleware');
const deleteExample = databaseMiddleware.deleteExample;

const _delete = [
    validateExampleId,
    deleteExample
];

module.exports = _delete;