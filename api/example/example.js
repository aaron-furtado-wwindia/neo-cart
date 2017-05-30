const express           = require('express');
const example           = express.Router();

const createMiddleware =  require('./middleware/create');
const readMiddleware =  require('./middleware/read');
const updateMiddleware =  require('./middleware/update');

const v$post    = require('./post');
const v$get     = require('./get');
const v$put     = require('./put');
const v$delete  = require('./delete');

/**
 * ROUTE and MIDDLEWARE Configuration
 * */

example.post('/', ...createMiddleware, v$post);      // CREATE
example.get('/:_id', ...readMiddleware, v$get);        // READ
example.put('/', ...updateMiddleware, v$put);        // UPDATE
example.delete('/', v$delete);  // DELETE

/**
 * ============================================================================
 * */

module.exports = example;