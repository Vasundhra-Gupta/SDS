import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY||"AIzaSyCj7UXFlji6ctZjzp1DkSsnRMS65sBSXnM", { apiVersion: "v1" });

const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" }); 

async function getResponse() {
    try {
        const prompt = "I am dropping out this year. Understand my problem and suggest me what to do?";
        
        const response = await model.generateContent(prompt);
        const result = await response.getResponse();
        const text = result.candidates[0].content.parts[0].text;

        console.log(text);
    } catch (error) {
        console.error("Error generating response:", error);
    }
}

getResponse();
