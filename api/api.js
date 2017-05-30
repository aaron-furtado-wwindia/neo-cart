const express           = require('express');
const api               = express.Router();

const catch405          = require('./catch/405');
const catch500orCommon  = require('./catch/500orCommon');

const example   = require('./example/example');

/**
 * ROUTE and MIDDLEWARE Configuration
 * */

api.use('/example', example);

/**
 * ERROR HANDLING SECTION
 * */

// catch 405 API error and forward to error handler
api.use(catch405);

// catch 500 or any other API errors
api.use(catch500orCommon);

/**
 * ============================================================================
 * */

module.exports = api;