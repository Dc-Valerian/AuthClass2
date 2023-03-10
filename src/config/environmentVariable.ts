import dotenv from "dotenv"
dotenv.config()

const environmentVariable ={
    PORT:process.env.PORT as string
}

export default environmentVariable