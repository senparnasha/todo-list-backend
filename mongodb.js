const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "todolist";

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection("list");
    
}
module.exports = dbConnect;
