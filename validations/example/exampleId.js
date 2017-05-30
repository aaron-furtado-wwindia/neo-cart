const exampleId = (request, response, next) => {
    const _id = request.params._id || request.body._id;

    const validationExpression = `^[0-9a-f]{24}$`;

    if (!_id || !_id.match(new RegExp(validationExpression))) {
        const error = new Error(`'_id' field missing or not in correct format.`);

        error.status                = 400;
        error.errorId               = 4002;
        error.validationExpression  = validationExpression;

        next(error);
    } else {
        next();
    }
};

module.exports = exampleId;