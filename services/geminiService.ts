
import { GoogleGenAI } from "@google/genai";

// Standard service for communicating with the Gemini model
export const getGeminiChatResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Correct initialization: always use {apiKey: process.env.API_KEY}
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `You are the AgroPulse Assistant, an AI specialized in modern agriculture, crop trading, logistics, and our ecosystem's crypto-coin (AgroCoin $AGC).
        You help users with:
        1. Crop pricing and market trends.
        2. Troubleshooting logistics and truck orders.
        3. Explaining our E-learning platform courses.
        4. Managing their AgroCoin wallet and transactions.
        Be professional, helpful, and concise. Use agricultural metaphors when appropriate.`,
        temperature: 0.7,
      },
    });

    // Access the .text property directly as per modern SDK guidelines
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The field seems a bit foggy right now. Please try again in a moment!";
  }
};
