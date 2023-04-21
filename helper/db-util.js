import { MongoClient } from "mongodb";

//Connecting to DATABASE
export async function connectDatabase() {
    const client =await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ctkodcc.mongodb.net/?retryWrites=true&w=majority`)
    return client;
}

//INSERT DATA TO DATABASE
export async function insertDatatoDB(client, data) {
    const db = client.db();
    const result = await db.collection('meetups').insertOne(data);
    return result
}

//GET DATA OF DATABASE
export async function getDataofDB(client) {
    const db = client.db();
    const documents = await db.collection('meetups').find().sort({ _id: -1 }).toArray()
    return documents
}

