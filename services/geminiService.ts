
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getTravelAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot answer right now as my brain connection (API Key) is missing.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are a helpful assistant for "Luggage Deposit Rome", a secure luggage storage service located 2 minutes from Roma Termini station in Rome.

        Business Details:
        - Name: Luggage Deposit Rome
        - Location: V. Gioberti, 42, 00185 Roma RM, Italy (2 minutes walk from Roma Termini).
        - Pricing: €5/day (Cabin Bag), €6/day (Medium Bag), €7/day (Large Bag).
        - Opening Hours: 08:30 - 23:00 Daily.
        - Services: Secure storage, CCTV monitored.
        
        Your goals:
        1. Assist users with booking (direct them to the booking form on the page).
        2. Answer questions about safety and location.
        3. Provide quick tips about Rome (transport, food nearby).
        4. Keep answers concise, professional, and friendly.
        
        Context: The user is currently on the website.`,
      },
    });
    
    return response.text || "I'm having trouble thinking of an answer right now. Please try again.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm currently experiencing high traffic. Please try asking again in a moment.";
  }
};
