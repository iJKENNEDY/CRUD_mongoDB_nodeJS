

//-----insert

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
   "mongodb://127.0.0.1:27017/?poolSize=20&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    // create a document to be inserted
    const doc = { name: "qwerty", town: "pruebas" };
    const result = await collection.insertOne(doc);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
*/

// insert multiple documents
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://127.0.0.1:27017/?poolSize=20&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("sample_mflix");
    const collection = database.collection("movies");

    // create an array of documents to insert
    const docs = [
      { name: "@Eioinigma1KK", town: "@_Ka___999", rated: "G" },
      { name: "@Eioinigma2KK", town: "@_Ka___999", rated: "P" },
      { name: "@Eioinigma3KK", town: "@_Ga___777", rated: "G" },
      { name: "@Eioinigma4KK", town: "@_Ka___999", rated: "B" },
      { name: "@Eioinigma5KK", town: "@_Ka___999", rated: "G" },
      { name: "@Blacksmith Scene", town: "Skkkkkk__777" }
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await collection.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);