import express ,{ Express , Request , Response } from 'express'


const app:Express = express();


app.get("/",(req:Request , res:Response )=>{
    res.send("Hello Word");
})
app.get("/isItWorking",(req:Request , res:Response )=>{
    res.send("Yes!");
})


app.listen(5000,()=>{
    console.log("Server Is Running...");
    
})