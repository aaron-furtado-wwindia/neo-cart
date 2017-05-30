const v$delete = (request, response, next) => {
    response.json({
        message: `'DELETE' successful`
    });
};

module.exports = v$delete;