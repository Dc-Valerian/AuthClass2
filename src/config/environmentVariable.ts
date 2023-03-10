import dotenv from "dotenv"
dotenv.config()

const environmentVariable ={
    PORT:process.env.PORT as string,
    MONGO_STRING_LOCAL : process.env.MONGO_STRING_LOCAL
}

export default environmentVariable