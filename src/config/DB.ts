import mongoose from "mongoose"
import environmentVariable from "./environmentVariable"

const DB = environmentVariable.MONGODB_STRING_LOCAL;

const dbConfig = async () => {
    try {
        const conn = await mongoose.connect(DB)
        console.log(`DataBase Connection @ ${conn.connection.host}`);
    } catch (error) {
        console.log(error)   
    }
}

export default dbConfig