import { Request, Response, NextFunction } from "express";


export const validateUser = (req:Request , res:Response , next:NextFunction)=>{
    try {
        console.log(req.headers.cookie);
        

        next()
    } catch (error) {
        console.log(error);
        
    }
}