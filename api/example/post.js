const database = require("../../database/database.js");

const v$post = (request, response) => {
    const example = request.body.example;
    const id = response.insertedId;
    const message = `'${example}' was inserted successfully`;

    const response_json = {
        message,
        id
    };

    response.status(201)
        .json(response_json);
};

module.exports = v$post;