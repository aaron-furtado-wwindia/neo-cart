const MongoClient = require('mongodb').MongoClient;

const connect = () => {
    return MongoClient.connect('mongodb://localhost:27017/neo_cart');
};

module.exports = connect;
