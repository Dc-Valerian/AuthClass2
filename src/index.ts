import express from "express"
import appConfig from "./app";
import dbConfig from "./config/DB";
import environmentVariable from "./config/environmentVariable";

const app = express()


// APPLICATION INITALIZATION
appConfig(app)

// DB INITIALIZATIONc
dbConfig();

app.listen(environmentVariable.PORT,()=>{
    console.log("Listening to Sever");
})


// NORE
// WE WRITE OUT POST IN OUR ENV FILE