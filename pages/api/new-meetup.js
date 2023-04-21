import { connectDatabase, insertDatatoDB } from "@/helper/db-util";
import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;
        // const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ctkodcc.mongodb.net/?retryWrites=true&w=majority`)
       const client=await connectDatabase()
    
        const result =await insertDatatoDB(client,data)
        console.log(result)
        client.close()
        res.status(201).json({ message: 'added new meetup to DB' })
    }
}

export default handler;