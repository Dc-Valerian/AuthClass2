import express,{Application} from "express"
import cors from "cors"
import morgan from "morgan"


const appConfig = (app:Application)=>{
    app.use(express.json()).use(cors()).use(morgan("dev"))
}

export default appConfig