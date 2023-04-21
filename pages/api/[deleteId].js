import { connectDatabase } from "@/helper/db-util";
import { ObjectId } from "mongodb";

async function handler(req, res) {
    const { deleteId } = req.query;
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: "Connecting to Database is failed" })
        return;
    }

    if (req.method === 'DELETE') {


        const db = client.db()
        const result = await db.collection("meetups").findOneAndDelete({ _id: new ObjectId(deleteId) });
        console.log(result)
        client.close();
        res.status(201).json({ message: 'deleted from DB' })
    }

    if (req.method === "GET") {
        try {
            const db = client.db();
            const meetupsCollection = db.collection("meetups");
            const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(deleteId) });
            // console.log(selectedMeetup)
            res.status(200).json({ meetup: selectedMeetup })
            client.close();
        } catch (error) {
            client.close();
            res.status(500).json({ message: "Getting Data of DB failed" });
            return;
        }
    }
}

export default handler;