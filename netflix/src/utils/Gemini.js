import { GoogleGenerativeAI } from "@google/generative-ai";
import { gemini_key } from "./constant";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(gemini_key);


export default genAI;