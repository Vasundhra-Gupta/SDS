import express from "express"
import { geminiRouter } from "./src/routes/geminiRouter.js";
export const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use("/api/gemini/", geminiRouter);