const v$put = (request, response, next) => {
    const _id = request.body._id;
    const example = request.body.example;

    response.status(200)
        .json({
            message: `Updated '${_id}' successfully with '${example}'`,
        });
};

module.exports = v$put;