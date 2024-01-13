const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
var data = require("./data.js").data

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    var database = client.db("tree1");

    // Drop the database
    await database.dropDatabase();

    // Create the database again
    database = client.db("tree1");

    const cats = database.collection("tree");
    const result = await cats.insertOne({ name: "Лист Клена" });
    
    console.log(`${result.insertedCount} document was inserted`);
    console.log(`Inserted document ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run();
