import express from "express"
import "./config/envLoader.js"
import "./geminiAPI/gemini.js"
const app = express();

const PORT = process.env.PORT || 4000
app.listen(()=>{
    console.log("server is listening at port ", PORT)
})