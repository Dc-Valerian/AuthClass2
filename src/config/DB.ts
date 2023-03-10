import mongoose from "mongoose"

const DB = ""

const dbConfig = async () => {
    try {
        const conn = await mongoose.connect(DB)
        console.log(`DataBase Connection @:${conn.connection.host}`);
    } catch (error) {
        console.log(error)   
    }
}

export default dbConfig