/*
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

    // create a filter for a movie to update
    const filter = { name: "Enigma1" };

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        plot:
          "Blacksmith Scene is a silent filmll directed by William K.L. Dickson",
      },
    };

    const result = await collection.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

*/


//update multiple document
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

    // create a filter to update all movies with a 'G' rating
    const filter = { rated: "G" };

    // increment every document matching the filter with 2 more comments
    const updateDoc = {
      $inc: {
        num_mflix_comments: 2,
      },
    };
    const result = await collection.updateMany(filter, updateDoc);
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);