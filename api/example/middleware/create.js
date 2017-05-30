const validations       = require('./../../../validations/validations');
const validateExample   = validations.example;

const databaseMiddleware = require('./../../../database-middleware/database-middleware');
const createExample = databaseMiddleware.createExample;

const create = [
    validateExample,
    createExample
];

module.exports = create;