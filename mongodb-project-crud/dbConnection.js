const { MongoClient } = require('mongodb');
let dbConnectionUrl ="mongodb://127.0.0.1:27017"
const client = new MongoClient(dbConnectionUrl);

const dbConnection = async () => {
    await client.connect();
    let db=client.db("mongodbProject_database")
    return db;
};
module.exports={dbConnection}