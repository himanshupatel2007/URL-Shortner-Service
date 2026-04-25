import express from "express"
import { listen } from "node:quic";
const app = express()
const PORT = 3000;

app.get("/",(req,res)=>{

   return res.send("Api is running");
})

app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`)
})