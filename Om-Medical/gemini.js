// // gemini.js (browser version)

// const GEMINI_API_KEY = "AIzaSyCkWgIdn2f1XexfzNtvxuhnCZY37pujNBg";

// const SYSTEM_INSTRUCTION =
//   "You are a professional medical assistant for OM Medical Pvt Ltd. " +
//   "Give safe, clear, and non-diagnostic medical guidance.";

// export async function chatWithGemini(message, history = []) {
//   const response = await fetch(
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
//       GEMINI_API_KEY,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             role: "user",
//             parts: [
//               {
//                 text: SYSTEM_INSTRUCTION + "\n\nConversation:\n" +
//                   history
//                     .map(h => `${h.role}: ${h.parts[0].text}`)
//                     .join("\n") +
//                   `\nuser: ${message}`
//               }
//             ]
//           }
//         ],
//         generationConfig: {
//           temperature: 0.7
//         }
//       })
//     }
//   );

//   const data = await response.json();

//   return (
//     data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//     "I'm sorry, I couldn't process that request."
//   );
// }

// // 🔊 Text-to-Speech (Browser safe)
// export async function textToSpeech(text) {
//   try {
//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=" +
//         GEMINI_API_KEY,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `Say clearly in a professional medical assistant tone: ${text}`
//                 }
//               ]
//             }
//           ],
//           config: {
//             responseModalities: ["AUDIO"],
//             speechConfig: {
//               voiceConfig: {
//                 prebuiltVoiceConfig: {
//                   voiceName: "Kore"
//                 }
//               }
//             }
//           }
//         })
//       }
//     );

//     const data = await response.json();

//     return (
//       data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null
//     );
//   } catch (err) {
//     console.error("TTS Error:", err);
//     return null;
//   }
// }
