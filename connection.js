const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "21p8027_4A";

async function connectToMongo() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    console.log("connected to mongodb succesfully");
    return db.collection("cities");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
}

module.exports = connectToMongo;
