import express,{Application,Request,Response,NextFunction} from "express"
import cors from "cors"
import morgan from "morgan"
import { errorHandler } from "./middleware/errorHandler"
import { AppError, HtppCode } from "./utils/AppError"


const appConfig = (app:Application)=>{
    app.use(express.json()).use(cors()).use(morgan("dev"))

    

    // CHECKING FOR UNAVAILBLE ROUTES
    app.all("",(req:Request,res:Response,next:NextFunction)=>{
        next(
            new AppError({
                message:`This Route ${req.originalUrl} does not exist`,
                httpCode:HtppCode.NOT_FOUND
            })
        )
    })

    // Error Handler
    app.use(errorHandler)

}
export default appConfig