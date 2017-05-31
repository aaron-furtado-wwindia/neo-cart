const v$delete = (request, response, next) => {
    const _id = request.body._id;

    response.status(200);
    response.json({
        message: `'${_id}' was deleted successfully`
    });
};

module.exports = v$delete;