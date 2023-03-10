import express from "express"
import appConfig from "./app";
import environmentVariable from "./config/environmentVariable";

const app = express()


// APPLICATION INITALIZATION
appConfig(app)

app.listen(environmentVariable.PORT,()=>{
    console.log("Listening to Sever");
    
})


// NORE
// WE WRITE OUT POST IN OUR ENV FILE