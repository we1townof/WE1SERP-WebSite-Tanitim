import { GoogleGenAI, Type } from "@google/genai";
import { KeywordIdea, IntentType } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSeoKeywords = async (niche: string): Promise<KeywordIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 5 SEO keyword ideas for the niche "${niche}" targeting the Turkish market. Include estimated difficulty (Kolay, Orta, Zor), hypothetical search volume (Düşük, Orta, Yüksek), and user intent.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              keyword: { type: Type.STRING, description: "The keyword phrase in Turkish" },
              difficulty: { type: Type.STRING, description: "SEO Difficulty: Kolay, Orta, or Zor" },
              volume: { type: Type.STRING, description: "Search Volume: Düşük, Orta, or Yüksek" },
              intent: { type: Type.STRING, enum: [IntentType.INFORMATIONAL, IntentType.TRANSACTIONAL, IntentType.COMMERCIAL, IntentType.NAVIGATIONAL] }
            },
            required: ["keyword", "difficulty", "volume", "intent"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as KeywordIdea[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};