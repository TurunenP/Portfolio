// import React, { useState, useEffect, useRef } from "react";
// import responses from "./responses.json";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const messagesEndRef = useRef(null);

//   // Auto-scroll to bottom when messages update
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Welcome message on load
//   useEffect(() => {
//     setMessages([
//       {
//         from: "bot",
//         text: "👋 Hi! I’m your AI portfolio guide (on trial). Ask me about projects, skills, thesis, or AI demo 🚀",
//       },
//     ]);
//   }, []);

//   // Hugging Face API (optional, fallback handled)
//   async function getAIResponse(prompt) {
//     try {
//       const res = await fetch(
//         "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ inputs: prompt }),
//         }
//       );
//       if (!res.ok) throw new Error("API error");
//       const data = await res.json();
//       return data[0]?.generated_text || null;
//     } catch (err) {
//       console.warn("AI API failed, falling back to JSON:", err.message);
//       return null;
//     }
//   }
//   // ----------------------------
//   // 4️⃣ Local fallback responses with array support
//   // ----------------------------
//   function getLocalResponse(userInput) {
//     const match = responses.find((r) => {
//       if (Array.isArray(r.question)) {
//         // check if any of the questions in array match
//         return r.question.some((q) =>
//           userInput.toLowerCase().includes(q.toLowerCase())
//         );
//       } else {
//         return userInput.toLowerCase().includes(r.question.toLowerCase());
//       }
//     });

//     if (match) return match.answer;

//     // fallback if no match
//     const fallback = responses.find((r) => r.question === "fallback");
//     if (fallback) {
//       // pick a random fallback message
//       return fallback.answer[
//         Math.floor(Math.random() * fallback.answer.length)
//       ];
//     }
//     return "Hmm, I don’t have an answer for that yet!";
//   }

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg = { from: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setLoading(true);

//     // Try AI API first
//     let reply = await getAIResponse(input);

//     // Fallback to JSON
//     if (!reply) reply = getLocalResponse(input);

//     const botMsg = { from: "bot", text: reply };
//     setMessages((prev) => [...prev, botMsg]);
//     setLoading(false);
//   };

//   return (
//     <div className="w-full bg-[#112240] text-gray-200 rounded-2xl shadow-lg flex flex-col">
//       {/* Chat Header */}
//       <div className="p-3 border-b border-gray-600 flex items-center justify-between">
//         <span className="font-semibold text-gray-100">AI Portfolio Bot 🤖</span>
//       </div>

//       {/* Messages Container */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-2 h-[450px]">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex ${
//               msg.from === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-line ${
//                 msg.from === "user"
//                   ? "bg-pink-600 text-white"
//                   : "bg-gray-700 text-gray-100"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <div className="flex justify-start">
//             <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-400 italic">
//               Bot is typing...
//             </div>
//           </div>
//         )}

//         {/* Scroll anchor */}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-3 border-t border-gray-600 flex space-x-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me about projects, skills, thesis, or AI demo 🚀"
//           className="flex-1 px-3 py-2 rounded-lg bg-[#0a192f] text-gray-200 border border-gray-500 focus:outline-none"
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-white font-semibold"
//         >
//           Send
//         </button>
//       </div>

//       {/* Suggested Question Buttons */}
//       <div className="flex flex-wrap gap-2 mt-2 px-1 pb-2">
//         {[
//           "Projects",
//           "Skills",
//           "Thesis",
//           "AI Demo",
//           "AI",
//           "Contact",
//           "Tell me about yourself",
//           "Strengths",
//           "Weaknesses",
//           "Future goals",
//           "Why hire you?",
//         ].map((q) => (
//           <button
//             key={q}
//             onClick={() => {
//               setInput(q.toLowerCase());
//               handleSend();
//             }}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
//           >
//             {q}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useState, useEffect, useRef } from "react";
// import responses from "./responses.json";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const messagesEndRef = useRef(null);

//   // ----------------------------
//   // Auto-scroll to bottom
//   // ----------------------------
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // ----------------------------
//   // Welcome message
//   // ----------------------------
//   useEffect(() => {
//     setMessages([
//       {
//         from: "bot",
//         text: "👋 Hi! I’m your AI portfolio guide. Ask me about projects, skills, thesis, AI demo, or career questions 🚀",
//       },
//     ]);
//   }, []);

//   // ----------------------------
//   // Hugging Face API (optional)
//   // ----------------------------
//   async function getAIResponse(prompt) {
//     try {
//       const res = await fetch(
//         "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ inputs: prompt }),
//         }
//       );
//       if (!res.ok) throw new Error("API error");
//       const data = await res.json();
//       return data[0]?.generated_text || null;
//     } catch (err) {
//       console.warn("AI API failed, falling back to JSON:", err.message);
//       return null;
//     }
//   }

//   // ----------------------------
//   // Normalize text for matching
//   // ----------------------------
//   function normalizeText(text) {
//     return text.toLowerCase().replace(/[^\w\s]/gi, ""); // remove punctuation
//   }

//   // ----------------------------
//   // Local fallback responses
//   // ----------------------------
//   function getLocalResponse(userInput) {
//     const normalizedInput = normalizeText(userInput);

//     const match = responses.find((r) => {
//       if (Array.isArray(r.question)) {
//         return r.question.some((q) =>
//           normalizedInput.includes(normalizeText(q))
//         );
//       } else {
//         return (
//           r.question && normalizedInput.includes(normalizeText(r.question))
//         );
//       }
//     });

//     if (match) return match.answer;

//     // Random fallback
//     const fallback = responses.find((r) => r.question === "fallback");
//     if (fallback) {
//       return fallback.answer[
//         Math.floor(Math.random() * fallback.answer.length)
//       ];
//     }
//     return "Hmm, I don’t have an answer for that yet!";
//   }

//   // ----------------------------
//   // Handle sending message
//   // ----------------------------
//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg = { from: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setLoading(true);

//     let reply = await getAIResponse(input); // AI API first
//     if (!reply) reply = getLocalResponse(input); // fallback

//     const botMsg = { from: "bot", text: reply };
//     setMessages((prev) => [...prev, botMsg]);
//     setLoading(false);
//   };

//   return (
//     // ----------------------------
//     // Chat container styling
//     // ----------------------------
//     <div className="w-full max-w-[400px] bg-[#112240] text-gray-200 rounded-2xl shadow-lg flex flex-col ml-auto">
//       {/* Chat Header */}
//       <div className="p-3 border-b border-gray-600 flex items-center justify-between sticky top-0 bg-[#112240] z-10">
//         <span className="font-semibold text-gray-100">AI Portfolio Bot 🤖</span>
//       </div>

//       {/* Messages Container */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-2 h-[450px]">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex ${
//               msg.from === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-line ${
//                 msg.from === "user"
//                   ? "bg-pink-600 text-white"
//                   : "bg-gray-700 text-gray-100"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {/* Typing indicator */}
//         {loading && (
//           <div className="flex justify-start">
//             <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-400 italic animate-pulse">
//               AI Portfolio Bot is typing...
//             </div>
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-3 border-t border-gray-600 flex space-x-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me about projects, skills, thesis, AI demo, or career questions 🚀"
//           className="flex-1 px-3 py-2 rounded-lg bg-[#0a192f] text-gray-200 border border-gray-500 focus:outline-none"
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-white font-semibold"
//         >
//           Send
//         </button>
//       </div>

//       {/* Suggested Question Buttons */}
//       <div className="flex flex-wrap gap-2 mt-2 px-1 pb-2">
//         {[
//           "Projects",
//           "Skills",
//           "Thesis",
//           "AI Demo",
//           "Contact",
//           "Tell me about yourself",
//           "Strengths",
//           "Weaknesses",
//           "Future goals",
//           "Why hire you?",
//         ].map((q) => (
//           <button
//             key={q}
//             onClick={() => {
//               setInput(q.toLowerCase());
//               handleSend();
//             }}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
//           >
//             {q}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
