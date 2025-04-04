import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY});

const prompt = "I am dropping out this year. Understand my problem and suggest me what to do?";
async function getResponse() {
    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        const text = response.text;
        console.log(text);
    } catch (error) {
        console.error("Error generating response:", error);
    }
}

await getResponse();
