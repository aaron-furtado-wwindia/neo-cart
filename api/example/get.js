const v$get = (request, response, next) => {
    const example = response.example;
    response.json({
        example
    });
};

module.exports = v$get;