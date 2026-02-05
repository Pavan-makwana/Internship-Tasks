// // AIchatbot.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Mic, MicOff, Volume2, VolumeX, User, Bot, Loader2 } from 'lucide-react';
// import { chatWithGemini, textToSpeech } from '../services/gemini';
// import { Message } from '../types';

// const AIChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'model', text: '👋 Welcome to OM Medical Pvt Ltd. Please tell me your symptoms or medicine name.' }
//   ]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isTtsEnabled, setIsTtsEnabled] = useState(true);
  
//   const chatEndRef = useRef<HTMLDivElement>(null);
//   const audioContextRef = useRef<AudioContext | null>(null);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSend = async (text: string) => {
//     if (!text.trim()) return;

//     const userMsg: Message = { role: 'user', text };
//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const history = messages.map(m => ({
//         role: m.role,
//         parts: [{ text: m.text }]
//       }));

//       const aiResponse = await chatWithGemini(text, history);
//       const modelMsg: Message = { role: 'model', text: aiResponse };
//       setMessages(prev => [...prev, modelMsg]);

//       if (isTtsEnabled) {
//         handleTts(aiResponse);
//       }
//     } catch (error) {
//       console.error("Chat Error:", error);
//       setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleTts = async (text: string) => {
//     const base64Audio = await textToSpeech(text);
//     if (base64Audio) {
//       playAudio(base64Audio);
//     }
//   };

//   const playAudio = async (base64: string) => {
//     if (!audioContextRef.current) {
//       audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
//     }
//     const ctx = audioContextRef.current;
    
//     setIsSpeaking(true);
//     const binary = atob(base64);
//     const bytes = new Uint8Array(binary.length);
//     for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    
//     const dataInt16 = new Int16Array(bytes.buffer);
//     const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
//     const channelData = buffer.getChannelData(0);
//     for (let i = 0; i < dataInt16.length; i++) {
//       channelData[i] = dataInt16[i] / 32768.0;
//     }

//     const source = ctx.createBufferSource();
//     source.buffer = buffer;
//     source.connect(ctx.destination);
//     source.onended = () => setIsSpeaking(false);
//     source.start();
//   };

//   const toggleSpeech = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert("Speech recognition is not supported in your browser.");
//       return;
//     }

//     if (isListening) {
//       setIsListening(false);
//       return;
//     }

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = 'hi-IN'; // Supporting Hinglish/Hindi
//     recognition.onstart = () => setIsListening(true);
//     recognition.onresult = (event: any) => {
//       const transcript = event.results[0][0].transcript;
//       handleSend(transcript);
//       setIsListening(false);
//     };
//     recognition.onerror = () => setIsListening(false);
//     recognition.onend = () => setIsListening(false);
//     recognition.start();
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//       {isOpen && (
//         <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col border border-gray-200 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
//           {/* Header */}
//           <div className="bg-blue-600 p-4 rounded-t-2xl flex justify-between items-center text-white">
//             <div className="flex items-center gap-2">
//               <Bot className="w-6 h-6" />
//               <div>
//                 <h3 className="font-bold text-sm">OM Medical AI</h3>
//                 <p className="text-[10px] opacity-80">Online | Hinglish Support</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <button 
//                 onClick={() => setIsTtsEnabled(!isTtsEnabled)}
//                 className="p-1 hover:bg-blue-500 rounded transition"
//               >
//                 {isTtsEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
//               </button>
//               <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-blue-500 rounded transition">
//                 <X size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//             {messages.map((m, i) => (
//               <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
//                   m.role === 'user' 
//                     ? 'bg-blue-600 text-white rounded-tr-none' 
//                     : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
//                 }`}>
//                   <p>{m.text}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
//                   <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
//                 </div>
//               </div>
//             )}
//             <div ref={chatEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t bg-white rounded-b-2xl">
//             <div className="flex gap-2 items-center">
//               <button 
//                 onClick={toggleSpeech}
//                 className={`p-2 rounded-full transition ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//               >
//                 {isListening ? <MicOff size={20} /> : <Mic size={20} />}
//               </button>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
//                 placeholder="Type medicine or symptoms..."
//                 className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button 
//                 onClick={() => handleSend(input)}
//                 className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-2"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//         {!isOpen && <span className="font-semibold pr-2">AI Help</span>}
//       </button>
//     </div>
//   );
// };

// export default AIChatBot;
