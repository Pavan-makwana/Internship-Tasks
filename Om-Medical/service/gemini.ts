// // gemini .ts
// imgport { GoogleGenAI, Modality } from "@google/genai";
// import { SYSTEM_INSTRUCTION } from "../constants";

// const getAI = () => new GoogleGenAI({ apiKey: process.env.GEMINI_API || "" });

// export async function chatWithGemini(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
//   const ai = getAI();
//   const model = 'gemini-3-flash-preview';
  
//   const response = await ai.models.generateContent({
//     model,
//     contents: [
//       ...history,
//       { role: 'user', parts: [{ text: message }] }
//     ],
//     config: {
//       systemInstruction: SYSTEM_INSTRUCTION,
//       temperature: 0.7,
//     }
//   });

//   return response.text || "I'm sorry, I couldn't process that request.";
// }

// export async function textToSpeech(text: string): Promise<string | null> {
//   try {
//     const ai = getAI();
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash-preview-tts",
//       contents: [{ parts: [{ text: `Say clearly in a professional medical assistant tone: ${text}` }] }],
//       config: {
//         responseModalities: [Modality.AUDIO],
//         speechConfig: {
//           voiceConfig: {
//             prebuiltVoiceConfig: { voiceName: 'Kore' },
//           },
//         },
//       },
//     });

//     const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
//     return base64Audio || null;
//   } catch (error) {
//     console.error("TTS Error:", error);
//     return null;
//   }
// }
