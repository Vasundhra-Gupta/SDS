import express from "express"
import { geminiRouter } from "./src/routes/geminiRouter.js";
import path from 'path';
import { fileURLToPath } from 'url';
export const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use("/api/gemini/", geminiRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });
}


