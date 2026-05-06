import express from "express"
import { connectDatabase } from "./conectDB";
import dotenv from "dotenv";
dotenv.config();
const app = express()
const PORT = process.env.PORT;
const DB_URL = process.env.mongo_URL as string;

if(!DB_URL){
    throw new Error("MongoDB url not found")
}
connectDatabase(DB_URL)

app.get("/login",)


app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`)
})