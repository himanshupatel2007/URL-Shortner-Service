import express from "express"

import authenticatUser from ""
const app = express()
const PORT = 3000;

app.get("/login",UserSignIn)

app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`)
})