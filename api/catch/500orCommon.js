const catch500orCommon = (error, request, response, next) => {
    // set locals, only providing error in development
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};

    response.status(error.status || 500);

    if (error.status !== 500) {
        // send error response in JSON format

        /**
         * `error.errorId` -> Validation Error
         * `error.code` -> Mongo Error
         * */
        const errorId               = error.errorId || error.code;
        const reason                = error.message;
        const validationExpression  = error.validationExpression;

        switch (error.name) {
            case 'MongoError':
                response.status(409);
                break;
            default:
                break;
        }

        response.json({
            errorId,
            reason,
            validationExpression
        })
    } else {
        // forward unhandled errors
        next(error);
    }

};

module.exports = catch500orCommon;