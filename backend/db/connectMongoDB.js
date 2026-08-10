import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
export default async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected");
    } catch (error) {
        console.log("Error connecting to mongodb: ", error.message);
    }
}