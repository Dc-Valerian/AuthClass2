import {Request,Response,NextFunction} from "express"
import { AppError,HtppCode } from "../../utils/AppError"

const devErrors =(err:AppError,res:Response)=>{
    return res.status
}


export const errorHandler =(err:AppError,req:Request,res:Response,next:NextFunction)=>{

}