import "./src/config/envLoader.js";
import express from "express";
import { connectDB } from "./src/db/connection.js";
// import "./src/geminiAPI/gemini.js"
const app = express();
const PORT = process.env.PORT || 4100;
app.listen(() => {
    console.log("server is listening at port ", PORT);
    console.log("connecting to database...");
});
connectDB();
