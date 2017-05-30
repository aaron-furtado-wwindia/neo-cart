const example = (request, response, next) => {
    const example = request.body.example;

    const validationExpression = `^[A-Za-z0-9]+$`;

    if (!example || !example.match(new RegExp(validationExpression))) {
        const error = new Error(`'example' field missing or not in correct format.`);

        error.status                = 400;
        error.errorId               = 4001;
        error.validationExpression  = validationExpression;

        next(error);
    } else {
        next();
    }
};

module.exports = example;