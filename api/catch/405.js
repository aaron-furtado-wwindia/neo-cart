const catch405 = (request, response, next) => {
    const error = new Error('Unknown Resource or Method Not Allowed');
    error.status = 405;
    next(error);
};

module.exports = catch405;