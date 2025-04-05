import express from "express"
import { dropoutGuidance } from "../controllers/geminiController.js";
export const geminiRouter = express.Router();

geminiRouter.route("/dropout-guidance").post(dropoutGuidance)