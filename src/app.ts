import express,{Application,Request,Response,NextFunction} from "express"
import cors from "cors"
import morgan from "morgan"
import { errorHandler } from "./middleware/errorHandler"


const appConfig = (app:Application)=>{
    app.use(express.json()).use(cors()).use(morgan("dev"))

    

    // CHECKING FOR UNAVAILBLE ROUTES
    .all("*",(req:Request,res:Response,next:NextFunction)=>{
        res.status(404).json({
            message:`This Route ${req.originalUrl} doesn't exist`
        })
    })
    // Error Handler
    .use(errorHandler)
}

export default appConfig