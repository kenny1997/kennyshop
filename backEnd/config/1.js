import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://kenny1997:ky91393@cluster0.cup9a.mongodb.net/kennyshop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(collection)
    client.close();
});