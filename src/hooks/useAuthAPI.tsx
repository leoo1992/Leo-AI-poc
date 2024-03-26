import { GoogleGenerativeAI } from "@google/generative-ai";

export default function useAuthAPI() {
    const key = import.meta.env.VITE_GOOGLE_API_KEY;
    const genAI = new GoogleGenerativeAI(key);
    return {
        key,
        genAI
    }
}
